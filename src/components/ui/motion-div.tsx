
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionDivProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale" | "none";
  once?: boolean;
  className?: string;
}

export const MotionDiv = ({
  children,
  delay = 0,
  duration = 0.5,
  animation = "fade",
  once = true,
  className,
  ...props
}: MotionDivProps) => {
  const getAnimationProps = () => {
    switch (animation) {
      case "fade":
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1.0] },
          viewport: { once }
        };
      case "slide-up":
        return {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1.0] },
          viewport: { once }
        };
      case "slide-down":
        return {
          initial: { opacity: 0, y: -20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1.0] },
          viewport: { once }
        };
      case "slide-left":
        return {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1.0] },
          viewport: { once }
        };
      case "slide-right":
        return {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1.0] },
          viewport: { once }
        };
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1.0] },
          viewport: { once }
        };
      case "none":
        return {};
      default:
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1.0] },
          viewport: { once }
        };
    }
  };

  // The problem was here - we were passing all props directly to motion.div
  // which caused type conflicts. Now we only pass className and animation props.
  return (
    <motion.div
      className={cn(className)}
      {...getAnimationProps()}
    >
      {children}
    </motion.div>
  );
};
