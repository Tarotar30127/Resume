import { motion } from 'framer-motion';
import { PROJECTS } from '../data/content';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{
        rotateX: 4,
        rotateY: -4,
        scale: 1.03,
        boxShadow: `0 24px 64px ${project.accent}28, 0 0 0 1px ${project.accent}20`,
      }}
      whileTap={{ scale: 0.98 }}
      transition-type="spring"
      style={{ transformPerspective: 900 }}
      className="glass rounded-2xl p-7 cursor-pointer relative overflow-hidden group flex flex-col h-full"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-70 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, ${project.accent}, transparent)`,
        }}
      />

      {/* Decorative icon */}
      <div
        className="absolute top-4 right-5 text-6xl font-bold opacity-[0.06] group-hover:opacity-[0.1] transition-opacity select-none leading-none"
        style={{ color: project.accent }}
      >
        {project.icon}
      </div>

      {/* Status badge */}
      <div className="flex items-center gap-2 mb-5">
        <span
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: project.accent }}
        />
        <span className="text-xs font-medium" style={{ color: project.accent }}>
          {project.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-text-primary mb-3 leading-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
            What I&apos;m Building
          </p>
          <h2 className="section-title text-text-primary">
            Featured <span className="text-emerald-accent">Projects</span>
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mt-4 leading-relaxed">
            A selection of projects that reflect my interests in language tech,
            security research, and data visualization.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
