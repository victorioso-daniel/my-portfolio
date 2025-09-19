import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import profilePicture from '../assets/profile-picture.png';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
		>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
			<div className="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
			<div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
			<div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
			<div className="container-custom px-4 relative z-10">
				<div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
					{/* Profile Picture */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex-shrink-0 relative"
					>
						<img
							src={profilePicture}
							alt="Daniel's Profile Picture"
							className="w-75 h-80 md:w-90 md:h-96 lg:w-96 lg:h-[24rem] rounded-3xl object-contain shadow-2xl"
						/>
						{/* Branding glow behind the image */}
						<div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary-500/30 to-purple-500/30 blur-xl opacity-70 -z-10"></div>
					</motion.div>

					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-center lg:text-left max-w-2xl"
					>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
							Hi, I'm <span className="gradient-text">Daniel</span>
						</h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
						>
							Developer passionate about building clean, scalable,
							and reliable systems that power modern web applications
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
						>
							<button className="btn-primary flex items-center gap-2">
								<Mail className="w-5 h-5" />
								Get In Touch
							</button>
							<button className="btn-secondary flex items-center gap-2">
								<Download className="w-5 h-5" />
								Download CV
							</button>
						</motion.div>

						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 1.0 }}
							onClick={scrollToAbout}
							className="flex items-center gap-2 mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
						>
							<span>Learn more about me</span>
							<ArrowDown className="w-5 h-5 animate-bounce" />
						</motion.button>
					</motion.div>
				</div>
			</div>
		</section>
  );
};

export default Hero; 