import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Memories.module.css';
import { Carousel } from 'react-bootstrap';


const Memories = () => {
  const photoGalleries = [
    {
      title: 'Vacation Memories',
      photos: [
        '/image/travel1.jpg',
        '/image/travel2.jpg',
        '/image/travel3.jpg',
        '/image/travel4.jpg',
        '/image/travel5.jpg',
        '/image/travel6.jpg',
        '/image/travel7.jpg',
        '/image/travel8.jpg',
        '/image/travel9.jpg',
        '/image/travel10.jpg',
      ],
    },
    {
      title: 'Celebration Moments',
      photos: [
        '/image/bond1.jpg',
        '/image/bond2.jpg',
        '/image/bond3.jpg',
        '/image/bond4.jpg',
        '/image/bond5.jpg',
        '/image/bond6.jpg',
        '/image/bond7.jpg',
        '/image/bond8.jpg',
        '/image/bond9.jpg',
        '/image/bond10.jpg',
        '/image/bond11.jpg',
        '/image/bond12.jpg',
        '/image/bond13.jpg',
        '/image/bond14.jpg',
        '/image/bond15.jpg',
        '/image/bond16.jpg',
        '/image/bond17.jpg',
        '/image/bond18.jpg',
        '/image/bond19.jpg',
        '/image/bond20.jpg',
        '/image/bond21.jpg',
        '/image/bond22.jpg',
        '/image/bond23.jpg',
        '/image/bond24.jpg',
        '/image/bond25.jpg',
        '/image/bond26.jpg',
        '/image/bond27.jpg',
        '/image/bond28.jpg',
        '/image/bond29.jpg',
        '/image/bond30.jpg',
        '/image/bond31.jpg',
        '/image/bond32.jpg',
        '/image/bond33.jpg',
        '/image/bond34.jpg',
        '/image/bond35.jpg',
        '/image/bond36.jpg',
        '/image/bond37.jpg',
        '/image/bond38.jpg',
        '/image/bond39.jpg',
        '/image/bond40.jpg',
        '/image/bond41.jpg',
        '/image/bond42.jpg',
        '/image/bond43.jpg',
        '/image/bond44.jpg',
        '/image/bond45.jpg',
        '/image/bond46.jpg',
        '/image/bond47.jpg',
        '/image/bond48.jpg',
        '/image/bond49.jpg',
        '/image/bond50.jpg',
        '/image/bond51.jpg',
        '/image/bond52.jpg',
        '/image/bond53.jpg',
        '/image/bond54.jpg',
        '/image/bond55.jpg',
        '/image/bond56.jpg',
        '/image/bond57.jpg',
        '/image/bond58.jpg',
        '/image/bond59.jpg',
        '/image/bond60.jpg',
        
      ],
    },
    // Add more photo galleries here
  ];

  return (
    <section className={styles.memoriesSection} id="memories">
      <div className={styles.container}>
        <h2 className={styles.memoriesHeading}>Our Beautiful Memories</h2>
        {photoGalleries.map((gallery, index) => (
          <div className={styles.gallery} key={index}>
            <h3 className={styles.galleryTitle}>{gallery.title}</h3>
            <Carousel>
              {gallery.photos.map((photo, photoIndex) => (
                <Carousel.Item key={photoIndex}>
                  <Image 
                  src={photo} 
                  alt={`Photo ${photoIndex + 1}`} 
                  className={styles.photo} 
                  width={800}
                  height={250}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memories ;