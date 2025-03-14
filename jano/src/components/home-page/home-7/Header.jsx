import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.innerWidth <= 768) {
      // Toujours fixe sur mobile
      setNavbar(true);
    } else {
      // Fixe seulement quand on scroll sur desktop
      if (window.scrollY >= 10) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };

  useEffect(() => {
    // Appliquer l'effet immédiatement au chargement de la page
    changeBackground();
    
    // Écouter l'événement de scroll
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-three white-vr ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link to="/" className="d-block">
              <img src="/images/logo/Apamix_title11.png" alt="logo" style={{ width: "120px", height: "auto" }} />
            </Link>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
