import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2,
  TrendingUp,
  Code2,
  Database,
  Brain
} from 'lucide-react';

const certifications = [
  {
    name: 'Google Data Analytics Professional Certificate',
    provider: 'Coursera',
    icon: Database,
    description: 'Comprehensive training in data cleaning, visualization, SQL, and statistical analysis using Excel, SQL, R, and Tableau.',
    skills: ['Data Cleaning', 'SQL', 'Tableau', 'R', 'Excel'],
    color: 'from-blue to-sky',
    verifyUrl: 'https://coursera.org/verify/professional-cert',
  },
  {
    name: 'Software Engineering Virtual Experience',
    provider: 'JPMorgan Chase & Co.',
    icon: Code2,
    description: 'Developed and integrated backend components in a simulated real-world project environment.',
    skills: ['Backend Development', 'API Integration', 'Problem Solving'],
    color: 'from-emerald to-teal',
    verifyUrl: 'https://www.theforage.com/virtual-internships',
  },
  {
    name: 'The Joy of Computing using Python',
    provider: 'NPTEL - IIT Ropar',
    icon: Brain,
    description: 'Achieved 80% in final exam. Gained strong foundational skills in Python programming and algorithmic design.',
    skills: ['Python', 'Problem Solving', 'Algorithms'],
    color: 'from-amber to-orange',
    verifyUrl: 'https://nptel.ac.in/',
  },
  {
    name: 'Code Unnati Program',
    provider: 'SAP & Edunet Foundation',
    icon: TrendingUp,
    description: 'Hands-on experience in Python Programming, Data Analysis with Python, and Artificial Intelligence.',
    skills: ['Python', 'Data Analysis', 'AI/ML Basics'],
    color: 'from-violet to-purple',
    verifyUrl: 'https://codeunati.com/',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky/5 to-transparent" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-4">
            Professional Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Industry-recognized certifications that validate my expertise in data analytics, 
            software engineering, and programming.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group glass-card p-6 relative overflow-hidden"
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cert.color}`} />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                      <cert.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-sky transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-slate-400 text-sm">{cert.provider}</p>
                    </div>
                  </div>
                  <Award className="w-6 h-6 text-sky/50" />
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center gap-1 px-2 py-1 rounded-md bg-navy-900 text-slate-300 text-xs"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald" />
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verify Link */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky text-sm hover:underline"
                >
                  Verify Certificate
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* LinkedIn button placed after grid */}
        <div className="text-center mt-8">
          <a
            href="https://www.linkedin.com/in/dilip-kumar-anjana-b58943260/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-sky to-cyan text-navy-900 font-medium hover:opacity-90 transition-opacity"
          >
            View all certifications on LinkedIn
          </a>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-sky mb-1">20+</div>
              <div className="text-slate-400 text-sm">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan mb-1">3</div>
              <div className="text-slate-400 text-sm">Top Platforms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald mb-1">15+</div>
              <div className="text-slate-400 text-sm">Skills Validated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet mb-1">100%</div>
              <div className="text-slate-400 text-sm">Completion Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
