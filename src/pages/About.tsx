import { motion } from 'framer-motion';

const aboutVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export const AboutPage = () => (
  <motion.section
    className="p-8 rounded-2xl border border-gray-200 shadow bg-white max-w-md mx-auto text-center animate-fade-in dark:bg-blue-900 dark:border-blue-700"
    initial="hidden"
    animate="visible"
    variants={aboutVariants}
    aria-label="about section"
  >
    <h1 className="text-4xl font-bold mb-2 text-blue-700 dark:text-blue-200">About</h1>
    <p className="text-lg text-gray-600 mb-4 dark:text-blue-300">This is a simple React + Vite + Tailwind starter template with animated navigation and professional design.</p>
    <p className="text-base text-gray-500 dark:text-blue-400">Built with accessibility and best practices in mind.</p>
  </motion.section>
);
