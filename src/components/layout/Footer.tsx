"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import SocialCard from "@/components/ui/social-card";

export default function Footer() {
  const footerLinks = [
    {
      title: "Organization",
      links: [
        { label: "Doctrine & Command", href: "#" },
        { label: "Executive Leadership", href: "#" },
        { label: "Mission Database", href: "#" },
      ],
    },
    {
      title: "Clearance",
      links: [
        { label: "Security Clearance", href: "#" },
        { label: "Contracting", href: "#" },
        { label: "Secure Uplink", href: "#", pulse: true },
      ],
    },
  ];

  const contactInfo = [
    { icon: <Mail size={16} className="text-blue-500" />, text: "uplink@enfibio.com", href: "mailto:uplink@enfibio.com" },
    { icon: <Phone size={16} className="text-blue-500" />, text: "+1 (800) 555-0199", href: "tel:+18005550199" },
    { icon: <MapPin size={16} className="text-blue-500" />, text: "Undisclosed Location" },
  ];

  return (
    <footer className="relative h-fit rounded-t-3xl overflow-hidden mt-12 border-t border-white/5 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto p-12 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-[var(--text)] text-xl font-display font-bold tracking-tight">ENFIBIO</span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] font-sans-ui">
              Building the Intelligence Layer of the Real World. Autonomous drone swarms and defense tech.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-[var(--text)] text-sm font-semibold mb-6 uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative inline-block text-[13px]">
                    <a href={link.href} className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-1/2 -translate-y-1/2 -right-4 w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[var(--text)] text-sm font-semibold mb-6 uppercase tracking-widest">Connect</h4>
            <div className="mt-2">
              <SocialCard />
            </div>
          </div>
        </div>

        <hr className="border-t border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-8 md:space-y-0 text-[var(--text-dim)] pt-4">
          <p className="text-center md:text-left font-mono w-full">
            &copy; {new Date().getFullYear()} ENFIBIO TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      <div className="lg:flex hidden h-[22rem] -mt-52 -mb-20 pointer-events-none">
        <TextHoverEffect text="ENFIBIO" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
