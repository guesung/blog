'use client';
import { MOVE } from '@guesung/constants';
import { Circle } from '@guesung/ui';
import { AnimatePresence, motion } from 'framer-motion';

export default function Move() {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={MOVE}
      >
        <Circle />
      </motion.div>
    </AnimatePresence>
  );
}
