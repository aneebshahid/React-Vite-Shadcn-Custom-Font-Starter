import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import Work from '@/pages/Work'
import WorkDetail from '@/pages/WorkDetail'
import Services from '@/pages/Services'
import ServiceDetail from '@/pages/ServiceDetail'
import Blog from '@/pages/Blog'
import Post from '@/pages/Post'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
export const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/work', element: <Work/> },
  { path: '/work/:slug', element: <WorkDetail/> },
  { path: '/services', element: <Services/> },
  { path: '/services/:slug', element: <ServiceDetail/> },
  { path: '/blog', element: <Blog/> },
  { path: '/blog/:slug', element: <Post/> },
  { path: '/about', element: <About/> },
  { path: '/contact', element: <Contact/> },
])