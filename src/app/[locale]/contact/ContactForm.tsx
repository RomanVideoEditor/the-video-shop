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

export default function ContactForm({ labels }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate submission — wire up to your backend / Formspree / Resend
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const inputClass =
    "w-full bg-[#111] border border-[#1e1e1e] rounded-xl px-5 py-4 text-[#f5f5f0] placeholder-[#6b6b6b] focus:outline-none focus:border-[#c8a96e] transition-colors text-base";

  if (status === "success") {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-[#c8a96e]/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#c8a96e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#f5f5f0] mb-4">{labels.success}</h2>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#c8a96e] uppercase border border-[#c8a96e]/30 px-4 py-2 rounded-full">
              Contact
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#f5f5f0] mb-6 leading-tight">
            {labels.h1}
          </h1>
          <p className="text-lg text-[#6b6b6b]">{labels.subtitle}</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="pb-10 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="border border-[#1e1e1e] rounded-xl p-6 bg-[#111]">
            <p className="text-[10px] font-semibold tracking-[0.35em] text-[#6b6b6b] uppercase mb-5">
              {labels.trustedBy}
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {["Palo Alto Networks", "Ashtrom", "Humavox", "CROPX", "TravelPerk", "ParaZero", "UserWay"].map((c) => (
                <span key={c} className="text-xs font-semibold tracking-wider text-[#f5f5f0]/40 uppercase">{c}</span>
              ))}
            </div>
            <p className="mt-5 text-sm text-[#f5f5f0]/50 leading-relaxed border-t border-[#1e1e1e] pt-5">
              {labels.trustQuote}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-[#6b6b6b] mb-2">
                  {labels.name} <span className="text-[#c8a96e]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder={labels.name}
                />
              </div>
              <div>
                <label className="block text-sm text-[#6b6b6b] mb-2">
                  {labels.company} <span className="text-[#c8a96e]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                  placeholder={labels.company}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-[#6b6b6b] mb-2">
                  {labels.email} <span className="text-[#c8a96e]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm text-[#6b6b6b] mb-2">{labels.phone}</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                  placeholder="050-000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#6b6b6b] mb-2">{labels.projectType}</label>
              <select
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className={inputClass}
              >
                <option value="">{labels.projectType}...</option>
                {labels.projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-[#6b6b6b] mb-2">{labels.message}</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass}
                placeholder={labels.message + "..."}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#c8a96e] text-[#0a0a0a] font-bold py-5 rounded-xl hover:bg-[#e8d5a8] transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? labels.sending : labels.submit}
            </button>
          </form>

          {/* Contact info */}
          <div className="mt-16 pt-12 border-t border-[#1e1e1e] grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-[#c8a96e] uppercase tracking-widest mb-2">Email</h3>
              <a href="mailto:roman@the-videoshop.com" className="text-[#f5f5f0]/70 hover:text-[#c8a96e] transition-colors text-sm">
                roman@the-videoshop.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#c8a96e] uppercase tracking-widest mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/972544545314"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5f5f0]/70 hover:text-[#c8a96e] transition-colors text-sm"
              >
                +972-54-454-5314
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#c8a96e] uppercase tracking-widest mb-2">YouTube</h3>
              <a
                href="https://www.youtube.com/@romangor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f5f5f0]/70 hover:text-[#c8a96e] transition-colors text-sm"
              >
                @romangor
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
