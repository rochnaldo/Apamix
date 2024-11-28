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
  <div
    style={{
      height: "500px",
      overflowY: "auto",
      padding: "20px",
      border: "1px solid #eaeaea",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }}
  >
    <p className="text-lg text-center text-lg-start md-pt-30 m0">
      <span style={{ fontWeight: "bold", textDecoration: "underline", color: "#FF3294" }}>
        Passion pour l’Activité Physique Adaptée :
      </span>{" "}
      Un véritable enthousiasme pour aider les personnes à améliorer leur bien-être physique et mental.
    </p>
    <p className="text-lg text-center text-lg-start md-pt-30 m0">
      <span style={{ fontWeight: "bold", textDecoration: "underline", color: "#9DE5FF" }}>
        Compétence Technique et Expertise :
      </span>{" "}
      Une solide connaissance des techniques d’activité physique adaptée et des compétences en réhabilitation
      physique.
    </p>
    <p className="text-lg text-center text-lg-start md-pt-30 m0">
      <span style={{ fontWeight: "bold", textDecoration: "underline", color: "#FF343E" }}>
        Empathie et Patience :
      </span>{" "}
      La capacité à comprendre les besoins individuels des clients et à les accompagner avec bienveillance et
      patience.
    </p>
    <p className="text-lg text-center text-lg-start md-pt-30 m0">
      <span style={{ fontWeight: "bold", textDecoration: "underline", color: "#FFC74D" }}>
        Excellentes Compétences en Communication :
      </span>{" "}
      La capacité à expliquer clairement les exercices, à motiver les clients et à établir des relations de
      confiance.
    </p>
    <p className="text-lg text-center text-lg-start md-pt-30 m0">
      <span style={{ fontWeight: "bold", textDecoration: "underline", color: "#FF3294" }}>
        Capacité d’Adaptation :
      </span>{" "}
      La flexibilité pour ajuster les programmes en fonction des besoins variés des clients et des situations.
    </p>
    <p className="text-lg text-center text-lg-start md-pt-30 m0">
      <span style={{ fontWeight: "bold", textDecoration: "underline", color: "#9DE5FF" }}>
        Esprit d’Équipe :
      </span>{" "}
      Un bon collaborateur, capable de travailler en harmonie avec d'autres professionnels pour offrir les
      meilleurs résultats.
    </p>
    <p className="text-lg text-center text-lg-start md-pt-30 m0">
      <span style={{ fontWeight: "bold", textDecoration: "underline", color: "#FF343E" }}>
        Sens de l’Organisation :
      </span>{" "}
      Une bonne gestion du temps et des ressources pour planifier et exécuter les séances de manière efficace.
    </p>
    <p className="text-lg text-center text-lg-start md-pt-30 m0">
      <span style={{ fontWeight: "bold", textDecoration: "underline", color: "#FFC74D" }}>
        Compétences en Évaluation et Analyse :
      </span>{" "}
      La capacité à réaliser des bilans de santé, à évaluer les progrès des clients et à ajuster les programmes
      en conséquence.
    </p>
    <p className="text-lg text-center text-lg-start md-pt-30 m0">
      <span style={{ fontWeight: "bold", textDecoration: "underline", color: "#FF3294" }}>
        Sens de l’Initiative et Créativité :
      </span>{" "}
      La capacité à proposer des idées nouvelles et à créer des programmes innovants qui répondent aux besoins
      des clients.
    </p>
    <p className="text-lg text-center text-lg-start md-pt-30 m0">
      <span style={{ fontWeight: "bold", textDecoration: "underline", color: "#9DE5FF" }}>
        Compétences en Gestion de Stress :
      </span>{" "}
      La capacité à gérer des situations stressantes et à rester calme et professionnel en toutes circonstances.
    </p>
    <p className="text-lg text-center text-lg-start md-pt-30 m0">
      <span style={{ fontWeight: "bold", textDecoration: "underline", color: "#FF343E" }}>
        Respect de l’Éthique Professionnelle :
      </span>{" "}
      Un engagement ferme à respecter les normes éthiques et à garantir la confidentialité des informations des
      clients.
    </p>
  </div>
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