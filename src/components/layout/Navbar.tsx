'use client'
import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { title: 'Home', id: 'home' },
    { title: 'Work', id: 'work' },
    { title: 'Education', id: 'education' },
    { title: 'Projects', id: 'projects' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'education', 'projects']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Check if we're in the contact section (past projects)
      const projectsElement = document.getElementById('projects')
      if (projectsElement) {
        const projectsBottom = projectsElement.offsetTop + projectsElement.offsetHeight
        if (scrollPosition >= projectsBottom) {
          setActiveSection('')
          return
        }
      }

      for (const sectionId of sections) {
        const element = sectionId === 'home'
          ? document.documentElement
          : document.getElementById(sectionId)

        if (element) {
          const offsetTop = sectionId === 'home' ? 0 : element.offsetTop
          const offsetBottom = sectionId === 'home'
            ? window.innerHeight
            : offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Temporarily disable ScrollTrigger to prevent interference
      const scrollTriggers = ScrollTrigger.getAll()
      scrollTriggers.forEach(trigger => trigger.disable())

      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = sectionId === 'home' ? 0 : elementPosition - 80

      gsap.to(window, {
        duration: 0.8,
        scrollTo: offsetPosition,
        ease: 'power2.out',
        overwrite: 'auto',
        onComplete: () => {
          // Re-enable ScrollTriggers after scroll completes
          scrollTriggers.forEach(trigger => trigger.enable())
        }
      })
    }
  }

  return (
    <div className="fixed top-0 w-full flex justify-end px-6 z-50">
      <div className="mt-6 mr-24">
        <nav className="glass px-4 py-3 rounded-full shadow-sm">
          <ul className="flex space-x-2">
            {navItems.map((item) => (
              <li key={item.title}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-5 py-2.5 transition-colors duration-300
                    ${activeSection === item.id ?
                      'text-brand font-semibold' :
                      'text-text-secondary hover:text-text-primary'
                    }`}
                >
                  <span className="text-sm uppercase tracking-[0.15em] font-medium">
                    {item.title}
                  </span>
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand origin-left transform transition-transform duration-300
                    ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar