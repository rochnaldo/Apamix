import { useState, useEffect } from "react";

const images = [
  "/images/Menu/pa2.jpeg",
  "/images/Menu/2.jpeg",
  "/images/Menu/5.jpeg",
];

const ImgGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          .img-gallery {
            width: 100%;
            height: 700px; /* Réduction de la hauteur sur desktop */
            position: relative;
            overflow: hidden;
            border-radius: 10px;
          }

          .img-gallery img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 1s ease-in-out;
          }

          .img-gallery img.active {
            opacity: 1;
          }

          @media (max-width: 768px) {
            .img-gallery {
              height: 300px; /* Hauteur réduite sur mobile */
            }
          }

          @media (max-width: 576px) {
            .img-gallery {
              height: 250px; /* Hauteur encore plus réduite sur très petits écrans */
            }
          }
        `}
      </style>

      <div className="img-gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Diaporama"
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>
    </>
  );
};

export default ImgGallery;
