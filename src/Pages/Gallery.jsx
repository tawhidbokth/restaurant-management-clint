import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Static images with metadata
  const images = [
    {
      src: 'https://i.ibb.co.com/TTfGLK6/gallery-img-1-1-1.jpg',
      name: 'John Doe',
      description: 'Sunset view.',
    },
    {
      src: 'https://i.ibb.co.com/DMyb74b/gallery-img-1-2.jpg',
      name: 'Jane Smith',
      description: 'Mountain peak.',
    },
    {
      src: 'https://i.ibb.co.com/5FHCPXm/gallery-img-1-3-1.jpg',
      name: 'Alan Walker',
      description: 'Serene lake.',
    },
    {
      src: 'https://i.ibb.co.com/ZLhTrFY/gallery-img-1-4-1.jpg',
      name: 'Lisa Ray',
      description: 'Blooming flowers.',
    },
    {
      src: 'https://i.ibb.co.com/5FHCPXm/gallery-img-1-3-1.jpg',
      name: 'Lisa Ray',
      description: 'Blooming flowers.',
    },
    {
      src: 'https://i.ibb.co.com/ZLhTrFY/gallery-img-1-4-1.jpg',
      name: 'Lisa Ray',
      description: 'Blooming flowers.',
    },
    {
      src: 'https://i.ibb.co.com/tC4gBsH/gallery-img-1-5.jpg',
      name: 'Lisa Ray',
      description: 'Blooming flowers.',
    },
    {
      src: 'https://i.ibb.co.com/TTfGLK6/gallery-img-1-1-1.jpg',
      name: 'Lisa Ray',
      description: 'Blooming flowers.',
    },
    {
      src: 'https://i.ibb.co.com/qY9cVqX/img-10-120x120.jpg',
      name: 'Lisa Ray',
      description: 'Blooming flowers.',
    },
    {
      src: ' https://i.ibb.co.com/XSVfWzF/img-1-1-120x120.jpg',
      name: 'Lisa Ray',
      description: 'Blooming flowers.',
    },
    // Add more images...
  ];

  // Function to open lightbox on image click
  const openLightbox = index => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="gallery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg"
          onClick={() => openLightbox(index)}
        >
          <img
            src={image.src}
            alt={image.description}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white font-semibold">{image.name}</h3>
            <p className="text-white text-sm">{image.description}</p>
          </div>
        </div>
      ))}

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map(image => ({ src: image.src }))}
          index={currentIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
