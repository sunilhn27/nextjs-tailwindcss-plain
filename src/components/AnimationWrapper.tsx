import * as motion from "motion/react-client";

interface AnimateProps {
  children: React.ReactNode;
  delay: number;
}

function AnimationTop({ children, delay }: AnimateProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: [0.17, 0.67, 0.83, 0.91],
        delay: delay,
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 50, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function AnimationLeft({ children, delay }: AnimateProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: [0.17, 0.67, 0.83, 0.91],
        delay: delay,
      }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: 100, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function AnimationBottom({ children, delay }: AnimateProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: [0.17, 0.67, 0.83, 0.91],
        delay: delay,
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -50, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function AnimationRight({ children, delay }: AnimateProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: [0.17, 0.67, 0.83, 0.91],
        delay: delay,
      }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -100, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function ZoomIn({ children, delay }: AnimateProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.2, delay: delay }}
    >
      {children}
    </motion.button>
  );
}

export {
  AnimationTop,
  AnimationLeft,
  AnimationBottom,
  AnimationRight,
  ZoomIn,
};
