import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/content';
import ParticleBackground from '../components/ParticleBackground';

const BADGE_STYLES = {
  emerald: 'bg-sky-accent text-navy',
  blue: 'bg-coral-accent text-white',
  amber: 'bg-amber-400 text-white',
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => String(p.id) === id);

  if (!project) return <Navigate to="/" replace />;

  const badgeClass = BADGE_STYLES[project.badgeColor] ?? BADGE_STYLES.emerald;

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32 pb-24 px-6">
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          background: `radial-gradient(ellipse at 20% 50%, var(--gradient-a) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, var(--gradient-b) 0%, transparent 60%)`,
        }}
      />

      <ParticleBackground />

      <div className="relative z-10 max-w-3xl w-full mx-auto">
        {/* Back link */}
        <motion.div {...fadeUp(0)}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-text-muted hover:text-sky-accent transition-colors mb-12 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Back to Projects
          </Link>
        </motion.div>

        <div className="glass rounded-xl p-8 md:p-12">
          {/* Badge + category */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-6">
            <span
              className={`text-xs font-bold px-2.5 py-0.5 uppercase tracking-widest rounded-sm ${badgeClass}`}
            >
              {project.badge}
            </span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
              {project.category}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display font-black text-3xl md:text-4xl text-text-primary leading-tight mb-4"
          >
            {project.headline}
          </motion.h1>

          {/* Byline */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-xs font-mono text-text-muted uppercase tracking-wide mb-8"
          >
            {project.byline}
          </motion.p>

          {/* Divider */}
          <motion.div
            {...fadeUp(0.3)}
            className="border-t border-navy/10 mb-8"
          />

          {/* Summary */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-text-muted leading-relaxed text-base mb-10"
          >
            {project.summary}
          </motion.p>

          {/* Technical highlights (optional) */}
          {project.highlights && (
            <motion.div {...fadeUp(0.38)} className="space-y-4 mb-10">
              {project.highlights.map(({ label, text }) => (
                <div key={label} className="flex gap-4">
                  <span className="text-sky-accent mt-0.5 flex-shrink-0">
                    ▸
                  </span>
                  <p className="text-text-muted leading-relaxed text-sm">
                    <span className="text-text-primary font-semibold">
                      {label}:{' '}
                    </span>
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {/* Tags */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-sm border border-navy/10 bg-navy/5 text-text-muted"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* External link */}
          {project.link && project.link !== '#' && (
            <motion.div {...fadeUp(0.45)}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-coral-accent text-white font-bold text-sm tracking-widest uppercase rounded-sm hover:shadow-lg transition-shadow"
                style={{ boxShadow: '0 0 20px var(--glow-coral)' }}
              >
                View Project →
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
