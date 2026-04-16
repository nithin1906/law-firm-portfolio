import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  // GSAP Animation for the decorative line
  useScrollReveal(lineRef, {
    width: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top center",
    }
  });

  const headlineWords = "Precision. Strategy. Legacy.".split(" ");

  const handleDiscover = () => {
    const statsSection = document.getElementById('stats');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4"
          >
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 font-medium">Est. 1994</span>
            <div className="h-px w-8 bg-gold" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold leading-tight tracking-tighter">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.2,
                  ease: [0.33, 1, 0.68, 1]
                }}
                className="inline-block mr-4 last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Decorative Animated Line */}
          <div className="relative w-full max-w-2xl h-px bg-neutral-800 my-4">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gold origin-left"
            />
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="max-w-2xl text-lg md:text-xl text-neutral-400 font-sans leading-relaxed"
          >
            A premier Indian law firm specializing in <span className="text-white italic">Corporate Litigation</span>,
            <span className="text-white italic"> Cross-Border Arbitration</span>, and
            <span className="text-white italic"> Intellectual Property</span>.
          </motion.p>

          {/* Tagline Badge — replaces CTA buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 1.5
            }}
          >
            <div className="px-8 py-4 border border-neutral-700 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-400 font-medium">Advocates & Solicitors</span>
              <div className="h-4 w-px bg-neutral-700 hidden sm:block" />
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-500 font-medium">Supreme Court · High Courts</span>
              <div className="h-4 w-px bg-neutral-700 hidden sm:block" />
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-400 font-medium">New Delhi · Mumbai · Bengaluru</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — now functional and readable */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={handleDiscover}
        aria-label="Scroll down to discover"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer group"
      >
        <span className="text-[11px] uppercase tracking-[0.45em] text-neutral-300 group-hover:text-gold transition-colors duration-300">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-neutral-300 group-hover:text-gold transition-colors duration-300" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
