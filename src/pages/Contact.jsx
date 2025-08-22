import AppLayout, { PageWrapper } from '@/App'
import { SEO } from '@/lib/seo'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
export default function Contact(){
  return (
    <AppLayout>
      <SEO title="Contact" description="Tell me about your project."/>
      <PageWrapper>
        <h1 className="text-3xl font-semibold tracking-tight mb-6" style={{fontFamily:'var(--font-sans)'}}>Contact</h1>
        <form className="max-w-xl space-y-4" action="mailto:you@example.com" method="post" encType="text/plain">
          <Input name="name" placeholder="Your name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="message" placeholder="Project details" />
          <Button type="submit">Send</Button>
        </form>
      </PageWrapper>
    </AppLayout>
  )
}