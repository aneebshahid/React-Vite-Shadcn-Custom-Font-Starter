import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { fadeUp } from '@/components/motion/variants'
export function ProjectCard({ title, excerpt, image }){
  return (
    <motion.div {...fadeUp}>
      <Card>
        <CardHeader><CardTitle style={{fontFamily:'var(--font-sans)'}}>{title}</CardTitle></CardHeader>
        <CardContent><p className="text-neutral-600 dark:text-neutral-400">{excerpt || 'Short project summary goes here.'}</p></CardContent>
      </Card>
    </motion.div>
  )
}