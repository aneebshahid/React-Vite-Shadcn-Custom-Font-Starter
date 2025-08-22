import AppLayout, { PageWrapper } from '@/App'
import { SEO } from '@/lib/seo'
import { ProjectCard } from '@/components/cards/ProjectCard'
export default function Work(){
  return (
    <AppLayout>
      <SEO title="Work — Case Studies" description="Selected projects and outcomes."/>
      <PageWrapper>
        <h1 className="text-3xl font-semibold tracking-tight mb-6" style={{fontFamily:'var(--font-sans)'}}>Selected Work</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard title="Project One" />
          <ProjectCard title="Project Two" />
          <ProjectCard title="Project Three" />
          <ProjectCard title="Project Four" />
        </div>
      </PageWrapper>
    </AppLayout>
  )
}