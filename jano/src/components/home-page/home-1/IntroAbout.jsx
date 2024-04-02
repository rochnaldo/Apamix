import { useState } from "react";
import ModalVideo from "react-modal-video";

const IntroAbout = () => {
  const [isOpen, setOpen] = useState(false);
  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: "+500 pratiquants",
      subtitle: "Proffessionels et particuliers",
    },
    {
      id: 2,
      title: "Meghan Levy-Soussan",
      cardNo: "card-two",
      subtitle: "Fondatrice d'Apamix",
    },
    {
      id: 3,
      title: "Master +2 en APAS",
      cardNo: "card-three",
      subtitle: "+3 ans en activité professionels",
    },
  ];

  return (
    <>
      {/*<ModalVideo*/}
      {/*  channel="youtube"*/}
      {/*  autoplay*/}
      {/*  isOpen={isOpen}*/}
      {/*  videoId="rDYdeq3JW_E"*/}
      {/*  onClose={() => setOpen(false)}*/}
      {/*/>*/}

      <div className="row">
        <div className="col-xl-5 col-md-6 order-md-last">
          <div className="text-wrapper md-pb-70">
            {/*<img*/}
            {/*  src="/images/icon/icon_103.svg"*/}
            {/*  alt="icon"*/}
            {/*  className="lazy-img cursor-pointer"*/}
            {/*  onClick={() => setOpen(true)}*/}
            {/*/>*/}
            <p className="tx-dark pt-30 pb-30 md-pb-15 fs-3" data-aos="fade-up">
              J'ai fondé mon entreprise <span className="fw-500">Apamix</span> avec passion et dévouement. Chaque jour, je suis inspirée par la
              possibilité d'offrir à tous,
              quel que soit leur niveau de forme physique, la chance de découvrir leur
              force intérieure, de retrouver confiance en eux-mêmes et de vivre pleinement
              chaque instant de leur vie.
            </p>
            {/*<h6*/}
            {/*  className="fs-20 tx-dark d-inline-block fst-italic position-relative ps-4"*/}
            {/*  data-aos="fade-up"*/}
            {/*>*/}
            {/*  Jessica Woodbeck*/}
            {/*</h6>*/}
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-up">
          <div className="img-holder d-lg-inline-flex position-relative zn2 pb-45 xl-pb-90">
            <img
              src="/images/shape/shape_135.svg"
              alt="shape"
              className="lazy-img"
            />
            <img
              src="/images/assets/Meg.png"
              className="lazy-img avatar-img"
              alt="man"
            />

            {cardsData.map((item) => (
                <div
                    className={`card-style ${item.cardNo} d-flex flex-column align-items-center`} // Utilisation de flex-column et align-items-center pour centrer le contenu verticalement
                    key={item.id}
                >
                  <div className="text-center mb-3">
                    <h3 className="fs-5 mb-2">{item.title}</h3> {/* Utilisation de classes Bootstrap pour ajuster la taille de la police et la marge inférieure */}
                    <p className="fs-6 mb-0">{item.subtitle}</p> {/* Utilisation de classes Bootstrap pour ajuster la taille de la police */}
                  </div>
                  <div className="icon rounded-circle d-flex align-items-center justify-content-center"
                       style={{fontSize: '2rem'}}> {/* Ajustement de la taille de l'icône avec une classe Bootstrap */}
                    <i className="bi bi-check-lg"/>
                  </div>
                </div>
            ))}
            {/* /.card */}
          </div>
        </div>
        {/* End .col-xl-7 */}
      </div>
    </>
  );
};

export default IntroAbout;
