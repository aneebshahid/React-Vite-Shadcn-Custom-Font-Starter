import { cn } from '@/lib/utils'
export function Card({ className, ...props }){ return <div className={cn('card p-6', className)} {...props} /> }
export function CardHeader({ className, ...props }){ return <div className={cn('mb-4', className)} {...props} /> }
export function CardTitle({ className, ...props }){ return <h3 className={cn('text-xl font-semibold', className)} {...props} /> }
export function CardContent({ className, ...props }){ return <div className={cn('space-y-3', className)} {...props} /> }