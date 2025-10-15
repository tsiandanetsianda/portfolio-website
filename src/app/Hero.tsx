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


    // Parallax effect on hero image
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      yPercent: 30,
      ease: 'none'
    });

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
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-text-primary">
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
        className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={textRef} className="text-center text-white px-6 max-w-5xl">
          <div className="mb-8">
            <span className="role-tag inline-block text-sm uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/20 px-8 py-3 rounded-full backdrop-blur-md">
              Full Stack Engineer
            </span>
          </div>

          <div>
            <h1 className="font-['Playfair_Display'] text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-2">
              <div className="block text-white mb-4">
                {splitText("Tsianḓa")}
              </div>
              <div className="block text-white">
                {splitText("Ṋetsianḓa")}
              </div>
            </h1>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <p
              ref={nameRef}
              className="tagline text-xl md:text-2xl font-light text-white/95 leading-relaxed"
            >
              My work bridges the gap between digital and physical systems
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownCircle className="w-10 h-10 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;