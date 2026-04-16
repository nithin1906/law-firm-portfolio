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
  // Using scaleX instead of width for GPU-only Composite phase (no Layout/Paint)
  useScrollReveal(lineRef, {
    scaleX: 0,
    transformOrigin: "left center",
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-hero-atmospheric"
    >
      {/* Background Decorative Elements */}
      {/* Mobile: lightweight CSS gradient (zero GPU cost) */}
      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{
          background: 'linear-gradient(to bottom, rgba(245, 245, 245, 1) 0%, rgba(229, 231, 235, 0.5) 100%)'
        }}
      />
      {/* Desktop: original blur elements (GPU can handle it) */}
      <div className="absolute inset-0 z-0 hidden md:block opacity-60">
        <div className="absolute top-1/6 left-1/4 w-[600px] h-[600px] bg-white/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/6 right-1/4 w-[600px] h-[600px] bg-gray-200/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 transform-gpu"
          >
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-text-secondary font-medium">Est. 1994</span>
            <div className="h-px w-8 bg-gold" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold leading-tight tracking-tighter text-text-primary">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.1, // Reduced stagger for mobile responsiveness
                  ease: [0.33, 1, 0.68, 1]
                }}
                className="inline-block mr-4 last:mr-0 transform-gpu will-change-transform"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Decorative Animated Line */}
          <div className="relative w-full max-w-2xl h-px bg-gray-200 my-4 overflow-hidden">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gold transform-gpu will-change-transform"
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }} // Trigger earlier
            className="max-w-2xl text-lg md:text-xl text-text-body font-sans leading-relaxed transform-gpu"
          >
            A premier Indian law firm specializing in <span className="text-text-primary italic">Corporate Litigation</span>,
            <span className="text-text-primary italic"> Cross-Border Arbitration</span>, and
            <span className="text-text-primary italic"> Intellectual Property</span>.
          </motion.p>

          {/* Tagline Badge — replaces CTA buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 1 // Trigger earlier
            }}
            className="transform-gpu"
          >
            <div className="px-10 py-5 border border-border-base/20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 bg-surface/80 shadow-premium rounded-full">
              <span className="text-[10px] uppercase tracking-[0.4em] text-text-secondary font-medium whitespace-nowrap">Advocates & Solicitors</span>
              <div className="h-4 w-px bg-border-base/30 hidden sm:block" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-text-muted font-medium whitespace-nowrap">Supreme Court · High Courts</span>
              <div className="h-4 w-px bg-border-base/30 hidden sm:block" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-text-secondary font-medium whitespace-nowrap">New Delhi · Mumbai · Bengaluru</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — now functional and readable */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={handleDiscover}
        aria-label="Scroll down to discover"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer group transform-gpu"
      >
        <span className="text-[11px] uppercase tracking-[0.45em] text-text-secondary group-hover:text-gold transition-colors duration-300 font-medium">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-text-secondary group-hover:text-gold transition-colors duration-300" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
