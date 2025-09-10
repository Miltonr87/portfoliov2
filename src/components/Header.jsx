import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Motion.div
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
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-yellow-500 to-black-100 flex items-center justify-center text-white-600 font-bold text-xl mr-3">
            M
          </div>
          <span className="text-x1 font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Milton Rodrigues
          </span>
        </Motion.div>
        <nav className="lg:flex hidden space-x-8">
          {['Home', 'About', 'Projects', 'Experience', 'Contact'].map(
            (item, index) => (
              <Motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                href="#"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full" />
              </Motion.a>
            )
          )}
        </nav>
        <div className="md:flex hidden items-center space-x-4">
          <Motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.7 + 4 * 0.2,
            }}
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <FiDownload className="inline w-5 h-5 mr-2" />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full" />
          </Motion.a>
          <Motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <FiGithub className="w-5 h-5" />
          </Motion.a>
          <Motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <FiLinkedin className="w-5 h-5" />
          </Motion.a>
        </div>
        <Motion.button
          onClick={() => {
            openContactForm();
            toggleMenu();
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.6,
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
          className="ml-4 px-4 py-2 bg-yellow-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-300 hidden md:inline-block"
        >
          Contact Me
        </Motion.button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Motion.button
            whileTap={{ scale: 0.9 }}
            className="text-gray-300"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </Motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <Motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              )
            )}
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              <FiDownload className="inline w -5 h-5 mr-2" />
              Resume
            </a>
            <div className="flex items-center space-x-4 px-3 py-2">
              <a
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300"
                onClick={toggleMenu}
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300"
                onClick={toggleMenu}
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
            <button
              className="w-full px-4 py-2 bg-yellow-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-300"
              onClick={() => {
                openContactForm();
                toggleMenu();
              }}
            >
              Contact Me
            </button>
          </div>
        </Motion.nav>
      )}
      {/* Contact Form Modal */}
      <AnimatePresence>
        {contactFormOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4"
          >
            <Motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 30,
                duration: 0.8,
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold mb-4 text-gray-300">
                  Contact Me
                </h2>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                </button>
              </div>
              {/* Input Form */}
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 bg-gray-700"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 bg-gray-700"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 bg-gray-700"
                    placeholder="Your Message"
                  />
                </div>
                <Motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-yellow-600 to-gold-400 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-yellow-600/50"
                >
                  Send Message
                </Motion.button>
              </form>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
