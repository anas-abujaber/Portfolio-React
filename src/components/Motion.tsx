import { motion } from "framer-motion";

type MotionProps = {
  children: React.ReactNode;
  xValue?: number;
  yValue?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
};

function Motion({
  children,
  xValue = 0,
  yValue = 0,
  duration = 0.8,
  delay = 0,
  once = true,
}: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: xValue, y: yValue }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Motion;
