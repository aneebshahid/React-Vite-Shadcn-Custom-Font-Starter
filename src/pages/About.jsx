import AppLayout, { PageWrapper } from '@/App'
import { SEO } from '@/lib/seo'
export default function About(){
  return (
    <AppLayout>
      <SEO title="About" description="Who I am and how I work."/>
      <PageWrapper>
        <h1 className="text-3xl font-semibold tracking-tight mb-4" style={{fontFamily:'var(--font-sans)'}}>About Me</h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">Short bio, approach, and values. Add a headshot.</p>
      </PageWrapper>
    </AppLayout>
  )
}