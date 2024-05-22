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
import Testimonial from "@/components/home-page/home-5/Testimonial.jsx";

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
                      <div className="line-bg-wrapper position-relative zn2 pt-30 pb-18 lg-pt-120 lg-pb-80">
                          <div className="row">
                              <div className="col-md-6" data-aos="fade-right">
                                  <div className="title-style-five">
                                      <h2 className="main-title hero-heading fw-bold">
                                          Nous recrutons des <span className="gradient-text">Coachs</span>
                                      </h2>
                                  </div>
                                  {/* /.title-style-five */}
                                  <div className="mt-60 lg-mt-40 ps-xl-0 ms-xl-2">
                                      <div className="feedback_slider_eleven">
                                          <Testimonial/>
                                      </div>
                                      {/* /.feedback_slider_eleven */}
                                  </div>
                              </div>
                              {/* End .col-md-6 */}

                              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                                  <div
                                      className="img-holder position-relative mt-25"
                                      data-aos="fade-left"
                                  >
                                      {/*Image principale*/}
                                      <img
                                          src="/images/media/img_84.jpg"
                                          alt="shape"
                                          className="lazy-img ms-auto"
                                      />

                                      <div
                                          className="rating-box bg-black text-white d-flex flex-column justify-content-center align-items-center">
                                          <strong className="fw-500">4.8</strong>
                                          <span>avg rating</span>
                                      </div>
                                      {/* /.rating-box */}
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/* /.line-bg-wrapper */}
                  </div>
              </div>
           </div>
          </>
    );
};

export default Coachs;