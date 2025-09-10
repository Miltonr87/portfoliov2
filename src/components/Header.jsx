import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-black-100 flex items-center justify-center text-yellow-600 font-bold text-xl mr-3">
            M
          </div>
          <span className="text-x1 font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Milton Rodrigues
          </span>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
