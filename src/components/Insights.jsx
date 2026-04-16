import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const insightArticles = [
  {
    date: "March 2025",
    category: "Arbitration",
    title: "The Future of Cross-Border Arbitration in India",
    excerpt:
      "With the Arbitration and Conciliation (Amendment) Act gaining traction, India positions itself as a preferred seat for international commercial disputes. We examine the implications for multinational businesses.",
  },
  {
    date: "February 2025",
    category: "Data & Privacy",
    title: "Navigating the DPDP Act 2023: A Corporate Playbook",
    excerpt:
      "India's Digital Personal Data Protection Act introduces sweeping obligations for data fiduciaries. Our partners outline the compliance roadmap every board must undertake before the enforcement window closes.",
  },
  {
    date: "January 2025",
    category: "Corporate M&A",
    title: "M&A Due Diligence: Lessons from Landmark Cases",
    excerpt:
      "A review of high-profile Indian M&A transactions and the legal fault-lines that emerged post-closing. Understanding regulatory consents, indemnity caps, and MAC clauses in the current environment.",
  },
];

const InsightCard = ({ article, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
    className="group flex flex-col border border-border-base/30 bg-surface hover:border-border-hover transition-all duration-500 overflow-hidden shadow-sm"
  >
    {/* Top Accent */}
    <div className="h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />

    <div className="p-8 flex flex-col flex-1 space-y-5">
      {/* Meta */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-medium">
          {article.category}
        </span>
        <div className="flex items-center gap-2 text-text-muted">
          <Calendar className="w-3 h-3" />
          <span className="text-[10px] tracking-widest">{article.date}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-serif font-bold leading-snug text-text-primary group-hover:text-gold/90 transition-colors duration-300">
        {article.title}
      </h3>

      {/* Divider */}
      <div className="h-px bg-border-base/50 w-12" />

      {/* Excerpt */}
      <p className="text-sm text-text-body leading-relaxed flex-1">{article.excerpt}</p>

      {/* Read More */}
      <div className="pt-2">
        <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-text-secondary group-hover:text-text-primary transition-colors duration-300">
          <span>Read More</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </motion.div>
);

const Insights = () => (
  <section id="insights" className="py-32 bg-canvas border-t border-border-base/40">
    <div className="container mx-auto px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-medium">Legal Insights</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary"
          >
            From the <span className="italic text-gold">Chambers</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xs text-text-secondary text-sm font-sans italic border-l border-gold/30 pl-6"
        >
          Perspectives on law, policy, and practice from our senior partners.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-base/40 border border-border-base/40">
        {insightArticles.map((article, i) => (
          <InsightCard key={i} article={article} delay={i * 0.12} />
        ))}
      </div>
    </div>
  </section>
);

export default Insights;
