type Env = {
  GHL_REVENUE_LEAK_WEBHOOK_URL: string;
};

type LeadPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  websiteUrl?: string;
  industry?: string;
  biggestProblem?: string;
  estimatedMonthlyLeads?: string;
  currentCrm?: string;
  preferredContactMethod?: string;
  source?: string;
  funnelName?: string;
  pagePath?: string;
  submittedAt?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
};

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}) {
  try {
    const payload = (await context.request.json()) as LeadPayload;

    const firstName = cleanValue(payload.firstName);
    const lastName = cleanValue(payload.lastName);
    const email = cleanValue(payload.email);
    const phone = cleanValue(payload.phone);
    const businessName = cleanValue(payload.businessName);

    if (!firstName || !lastName || !email || !phone || !businessName) {
      return jsonResponse(
        {
          success: false,
          message: "Missing required fields.",
        },
        400
      );
    }

    if (!context.env.GHL_REVENUE_LEAK_WEBHOOK_URL) {
      return jsonResponse(
        {
          success: false,
          message: "Webhook is not configured.",
        },
        500
      );
    }

    const ghlPayload = {
      first_name: firstName,
      last_name: lastName,
      full_name: `${firstName} ${lastName}`,
      email,
      phone,

      rl_business_name: businessName,
      rl_website_url: cleanValue(payload.websiteUrl),
      rl_industry: cleanValue(payload.industry),
      rl_biggest_problem: cleanValue(payload.biggestProblem),
      rl_estimated_monthly_leads: cleanValue(payload.estimatedMonthlyLeads),
      rl_current_crm_or_software: cleanValue(payload.currentCrm),
      rl_preferred_contact_method: cleanValue(payload.preferredContactMethod),

      rl_lead_source: "Sirius Systems Website",
      rl_funnel_name: "Revenue Leak Audit Funnel",
      rl_funnel_page_path: cleanValue(payload.pagePath),
      rl_submitted_at: cleanValue(payload.submittedAt),

      rl_utm_source: cleanValue(payload.utmSource),
      rl_utm_medium: cleanValue(payload.utmMedium),
      rl_utm_campaign: cleanValue(payload.utmCampaign),
      rl_utm_term: cleanValue(payload.utmTerm),
      rl_utm_content: cleanValue(payload.utmContent),

      tag_1: "rl-revenue-leak-audit",
      tag_2: "rl-audit-lead",
      tag_3: "rl-source-website",
      tag_4: "rl-status-new-lead",
    };

    const ghlResponse = await fetch(context.env.GHL_REVENUE_LEAK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!ghlResponse.ok) {
      return jsonResponse(
        {
          success: false,
          message: "GHL webhook failed.",
        },
        502
      );
    }

    return jsonResponse({
      success: true,
      message: "Lead submitted successfully.",
    });
  } catch {
    return jsonResponse(
      {
        success: false,
        message: "Invalid request.",
      },
      500
    );
  }
}

export async function onRequestGet() {
  return jsonResponse(
    {
      success: false,
      message: "Method not allowed.",
    },
    405
  );
}
