import AppLayout, { PageWrapper } from '@/App'
import { SEO } from '@/lib/seo'
export default function Post(){
  return (
    <AppLayout>
      <SEO title="Post — Title" description="Post summary."/>
      <PageWrapper>
        <article className="prose dark:prose-invert max-w-none">
          <h1 style={{fontFamily:'var(--font-sans)'}}>Post Title</h1>
          <p>Content coming from WordPress.</p>
        </article>
      </PageWrapper>
    </AppLayout>
  )
}