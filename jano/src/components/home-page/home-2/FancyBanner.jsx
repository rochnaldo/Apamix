import { Link } from "react-router-dom";

const FancyBanner = () => {
  const bannerData = [
    {
      title: "Nos Services Pour les Professionnels",
      mainTitle: "Séances personnalisées pour chaque besoin",
      description: (
        <>
          <p className="fs-16 lh-md mt-20">
            <strong>Nos Services Pour les Professionnels :</strong>
          </p>
          <ul className="fs-16 lh-md mt-10">
            <li><strong>Prises en Charge Collectives et Individuelles</strong></li>
            <li><strong>Bilans de Santé et Évaluations Personnalisées</strong></li>
            <li><strong>Interventions Spécifiques sur Demande</strong></li>
            <li><strong>Sport en Entreprise</strong></li>
          </ul>
          <p className="fs-16 lh-md mt-15">
            <strong>Nos Partenaires actuels :</strong> la Clinique Sainte-Clotilde, le CHU de BellePierre, la Mairie de Saint-Denis avec le pôle séniors, EHPAD Aude, Résidence senior LÉA et l’ESE de la montagne.
          </p>
          <p className="fs-14 lh-sm mt-15">
            <strong>Spécifiques :</strong> Gym douce, Gym assise, Relaxation, Méditation, Stretching, Ergonomie, ETP (Éducation Thérapeutique du Patient), etc.
            <br /><br />
            <strong>Classiques :</strong> Renforcement musculaire, Endurance, Équilibre, Mobilité, Coordination, Reconditionnement physique.
          </p>
        </>
      ),
      illustration: "/images/assets/cardParticuliers-removebg.png",
      illustrationAlt: "illustration",
      illustrationPosition: "right",
      aos: "fade-right",
      link: "/particuliers", // Lien pour Entreprises
    },
    {
      title: "Nos Services Pour les Particuliers",
      mainTitle: "Séances adaptées pour un bien-être en entreprise",
      description: (
        <>
          <p className="fs-16 lh-md mt-20">
            <strong>Vous vous demandez quoi faire, où et comment ?</strong>
          </p>
          <p className="fs-16 lh-md mt-10">
            Avec Apamix, plus de doute ! Nous sommes là pour vous guider et répondre à vos besoins à chaque étape de votre parcours.
          </p>
          <ul className="fs-16 lh-md mt-10">
            <li><strong>Séance individuelle</strong></li>
            <li><strong>Séance collective</strong></li>
            <li><strong>Conseils en nutrition et bien-être</strong></li>
            <li><strong>Livret conseil</strong></li>
          </ul>
        </>
      ),
      illustration: "/images/assets/cardEntreprise.png",
      illustrationAlt: "illustration",
      illustrationPosition: "left",
      aos: "fade-left",
      link: "/entreprises", // Lien pour Particuliers
    },
  ];

  return (
    <div className="fancy-feature-twentyFour mt-225 lg-mt-130">
      <div className="container">
        {bannerData.map((data, index) => (
          <div className="block-style-four mt-150 lg-mt-80" key={index}>
            <div className="row align-items-center">
              <div
                className={`col-xl-5 col-lg-6 order-lg-${data.illustrationPosition === "left" ? "first" : "last"}`}
                data-aos={data.aos}
              >
                <div className="title-style-eight">
                  <div className="sc-title text-uppercase mb-10" style={{ marginLeft: "20px" }}>{data.title}</div>
                  <h2 className="hero-heading fw-bold fs-24">{data.mainTitle}</h2>
                </div>
                <div className="fs-16 lh-md mt-20">{data.description}</div>
              </div>
              <div
                className={`col-xl-7 col-lg-6 col-md-8 m-auto order-lg-${data.illustrationPosition === "left" ? "last" : "first"}`}
                data-aos={data.aos}
              >
                <div className="illustration-holder2 d-flex justify-content-center align-items-center h-100">
                  {/* ✅ Utilisation de Link pour rediriger au clic */}
                  <Link to={data.link} className="image-button">
                    <img
                      src={data.illustration}
                      alt={data.illustrationAlt}
                      className="lazy-img"
                      style={{ maxHeight: "90%", maxWidth: "90%", objectFit: "contain" }}
                    />
                  </Link>
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
