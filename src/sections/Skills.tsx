import { useState, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { 
  Database, 
  Code2, 
  BarChart3, 
  FileSpreadsheet, 
  GitBranch, 
  Calculator,
  Layout,
  Palette,
  Braces,
  Terminal,
  Server,
  PieChart
} from 'lucide-react';

const skillCategories = [
  {
    id: 'data',
    name: 'Data Analysis',
    icon: Database,
    skills: [
      { name: 'Python', level: 90, icon: Code2 },
      { name: 'SQL', level: 85, icon: Database },
      { name: 'PostgreSQL', level: 80, icon: Server },
      { name: 'Power BI', level: 85, icon: BarChart3 },
      { name: 'MS Excel', level: 90, icon: FileSpreadsheet },
      { name: 'Statistics', level: 80, icon: Calculator },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'HTML', level: 90, icon: Layout },
      { name: 'CSS', level: 85, icon: Palette },
      { name: 'JavaScript', level: 75, icon: Braces },
      { name: 'TypeScript', level: 70, icon: Terminal },
      // libraries/tooling used in this portfolio project
      { name: 'React', level: 80, icon: Code2 },
      { name: 'Tailwind CSS', level: 70, icon: Palette },
      { name: 'Vite', level: 65, icon: Server },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Libraries',
    icon: GitBranch,
    skills: [
      { name: 'Git', level: 80, icon: GitBranch },
      { name: 'Jupyter Notebook', level: 85, icon: Terminal },
      { name: 'Pandas', level: 85, icon: Database },
      { name: 'NumPy', level: 80, icon: Calculator },
      { name: 'Matplotlib', level: 75, icon: PieChart },
      // added machine learning & database
      { name: 'PyTorch', level: 70, icon: Code2 },
      { name: 'TensorFlow', level: 65, icon: Code2 },
      { name: 'Keras', level: 60, icon: Code2 },
      { name: 'MongoDB', level: 70, icon: Server },
    ],
  },
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

function SkillBar({ name, level, icon: Icon, delay }: { name: string; level: number; icon: React.ElementType; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-navy-800 border border-slate-700 flex items-center justify-center group-hover:border-sky/50 transition-colors">
            <Icon className="w-4 h-4 text-sky" />
          </div>
          <span className="text-slate-300 font-medium">{name}</span>
        </div>
        <span className="text-sky font-mono text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-navy-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="h-full rounded-full bg-gradient-to-r from-sky to-cyan"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('data');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // match categories in a case-insensitive way to avoid accidental mismatches
  const activeSkills =
    skillCategories.find((cat) =>
      cat.id.toLowerCase() === activeCategory.toLowerCase()
    )?.skills || [];

  // debug info removed for production build

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          // header should always be visible; removing isInView check fixes
          // sections that never trigger the observer when already above the
          // viewport on load (especially when linking directly to #skills).
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-4">
            Explore My
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise in data analysis, 
            visualization, and software development.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                // log click for debugging
                // eslint-disable-next-line no-console
                console.log('category clicked', category.id);
                setActiveCategory(category.id);
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-sky to-cyan text-navy-900'
                  : 'bg-navy-800 text-slate-300 hover:bg-navy-700 hover:text-white'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-6 sm:p-8 space-y-6">
            {activeSkills.length === 0 ? (
              <p className="text-center text-slate-400">
                No skills available for this category.
              </p>
            ) : (
              activeSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index}
                />
              ))
            )}
          </div>
        </div>

        {/* Skill Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12"
        >
          {['Python', 'SQL', 'Power BI', 'Excel', 'Pandas', 'Git'].map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-4 text-center cursor-default"
            >
              <span className="text-slate-300 font-medium text-sm">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
