/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  ChevronRight, 
  Download,
  Menu,
  X,
  Award,
  BookOpen,
  MapPin,
  Terminal,
  Layers,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const SKILLS = {
  "Programming": [
    { name: "Python", icon: <Terminal size={18} /> },
    { name: "Java", icon: <Code2 size={18} /> },
    { name: "C", icon: <Terminal size={18} /> },
    { name: "C++", icon: <Terminal size={18} /> },
  ],
  "Web Technologies": [
    { name: "HTML", icon: <Globe size={18} /> },
    { name: "CSS", icon: <Layers size={18} /> },
    { name: "JavaScript", icon: <Code2 size={18} /> },
    { name: "PHP", icon: <Database size={18} /> },
  ],
  "Tools": [
    { name: "Git", icon: <Github size={18} /> },
    { name: "GitHub", icon: <Github size={18} /> },
    { name: "VS Code", icon: <Code2 size={18} /> },
  ]
};

const PROJECTS = [
  {
    title: "Campus Marketplace",
    description: "A web-based platform that allows students within a college campus to buy and sell items easily. Users can list products, browse items, and contact sellers.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/heythenmozhi",
  },
  {
    title: "College Ride Sharing App",
    description: "A ride sharing application for college students where users can offer or request rides from other students traveling in the same direction.",
    tech: ["Java", "Android Studio", "Firebase"],
    github: "https://github.com/heythenmozhi",
  },
  {
    title: "Medicine Reminder App",
    description: "An application that helps users remember to take their medicines at the correct time by sending notifications and reminders.",
    tech: ["Java", "Android", "SQLite", "Notification API"],
    github: "https://github.com/heythenmozhi",
  },
  {
    title: "Learncha – Learning Platform",
    description: "An educational learning platform designed for students from Class 1 to Class 6. It provides interactive content to help children understand concepts easily.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/heythenmozhi",
  }
];

const CERTIFICATIONS = [
  "Deloitte Data Analytics Virtual Experience – Forage",
  "Tata Generative AI Virtual Experience – Forage",
  "Introduction to Machine Learning Concepts – Microsoft",
  "AWS Solutions Architecture Job Simulation – Microsoft",
  "Get Started with Machine Learning in Azure – Microsoft",
  "Introduction to Generative AI Concepts – Microsoft",
  "Design a Machine Learning Operations Solution – Microsoft",
  "Introduction to AI Concepts – Microsoft",
  "Data Ingestion Strategy for Machine Learning – Microsoft",
  "Write Your First C# Code – Microsoft",
  "Web Accessibility Basics – Microsoft",
  "Python for Beginners – Forage",
  "Business Analytics with Excel – Saylor Academy",
  "Data Science & Analytics – Cursa",
  "CS105: Introduction to Python – HP LIFE"
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-gradient">
          THENMOZHI.R
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-zinc-900 border-b border-zinc-800 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-6">
          Available for Opportunities
        </span>
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-[0.9]">
          Aspiring <span className="text-gradient">Software Developer</span>
          <br />& IT Student.
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Hi, I'm <span className="text-white font-medium">Thenmozhi R</span>. 
          I build real-world applications with a focus on AI, web technologies, and problem-solving.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2"
          >
            Get in touch <ChevronRight size={18} />
          </a>
          <div className="flex items-center gap-4 ml-4">
            <a 
              href="https://github.com/heythenmozhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-800 hover:bg-zinc-900 transition-colors text-zinc-400 hover:text-white"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/thenmozhi-r-935422338/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-800 hover:bg-zinc-900 transition-colors text-zinc-400 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
            <span className="w-12 h-[1px] bg-zinc-800" /> About Me
          </h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              I am a passionate Information Technology student currently pursuing my B.Tech degree. 
              With a strong academic foundation (CGPA: 8.3), I've developed a keen interest in 
              software development, artificial intelligence, and web technologies.
            </p>
            <p>
              My journey in tech is driven by a desire to build real-world applications that solve 
              problems for students and everyday users. I believe in continuous learning and 
              consistently push myself to master new technologies and improve my development skills.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl"
        >
          <h3 className="text-xl font-bold mb-6">Education & Info</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <BookOpen size={20} />
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Degree</p>
                <p className="text-zinc-200">B.Tech Information Technology</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Award size={20} />
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Academic Performance</p>
                <p className="text-zinc-200">CGPA: 8.3</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Location</p>
                <p className="text-zinc-200">Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-display font-bold mb-16 flex items-center gap-3">
        <span className="w-12 h-[1px] bg-zinc-800" /> Technical Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(SKILLS).map(([category, skills], idx) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-lg font-bold mb-6 text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              {category === "Programming" && <Terminal size={18} />}
              {category === "Web Technologies" && <Globe size={18} />}
              {category === "Tools" && <Cpu size={18} />}
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-sm hover:border-zinc-500 transition-colors"
                >
                  <span className="text-zinc-400">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-display font-bold mb-16 flex items-center gap-3">
        <span className="w-12 h-[1px] bg-zinc-800" /> Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-2xl bg-zinc-800 group-hover:bg-blue-500/20 transition-colors">
                <Code2 className="text-zinc-400 group-hover:text-blue-400" />
              </div>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all"
              >
                <Github size={20} />
              </a>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-zinc-800 text-zinc-500">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-display font-bold mb-16 flex items-center gap-3">
        <span className="w-12 h-[1px] bg-zinc-800" /> Certifications
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div 
            key={cert}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="p-4 rounded-2xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
              <Award size={16} />
            </div>
            <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors line-clamp-2">
              {cert}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
            <span className="w-12 h-[1px] bg-zinc-800" /> Get In Touch
          </h2>
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Email Me</p>
                <a href="mailto:thenmozhiraja22@gmail.com" className="text-zinc-200 hover:text-blue-400 transition-colors">
                  thenmozhiraja22@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Location</p>
                <p className="text-zinc-200">Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-zinc-400">Thank you for reaching out. I'll get back to you soon.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm font-semibold text-blue-400 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-hidden focus:border-blue-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-hidden focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-hidden focus:border-blue-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Thenmozhi R. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/heythenmozhi" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/thenmozhi-r-935422338/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:thenmozhiraja22@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
