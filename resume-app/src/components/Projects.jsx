import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/content';

const BADGE_STYLES = {
  emerald: 'bg-sky-accent text-navy',
  blue: 'bg-coral-accent text-white',
  amber: 'bg-amber-400 text-white',
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
};

function NewsCard({ project }) {
  const badgeClass = BADGE_STYLES[project.badgeColor] ?? BADGE_STYLES.emerald;
  const isFeatured = project.featured;

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{
        y: -4,
        boxShadow:
          '0 24px 48px var(--shadow-card), 0 0 0 1px rgba(168,216,234,0.18)',
      }}
      className="glass rounded-xl overflow-hidden cursor-pointer group flex flex-col mb-6 break-inside-avoid"
    >
      <div className={`flex flex-col p-7 ${isFeatured ? 'md:p-9' : ''}`}>
        {/* Badge + category row */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-xs font-bold px-2.5 py-0.5 uppercase tracking-widest rounded-sm ${badgeClass}`}
          >
            {project.badge}
          </span>
          <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
            {project.category}
          </span>
          {project.date && (
            <span className="ml-auto text-xs font-mono text-text-muted/60">
              {project.date}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-navy/10 mb-4" />

        {/* Headline */}
        <Link to={`/projects/${project.id}`}>
          <h3
            className={`font-serif font-bold leading-snug mb-3 transition-colors duration-300 hover:text-sky-accent ${
              isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'
            } text-text-primary`}
          >
            {project.headline}
          </h3>
        </Link>

        {/* Byline */}
        <p className="text-xs font-mono text-text-muted mb-4 uppercase tracking-wide">
          {project.byline}
        </p>

        {/* Summary */}
        <p
          className={`text-text-muted leading-relaxed ${isFeatured ? 'text-base' : 'text-sm'}`}
        >
          {project.summary}
        </p>

        {/* Tags + Read More */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-sm border border-navy/10 bg-navy/5 text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-sky-accent uppercase tracking-widest hover:underline shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              Read More →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [searchYear, setSearchYear] = useState('');

  const filtered = PROJECTS.filter(
    (p) => !searchYear.trim() || (p.date ?? '').includes(searchYear.trim())
  );

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-mono text-sky-accent uppercase tracking-[0.3em] mb-3">
            Selected Work
          </p>
          <h2 className="section-title text-text-primary">Projects</h2>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 items-center mb-10"
        >
          {/* Year search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Year (e.g. 2024)"
              value={searchYear}
              onChange={(e) => setSearchYear(e.target.value)}
              className="glass rounded-full px-4 py-2 text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-1 focus:ring-sky-accent/50 w-40 bg-transparent"
            />
            {searchYear && (
              <button
                onClick={() => setSearchYear('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <p className="text-text-muted text-sm font-mono">
                No projects found.
              </p>
              <button
                onClick={() => setSearchYear('')}
                className="mt-4 text-xs text-sky-accent font-mono hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="columns-1 md:columns-2 gap-6"
            >
              {filtered.map((project) => (
                <NewsCard key={project.id} project={project} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
