"use client";
import { useState } from "react";

interface Labels {
  h1: string;
  subtitle: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  projectTypes: string[];
  message: string;
  submit: string;
  sending: string;
  success: string;
  required: string;
  trustedBy: string;
  trustQuote: string;
}

interface Props {
  labels: Labels;
  locale: string;
}

export default function ContactForm({ labels, locale }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", projectType: "", message: "" });
  const isRTL = locale === "he";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-[#111] placeholder-[#aaa] focus:outline-none focus:border-[#FFD000] focus:ring-2 focus:ring-[#FFD000]/30 transition-all text-base";

  if (status === "success") {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-[#f4f4f4]">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-[#FFD000]/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#FFD000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#111] mb-4">{labels.success}</h2>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-[#f4f4f4] min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-bold text-[#888] uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#111] mb-5 leading-tight">{labels.h1}</h1>
          <p className="text-lg text-[#555]">{labels.subtitle}</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="pb-10 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="border border-gray-200 rounded-xl p-6 bg-white">
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#888] uppercase mb-4">{labels.trustedBy}</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {["Palo Alto Networks", "Ashtrom", "Humavox", "CROPX", "TravelPerk", "ParaZero", "UserWay"].map((c) => (
                <span key={c} className="text-xs font-bold tracking-wider text-[#333] uppercase">{c}</span>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#666] leading-relaxed border-t border-gray-100 pt-4">{labels.trustQuote}</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#444] mb-2">
                  {labels.name} <span className="text-red-500">*</span>
                </label>
                <input type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass} placeholder={labels.name} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#444] mb-2">
                  {labels.company} <span className="text-red-500">*</span>
                </label>
                <input type="text" required value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass} placeholder={labels.company} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#444] mb-2">
                  {labels.email} <span className="text-red-500">*</span>
                </label>
                <input type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass} placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#444] mb-2">{labels.phone}</label>
                <input type="tel" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass} placeholder="050-000-0000" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#444] mb-2">{labels.projectType}</label>
              <select value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className={inputClass}>
                <option value="">{labels.projectType}...</option>
                {labels.projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#444] mb-2">{labels.message}</label>
              <textarea rows={5} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass} placeholder={labels.message + "..."} />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#FFD000] hover:bg-[#f0c400] text-[#111] font-black py-5 rounded-xl transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? labels.sending : labels.submit}
            </button>
          </form>

          {/* Contact info */}
          <div className="mt-16 pt-12 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-bold text-[#111] uppercase tracking-widest mb-2">Email</h3>
              <a href="mailto:roman@the-videoshop.com" className="text-[#555] hover:text-[#111] transition-colors text-sm">
                roman@the-videoshop.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111] uppercase tracking-widest mb-2">WhatsApp</h3>
              <a href="https://wa.me/972544545314" target="_blank" rel="noopener noreferrer"
                className="text-[#555] hover:text-[#111] transition-colors text-sm">
                +972-54-454-5314
              </a>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111] uppercase tracking-widest mb-2">YouTube</h3>
              <a href="https://www.youtube.com/@romangor" target="_blank" rel="noopener noreferrer"
                className="text-[#555] hover:text-[#111] transition-colors text-sm">
                @romangor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
