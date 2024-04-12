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

const Particuliers = () => {
  return (
      <>
          <Seo pageTitle="Particuliers"/>
          <Header/>
          <div
              className="fancy-feature-fiftyNine position-relative mt-140 "
              data-aos="fade-up"
          >
              <div className="container">
                  <div className="title-style-ten text-center" data-aos="fade-up">
                      <h2 className="main-title tx-dark">
                          Ce qu'on proposent aux {" "}
                          <span className="position-relative">
                Particuliers.
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
                              Plus besoin de se déplacer, nous intervenons directement chez vous ! Nous vous proposons
                              des
                              séances d’activité physique adaptée tout au long de l’année.
                          </p>
                      </div>
                  </div>
                  {/* End .row */}
                  {/*<div className="border-bottom border-4 border-dark my-4"></div>*/}

                  {/* /.card-wrapper */}
              </div>
              {" "}
              {/* /.container */}

              {/* /.wrapper */}
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
                                  créative qui encourage l'expression, l'apprentissage et l'application, tout en s'adaptant
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
          </div>
      </>
  );
};

export default Particuliers;


{/*<div className="fancy-feature-fiftyEight position-relative zn2 pt-180 md-pt-150">*/
}
{/*    <div className="container position-relative">*/
}
{/*        <div className="row">*/
}
{/*            <div className="col-xl-9 col-lg-7 col-md-8 m-auto">*/
}
{/*                <div*/
}
{/*                    className="title-style-fourteen text-center mb-100 lg-mb-70"*/
}
{/*                    data-aos="fade-up"*/
}
{/*                >*/
}
{/*                    <div className="sc-title">ABOUT US</div>*/
}
{/*                    <h2 className="main-title tx-dark">*/
}
{/*                        Ce qu'on proposent aux{" "}*/
}
{/*                        <span className="position-relative">*/
}
{/*          Particuliers{" "}*/
}
{/*                            <img src="/images/shape/shape_186.svg" alt="shape"/>*/
}
{/*        </span>*/
}
{/*                    </h2>*/
}
{/*                </div>*/
}
{/*                /!* /.title-style-fourteen *!/*/
}
{/*            </div>*/
}
{/*        </div>*/
}
{/*    </div>*/
}
{/*</div>*/
}

// <div className="fancy-feature-fortyEight position-relative">
//     <div className="container">
//         <div className="position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
//             <About/>
//         </div>
//         {/* /.line-bg-wrapper */}
//     </div>
//     {/* /.container */}
// </div>

{/*<div className="portfolio-details-two pt-70 pb-50 lg-pb-10 md-pt-10">*/
}
{/*    <div className="project-desctiption">*/
}
{/*        <div className="container">*/
}
{/*            <div className="col-xl-9 lg-mt-80">*/
}
{/*                /!* /.title-style-twelve *!/*/
}
{/*                <div className="row">*/}
          {/*                    <div className="col-xl-8">*/}
          {/*                        <div className="title-style-twelve mb-45 pt-10 lg-pt-40 lg-mb-30" data-aos="fade-up">*/}
          {/*                            <h2 className="main-title fw-500 tx-dark">Plusieurs types de séance rien que pour*/}
          {/*                                vous</h2>*/}
          {/*                        </div>*/}
          {/*                        /!* /.title-style-twelve *!/*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*                <p data-aos="fade-up">*/}
          {/*                    APAMIX est fait pour vous ! Nous proposons par l'intermédiaire de nos coachs formés des*/}
          {/*                    séances d'activité physique adaptée à vos capacités !*/}
          {/*                </p>*/}
          {/*                <p data-aos="fade-up">*/}
          {/*                    Vous pensez que l'activité physique n'est pas fait pour vous ? Parce que vous avez des*/}
          {/*                    problèmes de santé : du diabète, de l'hypertension, une maladie cardiovasculaire ? Ou vous*/}
          {/*                    avez des douleurs aux articulations ? Un handicap ?*/}
          {/*                </p>*/}
          {/*            </div>*/}
          {/*            <div className="row gx-xxl-5 pt-90 lg-pt-40 md-pt-20">*/}
          {/*                <Property/>*/}
          {/*            </div>*/}
          {/*        </div>*/}

          {/*    </div>*/}

          {/*</div>*/}
