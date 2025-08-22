import * as React from 'react'
import { cn } from '@/lib/utils'
export const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={cn('flex h-10 w-full rounded-xl border border-border bg-transparent px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-neutral-500 focus-visible:ring-2 focus-visible:ring-ring', className)} {...props} />
))
Input.displayName = 'Input'