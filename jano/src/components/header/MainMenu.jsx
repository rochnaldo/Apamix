import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MainMenu = () => {
  const { pathname } = useLocation();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  return (
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
      {/* End mobile collapse menu */}
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="d-block d-lg-none">
                  <div className="logo">
                      <Link to="/" className="d-block">
                          <img src="/images/logo/Apamix_title.png" alt="logo"/>
                      </Link>
                  </div>
              </li>
              {/* End li */}

              <li className="nav-item">
                  <Link
                      to="/" // Route vers la page d'accueil
                      className={isActive("/")
                          ? "nav-link active-menu"
                          : "nav-link"}
                  >
                      Acceuil
                  </Link>
              </li>
              {/* End li (home mega menu) */}

              <li className="nav-item">
                  <Link
                      to="/particuliers" // Route vers la page d'accueil
                      className={isActive("/particuliers")
                          ? "nav-link active-menu"
                          : "nav-link"}
                  >
                      Particulier
                  </Link>
              </li>
              {/* End li (pages) */}
              <li className="nav-item">
                  <Link
                      to="/entreprises" // Route vers la page d'accueil
                      className={isActive("/entreprises")
                          ? "nav-link active-menu"
                          : "nav-link"}
                  >
                      Professionel
                  </Link>
              </li>
              <li className="nav-item ">
                  <Link
                      to="/coachs"
                      className={isActive("/coachs")
                          ? "nav-link active-menu"
                          : "nav-link"}
                  >Coachs
                  </Link>
              </li>
              {/* End li (portfolio) */}
              <li className="nav-item">
                  <Link
                      to="/contact/contact-v1"
                      className={isActive("/contact/contact-v1")
                          ? "nav-link active-menu"
                          : "nav-link"}
                  >
                      Prendre contact
                  </Link>
              </li>
          </ul>
          {/* End ul */}

      </div>
    </nav>
  );
};

export default MainMenu;
