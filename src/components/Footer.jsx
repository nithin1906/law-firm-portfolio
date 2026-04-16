import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Gavel, Share2, Link } from 'lucide-react';
import DisclaimerModal from './DisclaimerModal';

const Footer = () => {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const offices = [
    {
      city: "New Delhi",
      address: "12, Dr. APJ Abdul Kalam Road, New Delhi 110011",
      phone: "+91 11 4050 6000",
      isHq: true
    },
    {
      city: "Mumbai",
      address: "Express Towers, Nariman Point, Mumbai 400021",
      phone: "+91 22 6630 8000"
    },
    {
      city: "Bengaluru",
      address: "Prestige Trade Tower, Palace Road, Bengaluru 560001",
      phone: "+91 80 4910 9000"
    }
  ];

  return (
    <>
      <DisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />

      <footer id="contact" className="bg-neutral-950 border-t border-neutral-800 pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
            {/* Brand Column */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Gavel className="w-8 h-8 text-gold" />
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold tracking-[0.2em] leading-none">LEX PRIME</span>
                  <span className="text-[9px] tracking-[0.5em] text-gold uppercase mt-1">Associates</span>
                </div>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                Upholding the highest standards of legal excellence and professional integrity across India's financial hubs.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="p-2 border border-neutral-800 text-neutral-500 hover:text-white hover:border-white transition-all duration-300">
                  <Share2 className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 border border-neutral-800 text-neutral-500 hover:text-white hover:border-white transition-all duration-300">
                  <Link className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Office Columns */}
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-neutral-300 flex items-center space-x-2">
                  <span>{office.city}</span>
                  {office.isHq && (
                    <span className="text-[8px] bg-gold/10 text-gold px-2 py-0.5 rounded-full border border-gold/20">HQ</span>
                  )}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group cursor-pointer">
                    <MapPin className="w-4 h-4 text-neutral-600 group-hover:text-gold transition-colors mt-1 shrink-0" />
                    <span className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors leading-relaxed">
                      {office.address}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <Phone className="w-4 h-4 text-neutral-600 group-hover:text-gold transition-colors shrink-0" />
                    <span className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors tracking-widest">
                      {office.phone}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BCI Disclaimer Block */}
          <div className="border-y border-neutral-900 py-12 mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <p className="text-[10px] text-neutral-600 uppercase tracking-[0.3em] font-medium max-w-lg leading-relaxed">
                Bar Council of India Compliance: This website is for informational purposes only and does not constitute solicitation or legal advice.
              </p>
              <button
                onClick={() => setIsDisclaimerOpen(true)}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 border-b border-neutral-800 pb-1 hover:text-gold hover:border-gold transition-all duration-300 whitespace-nowrap"
              >
                Full Disclaimer
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
            <p className="text-[10px] uppercase tracking-widest text-neutral-600">
              © {new Date().getFullYear()} Lex Prime Associates. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-8 text-[10px] uppercase tracking-widest text-neutral-600">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>

        {/* Decorative Gradient Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      </footer>
    </>
  );
};

export default Footer;
