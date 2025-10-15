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

export default function Home() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const softwareDevRef = useRef(null)
  const embeddedRef = useRef(null)
  const workRef = useRef(null)
  const educationRef = useRef(null)
  const formalEduRef = useRef(null)
  const certificatesRef = useRef(null)
  const projectsRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)
  const project4Ref = useRef(null)
  const project5Ref = useRef(null)
  const contactRef = useRef(null)
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

    // Text highlight animation function
    const createHighlightAnimation = (element) => {
      const highlight = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top center+=200",
          end: "top center-=200",
          scrub: true
        }
      })
      
      highlight
        .from(element, {
          backgroundSize: "0% 100%",
          ease: "none"
        })
        .to(element, {
          backgroundSize: "100% 100%",
          ease: "none"
        })
    }

    // Apply highlight animations
    document.querySelectorAll('.highlight-text').forEach(createHighlightAnimation)

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
      const content = sectionRef.current.querySelector('.content-wrapper')
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

      // Image animations
      const image = sectionRef.current.querySelector('.image-wrapper')
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
        {/* Formal Education Section */}
        <section ref={formalEduRef} className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-7xl mx-auto">
              <div className="flex-1 space-y-16">
                <div className="flex items-center space-x-4">
                  <div className="h-[1px] bg-border-subtle w-16"></div>
                </div>
                <h2 className="highlight-text text-4xl md:text-5xl font-semibold font-['Playfair_Display'] leading-tight inline bg-gradient-to-r from-accent to-accent bg-[length:100%_40%] bg-no-repeat bg-bottom text-text-primary">
                  Formal<br/>Education
                </h2>
                <div className="content-wrapper space-y-8">
                  <div className="bg-white border border-border rounded-2xl p-8 space-y-6 hover:border-text-tertiary hover:shadow-sm transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-text-primary">BSc Computer Science and Computer Engineering</h3>
                    <p className="text-text-secondary leading-relaxed">Currently pursuing a dual major focusing on both software development and hardware engineering at the University of Cape Town.</p>
                    <div className="flex flex-wrap gap-3 mt-6">
                      <span className="tag">Software Engineering</span>
                      <span className="tag">Computer Architecture</span>
                      <span className="tag">Data Structures</span>
                      <span className="tag">Digital Systems</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-wrapper flex-1 relative h-[600px] w-full overflow-hidden rounded-2xl border border-border shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                <Image
                  src="/UCT3.jpg"
                  alt="University of Cape Town"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Professional Certificates Section */}
        <section ref={certificatesRef} className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="space-y-16 max-w-7xl mx-auto">
              <div className="flex items-center space-x-4">
                <div className="h-[1px] bg-border-subtle w-16"></div>
              </div>
              <h2 className="highlight-text text-4xl md:text-5xl font-semibold font-['Playfair_Display'] leading-tight inline bg-gradient-to-r from-accent to-accent bg-[length:100%_40%] bg-no-repeat bg-bottom text-text-primary mb-16">
                Professional<br/>Certificates
              </h2>

              <div className="content-wrapper space-y-6">
                {/* GitHub Certificate */}
                <div className="flex flex-col lg:flex-row items-center gap-8 bg-white border border-border rounded-2xl p-8 hover:border-text-tertiary hover:shadow-sm transition-all duration-300">
                  <div className="flex-1">
                    <div className="space-y-5">
                      <h3 className="text-2xl font-semibold text-text-primary">Career Essentials in GitHub</h3>
                      <p className="text-text-secondary leading-relaxed">In-depth understanding of GitHub essentials and best practices for version control and collaboration.</p>
                      <a
                        href="https://www.linkedin.com/learning/certificates/1d6230ad35fdb103a28b6e0a45787474b14c6fdac50b3525e6d993b76c733b06?trk=share_certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-brand inline-flex items-center mt-6 font-medium group"
                      >
                        <span className="mr-2">View Certificate</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-250" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-border">
                    <Image
                      src="/Github1.jpg"
                      alt="GitHub Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Microsoft Certificate */}
                <div className="flex flex-col lg:flex-row items-center gap-8 bg-white border border-border rounded-2xl p-8 hover:border-text-tertiary hover:shadow-sm transition-all duration-300">
                  <div className="flex-1">
                    <div className="space-y-5">
                      <h3 className="text-2xl font-semibold text-text-primary">Career Essentials in Cybersecurity</h3>
                      <p className="text-text-secondary leading-relaxed">Comprehensive understanding of cybersecurity fundamentals and best practices.</p>
                      <a
                        href="https://www.linkedin.com/learning/certificates/c4409cbed843fcbb8e953195b76f62c8ec9ef95a05cc0e159bc9d3d35d518fa9?trk=share_certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-brand inline-flex items-center mt-6 font-medium group"
                      >
                        <span className="mr-2">View Certificate</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-250" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-border">
                    <Image
                      src="/Microsoft1.jpg"
                      alt="Microsoft Cybersecurity Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Docker Certificate */}
                <div className="flex flex-col lg:flex-row items-center gap-8 bg-white border border-border rounded-2xl p-8 hover:border-text-tertiary hover:shadow-sm transition-all duration-300">
                  <div className="flex-1">
                    <div className="space-y-5">
                      <h3 className="text-2xl font-semibold text-text-primary">Docker Foundations</h3>
                      <p className="text-text-secondary leading-relaxed">Comprehensive understanding of containerization and Docker ecosystem.</p>
                      <a
                        href="https://www.linkedin.com/learning/certificates/06dab7c1e18e30b75054602b67f41ebf189622dffda8bc1ac6d4993366edf446?u=70295562"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-brand inline-flex items-center mt-6 font-medium group"
                      >
                        <span className="mr-2">View Certificate</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-250" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-border">
                    <Image
                      src="/Docker1.png"
                      alt="Docker Certification"
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
          <div className="max-w-7xl mx-auto space-y-32 md:space-y-40">
            {/* Project 1 - Uni Info SA */}
            <section ref={project1Ref} className="min-h-screen flex items-center justify-center">
              <button
                onClick={() => console.log('Navigate to Uni Info SA')}
                className="group relative w-full max-w-5xl transition-all duration-350 hover:scale-[1.02] cursor-pointer"
              >
                <div className="relative w-full h-auto rounded-2xl overflow-hidden border border-border shadow-md group-hover:shadow-lg group-hover:border-text-tertiary transition-all duration-350">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-350 z-10"></div>
                  <Image
                    src="/uni-info-mock.png"
                    alt="Uni Info SA Project"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </button>
            </section>

            {/* Project 2 - Biki */}
            <section ref={project2Ref} className="min-h-screen flex items-center justify-center">
              <button
                onClick={() => console.log('Navigate to Biki')}
                className="group relative w-full max-w-5xl transition-all duration-350 hover:scale-[1.02] cursor-pointer"
              >
                <div className="relative w-full h-auto rounded-2xl overflow-hidden border border-border shadow-md group-hover:shadow-lg group-hover:border-text-tertiary transition-all duration-350">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-350 z-10"></div>
                  <Image
                    src="/biki-mock.png"
                    alt="Biki Project"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </button>
            </section>

            {/* Project 3 - SafePay */}
            <section ref={project3Ref} className="min-h-screen flex items-center justify-center">
              <button
                onClick={() => console.log('Navigate to SafePay')}
                className="group relative w-full max-w-5xl transition-all duration-350 hover:scale-[1.02] cursor-pointer"
              >
                <div className="relative w-full h-auto rounded-2xl overflow-hidden border border-border shadow-md group-hover:shadow-lg group-hover:border-text-tertiary transition-all duration-350">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-350 z-10"></div>
                  <Image
                    src="/safepay-mock.png"
                    alt="SafePay Project"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </button>
            </section>

            {/* Project 4 - SeaClear */}
            <section ref={project4Ref} className="min-h-screen flex items-center justify-center">
              <button
                onClick={() => console.log('Navigate to SeaClear')}
                className="group relative w-full max-w-5xl transition-all duration-350 hover:scale-[1.02] cursor-pointer"
              >
                <div className="relative w-full h-auto rounded-2xl overflow-hidden border border-border shadow-md group-hover:shadow-lg group-hover:border-text-tertiary transition-all duration-350">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-350 z-10"></div>
                  <Image
                    src="/seaclear-mock.png"
                    alt="SeaClear Project"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </button>
            </section>

            {/* Project 5 - GridSmart */}
            <section ref={project5Ref} className="min-h-screen flex items-center justify-center">
              <button
                onClick={() => console.log('Navigate to GridSmart')}
                className="group relative w-full max-w-5xl transition-all duration-350 hover:scale-[1.02] cursor-pointer"
              >
                <div className="relative w-full h-auto rounded-2xl overflow-hidden border border-border shadow-md group-hover:shadow-lg group-hover:border-text-tertiary transition-all duration-350">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-350 z-10"></div>
                  <Image
                    src="/gridsmart-mock.png"
                    alt="GridSmart Project"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </button>
            </section>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}