import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Github, GitCommit, GitBranch, Star, BookOpen, Code2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const githubData = {
  repositories: 12,
  contributions: 51,
  stars: 0,
  forks: 2,
};

const languageData = [
  { name: 'Python', value: 35, color: '#38BDF8' },
  { name: 'Jupyter Notebook', value: 30, color: '#22D3EE' },
  { name: 'JavaScript', value: 15, color: '#818CF8' },
  { name: 'TypeScript', value: 10, color: '#34D399' },
  { name: 'PHP', value: 7, color: '#FBBF24' },
  { name: 'Other', value: 3, color: '#94A3B8' },
];

const recentActivity = [
  { type: 'commit', repo: 'trading_bot', message: 'Update README.md', date: 'Feb 5, 2026' },
  { type: 'commit', repo: 'Uber-Ride-Data-Analysis', message: 'Initial analysis', date: 'Feb 17, 2026' },
  { type: 'commit', repo: 'Smart-Daily-Planner', message: 'Initial commit', date: 'Feb 3, 2026' },
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

export default function GitHubStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-4">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            GitHub Activity
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My open source contributions and coding activity on GitHub.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 gap-6"
        >
          {/* Stats Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            {/* Main Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Repositories', value: githubData.repositories, icon: BookOpen },
                { label: 'Contributions', value: githubData.contributions, icon: GitCommit },
                { label: 'Stars', value: githubData.stars, icon: Star },
                { label: 'Forks', value: githubData.forks, icon: GitBranch },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-sky mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Contribution Graph */}
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-sky" />
                Contribution Activity
              </h3>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 84 }).map((_, i) => {
                  const intensity = Math.random();
                  let bgClass = 'bg-navy-800';
                  if (intensity > 0.8) bgClass = 'bg-sky';
                  else if (intensity > 0.6) bgClass = 'bg-sky/60';
                  else if (intensity > 0.4) bgClass = 'bg-sky/40';
                  else if (intensity > 0.2) bgClass = 'bg-sky/20';
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: i * 0.01 }}
                      className={`aspect-square rounded-sm ${bgClass}`}
                    />
                  );
                })}
              </div>
              <div className="flex items-center justify-end gap-2 mt-3">
                <span className="text-xs text-slate-400">Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-sm bg-navy-800" />
                  <div className="w-3 h-3 rounded-sm bg-sky/20" />
                  <div className="w-3 h-3 rounded-sm bg-sky/40" />
                  <div className="w-3 h-3 rounded-sm bg-sky/60" />
                  <div className="w-3 h-3 rounded-sm bg-sky" />
                </div>
                <span className="text-xs text-slate-400">More</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-navy-900/50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sky/10 flex items-center justify-center flex-shrink-0">
                      <GitCommit className="w-4 h-4 text-sky" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm truncate">{activity.message}</p>
                      <p className="text-slate-400 text-xs">{activity.repo}</p>
                    </div>
                    <span className="text-slate-500 text-xs">{activity.date}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Language Distribution */}
          <motion.div variants={itemVariants}>
            <div className="glass-card p-6 h-full">
              <h3 className="text-white font-semibold mb-6">Language Distribution</h3>
              
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={languageData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {languageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1E293B',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#F8FAFC',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-2">
                {languageData.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-slate-300 text-sm">{lang.name}</span>
                    </div>
                    <span className="text-slate-400 text-sm">{lang.value}%</span>
                  </div>
                ))}
              </div>

              <a
                href="https://github.com/Dilip-kumar-Anjana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-6 px-4 py-3 rounded-xl bg-navy-900 text-slate-300 hover:bg-navy-800 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                View GitHub Profile
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
