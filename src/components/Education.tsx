import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    institution: "VIT Vellore",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2025 - Present",
    location: "Vellore, Tamil Nadu",
    details: "Currently in first year. Achieved a GPA of 9.3 in the first semester.",
    highlight: "GPA: 9.3"
  },
  {
    institution: "Bakshi's Springdales Sr. Sec. School",
    degree: "Senior Secondary Education",
    period: "Completed 2025",
    location: "Kota, Rajasthan",
    details: "Focused on Science and Mathematics.",
    highlight: "High Academic Standing"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] glass p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">{item.institution}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">{item.period}</span>
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">{item.degree}</div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="w-3 h-3" /> {item.location}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.details}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400">
                    <Award className="w-4 h-4" /> {item.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
