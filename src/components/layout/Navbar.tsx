'use client'
import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

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
    if (sectionId === 'home') {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: 0, autoKill: true },
        ease: 'power3.inOut'
      })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: element, offsetY: 0, autoKill: true },
          ease: 'power3.inOut'
        })
      }
    }
  }

  return (
    <div className="fixed top-0 w-full flex justify-end px-6 z-50">
      <div className="mt-6 mr-24">
        <nav className="bg-white/80 backdrop-blur-md px-3 py-3 rounded-full">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.title}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-4 py-2 transition-colors duration-300
                    ${activeSection === item.id ?
                      'text-black font-semibold' :
                      'text-gray-600 hover:text-black'
                    }`}
                >
                  <span className="text-sm uppercase tracking-[0.2em]">
                    {item.title}
                  </span>
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-black origin-left transform transition-transform duration-300
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