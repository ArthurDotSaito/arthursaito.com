import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function MotionAnimate({ children }: IProps) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };
  return (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => {
        if (typeof window !== undefined) window.scrollTo({ top: 0 });
      }}
    >
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
