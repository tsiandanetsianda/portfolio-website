'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Play, Pause, ChevronDown } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  video: string;
}

interface ProjectFeaturesProps {
  features: Feature[];
  brandColor: string;
  hidePlayAll?: boolean;
}

export default function ProjectFeatures({
  features,
  brandColor,
  hidePlayAll = false,
}: ProjectFeaturesProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(null);
  const [allVideosCompleted, setAllVideosCompleted] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  // Play all features sequentially
  const playAllFeatures = async () => {
    setIsPlayingAll(true);
    setAllVideosCompleted(false);

    for (let i = 0; i < features.length; i++) {
      const video = videoRefs.current[i];
      const featureElement = featureRefs.current[i];

      if (video && featureElement) {
        // Disable looping for all videos during "Play All"
        video.loop = false;

        // Scroll to the feature
        featureElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });

        // Wait for scroll to complete
        await new Promise(resolve => setTimeout(resolve, 800));

        setCurrentPlayingIndex(i);

        // Reset video to start
        video.currentTime = 0;

        // Play the video
        await video.play().catch(() => {});

        // Wait for video to finish
        await new Promise<void>((resolve) => {
          const onEnded = () => {
            video.removeEventListener('ended', onEnded);
            resolve();
          };
          video.addEventListener('ended', onEnded);
        });

        // Small pause between videos
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    setIsPlayingAll(false);
    setCurrentPlayingIndex(null);
    setAllVideosCompleted(true);
  };

  const stopPlayAll = () => {
    setIsPlayingAll(false);
    setCurrentPlayingIndex(null);
    setAllVideosCompleted(false);
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
        video.loop = true; // Re-enable looping when stopped
      }
    });
  };

  // Helper function to pause all videos except the specified index
  const pauseAllVideosExcept = (exceptIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== exceptIndex) {
        video.pause();
      }
    });
  };

  // Intersection Observer for video play/pause based on visibility (only when not playing all)
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video, index) => {
      if (video) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!isPlayingAll && !allVideosCompleted) {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                  // Pause all other videos before playing this one
                  pauseAllVideosExcept(index);
                  setActiveVideoIndex(index);
                  video.loop = true;
                  // Ensure video is loaded before playing
                  if (video.readyState >= 2) {
                    video.play().catch(() => {});
                  } else {
                    video.addEventListener('loadeddata', () => {
                      video.play().catch(() => {});
                    }, { once: true });
                  }
                } else {
                  video.pause();
                }
              } else if (allVideosCompleted) {
                // After "Play All" completes, don't auto-play videos
                video.pause();
              }
            });
          },
          {
            threshold: 0.3,
            rootMargin: '0px 0px -10% 0px'
          }
        );

        observer.observe(video);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [features, isPlayingAll, allVideosCompleted]);

  return (
    <section className="bg-white">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900"
          >
            Key Features
          </motion.h2>

          {!hidePlayAll && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={isPlayingAll ? stopPlayAll : playAllFeatures}
              className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              style={{ backgroundColor: brandColor }}
            >
              {isPlayingAll ? (
                <>
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                  Stop
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Play All
                </>
              )}
            </motion.button>
          )}
        </div>

        {/* Fullscreen Video Stack */}
        <div className="space-y-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-auto xl:h-screen"
            >
              {/* Fullscreen Video Container */}
              <div className="relative w-full h-full">
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={feature.video}
                  muted
                  playsInline
                  className="w-full h-auto xl:h-full xl:object-cover"
                />

                {/* Scroll Indicator - shown on last video after "Play All" completes */}
                {allVideosCompleted && index === features.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="hidden xl:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
                  >
                    <p className="text-black text-sm sm:text-base md:text-lg font-medium drop-shadow-lg">
                      Scroll to continue
                    </p>
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black drop-shadow-lg" />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
