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
import Testimonial from "@/components/home-page/home-5/Testimonial.jsx";
import {Link} from "react-router-dom";
import BlockContact5 from "@/components/contact/BlockContact5.jsx";
import ContactForm4 from "@/components/contact/ContactForm4.jsx";
import Map2 from "@/components/contact/Map2.jsx";

const Coachs = () => {
  return (
      <>
        <Seo pageTitle="Coachs"/>
        <Header/>

        <div
            className="hero-banner-three position-relative pb-0 pt-100 md-pt-150"
            data-aos="fade-right"
        >
          <div className="feedback-section-fourteen position-relative zn2">
            <div className="container">
              <div className="position-relative zn2 pt-30 pb-18 lg-pt-120 lg-pb-80">
                <div className="row">
                  <div className="col-md-6" data-aos="fade-right">
                    <div className="title-style-five">
                      <h2 className="main-title hero-heading fw-bold">
                        Nous recrutons des <span className="gradient-text">Coachs</span>
                      </h2>
                    </div>
                    <div className="mt-60 lg-mt-40 ps-xl-0 ms-xl-2">
                      <div className="feedback_slider_eleven">
                        <Testimonial/>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                    <div
                        className="img-holder position-relative mt-25"
                        data-aos="fade-left"
                    >
                      <img
                          src="/images/media/img_84.jpg"
                          alt="Coaching"
                          className="lazy-img ms-auto"
                      />
                      <div
                          className="rating-box bg-black text-white d-flex flex-column justify-content-center align-items-center"
                      >
                        <strong className="fw-500">4.8</strong>
                        <span>avg rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nouveau bloc ajouté ici */}
        <div className="fancy-feature-one pt-120 lg-pt-90">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 aos fadeInLeft">
                <div className="title-style-one text-center text-lg-start">
                  <h2 className="hero-heading fw-bold">
                    Les Qualitées <br/>
                    Nécessaires pour Postuler.
                  </h2>
                </div>
              </div>
              <div className="col-lg-5 ms-auto aos fadeInRight">
                <p className="text-lg text-center text-lg-start md-pt-30 m0">
                  Nous sommes à la recherche d'un professionnel passionné et compétent pour rejoindre notre équipe en
                  tant qu’Enseignant en Activité Physique Adaptée. Si vous êtes motivé par l'idée d'aider les individus
                  à atteindre leurs objectifs de santé et de bien-être à travers une approche personnalisée, cette
                  opportunité pourrait être la vôtre.
                </p>
              </div>
            </div>
          </div>
          <div className="container pt-120 lg-pt-80 md-pt-60">
            <div className="row gx-xxl-5">
              <Block2/>
            </div>
          </div>
        </div>

        {/*Block de Contact*/}
        <div className="contact-section-four pt-180 md-pt-150">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-lg-6 col-md-7 m-auto">
                <div
                    className="title-style-fourteen text-center mb-100 lg-mb-50"
                    data-aos="fade-up"
                >
                  <div className="sc-title">POSTULEZ ICI</div>
                  <h2 className="hero-heading fw-bold">
                    Vous voulez postuler
                  </h2>
                </div>
                {/* /.title-style-fourteen */}
              </div>
            </div>
            <div className="row">
              <BlockContact5/>
            </div>
          </div>
          {/* End .container */}

          {/* /.contact-meta */}
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
      </>
  );
};

export default Coachs;