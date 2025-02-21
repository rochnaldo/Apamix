import { useState, useEffect } from "react";

const images = [
  "/images/Menu/pa4.jpeg",
  "/images/Menu/pa2.jpeg",
  "/images/Menu/pa3.jpeg",
];

const ImgGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changement toutes les 3 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, []);

  return (
    <div 
      className="img-gallery md-mt-60 text-center"
      style={{ 
        width: "100%", 
        height: "800px", // Hauteur fixe du bloc
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px"
      }}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Diaporama"
          className="lazy-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Remplit sans distorsion
            position: "absolute",
            top: 0,
            left: 0,
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out"
          }}
        />
      ))}
    </div>
  );
};

export default ImgGallery;
