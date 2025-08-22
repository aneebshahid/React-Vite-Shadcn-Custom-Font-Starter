import AppLayout, { PageWrapper } from '@/App'
import { SEO } from '@/lib/seo'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/cards/ProjectCard'
export default function Home(){
  return (
    <AppLayout>
      <SEO title="Home — Your Name" description="Minimal, creative, fast portfolio."/>
      <PageWrapper>
        <section className="py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{fontFamily:'var(--font-sans)'}}>I design & build minimal, fast websites that convert.</h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl">Independent developer & designer. Available for select projects.</p>
          <div className="mt-6 flex gap-3">
            <Button><a href="/contact">Start a project</a></Button>
            <Button variant="outline"><a href="/work">See my work</a></Button>
          </div>
        </section>
        <section className="py-8 grid md:grid-cols-2 gap-6">
          <ProjectCard title="Case Study A" />
          <ProjectCard title="Case Study B" />
        </section>
      </PageWrapper>
    </AppLayout>
  )
}