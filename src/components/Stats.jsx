import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatItem = ({ value, label, suffix = "", delay = 0 }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    const el = numberRef.current;
    
    gsap.fromTo(el, 
      { innerText: 0 }, 
      { 
        innerText: value, 
        duration: 2.5, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        snap: { innerText: 1 },
        onUpdate: function() {
          el.innerText = Math.floor(el.innerText) + suffix;
        }
      }
    );
  }, [value, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center justify-center p-8 space-y-2 border-r last:border-r-0 border-neutral-800 w-full"
    >
      <span 
        ref={numberRef}
        className="text-5xl md:text-6xl font-serif font-bold text-white tabular-nums"
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
    <section id="stats" className="bg-neutral-950 border-y border-neutral-800 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center divide-y divide-neutral-800 md:divide-y-0">
          <StatItem value={25} label="Years of Excellence" suffix="+" delay={0.1} />
          <StatItem value={500} label="Success Stories" suffix="+" delay={0.2} />
          <StatItem value={12} label="Practice Domains" delay={0.3} />
          <StatItem value={3} label="Global Hubs" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
