import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Flight Management System",
    description: "A comprehensive system developed by a team of 5 to manage flight schedules, bookings, and passenger information efficiently.",
    tech: ["Python", "Database Management", "Team Collaboration"],
    github: "https://github.com/anuj1704bohra-ops/flight-management-system",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI Emotion Detector",
    description: "An advanced AI-powered application that analyzes facial expressions to detect human emotions in real-time.",
    tech: ["Python", "AI/ML", "Computer Vision"],
    github: "https://github.com/anuj1704bohra-ops/multi-final",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Sign Language Translator",
    description: "A bridge for communication that translates sign language gestures into text/speech using computer vision techniques.",
    tech: ["Python", "OpenCV", "Deep Learning"],
    github: "https://github.com/anuj1704bohra-ops/signbridge-connect",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden flex flex-col h-full group"
            >
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <button className="flex items-center gap-2 text-sm font-semibold text-slate-400 cursor-not-allowed">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/anuj1704bohra-ops" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
          >
            View more on GitHub <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
