'use client';

import Image from 'next/image';

const brands = [
  {
    src: '/images/home/brands/adidas.png',
    alt: 'Adidas',
    className: 'h-20 w-40'
  },
  {
    src: '/images/home/brands/GQ.png',
    alt: 'GQ',
    className: 'h-16 w-32'
  },
  {
    src: '/images/home/brands/LATimes.png',
    alt: 'LA Times',
    className: 'h-28 w-56'
  },
  {
    src: '/images/home/brands/netflix.png',
    alt: 'Netflix',
    className: 'h-36 w-72'
  },
  {
    src: '/images/home/brands/vogue.png',
    alt: 'Vogue',
    className: 'h-20 w-40'
  }
];

const BrandCarousel = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-5 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center px-4">
              <div className={`relative ${brand.className}`}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  className="object-contain opacity-60 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel; 