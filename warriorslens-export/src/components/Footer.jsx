import React from "react";
import { SITE } from "../data/mock";

const Footer = () => {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <h3 className="font-display text-5xl lg:text-7xl text-[#f1ecdf] tracking-tight leading-[0.9]">
              Capture the <span className="italic font-light text-[#c9a961]">mission.</span>
            </h3>
            <p className="mt-5 max-w-md text-[#8a8275]">{SITE.tagline}</p>
          </div>
          <div className="lg:col-span-2">
            <div className="font-mono-x text-[10px] tracking-[0.3em] text-[#5a5446] mb-3">NAV</div>
            <ul className="space-y-2 text-sm">
              {["Work", "About", "Capabilities", "Volunteer", "Experience", "Contact"].map((n) => (
                <li key={n}><a href={`#${n.toLowerCase()}`} className="text-[#bdb6a5] hover:text-[#c9a961] link-underline">{n}</a></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="font-mono-x text-[10px] tracking-[0.3em] text-[#5a5446] mb-3">CONTACT</div>
            <ul className="space-y-2 text-sm text-[#bdb6a5]">
              <li className="break-all"><a href={`mailto:${SITE.email}`} className="hover:text-[#c9a961] link-underline">{SITE.email}</a></li>
              <li className="break-all"><a href={`mailto:${SITE.emailMil}`} className="hover:text-[#c9a961] link-underline">{SITE.emailMil}</a></li>
              <li>{SITE.location}</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="font-mono-x text-[10px] tracking-[0.3em] text-[#5a5446] mb-3">SOCIAL</div>
            <ul className="space-y-2 text-sm">
              <li><a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#bdb6a5] hover:text-[#c9a961] link-underline">LinkedIn</a></li>
              <li><a href={SITE.socials.dvids} target="_blank" rel="noopener noreferrer" className="text-[#bdb6a5] hover:text-[#c9a961] link-underline">DVIDS Portfolio</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono-x text-[10px] tracking-[0.3em] text-[#5a5446]">
          <div>© {new Date().getFullYear()} WARRIORS LENS • {SITE.owner.toUpperCase()}</div>
          <div>BUILT FOR THE FIELD — NOT FOR THE FEED</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
