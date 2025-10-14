'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll('.char-animation');
    
    const tl = gsap.timeline();
    
    tl.from(imageRef.current, {
      scale: 1.2,
      duration: 2,
      ease: "power2.out"
    })
    .from(overlayRef.current, {
      opacity: 0,
      duration: 1.5
    }, "-=2")
    .from('.role-tag', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    }, "-=1")
    .from(chars, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.03,
      ease: "power4.out"
    }, "-=0.5")
    .from('.tagline', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.3");

    // Tagline highlight animation
    const highlight = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true
      }
    });
    
    highlight
      .fromTo(nameRef.current, 
        {
          backgroundSize: "0% 40%",
        },
        {
          backgroundSize: "100% 40%",
          duration: 1,
          ease: "power2.out"
        }
      );

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char-animation inline-block">
        {char}
      </span>
    ));
  };

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/profile15.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={100}
          style={{
            objectPosition: '10% 15%'
          }}
          priority
        />
      </div>

      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={textRef} className="text-center text-white px-4">
          <div className="mb-6">
            <span className="role-tag inline-block text-sm uppercase tracking-widest font-medium bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm">
              Full Stack Engineer
            </span>
          </div>
          
          <div>
            <h1 className="font-['Playfair_Display'] text-8xl font-bold space-y-4">
              <div className="block text-white">
                {splitText("Tsianḓa")}
              </div>
              <div className="block text-white">
                {splitText("Ṋetsianḓa")}
              </div>
            </h1>
          </div>

          <div className="mt-8 max-w-2xl mx-auto">
            <p 
              ref={nameRef}
              className="tagline text-xl font-light text-white/90 leading-relaxed inline-block bg-gradient-to-r from-yellow-200/50 to-yellow-200/50 bg-no-repeat bg-bottom"
            >
              My work bridges the gap between digital and physical systems
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownCircle className="w-12 h-12 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;