import AppLayout, { PageWrapper } from '@/App'
import { SEO } from '@/lib/seo'
export default function Blog(){
  return (
    <AppLayout>
      <SEO title="Blog" description="Thoughts on design, dev, and growth."/>
      <PageWrapper>
        <h1 className="text-3xl font-semibold tracking-tight mb-6" style={{fontFamily:'var(--font-sans)'}}>Latest Posts</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Wire this to WordPress via REST when ready.</p>
      </PageWrapper>
    </AppLayout>
  )
}