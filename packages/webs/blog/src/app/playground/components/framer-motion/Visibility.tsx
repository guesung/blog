'use client';
import { VISIBILITY } from '@guesung/constants';
import { Circle } from '@guesung/ui';
import { AnimatePresence, motion } from 'framer-motion';

export default function Visibility() {
  return (
    <AnimatePresence>
      <motion.div
        variants={VISIBILITY}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Circle />
      </motion.div>
    </AnimatePresence>
  );
}
