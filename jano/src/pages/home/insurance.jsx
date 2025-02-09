import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
import DefaulHeader from "../../components/header/DefaulHeader";
import AppBanner from "../../components/home-page/home-1/AppBanner";
import Banner from "../../components/home-page/home-1/Banner";
import Block from "../../components/home-page/home-1/Block";
import Blog from "../../components/home-page/home-1/Blog";
import Blog2 from "../../components/home-page/home-5/Blog";
import ContactForm from "../../components/home-page/home-1/ContactForm";
import Feature from "../../components/home-page/home-1/Feature";
import Partner from "../../components/home-page/home-2/Partner.jsx"
import Hero from "../../components/home-page/home-7/Hero";
import IntroAbout from "../../components/home-page/home-1/IntroAbout";
import Header from "../../components/home-page/home-7/Header";
import Service from "../../components/home-page/home-1/Service";
import Testimonial from "../../components/home-page/home-1/Testimonial";
import WhyChoose from "../../components/home-page/home-1/WhyChoose";
import React from "react";
import Pricng from "@/components/home-page/home-7/Pricng.jsx";
import Pricing from "@/components/home-page/home-2/Pricing.jsx";
import TeamV1 from "@/pages/pages-menu/team-v1.jsx";
import Team5 from "../../components/team/Team5";
import CallToAction from "@/components/team/CallToAction.jsx";
import PricingV2 from "@/pages/pages-menu/pricing-v2.jsx";
import FancyBanner from "@/components/home-page/home-2/FancyBanner.jsx";

const Insurance = () => {
  return (
      <>
        <Seo pageTitle="Insurances"/>
        {/* <!--
      =============================================
			Theme Default Menu
			==============================================
      --> */}
        <Header/>
        {/* <!--
			=============================================
			Theme Hero Banner
			==============================================
			--> */}
        <div
            className="hero-banner-three position-relative pt-200 md-pt-150"
            data-aos="fade-right"
        >
          <div className="container" style={{transform: "translateY(-20px)"}}>
            <div className="row">
              <div className="col-lg-6">
                <Hero/>
              </div>
            </div>
          </div>
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              textDecoration: "underline",
              color: 'grey',
            }}
          >
          Nos partenaires
          </h3>

          <div className="partner-section-four position-relative pt-100 sm-pt-70">
            <div className="wrapper m-auto">
              <div className="partner_slider_one row">
                <Partner/>
              </div>
            </div>
            {/* /.wrapper */}
          </div>
          {/* /.container */}

          <div className="mobile-screen" data-aos="fade-right">
            <div className="row gx-xxl-5 justify-content-center align-items-center">
              <div className="illustration-holder" data-aos="fade-left">
                <img
                    src="/images/assets/home_img.svg"
                    alt="illustration"
                    className="lazy-img main-illustration"
                />
              </div>
            </div>
          </div>
          {/* /.mobile-screen */}
        </div>
        {/* <!--
			=============================================
				Feature Section Thirty Four
			==============================================
			--> */}
        <div className="fancy-feature-thirtyFour mt-50">
          <div className="container">
            <div className="row gx-xxl-5">
              {/*<Feature/>*/}
            </div>
          </div>
          {/* <!-- /.container --> */}
        </div>
        {/* <!-- /.fancy-feature-thirtyFour --> */}
        {/*
			=====================================================
				Feature Section Thirty Five
			=====================================================
			*/}
        <div className="fancy-feature-thirtyFive mt-90 md-mt-70">
          <div className="container" data-aos="fade-up">
            {/*<Banner/>*/}
            {/* /.top-banner */}
          </div>
          {/* End .container */}

          <div className="bg-wrapper pt-100 lg-mt-80 lg-pt-70">
            <div className="container">
              <IntroAbout/>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* =============================================
				Feature Section Thirty Eight
			==============================================
			*/}
        <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
          <div className="container">
            <AppBanner/>
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-feature-thirtyEight */}
        {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}

        <FancyBanner />


        <div className="team-section-four mt-150 lg-mt-90">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xxl-6 col-md-7" data-aos="fade-right">
                <div className="title-style-one text-center text-md-start">
                  <div className="sc-title text-uppercase">OUR TEAM</div>
                  <h2 className="main-title fw-500 tx-dark">
                    Découvrez notre équipe
                  </h2>
                </div>
                {" "}
                {/* /.title-style-one */}
              </div>
              <div
                  className="col-xxl-6 col-md-5 text-center text-md-end"
                  data-aos="fade-left"
              >
                <a href="/coachs" className="btn-one fw-500 sm-mt-30">
                  Voir toute l'équipe
                </a>
              </div>
            </div>
            {" "}
            {/* /.row */}
            <div className="wrapper border-bottom pt-80 lg-pt-50">
              <div className="row gx-xxl-5">
                <Team5/>
              </div>
              {/* /.row */}
              {/*<CallToAction />*/}

            </div>

          </div>
          {/* /.container */}
        </div>


        {/*
			=====================================================
				Footer
			=====================================================
			*/}
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

export default Insurance;
