import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scale } from 'lucide-react';

const DISCLAIMER_SECTIONS = [
  {
    title: "1. No Solicitation or Advertisement",
    body: "As per the rules of the Bar Council of India (Chapter II, Part VI), advocates are prohibited from soliciting work or advertising, either directly or indirectly, whether by circulars, advertisements, touts, personal communications, interviews not warranted by personal relations, furnishing or inspiring newspaper comments, or procuring insertions in a professional directory. This website has not been created for purposes of solicitation or advertisement."
  },
  {
    title: "2. Purpose of This Website",
    body: "This website is provided solely for informational purposes regarding Lex Prime Associates (\"the Firm\"). The information contained herein is intended to provide general background about the Firm, its areas of practice, and its attorneys. It should not be construed as legal advice, legal opinion, or any other form of legal service."
  },
  {
    title: "3. No Lawyer–Client Relationship",
    body: "Viewing this website, reading its contents, or communicating with the Firm through this website does not create any lawyer-client relationship. No such relationship shall be presumed from any contact made through this website. Any information transmitted to the Firm through this website prior to the establishment of a formal engagement shall not be treated as confidential or privileged."
  },
  {
    title: "4. User's Specific Request",
    body: "The information about the Firm is provided to the user only on their specific request. Any information obtained or materials downloaded from this website is completely at the user's own volition and any transmission, receipt or use of this site would not create any lawyer-client relationship. The Firm is not responsible for any consequences that may arise out of the use of this website."
  },
  {
    title: "5. Jurisdiction",
    body: "This website and its contents are governed by the laws of India. Any disputes arising out of your use of this website shall be subject to the exclusive jurisdiction of the courts at New Delhi, India."
  },
  {
    title: "6. No Guarantee of Accuracy",
    body: "While care has been taken to provide accurate and up-to-date information on this website, the Firm makes no warranty, express or implied, as to the accuracy, completeness, or currency of the information provided. The information herein is provided 'as is' without any warranty of any kind. Laws and regulations change frequently, and the information on this website may not reflect the most current legal developments."
  },
  {
    title: "7. Third-Party Links",
    body: "This website may contain links to third-party websites or resources. These links are provided solely for the user's convenience. The Firm is not responsible for the content, accuracy, or opinions expressed in such third-party websites, and does not investigate, monitor, or check such websites for accuracy or completeness."
  },
];

const DisclaimerModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-overlay backdrop-blur-sm premium-gpu"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-surface border border-border-base shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Gold Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-border-base/50 shrink-0">
              <div className="flex items-center gap-4">
                <Scale className="w-6 h-6 text-gold" />
                <div>
                  <h2 className="text-lg font-serif font-bold tracking-wide text-text-primary">Full Disclaimer</h2>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gold mt-0.5">Bar Council of India Compliance</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close disclaimer"
                className="p-2 text-text-muted hover:text-text-primary hover:bg-gray-50 transition-all duration-200 rounded-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto flex-1 px-8 py-8 space-y-8 scrollbar-thin">
              {/* Preamble */}
              <div className="bg-gray-50/50 border border-border-base/40 p-6">
                <p className="text-text-body text-sm leading-relaxed font-sans">
                  The following disclaimer governs your use of the website of <span className="text-text-primary font-bold">Lex Prime Associates</span> ("the Firm"), a registered law firm operating in India under the Bar Council of India Rules. By accessing this website, you confirm that you have read, understood, and agree to be bound by the terms set out below.
                </p>
              </div>

              {/* Sections */}
              {DISCLAIMER_SECTIONS.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-serif font-bold text-text-primary tracking-wide">{section.title}</h3>
                  <p className="text-sm text-text-body font-sans leading-relaxed">{section.body}</p>
                </motion.div>
              ))}

              {/* Footer Note */}
              <div className="border-t border-border-base/50 pt-6">
                <p className="text-[11px] text-text-muted italic leading-relaxed font-sans">
                  This disclaimer is subject to revision at any time without notice. Your continued use of this website constitutes your acceptance of any changes made to this disclaimer. Last updated: January 2025.
                </p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-8 py-5 border-t border-border-base/50 flex items-center justify-between shrink-0">
              <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-sans font-medium">Lex Prime Associates · Est. 1994</p>
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-6 py-2.5 border border-border-base text-xs uppercase tracking-widest text-text-secondary font-bold hover:bg-text-primary hover:text-surface hover:border-text-primary transition-all duration-400"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
