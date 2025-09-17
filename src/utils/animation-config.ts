import { useReducedMotion } from 'framer-motion';

export const useAnimationConfig = () => {
  const shouldReduceMotion = useReducedMotion();

  return {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.2 } }
    },
    slideIn: {
      initial: { x: shouldReduceMotion ? 0 : -20, opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 0.2 } }
    },
    staggerContainer: {
      animate: {
        transition: {
          staggerChildren: 0.03
        }
      }
    },
    viewport: {
      once: true,
      margin: "-100px",
      amount: 0.2
    }
  };
};