import React from 'react';
import ImageGallery from 'react-image-gallery';
import './index.css'

const MyGallery = ({ images }) => {
  const newImages = images.map(i => ({ original: i }));

  return (
    <ImageGallery
      items={newImages}
      showBullets={newImages.length > 1}
      showThumbnails={false}
      showPlayButton={false}
    />
  )
}

export default MyGallery;
