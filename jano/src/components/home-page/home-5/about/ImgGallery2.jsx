import { useState, useEffect } from "react";

const images = [
  "/images/Menu/en1.jpeg",
  "/images/Menu/en2.jpeg",
  "/images/Menu/en3.jpeg",
];

const ImgGallery2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Version normale pour Desktop */}
      <div 
        className="img-gallery text-center d-none d-md-block"
        style={{ 
          width: "100%", 
          height: "700px", // Garder la taille originale sur Desktop
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
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 1s ease-in-out"
            }}
          />
        ))}
      </div>

      {/* Version réduite pour Mobile */}
      <div 
        className="img-gallery text-center d-md-none"
        style={{ 
          width: "100%", 
          maxWidth: "350px",  
          height: "250px",  
          position: "relative",
          overflow: "hidden",
          borderRadius: "15px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          margin: "0 auto"
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
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 1s ease-in-out"
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ImgGallery2;
