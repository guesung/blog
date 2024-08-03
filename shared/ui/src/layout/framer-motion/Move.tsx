'use client';
import { MOVE } from '@guesung/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export default function Move({ children }: PropsWithChildren) {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={MOVE}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
