// src/utils/animations.ts
import type { Variants, Transition, MotionProps } from "framer-motion";

const shortTransition: Transition = { duration: 0.5 };

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: shortTransition },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: shortTransition },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: shortTransition },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    } as Transition,
  },
};

// These are MotionProps (props to spread onto motion elements)
export const cardHover: MotionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 300 } as Transition,
};

export const cardHoverSmall: MotionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 250 } as Transition,
};

export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  // If you prefer a transition for page variants:
  // animate: { opacity: 1, transition: shortTransition }
};

export const slideInLeft: Variants = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: shortTransition },
};

export const slideInRight: Variants = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: shortTransition },
};

export const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: shortTransition },
};
