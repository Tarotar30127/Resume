import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((link) =>
        document.getElementById(link.toLowerCase())
      ).filter(Boolean);

      const current = sections.find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (link) => {
    setMenuOpen(false);
    const sectionId = link.toLowerCase();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/5 backdrop-blur-xl border-b border-emerald-accent/30 shadow-lg shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <motion.button
          type="button"
          aria-label="Carter Lee — scroll to top"
          className="flex items-center gap-2.5 md:gap-3 cursor-pointer bg-transparent border-0 p-0 text-left"
          whileHover={{ color: '#10b981' }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="relative flex-shrink-0 rounded-full overflow-hidden ring-2 ring-emerald-accent/35 shadow-md shadow-black/25">
            <img
              src="/Cartoon.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 md:h-10 md:w-10 object-cover object-[center_12%]"
              draggable={false}
            />
          </span>
          <span className="font-display font-black text-lg md:text-xl text-white tracking-wide">
            Carter <span className="text-emerald-accent">Lee</span>
          </span>
        </motion.button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <li key={link}>
                <button
                  onClick={() => handleNavClick(link)}
                  className={`text-sm font-medium transition-all duration-200 relative pb-0.5 ${
                    isActive
                      ? 'text-emerald-accent'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {link}
                  {isActive && (
                    <motion.span
                      layoutId="activeLink"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-emerald-accent"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-text-primary origin-center transition-all"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-text-primary"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-text-primary origin-center transition-all"
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-surface/95 backdrop-blur-xl border-b border-white/10"
          >
            <ul className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className="w-full text-left px-8 py-3 text-text-muted hover:text-emerald-accent hover:bg-white/5 transition-colors text-sm font-medium"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
