import { motion } from 'framer-motion';
import { PROJECTS } from '../data/content';

const BADGE_STYLES = {
  emerald: 'bg-emerald-accent text-bg',
  blue: 'bg-blue-accent text-white',
  amber: 'bg-amber-400 text-bg',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function NewsCard({ project }) {
  const badgeClass = BADGE_STYLES[project.badgeColor] ?? BADGE_STYLES.emerald;
  const isFeatured = project.featured;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -5,
        boxShadow:
          '0 24px 48px rgba(16,185,129,0.14), 0 0 0 1px rgba(16,185,129,0.18)',
      }}
      className={`glass rounded-xl overflow-hidden cursor-pointer group flex flex-col ${
        isFeatured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Card inner */}
      <div
        className={`flex flex-col flex-1 p-7 ${isFeatured ? 'md:p-10' : ''}`}
      >
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
        </div>

        {/* Divider rule */}
        <div className="border-t border-white/10 mb-4" />

        {/* Headline */}
        <h3
          className={`font-serif font-bold leading-snug mb-3 transition-colors duration-300 group-hover:text-emerald-accent ${
            isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'
          } text-text-primary`}
        >
          {project.headline}
        </h3>

        {/* Byline */}
        <p className="text-xs font-mono text-text-muted mb-4 uppercase tracking-wide">
          {project.byline}
        </p>

        {/* Summary */}
        <p
          className={`text-text-muted leading-relaxed flex-grow ${isFeatured ? 'text-base' : 'text-sm'}`}
        >
          {project.summary}
        </p>

        {/* Tags + Read More */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-sm border border-white/10 bg-white/5 text-text-muted"
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
              className="text-xs font-mono text-emerald-accent uppercase tracking-widest hover:underline shrink-0"
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
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header — newspaper style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="border-t-4 border-text-primary/20 pt-4">
            <p className="text-xs font-mono text-emerald-accent uppercase tracking-[0.3em] mb-2">
              Field Dispatch
            </p>
            <h2 className="font-serif font-black text-4xl md:text-5xl text-text-primary leading-tight">
              The Latest <span className="text-emerald-accent">Reports</span>
            </h2>
            <div className="border-b border-text-primary/10 mt-4" />
          </div>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto"
        >
          {PROJECTS.map((project) => (
            <NewsCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
