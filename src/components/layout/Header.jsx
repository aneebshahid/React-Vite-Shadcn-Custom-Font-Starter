import { NavLink } from 'react-router-dom'
import { ThemeSelect } from "./ThemeSelect";
import { Button } from '@/components/ui/button'
const NAV = [{to:'/', label:'Home'},{to:'/work', label:'Work'},{to:'/services', label:'Services'},{to:'/blog', label:'Blog'},{to:'/about', label:'About'},{to:'/contact', label:'Contact'}]
export function Header(){
  return (
    <header className="border-b border-border sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
      <div className="container-section flex items-center justify-between h-16">
        <NavLink to="/" className="font-bold tracking-tight">
          YourName
        </NavLink>
        <nav className="hidden md:flex gap-6">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? "font-semibold" : "text-neutral-600 dark:text-neutral-400"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSelect />
          <Button asChild variant="default">
            <a href="/contact">Hire me</a>
          </Button>
        </div>
      </div>
    </header>
  );
}