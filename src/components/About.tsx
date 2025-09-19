import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation();
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation();

  const personalInfo = [
    { icon: User, label: 'Name', value: 'Daniel Victorioso' },
    { icon: MapPin, label: 'Location', value: 'Las Piñas City, Metro Manila, Philippines' },
    { icon: Mail, label: 'Email', value: 'danielvictorioso03@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+63 930 766 2035' },
  ];

  return (
		<section
			id="about"
			className="section-padding bg-white dark:bg-gray-900"
		>
			<div className="container-custom">
				<motion.div
					ref={headerRef}
					initial={{ opacity: 0, y: 50 }}
					animate={
						headerInView
							? { opacity: 1, y: 0 }
							: { opacity: 0, y: 50 }
					}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						About Me
					</h2>
					<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						I'm a passionate full-stack developer with expertise in
						modern web technologies
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Personal Info */}
					<motion.div
						ref={leftRef}
						initial={{ opacity: 0, x: -50 }}
						animate={
							leftInView
								? { opacity: 1, x: 0 }
								: { opacity: 0, x: -50 }
						}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
							Personal Information
						</h3>
						<div className="space-y-4">
							{personalInfo.map((info, index) => (
								<div
									key={index}
									className="flex items-center gap-4"
								>
									<div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
										<info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
									</div>
									<div>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											{info.label}
										</p>
										<p className="text-gray-900 dark:text-white font-medium">
											{info.value}
										</p>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					{/* About Content */}
					<motion.div
						ref={rightRef}
						initial={{ opacity: 0, x: 50 }}
						animate={
							rightInView
								? { opacity: 1, x: 0 }
								: { opacity: 0, x: 50 }
						}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="space-y-6"
					>
						<div>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								My Journey
							</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
								I began my development journey with a strong
								interest in how systems work behind the scenes.
								Over time, I developed a passion for backend
								development and building reliable, scalable
								solutions.
							</p>
						</div>

						<div>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								What I Do
							</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
								I specialize in backend development using Java
								(Spring Boot) and PHP (Laravel). I focus on
								designing secure APIs, managing databases, and
								implementing business logic that ensures
								efficient system performance.
							</p>
						</div>

						<div>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								My Approach
							</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
								I specialize in backend development using Java
								(Spring Boot) and PHP (Laravel). I focus on
								designing secure APIs, managing databases, and
								implementing business logic that ensures
								efficient system performance.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
  );
};

export default About; 