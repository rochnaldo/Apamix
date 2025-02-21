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
import Testimonial3 from "../../components/home-page/home-6/Testimonial";

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
                              Vous vous interrogez sur les bienfaits de l’activité physique pour votre santé ? 
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
                            Que vous soyez en quête de <strong>bien-être</strong>, confronté à un <strong>handicap</strong>, une <strong>maladie</strong> ou simplement désireux de <strong>prendre soin de votre santé</strong>, <strong>l’activité physique peut transformer votre vie</strong>.
                            </p>

                            <hr className="my-4" style={{ borderColor: "#dcdcdc" }} />

                            <p
                            className="text-lg tx-dark text-center lh-lg mt-10 md-mt-20"
                            data-aos="fade-up"
                            >
                            Pour ceux vivant avec des <strong>problèmes de santé</strong>, l’exercice aide à mieux gérer les symptômes et à améliorer la <strong>qualité de vie</strong>. Aux <strong>sportifs</strong> en quête de progression, un accompagnement personnalisé permet d’atteindre de nouveaux objectifs. 
                            <br /><br />
                            Au-delà de la performance, l’activité physique est un véritable <strong>moteur de bien-être</strong> : elle aide à apaiser l’esprit, rompre l’isolement, et <strong>renforcer la confiance en soi</strong>. Même une petite action, adaptée à vos capacités, peut faire une <strong>différence immense</strong>.
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

              <div className="fancy-feature-two position-relative pt-150 lg-pt-90">
                  <div className="container">
                      <div className="row align-items-center">
                          <AboutCeo/>
                      </div>
                  </div>
              </div>
          </div>

          
          <div className="fancy-feature-four position-relative pt-150 lg-pt-90">
              <div className="container">
                  <div className="row align-items-center">
                      <Testimonial3/>
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
                    <img src="/images/logo/Apamix_title11.png" alt="logo" width={95}/>
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  Entreprise Française.
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1} 
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
