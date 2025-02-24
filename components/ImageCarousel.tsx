'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/images/home/wardrobe/wardrobe1.webp',
    alt: 'Professional Wardrobe Style 1',
    title: 'Editorial Style'
  },
  {
    src: '/images/home/wardrobe/wardrobe2.webp',
    alt: 'Professional Wardrobe Style 2',
    title: 'Commercial Projects'
  },
  {
    src: '/images/home/wardrobe/wardrobe3.webp',
    alt: 'Professional Wardrobe Style 3',
    title: 'Celebrity Styling'
  },
  {
    src: '/images/home/wardrobe/wardrobe4.webp',
    alt: 'Professional Wardrobe Style 4',
    title: 'Fashion Week'
  },
  {
    src: '/images/home/wardrobe/wardrobe5.webp',
    alt: 'Professional Wardrobe Style 5',
    title: 'Red Carpet'
  },
  {
    src: '/images/home/wardrobe/wardrobe6.webp',
    alt: 'Professional Wardrobe Style 6',
    title: 'Magazine Shoots'
  },
  {
    src: '/images/home/wardrobe/wardrobe7.webp',
    alt: 'Professional Wardrobe Style 7',
    title: 'Personal Styling'
  }
];

const ImageCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  // Create array with duplicated items for infinite scroll
  const extendedImages = [...images, ...images, ...images];

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1.25;
      }
    }, 25);
  }, []);

  // Start auto-scroll on mount
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoScroll]);

  // Handle infinite scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Calculate dimensions after the component has mounted
    const calculateDimensions = () => {
      const containerWidth = scrollContainer.clientWidth;
      const totalWidth = scrollContainer.scrollWidth;
      const singleSetWidth = totalWidth / 3;
      
      // Set initial scroll position to the middle set
      scrollContainer.scrollLeft = singleSetWidth;
    };

    const handleScroll = () => {
      if (!scrollContainer) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const singleSetWidth = scrollWidth / 3;

      // When reaching the end of any set, move to the corresponding position in the middle set
      if (scrollLeft < singleSetWidth) {
        // If in the first set, jump to the same relative position in the middle set
        const relativePosition = scrollLeft;
        scrollContainer.scrollLeft = singleSetWidth + relativePosition;
      } else if (scrollLeft > singleSetWidth * 2) {
        // If in the last set, jump to the same relative position in the middle set
        const relativePosition = scrollLeft - singleSetWidth * 2;
        scrollContainer.scrollLeft = singleSetWidth + relativePosition;
      }
    };

    // Initial setup
    calculateDimensions();
    
    // Add event listeners
    scrollContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateDimensions);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateDimensions);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto select-none [&::-webkit-scrollbar]{display:none} [-ms-overflow-style:none] [scrollbar-width:none] will-change-transform"
        style={{ 
          scrollBehavior: 'smooth',
          transform: 'translate3d(0,0,0)'
        }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="flex-none w-full md:w-1/2 lg:w-1/3"
          >
            <div className="relative aspect-[3/4] max-h-[600px] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel; 