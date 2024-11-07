import { Link } from "react-router-dom";

const FancyBanner = () => {
  const bannerData = [
    {
      title: "Des programmes sur-mesure",
      mainTitle: "Séances personnalisées pour chaque besoin",
      description:
        "Spécifiques : Gym douce, Gym assise, Relaxation, Méditation, Stretching, Ergonomie, ETP (Éducation Thérapeutique du Patient), Classiques : Renforcement musculaire, Endurance, Équilibre, Mobilité, Coordination, Reconditionnement physique.",
      illustration: "/images/assets/cardParticuliers-removebg.png",
      illustrationAlt: "illustration",
      illustrationPosition: "right",
      aos: "fade-right",
    },
    {
      title: "Améliorer la santé et la performance de vos équipes",
      mainTitle: "Séances adaptées pour un bien-être en entreprise",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci sed do eiusmod tempor incididunt ut labore et dolore magna ad minim veniam.",
      buttonLabel: "",
      illustration: "/images/assets/cardEntreprise.png",
      illustrationAlt: "illustration",
      illustrationPosition: "left",
      aos: "fade-left",
    },
  ];

  return (
    <div className="fancy-feature-twentyFour mt-225 lg-mt-130">
      <div className="container">
        {bannerData.map((data, index) => (
          <div className="block-style-four mt-200 lg-mt-100" key={index}>
            <div className="row align-items-center">
              <div
                className={`col-xl-5 col-lg-6 order-lg-${
                  data.illustrationPosition === "left" ? "first" : "last"
                }`}
                data-aos={data.aos}
              >
                <div className="title-style-eight">
                  <div className="sc-title text-uppercase">{data.title}</div>
                  <h2 className="main-title tx-dark fw-bold">
                    {data.mainTitle}
                  </h2>
                </div>
                <p className="fs-20 lh-lg mt-35 lg-mt-20">
                  <strong>Spécifiques :</strong> Gym douce, Gym assise, Relaxation, Méditation, Stretching, Ergonomie, ETP (Éducation Thérapeutique du Patient), etc.
                  <br /><br />
                  <strong>Classiques :</strong> Renforcement musculaire, Endurance, Équilibre, Mobilité, Coordination, Reconditionnement physique.
                </p>
              </div>
              <div
                className={`col-xl-7 col-lg-6 col-md-8 m-auto order-lg-${
                  data.illustrationPosition === "left" ? "last" : "first"
                }`}
                data-aos={data.aos}
              >
                <div className="illustration-holder" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                  <img
                    src={data.illustration}
                    alt={data.illustrationAlt}
                    className="lazy-img"
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancyBanner;
