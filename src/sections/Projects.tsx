import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, type Variants } from 'framer-motion';
import { Github, ExternalLink, BarChart3, Bot, Calendar, Library } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Mutual Fund Analysis & Research',
    category: 'data',
    tech: ['Python', 'Jupyter Notebook', 'Pandas', 'Matplotlib'],
    description: 'Exploratory data analysis of mutual fund performance with research paper on behavioral and demographic factors affecting investment decisions in India.',
    github: 'https://github.com/Dilip-kumar-Anjana/mutual-fund-analysis',
    live: null,
    icon: BarChart3,
    highlights: ['EDA on mutual fund data', 'Research paper included', 'Behavioral analysis'],
    color: 'from-sky to-cyan',
  },
  {
    id: 2,
    name: 'Uber Ride Data Analysis',
    category: 'data',
    tech: ['Python', 'Jupyter Notebook', 'Data Visualization'],
    description: 'Comprehensive analysis of Uber ride data to extract insights on ride patterns, peak hours, and customer behavior.',
    github: 'https://github.com/Dilip-kumar-Anjana/Uber-Ride-Data-Analysis',
    live: null,
    icon: BarChart3,
    highlights: ['Ride pattern analysis', 'Peak hour identification', 'Customer behavior insights'],
    color: 'from-emerald to-teal',
  },
  {
    id: 3,
    name: 'Binance Trading Bot',
    category: 'tools',
    tech: ['Python', 'Binance API', 'CLI'],
    description: 'Production-ready Python CLI trading bot for Binance Futures Testnet with dry-run mode, structured logging, and input validation.',
    github: 'https://github.com/Dilip-kumar-Anjana/trading_bot',
    live: null,
    icon: Bot,
    highlights: ['MARKET and LIMIT orders', 'Dry-run simulation', 'Structured logging'],
    color: 'from-amber to-orange',
  },
  {
    id: 4,
    name: 'Smart Daily Planner',
    category: 'web',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    description: 'Modern daily planner application built with Next.js for efficient task management and productivity tracking.',
    github: 'https://github.com/Dilip-kumar-Anjana/Smart-Daily-Planner',
    live: 'https://smart-daily-planner-beta.vercel.app',
    icon: Calendar,
    highlights: ['Task management', 'Productivity tracking', 'Modern UI'],
    color: 'from-violet to-purple',
  },
  {
    id: 5,
    name: 'Library Management System',
    category: 'web',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    description: 'Full-featured library management system with user and admin modules for book tracking, profile management, and administrative tasks.',
    github: 'https://github.com/Dilip-kumar-Anjana/lms',
    live: null,
    icon: Library,
    highlights: ['User/Admin modules', 'Book tracking', 'Profile management'],
    color: 'from-pink to-rose',
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'data', name: 'Data Analysis' },
  { id: 'web', name: 'Web Development' },
  { id: 'tools', name: 'Tools' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // compute filtered list, treat "all" as a special case
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  // helpful debug logging to catch mismatches during development
  // console.log({ activeCategory, filteredProjects });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-4">
            Browse My Recent
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of my data analysis projects, web applications, and tools 
            that showcase my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-sky to-cyan text-navy-900'
                  : 'bg-navy-800 text-slate-300 hover:bg-navy-700 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          // always animate to visible so projects render even if the section
          // hasn't scrolled into view yet.  The original behaviour (hiding
          // until `isInView` was true) meant that the default "all" set
          // could look empty when the user hadn't scrolled down yet.  Switching
          // categories triggers a re-render which would then show the items
          // and give the impression that only the "web" filter worked.
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredProjects.length === 0 ? (
            <p className="col-span-full text-center text-slate-400">
              No projects found for this category.
            </p>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group glass-card overflow-hidden"
              >
                {/* Project Header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-6">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg group-hover:text-sky transition-colors">
                          {project.name}
                        </h3>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded-md bg-navy-900 text-slate-400 text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 py-0.5 rounded-md bg-navy-900 text-slate-400 text-xs">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="flex items-center gap-1 px-2 py-1 rounded-full bg-sky/10 text-sky text-xs"
                      >
                        <span className="w-1 h-1 rounded-full bg-sky" />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900 text-slate-300 text-sm hover:bg-navy-800 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky/10 text-sky text-sm hover:bg-sky/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          )}
        </motion.div>

        {/* View All GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Dilip-kumar-Anjana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-800 text-slate-300 hover:bg-navy-700 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
