import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  startOnView?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  startOnView = true
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => 
    (prefix + latest.toFixed(decimals) + suffix)
  );
  const [hasStarted, setHasStarted] = useState(!startOnView);

  useEffect(() => {
    if (hasStarted) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [hasStarted, value, duration, count]);

  const handleViewportEnter = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      onViewportEnter={startOnView ? handleViewportEnter : undefined}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
};

export default AnimatedCounter;