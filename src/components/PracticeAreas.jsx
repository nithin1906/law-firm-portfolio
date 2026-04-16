import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Scale, 
  Shield, 
  Lock, 
  ArrowRight
} from 'lucide-react';

const PracticeCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Trigger earlier for smoother scroll
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }} // Reduced for performance
      className="group relative p-10 bg-surface border border-border-base hover:border-border-hover transition-all duration-500 overflow-hidden transform-gpu will-change-transform"
    >
      {/* Background Gradient - GPU optimized */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 space-y-6">
        <div className="w-16 h-16 flex items-center justify-center bg-surface border border-border-base/50 rounded-sm group-hover:border-gold/50 transition-colors duration-500 shadow-sm">
          <Icon className="w-8 h-8 text-text-muted group-hover:text-gold transition-colors duration-500" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-2xl font-serif font-bold tracking-tight text-text-primary">{title}</h3>
          <p className="text-text-body font-sans leading-relaxed text-sm">
            {description}
          </p>
        </div>

        <div className="pt-4">
          <button className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-bold text-text-secondary group-hover:text-text-primary transition-colors duration-300">
            <span>Learn More</span>
            <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-2 transition-transform transform-gpu" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PracticeAreas = () => {
  const areas = [
    {
      icon: Building2,
      title: "Corporate & M&A",
      description: "Strategic counsel for mergers, acquisitions, and corporate restructuring across jurisdictions. We navigate complex regulatory landscapes to deliver seamless transaction closures.",
      delay: 0.05
    },
    {
      icon: Scale,
      title: "Dispute Resolution",
      description: "End-to-end litigation and cross-border arbitration before tribunals and courts. Our focus is on strategic risk mitigation and high-stakes advocacy.",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "White Collar Defense",
      description: "Robust defense strategies for regulatory investigations and compliance. We protect corporate reputations through meticulous investigation and legal foresight.",
      delay: 0.15
    },
    {
      icon: Lock,
      title: "Tech & Privacy Law",
      description: "Navigating India's evolving data protection and technology regulations. We provide future-proof legal frameworks for digital-first enterprises.",
      delay: 0.2
    }
  ];

  return (
    <section id="practice-areas" className="py-32 relative overflow-hidden bg-canvas">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-center space-x-4 transform-gpu"
            >
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-medium">Expertise</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold transform-gpu transition-transform text-text-primary">
              Navigating <span className="italic text-gold">Complexities</span>
            </h2>
          </div>
          <p className="max-w-xs text-text-secondary text-sm font-sans italic border-l border-gold/30 pl-6 transform-gpu">
            Focused on delivering results where precision meets strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-base border border-border-base shadow-sm">
          {areas.map((area, i) => (
            <PracticeCard key={i} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
