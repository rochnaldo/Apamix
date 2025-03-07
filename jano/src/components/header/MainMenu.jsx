import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainMenu = () => {
  const { pathname } = useLocation();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 991px) {
            .navbar-collapse {
              background-color: white !important; /* Fond blanc pour le modal */
              padding: 20px;
              border-radius: 10px;
            }
            
            .navbar-nav .nav-link {
              color: black !important; /* Texte noir */
              font-weight: bold;
              padding: 10px 15px;
              display: block;
              border-radius: 5px;
              text-align: center;
            }

            .navbar-nav .nav-link.active-menu {
              color: white !important; /* Texte blanc */
              background-color: #ff4081 !important; /* Fond rose */
            }
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg order-lg-2">
        <button
          className="navbar-toggler d-block d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span />
        </button>
        {/* Menu mobile */}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="d-block d-lg-none">
              <div className="logo text-center">
                <Link to="/" className="d-block" style={{width: "40%"}}>
                  <img src="/images/logo/Apamix_title11.png" alt="logo" />
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/" className={isActive("/") ? "nav-link active-menu" : "nav-link"}>
                Accueil
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/particuliers" className={isActive("/particuliers") ? "nav-link active-menu" : "nav-link"}>
                Particulier
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/entreprises" className={isActive("/entreprises") ? "nav-link active-menu" : "nav-link"}>
                Professionnel
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/coachs" className={isActive("/coachs") ? "nav-link active-menu" : "nav-link"}>
                Coachs
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact/contact-v1" className={isActive("/contact/contact-v1") ? "nav-link active-menu" : "nav-link"}>
                Prendre contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainMenu;
