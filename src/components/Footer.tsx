import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Anuj Bohra
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Computer Science Undergraduate | Aspiring Developer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/anuj1704bohra-ops" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anuj-bohra-77a335314" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:anuj1704bohra@gmail.com" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Anuj Bohra. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
