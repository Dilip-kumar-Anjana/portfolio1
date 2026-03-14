import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

// split data into work and education lists for clearer rendering
const workExperiences = [
  {
    title: 'Data Science Intern',
    organization: 'Uniconverge Technologies Pvt. Ltd',
    period: 'April 2024 - June 2024',
    description: 'Learned conceptual knowledge on Data Science and Machine Learning and applied it on Agricultural crop analysis project. Gained hands-on experience with real-world data processing and analysis.',
    icon: Briefcase,
  },
  {
    title: 'Academic Operations Intern',
    organization: 'TIME Education, Ahmedabad',
    period: 'Apr 2025 – Oct 2025',
    description: `Academic workflow support, faculty coordination, and student data management.
• Student counselling for course selection and career guidance.
• Planned and executed academic/promotional events across colleges.`,
    icon: Briefcase,
  },
  {
    title: 'Expert in Advanced Math',
    organization: 'Chegg Inc.',
    period: 'June 2022',
    description: 'Solved over 200+ advanced math questions on Chegg, demonstrating adept time management within a 2‑hour limit and quick decision-making under a 10‑minute acceptance window.',
    icon: Briefcase,
  },
];

const educationEntries = [
  {
    title: 'B.Tech CSE (AIML)',
    organization: 'Karnavati University',
    period: '2022 - 2026',
    description: 'Pursuing Bachelor of Technology in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning.',
    icon: GraduationCap,
  },
];

const achievements = [
  {
    title: 'JEE Achievement',
    description: 'Secured position among top 6% in JEE Mains and top 12% in JEE Advanced, demonstrating strong analytical and problem-solving skills.',
    year: '2022',
    icon: Award,
  },
  {
    title: 'Climate Science Olympiad',
    description: 'Reached the semi-finals, placing among top 3,000 participants worldwide, gaining exposure to global climate challenges.',
    year: '2023',
    icon: Award,
  },
  {
    title: 'IAAC 2023 Final Round Qualifier',
    description: 'Qualified through the Qualification and Pre-Final Rounds and advanced to the Final Round of the International Astronomy and Astrophysics Competition (IAAC) 2023. Represented India in a globally competitive examination focused on astrophysics, astronomy, and advanced scientific problem-solving. Demonstrated strong analytical reasoning, mathematical application, and conceptual understanding in physics-based problem scenarios. Verification: https://iaac.space/verify (ID: PR-2023-F3FC59DA628)',
    year: '2023',
    icon: Award,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
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
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional experience, education, and key achievements 
            in the field of data analytics and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience Timeline */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-sky" />
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky via-cyan to-transparent" />

              <div className="space-y-8">
                {workExperiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    variants={itemVariants}
                    className="relative pl-16"
                  >
                    {/* Timeline Node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                      className="absolute left-0 top-0 w-12 h-12 rounded-full bg-navy-800 border-2 border-sky flex items-center justify-center"
                    >
                      <exp.icon className="w-5 h-5 text-sky" />
                    </motion.div>

                    {/* Content Card */}
                    <div className="glass-card p-5 hover:border-sky/30 transition-colors">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-md bg-sky/10 text-sky text-xs font-medium">
                          Work
                        </span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold text-lg mb-1">{exp.title}</h4>
                      <p className="text-sky text-sm mb-2">{exp.organization}</p>
                      <p className="text-slate-400 text-sm">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education subsection below work */}
            <h3 className="text-xl font-semibold text-white mt-12 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-sky" />
              Education
            </h3>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky via-cyan to-transparent" />

              <div className="space-y-8">
                {educationEntries.map((edu, index) => (
                  <motion.div
                    key={edu.title}
                    variants={itemVariants}
                    className="relative pl-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: (workExperiences.length + index) * 0.2 + 0.3, duration: 0.4 }}
                      className="absolute left-0 top-0 w-12 h-12 rounded-full bg-navy-800 border-2 border-sky flex items-center justify-center"
                    >
                      <edu.icon className="w-5 h-5 text-sky" />
                    </motion.div>

                    <div className="glass-card p-5 hover:border-sky/30 transition-colors">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-md bg-sky/10 text-sky text-xs font-medium">
                          Education
                        </span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold text-lg mb-1">{edu.title}</h4>
                      <p className="text-sky text-sm mb-2">{edu.organization}</p>
                      <p className="text-slate-400 text-sm">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-sky" />
              Achievements
            </h3>

            <div className="space-y-6">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card p-5 border-l-4 border-l-sky"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-5 h-5 text-sky" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-semibold">{achievement.title}</h4>
                        <span className="px-2 py-0.5 rounded-full bg-emerald/20 text-emerald text-xs">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Metrics */}
            <motion.div
              variants={itemVariants}
              className="mt-8 glass-card p-6"
            >
              <h4 className="text-white font-semibold mb-4">Key Highlights</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-navy-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-sky mb-1">Top 6%</div>
                  <div className="text-xs text-slate-400">JEE Mains</div>
                </div>
                <div className="text-center p-3 bg-navy-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-sky mb-1">Top 12%</div>
                  <div className="text-xs text-slate-400">JEE Advanced</div>
                </div>
                <div className="text-center p-3 bg-navy-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald mb-1">Top 3K</div>
                  <div className="text-xs text-slate-400">Climate Olympiad</div>
                </div>
                <div className="text-center p-3 bg-navy-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-cyan mb-1">20+</div>
                  <div className="text-xs text-slate-400">Certifications</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
