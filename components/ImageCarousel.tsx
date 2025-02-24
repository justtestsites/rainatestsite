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
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationFrameRef = useRef<number>();

  // Create array with duplicated items for infinite scroll
  const extendedImages = [...images, ...images, ...images];

  const startAutoScroll = useCallback(() => {
    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      if (!scrollRef.current || isHovered || isDragging) return;

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      scrollRef.current.scrollLeft += (1.25 * deltaTime) / 16; // Normalize to 60fps
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isHovered, isDragging]);

  // Handle mouse/touch events
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startAutoScroll();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    startAutoScroll();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  // Start auto-scroll on mount
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [startAutoScroll]);

  // Handle infinite scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const calculateDimensions = () => {
      const totalWidth = scrollContainer.scrollWidth;
      const singleSetWidth = totalWidth / 3;
      scrollContainer.scrollLeft = singleSetWidth;
    };

    const handleScroll = () => {
      if (!scrollContainer) return;
      
      const { scrollLeft, scrollWidth } = scrollContainer;
      const singleSetWidth = scrollWidth / 3;

      if (scrollLeft < singleSetWidth) {
        const relativePosition = scrollLeft;
        scrollContainer.scrollLeft = singleSetWidth + relativePosition;
      } else if (scrollLeft > singleSetWidth * 2) {
        const relativePosition = scrollLeft - singleSetWidth * 2;
        scrollContainer.scrollLeft = singleSetWidth + relativePosition;
      }
    };

    calculateDimensions();
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
          scrollBehavior: 'auto',
          transform: 'translate3d(0,0,0)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          startAutoScroll();
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
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