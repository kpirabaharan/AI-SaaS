import { Variants } from 'framer-motion';

const navBarVariants = (isWidth: boolean, isHeight: boolean): Variants => ({
  open: {
    width: isWidth ? '100%' : 450,
    height: isHeight || isWidth ? '100%' : 650,
    top: isWidth ? -16 : -10,
    left: isWidth ? -16 : -10,
    borderRadius: isWidth ? 0 : 30,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 32,
    height: 32,
    top: 0,
    left: 0,
    borderRadius: 8,
    transition: { delay: 0.15, duration: 0.55, ease: [0.76, 0, 0.24, 1] },
  },
});

const navBarEntryVariants: Variants = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (index: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      delay: 0.25 + index * 0.1,
      duration: 0.65,
      opacity: { duration: 0.35, delay: 0.5 + index * 0.1 },
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const navBarEntryFooterVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + index * 0.1 + 0.2,
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

export { navBarEntryFooterVariants, navBarEntryVariants, navBarVariants };
