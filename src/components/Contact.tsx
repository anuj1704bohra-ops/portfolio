import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "anuj1704bohra@gmail.com",
    href: "mailto:anuj1704bohra@gmail.com"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 9772707939",
    href: "tel:+919772707939"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "Anuj Bohra",
    href: "https://www.linkedin.com/in/anuj-bohra-77a335314"
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "anuj1704bohra-ops",
    href: "https://github.com/anuj1704bohra-ops"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Kota, Rajasthan, India",
    href: "#"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/50 transition-all group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</div>
                  <div className="text-slate-900 dark:text-white font-medium">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
