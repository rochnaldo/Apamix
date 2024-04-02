import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
import DefaulHeader from "../../components/header/DefaulHeader";
import AppBanner from "../../components/home-page/home-1/AppBanner";
import Banner from "../../components/home-page/home-1/Banner";
import Block from "../../components/home-page/home-1/Block";
import Blog from "../../components/home-page/home-1/Blog";
import ContactForm from "../../components/home-page/home-1/ContactForm";
import Feature from "../../components/home-page/home-1/Feature";
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
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Hero/>
              </div>
            </div>
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
        {/* /.fancy-feature-thirtyFive */}
        {/*
			=============================================
				Feature Section Thirty Six
			============================================== 
			*/}
        {/*<div className="fancy-feature-thirtySix mt-190 lg-mt-140">*/}
        {/*  <div className="container">*/}
        {/*    <div className="wrapper position-relative">*/}
        {/*      <div className="row">*/}
        {/*        <div className="col-lg-6">*/}
        {/*          <div*/}
        {/*            className="title-style-one text-center text-lg-start mb-40 md-mb-20"*/}
        {/*            data-aos="fade-right"*/}
        {/*          >*/}
        {/*            <h2 className="main-title fw-500 tx-dark m0">*/}
        {/*              Discover all our Services.*/}
        {/*            </h2>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="row">*/}
        {/*        <Service />*/}
        {/*      </div>*/}
        {/*      /!* /.row *!/*/}

        {/*      <div className="text-center md-mt-50">*/}
        {/*        <Link*/}
        {/*          to="/pages-menu/service-v1"*/}
        {/*          className="btn-twentyTwo fw-500 tran3s"*/}
        {/*          data-aos="fade-left"*/}
        {/*        >*/}
        {/*          View all Services*/}
        {/*        </Link>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!* /.container *!/*/}
        {/*</div>*/}
        {/* /.fancy-feature-thirtySix */}
        {/*
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
        {/*<div className="fancy-feature-thirtySeven mt-225 lg-mt-120">*/}
        {/*  <div className="container">*/}
        {/*    <div className="row">*/}
        {/*      <div*/}
        {/*        className="col-lg-6 ms-auto order-lg-last"*/}
        {/*        data-aos="fade-left"*/}
        {/*      >*/}
        {/*        <div className="ps-lg-5 ms-xxl-3">*/}
        {/*          <div className="title-style-one mb-40">*/}
        {/*            <div className="sc-title text-uppercase">Why Choose Us</div>*/}
        {/*            <h2 className="main-title fw-500 tx-dark m0">*/}
        {/*              What makes us the best.*/}
        {/*            </h2>*/}
        {/*          </div>*/}
        {/*          <WhyChoose />*/}
        {/*          /!* /.accordion-style-five *!/*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      /!* End .col-6 *!/*/}

        {/*      <div className="col-xxl-5 col-lg-6 order-lg-first">*/}
        {/*        <Block />*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!* /.container *!/*/}
        {/*</div>*/}
        {/* /.fancy-feature-thirtySeven */}
        {/*=====================================================
				Feedback Section Eleven
			=====================================================
			*/}


        {/*<div*/}
        {/*  className="feedback-section-eleven position-relative mt-200 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"*/}
        {/*  data-aos="fade-up"*/}
        {/*>*/}
        {/*  <div className="container">*/}
        {/*    <div className="title-style-one text-center mb-50 lg-mb-20">*/}
        {/*      <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="inner-content">*/}
        {/*    <div className="feedback_slider_seven">*/}
        {/*      <Testimonial />*/}
        {/*    </div>*/}

        {/*    /!* /.slider-wrapper *!/*/}
        {/*  </div>*/}
        {/*  /!* /.inner-content *!/*/}
        {/*</div>*/}
        {/* /.feedback-section-eleven */}
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


        <div className="pricing-section-two position-relative pt-150 pb-150 mt-180 lg-mt-120 lg-pt-70 lg-pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-9 m-auto">
                <div
                    className="title-style-four text-center pb-70 lg-pb-40 "
                    data-aos="fade-up"
                >
                  <h2 className="main-title fw-500 tx-dark m0 fs-1">
                    Découvrez nos deux offres <span>uniques</span> en activité physique adaptée,
                    parfaitement adaptées à tous les niveaux et besoins.
                  </h2>
                </div>
                {/* /.title-style-four */}
              </div>
            </div>
            <div className="wrapper pricing-table-area-four m-auto pt-80 lg-pt-30 mb-4">
              <div className="row d-flex align-items-center justify-content-center">
                <Pricing/>
                <img
                    src="/images/assets/colorGroup.svg"
                    className="position-absolute top-0 start-50 translate-middle-x"
                    style={{zIndex: -1, maxWidth: "60%", marginTop: "20%"}}
                    alt="colorGroup"
                />
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
        </div>

        <TeamV1 />

        {/*<div className="wrapper pricing-table-area-four m-auto pt-80 lg-pt-30 mb-4">*/}
        {/*  <div className=" row d-flex align-items-center justify-content-center">*/}
        {/*    <Pricing/>*/}
        {/*  </div>*/}
        {/*</div>*/}


        {/*<div*/}
        {/*    className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "*/}
        {/*    data-aos="fade-up"*/}
        {/*>*/}
        {/*  <div className="container">*/}
        {/*    <div className="bg-wrapper zn2 bg-white position-relative">*/}
        {/*      <div className="row">*/}
        {/*        <div className="col-xl-11 m-auto">*/}
        {/*          <div className="row align-items-center">*/}
        {/*            <div className="col-lg-6 ms-auto order-lg-last">*/}
        {/*              <div className="text-wrapper">*/}
        {/*                <img*/}
        {/*                    src="/images/icon/icon_114.svg"*/}
        {/*                    alt="icon"*/}
        {/*                    className="lazy-img mb-30"*/}
        {/*                />*/}
        {/*                <div className="title-style-one">*/}
        {/*                  <h2 className="main-title fw-500 tx-dark m0">*/}
        {/*                    Let’s talk with expereince advisors.*/}
        {/*                  </h2>*/}
        {/*                </div>*/}
        {/*                <p className="fs-20 tx-dark pt-20 m0">*/}
        {/*                  eiusmod tempor incididunt. Ut enim mim veniam, quis*/}
        {/*                  nostrud elit lorem dolor.*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="col-xl-5 col-lg-6 order-lg-first">*/}
        {/*              <div className="form-style-two md-mb-40">*/}
        {/*                <ContactForm/>*/}
        {/*              </div>*/}
        {/*              /!* /.form-style-two *!/*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      /!* End .row *!/*/}

        {/*      <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">*/}
        {/*        Fill the <br/>*/}
        {/*        form*/}
        {/*      </div>*/}
        {/*      <img*/}
        {/*          src="/images/shape/shape_90.svg"*/}
        {/*          alt="shape"*/}
        {/*          className="lazy-img shapes shape-one"*/}
        {/*      />*/}
        {/*      <img*/}
        {/*          src="/images/shape/shape_91.svg"*/}
        {/*          alt="shape"*/}
        {/*          className="lazy-img shapes shape-two"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    /!* /.bg-wrapper *!/*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/* /.fancy-short-banner-thirteen */}
        {/* =============================================
		   Blog Section Three
		   ============================================== */}
        {/*<div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">*/}
        {/*  <div className="container">*/}
        {/*    <div className="position-relative">*/}
        {/*      <div className="row align-items-end">*/}
        {/*        <div className="col-sm-8">*/}
        {/*          <div*/}
        {/*              className="title-style-one text-center text-sm-start pb-40 lg-pb-20"*/}
        {/*              data-aos="fade-right"*/}
        {/*          >*/}
        {/*            <h2 className="main-title fw-500 tx-dark m0">Our Blog</h2>*/}
        {/*          </div>*/}
        {/*          /!* /.title-style-one *!/*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      /!* /.row *!/*/}
        {/*      <div className="row gx-xxl-5">*/}
        {/*        <Blog/>*/}
        {/*      </div>*/}
        {/*      /!* /.row *!/*/}
        {/*      <div className="text-center xs-mt-40">*/}
        {/*        <Link*/}
        {/*            to="/blog/blog-v2"*/}
        {/*            className="btn-twentyTwo fw-500 tran3s"*/}
        {/*            data-aos="fade-left"*/}
        {/*        >*/}
        {/*          Go to Blog*/}
        {/*        </Link>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/* /.blog-section-three */}
        {/*
			=====================================================
				Footer
			=====================================================
			*/}
        <div className="footer-style-ten theme-basic-footer zn2 position-relative">
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

export default Insurance;
