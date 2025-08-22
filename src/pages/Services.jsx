import AppLayout, { PageWrapper } from '@/App'
import { SEO } from '@/lib/seo'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
const items = [{ title: 'Web Design', desc: 'Minimal, conversion-first design.'},{ title: 'Web Development', desc: 'Fast, accessible websites.'},{ title: 'Performance & SEO', desc: 'Speed + search visibility.'},]
export default function Services(){
  return (
    <AppLayout>
      <SEO title="Services" description="What I deliver and how I work."/>
      <PageWrapper>
        <h1 className="text-3xl font-semibold tracking-tight mb-6" style={{fontFamily:'var(--font-sans)'}}>Services</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(i => (<Card key={i.title}><CardHeader><CardTitle style={{fontFamily:'var(--font-sans)'}}>{i.title}</CardTitle></CardHeader><CardContent><p className="text-neutral-600 dark:text-neutral-400">{i.desc}</p></CardContent></Card>))}
        </div>
      </PageWrapper>
    </AppLayout>
  )
}