import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BciModal from './components/BciModal';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PracticeAreas from './components/PracticeAreas';
import Insights from './components/Insights';
import Footer from './components/Footer';

function App() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  // Check if disclaimer was already accepted in this session
  useEffect(() => {
    const accepted = sessionStorage.getItem('bci_disclaimer_accepted');
    if (accepted) {
      setDisclaimerAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('bci_disclaimer_accepted', 'true');
    setDisclaimerAccepted(true);
  };

  return (
    <div className="bg-neutral-950 min-h-screen">
      <BciModal
        isOpen={!disclaimerAccepted}
        onAccept={handleAccept}
      />

      <AnimatePresence mode="wait">
        {disclaimerAccepted && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Header />
            <Hero />
            <Stats />
            <PracticeAreas />
            <Insights />

            {/* Strategic Network / Partners */}
            <section id="partners" className="py-28 border-t border-neutral-900 bg-black/30">
              <div className="container mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-12"
                >
                  {/* Section Label */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-8 bg-gold" />
                    <span className="text-xs uppercase tracking-[0.5em] text-neutral-300 font-medium">
                      Strategic Network
                    </span>
                    <div className="h-px w-8 bg-gold" />
                  </div>

                  {/* Partner Logos */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["SC & ASSOCIATES", "GLOBAL LEGAL", "CAPITAL LAW", "V&K CHAMBERS"].map((name, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="h-16 flex items-center justify-center font-serif text-xl tracking-widest border border-neutral-700 text-neutral-300 hover:border-gold/40 hover:text-white transition-all duration-500"
                      >
                        {name}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
