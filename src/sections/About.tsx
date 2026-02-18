import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap, Award, TrendingUp, Briefcase } from 'lucide-react';
// import profileImage from './DSC_1178.JPG';

const stats = [
  { label: 'Years Experience', value: 1, suffix: '+', icon: Briefcase },
  { label: 'Projects Completed', value: 12, suffix: '+', icon: TrendingUp },
  { label: 'Certifications', value: 20, suffix: '+', icon: Award },
  { label: 'GitHub Contributions', value: 51, suffix: '', icon: TrendingUp },
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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sky/5 to-transparent" />

      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Image & Info */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Profile Image Container */}
              <div className="relative">
                {/* Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-br from-sky via-cyan to-emerald rounded-3xl blur opacity-50" />
                
                {/* Image Placeholder */}
                <div className="relative bg-navy-800 rounded-3xl p-2">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky to-cyan flex items-center justify-center">
                        <span className="text-4xl font-bold text-navy-900">DKA</span>
                      </div>
                      <h3 className="text-white font-semibold text-lg">Dilip Kumar Anjana</h3>
                      <p className="text-slate-400 text-sm">Data Analyst & Developer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4 top-1/4 glass-card p-3"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky" />
                  <span className="text-slate-300 text-sm">Ahmedabad, India</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.6 }}
                className="absolute -right-4 top-1/2 glass-card p-3"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky" />
                  <span className="text-slate-300 text-sm">dileepanjana9@gmail.com</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card p-3"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky" />
                  <span className="text-slate-300 text-sm">+91 8824694705</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-4">
                Get To Know More
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                About Me
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-slate-300 mb-8">
              <p>
                Hello, I'm Dilip Kumar Anjana — a data-driven analyst with a passion for uncovering 
                insights and crafting seamless digital experiences. Currently pursuing my B.Tech in 
                CSE (AIML) at Karnavati University.
              </p>
              <p>
                My journey into data analytics and machine learning started with curiosity—how does 
                data shape decisions? Over time, this became a deep passion for extracting meaningful 
                insights, solving complex problems, and building interactive visualizations.
              </p>
              <p>
                Alongside my analytics expertise, I also love frontend development, allowing me to 
                present data in an intuitive and user-friendly way. I'm dedicated to leveraging 
                data-driven strategies to enhance decision-making and optimize business performance.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-sky" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">B.Tech CSE (AIML)</h4>
                  <p className="text-slate-400 text-sm">Karnavati University • 2022-2026</p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card p-4 text-center"
                >
                  <stat.icon className="w-5 h-5 text-sky mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
