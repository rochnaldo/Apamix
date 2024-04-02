import { Link } from "react-router-dom";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  contactItems,
} from "../../data/menu";

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
                          <img src="/images/logo/logo_01.png" alt="logo"/>
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

              <li className="nav-item dropdown">
                  <a
                      className={
                          isActive("/pages-menu/about-us-v1") || isActive("/pages-menu/about-us-v2")
                              ? "nav-link dropdown-toggle active-menu"
                              : "nav-link dropdown-toggle"
                      }
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                  >
                      Offres
                  </a>
                  <ul className="dropdown-menu">
                      <li>
                          <Link
                              to="/"
                              className={
                                  isActive("/pages-menu/about-us-v1")
                                      ? "dropdown-item active"
                                      : "dropdown-item"
                              }
                          >
                              <span>Particuliers</span>
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/"
                              className={
                                  isActive("/pages-menu/about-us-v2")
                                      ? "dropdown-item active"
                                      : "dropdown-item"
                              }
                          >
                              <span>Entreprises</span>
                          </Link>
                      </li>
                  </ul>
              </li>
              {/* End li (pages) */}

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
                      to="/book"
                      className={isActive("/book")
                      ? "nav-link active-menu"
                      : "nav-link"}
                  >
                      Réserver votre séance
                  </Link>
              </li>
              {/* End li (blog) */}

              {/*<li className="nav-item dropdown">*/}
              {/*  <a*/}
              {/*    className={*/}
              {/*      contactItems.some((elm) => isActive(elm.link))*/}
              {/*        ? "nav-link dropdown-toggle active-menu"*/}
              {/*        : "nav-link dropdown-toggle"*/}
              {/*    }*/}
              {/*    href="#"*/}
              {/*    role="button"*/}
              {/*    data-bs-toggle="dropdown"*/}
              {/*    data-bs-auto-close="outside"*/}
              {/*    aria-expanded="false"*/}
              {/*  >*/}
              {/*    Contact*/}
              {/*  </a>*/}
              {/*  <ul className="dropdown-menu">*/}
              {/*    {contactItems.map((contact, index) => (*/}
              {/*      <li key={index}>*/}
              {/*        <Link*/}
              {/*          to={contact.link}*/}
              {/*          className={`dropdown-item ${*/}
              {/*            isActive(contact.link) ? "active" : ""*/}
              {/*          }`}*/}
              {/*        >*/}
              {/*          <span>{contact.text}</span>*/}
              {/*        </Link>*/}
              {/*      </li>*/}
              {/*    ))}*/}
              {/*  </ul>*/}
              {/*</li>*/}
              {/* End li (contact) */}
          </ul>
          {/* End ul */}

          {/* Mobile Content */}
          {/*<div className="mobile-content d-block d-lg-none">*/}
          {/*  <div className="d-flex flex-column align-items-center justify-content-center mt-70">*/}
          {/*    <Link*/}
          {/*      to="/contact/contact-v1"*/}
          {/*      className="btn-twentyOne fw-500 tran3s"*/}
          {/*    >*/}
          {/*      Contact us*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
