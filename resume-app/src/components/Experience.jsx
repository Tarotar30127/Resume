import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-emerald-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Where I&apos;ve Been
          </p>
          <h2 className="section-title text-text-primary">
            Work <span className="text-emerald-accent">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-accent/50 via-blue-accent/30 to-transparent transform md:-translate-x-0.5" />

          <div className="space-y-16">
            {EXPERIENCE.map((job, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={job.company}
                  className="relative flex md:items-center"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-0 flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-emerald-accent ring-4 ring-bg ring-offset-0 shadow-lg shadow-emerald-accent/50" />
                  </div>

                  {/* Card — alternates sides on desktop */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`ml-12 md:ml-0 md:w-[45%] ${
                      isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 hover:border-white/20 transition-colors duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="font-display font-bold text-lg text-text-primary">
                            {job.role}
                          </h3>
                          <p className="text-emerald-accent font-semibold text-sm">
                            {job.company}
                          </p>
                          <p className="text-text-muted text-xs mt-0.5">
                            {job.location}
                          </p>
                        </div>
                        <span className="flex-shrink-0 glass rounded-full px-3 py-1 text-xs text-text-muted border border-white/10">
                          {job.period}
                        </span>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2">
                        {job.bullets.map((bullet, bi) => (
                          <motion.li
                            key={bi}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * bi }}
                            className="flex gap-3 text-sm text-text-muted leading-relaxed"
                          >
                            <span className="text-emerald-accent mt-1 flex-shrink-0">
                              ▸
                            </span>
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
