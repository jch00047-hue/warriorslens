import React, { useState } from "react";
import { Mail, Send, Linkedin, Camera, MapPin } from "lucide-react";
import { SITE } from "../data/mock";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", unit: "", scope: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Name, email, and mission brief are required." });
      return;
    }
    const subject = encodeURIComponent(
      `[Warriors Lens] Visual Support Request \u2014 ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nUnit / Org: ${form.unit || "\u2014"}\nScope: ${form.scope || "\u2014"}\n\nMission Brief:\n${form.message}\n\n\u2014 Sent via warriorslens portfolio`
    );
    const href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    window.location.href = href;
    toast({
      title: "Opening your email app\u2026",
      description: "Send the prepared message and I'll respond within 24 hours."
    });
  };

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target ? e.target.value : e }));

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0c0c0c] border-t border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 reveal">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">06 / REQUEST SUPPORT</span>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] text-[#f1ecdf] tracking-tight">
            Tell me the <span className="italic font-light text-[#c9a961]">mission.</span>
          </h2>
          <p className="mt-6 text-[#bdb6a5] max-w-md leading-relaxed">
            For unit features, command portraits, training documentation, or coalition coverage &mdash; send a brief and I&rsquo;ll respond within 24 hours.
          </p>

          <div className="mt-10 space-y-5">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 group">
              <span className="w-11 h-11 grid place-items-center border border-white/15 group-hover:border-[#c9a961]"><Mail size={16} className="text-[#c9a961]" /></span>
              <div>
                <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275]">PERSONAL EMAIL</div>
                <div className="text-[#e9e3d6] group-hover:text-[#c9a961] link-underline break-all">{SITE.email}</div>
              </div>
            </a>
            <a href={`mailto:${SITE.emailMil}`} className="flex items-center gap-4 group">
              <span className="w-11 h-11 grid place-items-center border border-white/15 group-hover:border-[#c9a961]"><Mail size={16} className="text-[#c9a961]" /></span>
              <div>
                <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275]">MILITARY EMAIL</div>
                <div className="text-[#e9e3d6] group-hover:text-[#c9a961] link-underline break-all">{SITE.emailMil}</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 grid place-items-center border border-white/15"><MapPin size={16} className="text-[#c9a961]" /></span>
              <div>
                <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275]">POSTING</div>
                <div className="text-[#e9e3d6]">{SITE.location}</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a
              href={SITE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-4 border border-white/15 text-[#bdb6a5] hover:text-[#c9a961] hover:border-[#c9a961] font-mono-x text-[10px] tracking-[0.25em]"
            >
              <Linkedin size={14} /> LINKEDIN
            </a>
            <a
              href={SITE.socials.dvids}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-4 border border-white/15 text-[#bdb6a5] hover:text-[#c9a961] hover:border-[#c9a961] font-mono-x text-[10px] tracking-[0.25em]"
            >
              <Camera size={14} /> DVIDS
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 p-7 lg:p-10 reveal">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name">
              <Input value={form.name} onChange={set("name")} className="bg-[#0a0a0a] border-white/15 focus-visible:ring-[#c9a961] focus-visible:border-[#c9a961] rounded-none h-12" placeholder="Rank • Full name" />
            </Field>
            <Field label="Email">
              <Input type="email" value={form.email} onChange={set("email")} className="bg-[#0a0a0a] border-white/15 focus-visible:ring-[#c9a961] focus-visible:border-[#c9a961] rounded-none h-12" placeholder="name@army.mil" />
            </Field>
            <Field label="Unit / Org">
              <Input value={form.unit} onChange={set("unit")} className="bg-[#0a0a0a] border-white/15 focus-visible:ring-[#c9a961] focus-visible:border-[#c9a961] rounded-none h-12" placeholder="Brigade / PAO / Agency" />
            </Field>
            <Field label="Scope of Work">
              <Select value={form.scope} onValueChange={(v) => setForm((f) => ({ ...f, scope: v }))}>
                <SelectTrigger className="bg-[#0a0a0a] border-white/15 rounded-none h-12 focus:ring-[#c9a961]">
                  <SelectValue placeholder="Select scope" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a0a0a] border-white/15 text-[#e9e3d6]">
                  <SelectItem value="combat-camera">Combat Camera</SelectItem>
                  <SelectItem value="public-affairs">Public Affairs</SelectItem>
                  <SelectItem value="command-portrait">Command Portrait</SelectItem>
                  <SelectItem value="training">Training Coverage</SelectItem>
                  <SelectItem value="multimedia">Multimedia / IMC</SelectItem>
                  <SelectItem value="community">Community / Volunteer</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Mission Brief">
              <Textarea rows={6} value={form.message} onChange={set("message")} className="bg-[#0a0a0a] border-white/15 focus-visible:ring-[#c9a961] focus-visible:border-[#c9a961] rounded-none" placeholder="Dates, location, intent, audience, deliverables…" />
            </Field>
          </div>
          <div className="mt-7 flex items-center justify-between gap-4">
            <p className="font-mono-x text-[10px] tracking-[0.25em] text-[#5a5446]">SECURE &bull; 24H RESPONSE</p>
            <button type="submit" className="inline-flex items-center gap-3 bg-[#c9a961] hover:bg-[#d8b86b] text-[#0a0a0a] font-display tracking-[0.25em] text-sm h-12 px-7">
              TRANSMIT BRIEF
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Field = ({ label, children }) => (
  <label className="block">
    <span className="font-mono-x text-[10px] tracking-[0.3em] text-[#8a8275] mb-2 block">{label.toUpperCase()}</span>
    {children}
  </label>
);

export default Contact;
