'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { DesktopView } from '@/components/views/desktop-view';
import { MobileView } from '@/components/views/mobile-view';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const isMobile = useIsMobile();

  // Show nothing while detecting device to prevent hydration flicker
  if (isMobile === undefined) return null;

  return (
    <AnimatePresence mode="wait">
      {isMobile ? (
        <motion.div
          key="mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MobileView />
        </motion.div>
      ) : (
        <motion.div
          key="desktop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DesktopView />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
