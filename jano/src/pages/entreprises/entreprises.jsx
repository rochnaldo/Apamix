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
import AboutCeo2 from "@/components/about/AboutCeo2.jsx";

const Entreprises = () => {
  return (
      <>
          <Seo pageTitle="Entreprises"/>
          <Header/>
          <div
              className="fancy-feature-fiftyNine position-relative mt-140 "
              data-aos="fade-up"
          >
              <div className="container">
                  <div className="title-style-ten text-center" data-aos="fade-up">
                      <h2 className="main-title tx-dark">
                          Ce qu'on propose aux {" "}
                          <span className="position-relative">
                Entreprises.
                <img src="/images/shape/shape_188.svg" alt="shape"/>
              </span>
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-9 m-auto">
                          <p
                              className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20"
                              data-aos="fade-up"
                          >
                              Vous cherchez à promouvoir le bien-être et la santé de vos employés tout en favorisant un environnement de travail dynamique et positif ? Découvrez nos services sur mesure pour les entreprises, adaptés à vos besoins spécifiques.
                          </p>
                      </div>
                  </div>
              </div>
              <img
                  src="/images/shape/shape_189.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
              />
              <div className="fancy-feature-fortyEight position-relative">
                  <div className="container">
                      <div className="position-relative pt-100 pb-10 lg-pt-120 lg-pb-110">
                          <About/>
                      </div>
                  </div>
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
                                  Investissez dans le bien-être de votre entreprise
                              </h2>
                          </div>
                      </div>
                      <div className="row mb-4">
                          <div className="col-xl-9 m-auto">
                              <p
                                  className="text-lg tx-dark text-center lh-lg mt-10 md-mt-20"
                                  data-aos="fade-up"
                              >
                                  Chez Apamix, nous comprenons l'importance de la santé et du bien-être des employés pour la productivité et la satisfaction au travail. Nous offrons des solutions sur mesure pour soutenir le bien-être de vos employés et favoriser un environnement de travail épanouissant.
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
                          <AboutCeo2/>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
};

export default Entreprises;
