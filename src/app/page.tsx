'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import ProjectButton from '@/components/ProjectButton'
import Hero from '@/app/Hero'
import ContactSection from '@/app/ContactSection'
import WorkExperience from '@/components/WorkExperience'
import TechStack from '@/components/TechStack';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Brand colors for each project
const projectBrandColors = {
  biki: '#4CAF50',
  uniInfoSA: '#5AB5E1',
  safePay: '#6A63F6',
  seaClear: '#5B9BD5',
  gridSmart: '#1F3A52'
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const softwareDevRef = useRef<HTMLDivElement>(null)
  const embeddedRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const formalEduRef = useRef<HTMLElement>(null)
  const certificatesRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const project1Ref = useRef<HTMLElement>(null)
  const project2Ref = useRef<HTMLElement>(null)
  const project3Ref = useRef<HTMLElement>(null)
  const project4Ref = useRef<HTMLElement>(null)
  const project5Ref = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    // Initial load animations
    const tl = gsap.timeline()
    tl.from('.hero-content > *', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2
    })


    // Section scale and fade animations
    const sections = [workRef, formalEduRef, certificatesRef]
    sections.forEach((sectionRef) => {
      // Container animation
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1
        },
        y: 100,
        scale: 0.9,
        opacity: 0,
        ease: "power2.out"
      })

      // Content animations
      if (sectionRef.current) {
        const content = sectionRef.current.querySelector('.content-wrapper')
        if (content) {
          gsap.from(content, {
          scrollTrigger: {
            trigger: content,
            start: "top bottom",
            end: "top center+=100",
            scrub: true
          },
            y: 50,
            opacity: 0
          })
        }
      }

      // Image animations
      if (sectionRef.current) {
        const image = sectionRef.current.querySelector('.image-wrapper')
        if (image) {
          gsap.from(image, {
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "top center+=100",
            scrub: true
          },
            scale: 0.8,
            opacity: 0
          })
        }
      }
    })

    // Transition elements animation
    gsap.from(".transition-line", {
      scrollTrigger: {
        trigger: ".transition-line",
        start: "top center+=200",
        end: "bottom center-=200",
        scrub: 1
      },
      height: 0,
      ease: "none"
    })

    gsap.from(".transition-quote", {
      scrollTrigger: {
        trigger: ".transition-quote",
        start: "top center+=100",
        end: "bottom center",
        scrub: 1
      },
      y: 50,
      opacity: 0,
      ease: "power2.out"
    })

    // Projects scroll animations - smooth entry only
    const projectRefs = [project1Ref, project2Ref, project3Ref, project4Ref, project5Ref]

    projectRefs.forEach((projectRef, index) => {
      if (projectRef.current) {
        // Entry animation - scale up and fade in
        gsap.from(projectRef.current, {
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
          scale: 0.85,
          opacity: 0,
          y: 100,
          ease: "power2.out"
        })
      }
    })

    // Contact section animation
    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    })

    contactTl
      .from(".contact-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(".contact-links a", {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")

    return () => {
      ScrollTrigger.killAll()
    }
  }, [])

  return (
    <div ref={containerRef} className={`w-full font-['Inter'] ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <Hero />

      {/* Work Experience Section */}
      <div id="work" ref={workRef}>
        <WorkExperience />
      </div>

      {/* Education Section */}
      <div id="education" ref={educationRef} className="bg-background relative">
        {/* Education Section */}
        <section ref={formalEduRef} className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto space-y-16">
              <div className="flex items-center space-x-4">
                <div className="h-[1px] bg-border-subtle w-16"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold font-['Playfair_Display'] leading-tight text-text-primary">
                Education
              </h2>
              <div className="content-wrapper">
                <div className="card-reflection flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white border border-border rounded-2xl p-6 md:p-12 hover:border-text-tertiary hover:shadow-sm transition-all duration-300">
                  <div className="flex-1 space-y-6 md:space-y-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-text-primary">BSc Computer Science and Computer Engineering</h3>
                    <p className="text-base md:text-lg text-text-secondary leading-relaxed">Currently pursuing studies in software systems, algorithms, machine learning, embedded systems, and digital electronics at the University of Cape Town.</p>
                    <a
                      href="https://drive.google.com/file/d/1i6olrhExjdm2bH8Bs6JmheQg7uYKMAby/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-brand inline-flex items-center text-base font-medium group"
                    >
                      <span className="mr-2">View</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-250" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="relative h-40 w-40 md:h-56 md:w-56 overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src="/UCT-LOGO-2.png"
                      alt="University of Cape Town"
                      fill
                      className="object-contain p-3 md:p-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates subsection - integrated within Education */}
        <section ref={certificatesRef} className="pb-24 md:pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Subtle divider */}
              <div className="gradient-divider my-8"></div>

              {/* Certificates label */}
              <h3 className="text-xl font-semibold text-text-primary mb-6 uppercase tracking-[0.1em]">
                Professional Certifications
              </h3>

              <div className="space-y-3">
                {/* GitHub Certificate */}
                <div className="card-reflection flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white border border-border rounded-xl p-4 sm:p-6 hover:border-text-tertiary hover:shadow-sm transition-all duration-300">
                  <div className="flex-1">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-text-primary">Career Essentials in GitHub</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">Version control and collaboration best practices.</p>
                      <a
                        href="https://www.linkedin.com/learning/certificates/1d6230ad35fdb103a28b6e0a45787474b14c6fdac50b3525e6d993b76c733b06?trk=share_certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-brand inline-flex items-center text-sm font-medium group"
                      >
                        <span className="mr-1.5">View</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src="/Github1.jpg"
                      alt="GitHub Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Microsoft Certificate */}
                <div className="card-reflection flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white border border-border rounded-xl p-4 sm:p-6 hover:border-text-tertiary hover:shadow-sm transition-all duration-300">
                  <div className="flex-1">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-text-primary">Career Essentials in Cybersecurity</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">Cybersecurity fundamentals and best practices.</p>
                      <a
                        href="https://www.linkedin.com/learning/certificates/c4409cbed843fcbb8e953195b76f62c8ec9ef95a05cc0e159bc9d3d35d518fa9?trk=share_certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-brand inline-flex items-center text-sm font-medium group"
                      >
                        <span className="mr-1.5">View</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src="/Microsoft1.jpg"
                      alt="Microsoft Cybersecurity Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Docker Certificate */}
                <div className="card-reflection flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white border border-border rounded-xl p-4 sm:p-6 hover:border-text-tertiary hover:shadow-sm transition-all duration-300">
                  <div className="flex-1">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-text-primary">Docker Foundations</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">Containerization and Docker ecosystem.</p>
                      <a
                        href="https://www.linkedin.com/learning/certificates/06dab7c1e18e30b75054602b67f41ebf189622dffda8bc1ac6d4993366edf446?u=70295562"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-brand inline-flex items-center text-sm font-medium group"
                      >
                        <span className="mr-1.5">View</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src="/Docker1.png"
                      alt="Docker Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* FNB App Academy Certificate */}
                <div className="card-reflection flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white border border-border rounded-xl p-4 sm:p-6 hover:border-text-tertiary hover:shadow-sm transition-all duration-300">
                  <div className="flex-1">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-text-primary">FNB App Academy 2025</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">Mobile application development and related business processes.</p>
                      <a
                        href="https://drive.google.com/file/d/1wgeUEQFqnuVdCeaO7DL0xYPrIxHYhcmu/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-brand inline-flex items-center text-sm font-medium group"
                      >
                        <span className="mr-1.5">View</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src="/FNB-LOGO.jpg"
                      alt="FNB App Academy Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <div id="projects" ref={projectsRef} className="bg-background relative py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="space-y-8 md:space-y-16 mb-12 md:mb-32">
              <div className="flex items-center space-x-4">
                <div className="h-[1px] bg-border-subtle w-16"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold font-['Playfair_Display'] leading-tight text-text-primary">
                Projects
              </h2>
            </div>

            <div className="space-y-12 md:space-y-24 lg:space-y-32">
            {/* Project 1 - Uni Info SA */}
            <section ref={project1Ref} className="min-h-0 md:min-h-screen flex items-center justify-center">
              <Link
                href="/projects/uni-info-sa"
                className="group relative w-full max-w-5xl transition-all duration-350 hover:scale-[1.02] cursor-pointer"
              >
                <div
                  className="relative w-full h-auto rounded-2xl overflow-hidden border border-border shadow-md group-hover:shadow-lg transition-all duration-350"
                  style={{
                    '--brand-color': projectBrandColors.uniInfoSA,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = projectBrandColors.uniInfoSA}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-t to-transparent group-hover:opacity-100 opacity-75 transition-all duration-350 z-10"
                    style={{
                      backgroundImage: `linear-gradient(to top, ${projectBrandColors.uniInfoSA}08, transparent)`
                    }}
                  ></div>
                  <Image
                    src="/uni-info-mock.png"
                    alt="Uni Info SA Project"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </Link>
            </section>

            {/* Project 2 - Biki */}
            <section ref={project2Ref} className="min-h-0 md:min-h-screen flex items-center justify-center">
              <Link
                href="/projects/biki"
                className="group relative w-full max-w-5xl transition-all duration-350 hover:scale-[1.02] cursor-pointer"
              >
                <div
                  className="relative w-full h-auto rounded-2xl overflow-hidden border border-border shadow-md group-hover:shadow-lg transition-all duration-350"
                  style={{
                    '--brand-color': projectBrandColors.biki,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = projectBrandColors.biki}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-t to-transparent group-hover:opacity-100 opacity-75 transition-all duration-350 z-10"
                    style={{
                      backgroundImage: `linear-gradient(to top, ${projectBrandColors.biki}08, transparent)`
                    }}
                  ></div>
                  <Image
                    src="/biki-mock.png"
                    alt="Biki Project"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </Link>
            </section>

            {/* Project 3 - SafePay */}
            <section ref={project3Ref} className="min-h-0 md:min-h-screen flex items-center justify-center">
              <Link
                href="/projects/safepay"
                className="group relative w-full max-w-5xl transition-all duration-350 hover:scale-[1.02] cursor-pointer"
              >
                <div
                  className="relative w-full h-auto rounded-2xl overflow-hidden border border-border shadow-md group-hover:shadow-lg transition-all duration-350"
                  style={{
                    '--brand-color': projectBrandColors.safePay,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = projectBrandColors.safePay}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-t to-transparent group-hover:opacity-100 opacity-75 transition-all duration-350 z-10"
                    style={{
                      backgroundImage: `linear-gradient(to top, ${projectBrandColors.safePay}08, transparent)`
                    }}
                  ></div>
                  <Image
                    src="/safepay-mock.png"
                    alt="SafePay Project"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </Link>
            </section>

            {/* Project 4 - SeaClear */}
            <section ref={project4Ref} className="min-h-0 md:min-h-screen flex items-center justify-center">
              <Link
                href="/projects/seaclear"
                className="group relative w-full max-w-5xl transition-all duration-350 hover:scale-[1.02] cursor-pointer"
              >
                <div
                  className="relative w-full h-auto rounded-2xl overflow-hidden border border-border shadow-md group-hover:shadow-lg transition-all duration-350"
                  style={{
                    '--brand-color': projectBrandColors.seaClear,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = projectBrandColors.seaClear}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-t to-transparent group-hover:opacity-100 opacity-75 transition-all duration-350 z-10"
                    style={{
                      backgroundImage: `linear-gradient(to top, ${projectBrandColors.seaClear}08, transparent)`
                    }}
                  ></div>
                  <Image
                    src="/seaclear-mock.png"
                    alt="SeaClear Project"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </Link>
            </section>

            {/* Project 5 - GridSmart */}
            <section ref={project5Ref} className="min-h-0 md:min-h-screen flex items-center justify-center">
              <Link
                href="/projects/gridsmart"
                className="group relative w-full max-w-5xl transition-all duration-350 hover:scale-[1.02] cursor-pointer"
              >
                <div
                  className="relative w-full h-auto rounded-2xl overflow-hidden border border-border shadow-md group-hover:shadow-lg transition-all duration-350"
                  style={{
                    '--brand-color': projectBrandColors.gridSmart,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = projectBrandColors.gridSmart}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-t to-transparent group-hover:opacity-100 opacity-75 transition-all duration-350 z-10"
                    style={{
                      backgroundImage: `linear-gradient(to top, ${projectBrandColors.gridSmart}08, transparent)`
                    }}
                  ></div>
                  <Image
                    src="/gridsmart-mock.png"
                    alt="GridSmart Project"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </Link>
            </section>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" ref={contactRef}>
        <ContactSection />
      </div>
    </div>
  )
}