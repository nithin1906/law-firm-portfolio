import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP registration is handled in useScrollReveal, but we re-register here to ensure isolation
gsap.registerPlugin(ScrollTrigger);

const StatItem = ({ value, label, suffix = "", delay = 0 }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    const el = numberRef.current;
    
    // Using a safer threshold for mobile and a shorter duration for better perceived performance
    const tl = gsap.fromTo(el, 
      { innerText: 0 }, 
      { 
        innerText: value, 
        duration: 1.5, // Faster count for mobile snappiness
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%", // Trigger earlier
          toggleActions: "play none none none"
        },
        snap: { innerText: 1 },
        onUpdate: function() {
          el.innerText = Math.floor(el.innerText) + suffix;
        }
      }
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [value, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center p-8 space-y-2 border-r last:border-r-0 border-border-base/50 w-full transform-gpu"
    >
      <span 
        ref={numberRef}
        className="text-5xl md:text-6xl font-serif font-bold text-text-primary tabular-nums"
      >
        0
      </span>
      <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-medium">
        {label}
      </span>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="bg-canvas border-y border-border-base/50 relative z-10 scroll-mt-24 transform-gpu">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center divide-y divide-border-base/50 md:divide-y-0 translate-z-0">
          <StatItem value={25} label="Years of Excellence" suffix="+" delay={0.05} />
          <StatItem value={500} label="Success Stories" suffix="+" delay={0.1} />
          <StatItem value={12} label="Practice Domains" delay={0.15} />
          <StatItem value={3} label="Global Hubs" delay={0.2} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
