import * as React from 'react'
import { cn } from '@/lib/utils'
export const Button = React.forwardRef(({ className, variant='default', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2'
  const variants = { default: 'bg-black text-white hover:opacity-90 dark:bg-white dark:text-black', outline: 'border border-border hover:bg-neutral-50 dark:hover:bg-neutral-900', ghost: 'hover:bg-neutral-100 dark:hover:bg-neutral-800' }
  return <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
})
Button.displayName = 'Button'