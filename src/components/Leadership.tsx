import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Leadership = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();

  const leadershipPositions = [
    {
      title: 'Vice President for External Affairs',
      organization: 'PUP Taguig Computer Society',
      period: 'January 2025 – Present',
      icon: Users,
      responsibilities: [
        'Manages external relations, partnerships, and inter-org collaborations',
        'Represents the org in university-wide events and communications',
        'Leads initiatives to strengthen the organization\'s public presence and engagement'
      ]
    },
    {
      title: 'Vice President for Audit',
      organization: 'PUP Taguig Computer Society',
      period: 'September 2024 – January 2025',
      icon: TrendingUp,
      responsibilities: [
        'Handled financial audits and monitored expense records for transparency',
        'Managed the organization\'s inventory and ensured accountability of assets',
        'Coordinated with internal teams to maintain accurate financial and asset documentation'
      ]
    }
  ];

  return (
    <section id="leadership" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Leadership
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Demonstrating leadership and organizational skills through active involvement in academic communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {leadershipPositions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ margin: "-100px" }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <position.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {position.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {position.organization}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{position.period}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {position.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ margin: "-100px" }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl p-8 text-white">
            <Award className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h3 className="text-2xl font-bold mb-4">
              Leadership Excellence
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
              Through these leadership roles, I've developed strong organizational, communication, and 
              management skills that complement my technical expertise. These experiences have taught me 
              the importance of collaboration, accountability, and strategic thinking in achieving 
              organizational goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership; 