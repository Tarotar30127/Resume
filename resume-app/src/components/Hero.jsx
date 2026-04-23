import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticleBackground from './ParticleBackground';
import { TYPEWRITER_SEQUENCE } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient backdrop */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(16,185,129,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.12) 0%, transparent 60%)',
        }}
      />

      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16">
        {/* Profile image */}
        <motion.div {...fadeUp(0)} className="mb-8 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative"
          >
            <img
              src="/profile.jpg"
              alt="Carter Lee"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top ring-4 ring-emerald-accent/30"
              style={{
                boxShadow:
                  '0 0 40px rgba(16,185,129,0.25), 0 0 80px rgba(16,185,129,0.1)',
              }}
            />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-accent border-2 border-bg" />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.div {...fadeUp(0.15)}>
          <p className="text-text-muted text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Welcome to my portfolio
          </p>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-4">
            Hello, I&apos;m{' '}
            <span className="text-emerald-accent neon-text">Carter</span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          {...fadeUp(0.3)}
          className="h-12 flex items-center justify-center mb-8"
        >
          <TypeAnimation
            sequence={TYPEWRITER_SEQUENCE}
            repeat={Infinity}
            className="text-xl md:text-2xl text-text-muted font-light"
            cursor={true}
            style={{ display: 'inline-block' }}
          />
        </motion.div>

        {/* Bio blurb */}
        <motion.p
          {...fadeUp(0.45)}
          className="text-text-muted max-w-xl mx-auto leading-relaxed mb-10 text-base md:text-lg"
        >
          CS student at BYU building at the intersection of language, security,
          and data. Fluent in Cantonese, proficient in Kali Linux, and always on
          the mats.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap gap-4 justify-center mb-20"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full bg-emerald-accent text-bg font-semibold text-sm tracking-wide hover:shadow-lg transition-shadow"
            style={{ boxShadow: '0 0 20px rgba(16,185,129,0.3)' }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full glass glass-hover font-semibold text-sm tracking-wide text-text-primary"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          {...fadeUp(0.8)}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
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
