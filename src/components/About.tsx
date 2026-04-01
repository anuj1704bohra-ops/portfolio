import { motion } from 'motion/react';
import { User, Code, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a dedicated Computer Science student at VIT Vellore with a strong passion for software development and problem-solving. My journey in tech is driven by curiosity and a desire to create impactful digital experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Based in Kota, Rajasthan, I've always been fascinated by how technology can simplify lives. I'm currently focusing on mastering Data Structures, Algorithms, and modern development frameworks to build scalable and efficient applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Development</h4>
                  <p className="text-sm text-slate-500">Passionate about clean code and modern tech stacks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Problem Solving</h4>
                  <p className="text-sm text-slate-500">Love tackling complex algorithmic challenges.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
