import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
import AppBanner from "../../components/home-page/home-1/AppBanner";
import Hero from "../../components/home-page/home-7/Hero";
import IntroAbout from "../../components/home-page/home-1/IntroAbout";
import Header from "../../components/home-page/home-7/Header";
import React from "react";
import Pricing from "@/components/home-page/home-2/Pricing.jsx";
import TeamV1 from "@/pages/pages-menu/team-v1.jsx";
import About from "@/components/home-page/home-5/about/index.jsx";
import PortfolioGallery from "@/components/portfolio/portfolio-details/PortfolioGallery.jsx";
import Property from "@/components/home-page/home-5/Property.jsx";
import OurMission from "@/components/about/OurMission.jsx";
import Block2 from "@/components/about/Block2.jsx";
import CounterSection from "@/components/home-page/home-13/Counter.jsx";
import Features from "@/components/home-page/home-4/Features.jsx";
import AboutCeo from "@/components/about/AboutCeo.jsx";
import Counter2 from "@/components/about/Counter2.jsx";

const Particuliers = () => {
  return (
      <>
          <Seo pageTitle="Particuliers"/>
          <Header/>
          <div
              className="hero-banner-three position-relative pb-0 pt-100 md-pt-150"
              data-aos="fade-right"
          >
              {" "}
              {/* /.container */}

              {/* /.wrapper */}
              <div className="fancy-feature-fortyEight position-relative pb-0">
                  <div className="container">
                      <div className="position-relative pb-0 lg-pt-120 lg-pb-110">
                          <About/>
                      </div>
                      {/* /.line-bg-wrapper */}
                  </div>
                  {/* /.container */}
              </div>
          </div>
          <div className="pricing-section-two position-relative pt-150 pb-150 mt-180 lg-mt-120 lg-pt-70 lg-pb-70 mt-n3">
          <div className="container">
                  <div className="row">
                      <div className="col-lg-8 col-md-9 m-auto">
                          <div
                              className="title-style-four text-center pb-70 lg-pb-40 "
                              data-aos="fade-up"
                          >
                              <h2 className="main-title fw-500 tx-dark m0 fs-1">
                                  Vous vous interrogez sur la compatibilité de l'activité physique avec votre santé
                                  ?
                              </h2>
                          </div>
                          {/* /.title-style-four */}
                      </div>
                      <div className="row mb-4">
                          <div className="col-xl-9 m-auto">
                              <p
                                  className="text-lg tx-dark text-center lh-lg mt-10 md-mt-20"
                                  data-aos="fade-up"
                              >
                                  Chez Apamix, nous avons constaté à maintes reprises comment le simple acte
                                  de création peut être une force de croissance, de changement et de découverte
                                  dans la vie des individus. Nous souhaitons inspirer et favoriser le type d'exploration
                                  créative qui encourage l'expression, l'apprentissage et l'application, tout en
                                  s'adaptant
                                  à tous les handicaps et en proposant des séances personnalisées
                              </p>
                          </div>
                      </div>
                      <div className="fancy-feature-fourteen position-relative mt-3" style={{marginTop: '10px'}}>
                          <div className="container">
                              <div className="row">
                                  <Features/>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
              <img
                  src="/images/shape/shape_52.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
              />
              <img
                  src="/images/shape/shape_53.svg"
                  alt="shape"
                  className="lazy-img shapes shape-two"
              />
              <img
                  src="/images/shape/shape_54.svg"
                  alt="shape"
                  className="lazy-img shapes shape-three"
              />
              <img
                  src="/images/shape/shape_55.svg"
                  alt="shape"
                  className="lazy-img shapes shape-four"
              />
              <div className="fancy-feature-two position-relative pt-150 lg-pt-90">
                  <div className="container">
                      <div className="row align-items-center">
                          <AboutCeo/>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footer-style-ten theme-basic-footer zn2 position-relative mt-40">
          <div className="container">
            <div className="inner-wrapper">
              <div className="row justify-content-between">
                <div className="col-lg-3 footer-intro mb-40">
                  <div className="logo">
                    <Link to="/">
                      <img src="/images/logo/logo_02.png" alt="logo" width={95}/>
                    </Link>
                  </div>
                  <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                    Best Insurance Company.
                  </p>
                  <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                    © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
                    jano inc.
                  </p>
                </div>
                <Footer/>
              </div>
            </div>
            {/* /.inner-wrapper */}
          </div>
          {/* End .container */}
          <img
              src="/images/assets/ils_13.png"
              alt="illustration"
              className="lazy-img illustration-one"
              data-aos="fade-left"
          />
          <img
              src="/images/assets/ils_14.png"
              alt="illustration"
              className="lazy-img illustration-two"
              data-aos="fade-right"
          />
        </div>
        {/* /.footer-style-ten */}
      </>
  );
};

export default Particuliers;
