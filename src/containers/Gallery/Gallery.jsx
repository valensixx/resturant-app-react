import React from "react";
import "./Gallery.css";
import { images } from "../../data";
import { SubHeading } from "../../components";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

export default function Gallery() {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

  return (
    <div className="app-gallery flex-center">
      <div className="app-gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext-cormorant">Photo Gallery</h1>
        <p className="p-opensans" style={{ color: '#aaa', marginTop: '2rem' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <button type="button" className="custom-button">
          Learn More
        </button>
      </div>
      <div className="app-gallery-images">
        <div className="app-gallery-images-container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app-gallery-images-card flex-center" key={`gallery-image-${index + 1}`}>
              <img src={image} alt="gallery image" />
            </div>
          ))}
        </div>
        <div className="app-gallery-images-arrows">
          <BsArrowLeftShort className="gallery-arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery-arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}