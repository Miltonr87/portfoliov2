'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: 'easeInOut' },
      }}
      className="pt-8 pb-12 px-4 flex justify-center"
    >
      <div className="w-full max-w-2xl">
        <form
          action="https://formspree.io/f/mknlyjdk"
          method="POST"
          className="flex flex-col gap-6 p-8 sm:p-10 bg-[#27272c] rounded-2xl shadow-lg"
        >
          <h3 className="text-accent text-2xl sm:text-3xl font-semibold text-center">
            Contact
          </h3>
          <p className="text-white/70 text-justify text-sm sm:text-base leading-relaxed">
            Let’s connect! If you have a project, collaboration, or just want to
            chat, send me a message by email and I’ll reply as soon as possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="h-12 rounded-xl"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="h-12 rounded-xl"
            />
          </div>
          <Textarea
            className="h-40 rounded-xl px-4 py-2"
            name="message"
            placeholder="Enter your message..."
            required
          />
          <div className="flex justify-center">
            <Button
              size="lg"
              type="submit"
              className="w-full sm:w-auto px-8 py-3 text-base font-medium rounded-xl"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
