"use client";

import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  websiteUrl: string;
  industry: string;
  biggestProblem: string;
  estimatedMonthlyLeads: string;
  currentCrm: string;
  preferredContactMethod: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  businessName: "",
  websiteUrl: "",
  industry: "",
  biggestProblem: "",
  estimatedMonthlyLeads: "",
  currentCrm: "",
  preferredContactMethod: "",
};

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") ?? "",
    utmMedium: params.get("utm_medium") ?? "",
    utmCampaign: params.get("utm_campaign") ?? "",
    utmTerm: params.get("utm_term") ?? "",
    utmContent: params.get("utm_content") ?? "",
  };
}

export default function RevenueLeakAuditForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  function updateField(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setMessage("");

    const utmParams = getUtmParams();

    try {
      const response = await fetch("/api/revenue-leak-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source: "Sirius Systems Website",
          funnelName: "Revenue Leak Audit Funnel",
          pagePath: window.location.pathname,
          submittedAt: new Date().toISOString(),
          ...utmParams,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setStatus("success");
      setForm(initialState);
      window.location.href = "/revenue-leak-audit/thank-you";
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-white">First Name</span>
          <input
            required
            value={form.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-300"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-white">Last Name</span>
          <input
            required
            value={form.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-300"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white">Email</span>
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-300"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white">Phone</span>
        <input
          required
          type="tel"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-300"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white">Business Name</span>
        <input
          required
          value={form.businessName}
          onChange={(event) => updateField("businessName", event.target.value)}
          className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-300"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white">Website URL</span>
        <input
          value={form.websiteUrl}
          onChange={(event) => updateField("websiteUrl", event.target.value)}
          placeholder="https://example.com"
          className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-300"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white">Industry</span>
        <input
          value={form.industry}
          onChange={(event) => updateField("industry", event.target.value)}
          placeholder="Plumbing, cleaning, HVAC, pest control..."
          className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-300"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white">Biggest Problem</span>
        <select
          required
          value={form.biggestProblem}
          onChange={(event) => updateField("biggestProblem", event.target.value)}
          className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-300"
        >
          <option value="">Select one</option>
          <option value="Missing calls">Missing calls</option>
          <option value="Slow follow-up">Slow follow-up</option>
          <option value="Not enough reviews">Not enough reviews</option>
          <option value="Website not converting">Website not converting</option>
          <option value="No CRM system">No CRM system</option>
          <option value="Too much manual work">Too much manual work</option>
          <option value="Leads not booking">Leads not booking</option>
          <option value="Quotes not closing">Quotes not closing</option>
        </select>
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white">Estimated Monthly Leads</span>
        <select
          value={form.estimatedMonthlyLeads}
          onChange={(event) => updateField("estimatedMonthlyLeads", event.target.value)}
          className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-300"
        >
          <option value="">Select one</option>
          <option value="0 to 10">0 to 10</option>
          <option value="11 to 25">11 to 25</option>
          <option value="26 to 50">26 to 50</option>
          <option value="51 to 100">51 to 100</option>
          <option value="100 plus">100 plus</option>
        </select>
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white">Current CRM or Software</span>
        <input
          value={form.currentCrm}
          onChange={(event) => updateField("currentCrm", event.target.value)}
          placeholder="GoHighLevel, Jobber, Housecall Pro, none..."
          className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-300"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white">Preferred Contact Method</span>
        <select
          value={form.preferredContactMethod}
          onChange={(event) => updateField("preferredContactMethod", event.target.value)}
          className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-yellow-300"
        >
          <option value="">Select one</option>
          <option value="Phone">Phone</option>
          <option value="Text">Text</option>
          <option value="Email">Email</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-yellow-300 px-5 py-3 font-semibold text-black transition hover:bg-yellow-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Get My Free Revenue Leak Audit"}
      </button>

      {message && <p className="text-sm text-red-300">{message}</p>}
    </form>
  );
}
