import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticleBackground from './ParticleBackground';
import { TYPEWRITER_SEQUENCE } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

export default function Hero() {
  const today = new Date();
  const edition = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(16,185,129,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.12) 0%, transparent 60%)',
        }}
      />

      <ParticleBackground />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-20">
        {/* Edition line */}
        <motion.p
          {...fadeUp(0)}
          className="text-text-muted text-xs font-mono tracking-[0.25em] uppercase mb-5"
        >
          Vol. I &nbsp;•&nbsp; Provo, Utah &nbsp;•&nbsp; {edition}
        </motion.p>

        {/* Top rule */}
        <motion.div
          {...fadeUp(0.1)}
          className="border-t-2 border-text-primary/20 mb-5"
        />

        {/* Masthead */}
        <motion.div {...fadeUp(0.2)}>
          <h1
            className="font-serif font-black leading-none tracking-tight mb-3 neon-text"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', color: '#f1f5f9' }}
          >
            THE LEE <span className="text-emerald-accent">GAZETTE</span>
          </h1>
        </motion.div>

        {/* Thin rule */}
        <motion.div
          {...fadeUp(0.28)}
          className="border-t border-text-primary/10 mb-5"
        />

        {/* Sub-headline */}
        <motion.h2
          {...fadeUp(0.35)}
          className="font-serif text-2xl md:text-3xl text-text-muted mb-6 tracking-wide"
        >
          Coding the Future.
        </motion.h2>

        {/* Typewriter */}
        <motion.div
          {...fadeUp(0.45)}
          className="h-10 flex items-center justify-center mb-10"
        >
          <TypeAnimation
            sequence={TYPEWRITER_SEQUENCE}
            repeat={Infinity}
            className="text-base md:text-lg text-text-muted font-light tracking-wide"
            cursor={true}
            style={{ display: 'inline-block' }}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-emerald-accent text-bg font-bold text-sm tracking-widest uppercase hover:shadow-lg transition-shadow rounded-sm"
            style={{ boxShadow: '0 0 20px rgba(16,185,129,0.3)' }}
          >
            Read the Latest ↓
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 glass glass-hover font-bold text-sm tracking-widest uppercase text-text-primary rounded-sm"
          >
            Contact the Editor →
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs tracking-widest uppercase font-mono">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <path
                d="M8 0v20M1 13l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
