import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-container text-lg-start">
      <h1 
        className="hero-heading fw-bold mt-45 mb-40 md-mt-20"
        style={{
          fontSize: "clamp(35px, 6vw, 70px)", 
          lineHeight: "1.2",
          textAlign: isMobile ? "left" : "left", /* ✅ Aligne le texte à gauche sur mobile */
          paddingLeft: isMobile ? "15px" : "0", /* ✅ Ajoute un léger padding sur mobile */
        }}
      >
        <span>Prenez le contrôle de votre santé </span>
        avec 
        <span 
          style={{
            color: window.innerWidth <= 768 ? "white" : "inherit"
          }}
        > Apamix 
        </span>
        <span className="hero-subtext"> , l'excellence en mouvement.</span>
      </h1>

      <p 
        className="text-lg mb-50 lg-mb-30 pe-xxl-4"
        style={{
          maxWidth: "600px",
          margin: isMobile ? "0 15px" : "0", /* ✅ Garde un bon alignement sur mobile */
          textAlign: isMobile ? "left" : "left",
          color:  isMobile ? "white": "text-lg"
        }}
      >
        Le sport pour tous ! Offrez-vous la santé que vous méritez : commencez dès maintenant avec une séance d’activité physique adaptée et transformez votre vie.
      </p>

      <div 
        className="d-flex justify-content-center justify-content-lg-start"
        style={{ paddingLeft: isMobile ? "15px" : "0" }} /* ✅ Décale légèrement le bouton */
      >
        <Link
          to="/contact/contact-v1"
          className="btn-sixteen fw-500 tran3s mb-25"
          style={{
            padding: "3",
            fontSize: "16px",
            borderRadius: "8px",
            marginTop: "10px"
          }}
        >
          Réservez votre séance
        </Link>
      </div>
    </div>
  );
};

export default Hero;
