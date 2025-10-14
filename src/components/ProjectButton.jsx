import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProjectButton = ({ title, description }) => {
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Continuous animations
    gsap.to(arrowRef.current, {
      x: 3,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Subtle background pulse
    gsap.to(bgRef.current, {
      scale: 1.05,
      opacity: 0.8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  const handleHover = (isHovering) => {
    if (!buttonRef.current) return;

    // Hover animations timeline
    const tl = gsap.timeline();

    if (isHovering) {
      tl.to(buttonRef.current, {
        scale: 1.03,
        duration: 0.3,
        ease: "back.out(1.7)",
      })
      .to(buttonRef.current.querySelector('.hover-content'), {
        opacity: 1,
        y: 0,
        rotateX: "0deg",
        duration: 0.4,
        ease: "power3.out",
      }, "-=0.2")
      .to(buttonRef.current.querySelector('.default-content'), {
        opacity: 0,
        y: -10,
        rotateX: "10deg",
        duration: 0.3,
      }, "-=0.3")
      .to(arrowRef.current, {
        x: 8,
        scale: 1.2,
        opacity: 1,
        duration: 0.4,
        ease: "elastic.out(1.2, 0.75)",
      }, "-=0.2")
      .to(bgRef.current, {
        scale: 1.2,
        opacity: 0.9,
        duration: 0.5,
      }, "-=0.4");
    } else {
      tl.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(buttonRef.current.querySelector('.hover-content'), {
        opacity: 0,
        y: 10,
        rotateX: "-10deg",
        duration: 0.3,
      }, "-=0.2")
      .to(buttonRef.current.querySelector('.default-content'), {
        opacity: 1,
        y: 0,
        rotateX: "0deg",
        duration: 0.4,
        ease: "power3.out",
      }, "-=0.2")
      .to(arrowRef.current, {
        x: 0,
        scale: 1,
        opacity: 0.7,
        duration: 0.3,
      }, "-=0.3")
      .to(bgRef.current, {
        scale: 1,
        opacity: 0.5,
        duration: 0.4,
      }, "-=0.3");
    }

    // Border animation
    gsap.to(buttonRef.current, {
      boxShadow: isHovering
        ? "0 12px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.1)"
        : "0 4px 12px rgba(0, 0, 0, 0.05)",
      duration: 0.4,
    });
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className="group relative w-full max-w-sm h-24 rounded-xl overflow-hidden transition-all duration-300 mt-2 ml-0 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 perspective-1000"
    >
      {/* Animated background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-white/30 transform-gpu"
      />

      <div className="default-content absolute inset-0 flex items-center justify-between px-6 transform-gpu">
        <span className="text-content text-gray-700 text-lg font-medium tracking-wide">
          Latest Project
        </span>
        <span ref={arrowRef} className="text-gray-600 opacity-70 transform-gpu">→</span>
      </div>

      <div className="hover-content absolute inset-0 flex flex-col items-start justify-center opacity-0 px-6 transform-gpu">
        <div className="space-y-2">
          <div className="text-content text-gray-900 text-lg font-bold tracking-wide flex items-center gap-2">
            {title}
            <span className="transform-gpu">→</span>
          </div>
          <div className="text-gray-600 text-sm leading-relaxed">{description}</div>
        </div>
      </div>

      {/* Corner highlights */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default ProjectButton;