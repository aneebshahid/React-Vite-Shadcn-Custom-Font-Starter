import AppLayout, { PageWrapper } from '@/App'
import { SEO } from '@/lib/seo'
export default function WorkDetail(){
  return (
    <AppLayout>
      <SEO title="Case Study — Title" description="Problem → Approach → Result" />
      <PageWrapper>
        <article className="prose dark:prose-invert max-w-none">
          <h1 style={{fontFamily:'var(--font-sans)'}}>Case Study Title</h1>
          <p>Short summary of the project.</p>
          <h2 style={{fontFamily:'var(--font-sans)'}}>Problem</h2>
          <p>Describe the client problem.</p>
          <h2 style={{fontFamily:'var(--font-sans)'}}>Approach</h2>
          <p>Your process and craft.</p>
          <h2 style={{fontFamily:'var(--font-sans)'}}>Result</h2>
          <p>Quantified outcomes and testimonial.</p>
        </article>
      </PageWrapper>
    </AppLayout>
  )
}