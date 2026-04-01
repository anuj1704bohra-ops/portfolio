import { motion } from 'motion/react';
import { Book, Code2, Terminal, Cpu, Database, Binary } from 'lucide-react';

const skills = [
  { name: "Python", level: 90, icon: <Code2 className="w-5 h-5" /> },
  { name: "C++", level: 85, icon: <Terminal className="w-5 h-5" /> },
  { name: "C", level: 80, icon: <Binary className="w-5 h-5" /> },
  { name: "Data Structures & Algorithms", level: 85, icon: <Cpu className="w-5 h-5" /> },
  { name: "Operating Systems", level: 75, icon: <Database className="w-5 h-5" /> },
];

const interests = [
  { name: "Reading Books", icon: <Book className="w-5 h-5" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Skills & Interests</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              Technical Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                      {skill.icon}
                      {skill.name}
                    </div>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests & Extra */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              Beyond Coding
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-2xl flex items-center gap-4 group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {interest.icon}
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{interest.name}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <h4 className="text-xl font-bold mb-4">Continuous Learning</h4>
              <p className="text-blue-100 leading-relaxed">
                I'm always exploring new technologies and methodologies. Currently diving deeper into Artificial Intelligence and Full-Stack Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
