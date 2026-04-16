import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Shield, Info } from 'lucide-react';

const BciModal = ({ isOpen, onAccept }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex justify-center items-start md:items-center p-4 bg-black/95 md:bg-black/90 md:backdrop-blur-xl overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-2xl w-full bg-neutral-900 border border-neutral-800 p-8 md:p-12 my-auto shadow-2xl"
          >
            {/* Gold Accent Top Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="p-4 bg-neutral-800 rounded-full">
                <Scale className="w-12 h-12 text-gold" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
                  Bar Council <span className="text-gold italic">Disclaimer</span>
                </h2>
                <div className="h-px w-24 bg-neutral-700 mx-auto" />
              </div>

              <div className="space-y-6 text-neutral-400 leading-relaxed text-sm md:text-base text-left bg-black/30 p-6 border border-neutral-800/50">
                <p>
                  As per the rules of the Bar Council of India, Lex Prime Associates (the "Firm") is not permitted to solicit work or advertise. 
                  By clicking on the <span className="text-white font-medium">"I Agree"</span> button below, the user acknowledges the following:
                </p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from the Firm or any of its members to solicit any work through this website.</li>
                  <li>The user wishes to gain more information about the Firm for his/her own information and use.</li>
                  <li>The information about the Firm is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site would not create any lawyer-client relationship.</li>
                </ul>
                <p className="text-xs italic text-neutral-500">
                  The information provided under this website is available at your request solely for informational purposes, and should not be interpreted as soliciting or advisement.
                </p>
              </div>

              <button
                onClick={onAccept}
                className="group relative w-full md:w-auto px-12 py-4 bg-white text-black font-semibold tracking-widest uppercase text-sm hover:bg-gold hover:text-white transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">I Agree</span>
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BciModal;
