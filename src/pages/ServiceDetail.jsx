import AppLayout, { PageWrapper } from '@/App'
import { SEO } from '@/lib/seo'
export default function ServiceDetail(){
  return (
    <AppLayout>
      <SEO title="Service — Detail" description="Deliverables and process."/>
      <PageWrapper>
        <h1 className="text-3xl font-semibold tracking-tight mb-4" style={{fontFamily:'var(--font-sans)'}}>Service Name</h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">Explain the value, deliverables, and process. Add a CTA.</p>
      </PageWrapper>
    </AppLayout>
  )
}