import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'action' | 'ghost' }>(function Button({ className, variant='primary', ...props }, ref) {
  return <button ref={ref} className={cn('vf-button', `vf-button-${variant}`, className)} {...props} />
})
