'use client'

import { motion, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'

export function Reveal({ children, delay = 0, className, ...props }: { children: ReactNode; delay?: number; className?: string } & Omit<HTMLMotionProps<'div'>, 'children'>) {
  return <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .48, delay, ease: 'easeOut' }} {...props}>{children}</motion.div>
}

export function Pressable({ children, className, ...props }: HTMLMotionProps<'div'>) {
  return <motion.div className={className} whileHover={{ y: -3 }} whileTap={{ scale: .98 }} transition={{ type: 'spring', stiffness: 420, damping: 24 }} {...props}>{children}</motion.div>
}
