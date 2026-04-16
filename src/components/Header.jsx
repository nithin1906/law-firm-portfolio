import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Gavel } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Partners', href: '#partners' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 premium-gpu ${
          isScrolled
            ? 'bg-neutral-950/95 md:bg-neutral-950/90 md:backdrop-blur-lg py-4 border-b border-neutral-800'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <Gavel className="w-8 h-8 text-gold transition-transform duration-500 group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-[0.2em] leading-none">LEX PRIME</span>
              <span className="text-[10px] tracking-[0.5em] text-gold uppercase mt-1">Associates</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm uppercase tracking-widest font-medium text-neutral-400 hover:text-white transition-colors duration-300 group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-neutral-950 flex flex-col p-8"
          >
            <div className="flex justify-between items-center">
              <span className="font-serif text-lg tracking-widest">LEX PRIME</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gold"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-4xl font-serif font-bold hover:text-gold transition-colors group flex items-center gap-4"
                >
                  <span className="text-gold/30 text-base font-sans font-normal tracking-widest group-hover:text-gold transition-colors">
                    0{i + 1}
                  </span>
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="py-8 border-t border-neutral-800">
              <p className="text-neutral-500 text-xs tracking-[0.4em] font-serif uppercase">A Legacy of Excellence Since 1994</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
