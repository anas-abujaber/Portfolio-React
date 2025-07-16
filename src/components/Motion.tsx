import { motion } from "framer-motion";

type MotionProps = {
  children: React.ReactNode;
  xValue?: number;
  yValue?: number;
  duration?: number;
};

function Motion({
  children,
  xValue = 0,
  yValue = 0,
  duration = 1,
}: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: xValue, y: yValue }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
}

export default Motion;
