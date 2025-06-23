import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carouselOverride.css'; 

const Image = () => {
  const images = [
    'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1569240651611-302c9897bde5?w=600&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1592853625601-bb9d23da12fc?w=600&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1550615162-30dcc978d172?w=600&auto=format&fit=crop&q=60',
  ];

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        emulateTouch
      >
        {images.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index + 1}`} className="rounded-lg" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Image;
