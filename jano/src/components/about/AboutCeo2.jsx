import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutCeo2 = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const products = [
    {
      title: { subtitle: "Offre", mainTitle: <>Prises en Charge <span>Collectives et Individuelles</span></> },
      content: {
        sectionTitle: "Des programmes adaptés aux besoins de vos patients ou résidents",
        description: `Nous proposons des programmes d’activité physique adaptée en groupe ou en individuel, selon les besoins de vos patients ou résidents. 
        Nos interventions peuvent être intégrées directement dans vos structures ou organisées en sessions régulières pour soutenir la santé et le bien-être des participants.`
      },
      rating: { text: "Vous êtes intéressé ?", starsCount: 5 },
      img: "/images/media/img_01.jpg"
    },
    {
      title: { subtitle: "Offre", mainTitle: <>Bilans de Santé et <span>Évaluations Personnalisées</span></> },
      content: {
        sectionTitle: "Une évaluation complète pour optimiser l’accompagnement",
        description: `Nos experts réalisent des bilans de santé complets pour évaluer les besoins physiques de chaque individu. 
        Ces évaluations nous permettent de concevoir des programmes personnalisés qui optimisent les bénéfices de l’activité physique en fonction des conditions spécifiques et des objectifs de chaque personne.`
      },
      rating: { text: "Vous êtes intéressé ?", starsCount: 4 },
      img: "/images/media/img_01.jpg"
    },
    {
      title: { subtitle: "Offre", mainTitle: <>Interventions <span>Spécifiques sur Demande</span></> },
      content: {
        sectionTitle: "Des solutions adaptées à vos besoins",
        description: `Nous offrons également des interventions spécifiques selon les besoins particuliers de vos établissements. 
        Que ce soit pour des programmes adaptés aux pathologies spécifiques, des ateliers de prévention ou des activités de réhabilitation, 
        nous pouvons répondre à des demandes sur mesure pour mieux servir vos clients et résidents.`
      },
      rating: { text: "Vous êtes intéressé ?", starsCount: 4 },
      img: "/images/media/img_01.jpg"
    },
    {
      title: { subtitle: "Offre", mainTitle: <>Sport en <span>Entreprise</span></> },
      content: {
        sectionTitle: "Des solutions adaptées au milieu professionnel",
        description: `Pour les entreprises, nous proposons des solutions d’activité physique adaptées au milieu professionnel. 
        Nos programmes sont conçus pour améliorer la santé, la productivité et le bien-être des employés. 
        Nous offrons des séances sur site, des ateliers de sensibilisation, et des conseils pour intégrer l’activité physique dans la routine de travail.`
      },
      rating: { text: "Vous êtes intéressé ?", starsCount: 4 },
      img: "/images/media/img_01.jpg"
    }
  ];

  const changeProduct = (increment) => {
    const newIndex = (currentProductIndex + increment + products.length) % products.length;
    setCurrentProductIndex(newIndex);
  };

  return (
    <>
      {/* Affichage normal */}
      {!showDetails ? (
        <div className="row align-items-start">
          <div className="col-md-6 order-md-first img-container" data-aos="fade-right">
            <img
              style={{ objectFit: "cover", height: "100%" }}
              src={products[currentProductIndex].img}
              alt="Product Image"
              className="lazy-img"
            />
          </div>

          <div className="col-lg-5 col-md-6 order-md-last">
            <div className="block-style-one" data-aos="fade-left">
              <div className="title-style-one">
                <div className="sc-title text-uppercase">{products[currentProductIndex].title.subtitle}</div>
                <h2 className="main-title text-black">{products[currentProductIndex].title.mainTitle}</h2>
              </div>
              <h4 className="tx-dark pt-65 pb-20 lg-pt-40 lg-pb-10">{products[currentProductIndex].content.sectionTitle}</h4>
              <p className="fs-20">{products[currentProductIndex].content.description}</p>

              {/* Bouton "En savoir plus" pour "Sport en Entreprise" */}
              {currentProductIndex === 3 && (
                <p className="fs-20">
                {products[currentProductIndex].content.description}{" "}
                {currentProductIndex === 3 && (
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setShowDetails(true); }} 
                    className="text-primary fw-bold"
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    En savoir plus
                  </a>
                )}
              </p>
              
              )}

              <button className="btn-twentyOne mt-3">
                <Link to="/contact/contact-v1" className="text-white text-decoration-none">
                  Prendre contact
                </Link>
              </button>
            </div>
          </div>

          {/* Flèche de navigation */}
          <div className="col-md-1 order-md-last d-flex align-items-center justify-content-center"
            style={{ height: "100%", marginTop: "300px" }}>
            <img
              src="images/assets/fleche-droite.png"
              alt="Next Product"
              onClick={() => changeProduct(1)}
              className="img-fluid"
              style={{ cursor: "pointer", transition: "transform 0.3s" }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
        </div>
      ) : (
        /* Bloc modal avec tout le texte */
        <div className="modal-container">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowDetails(false)}>❌</button>
            <h2>Sport en Entreprise</h2>
            <p>
              Chez APAMIX, nous croyons fermement que l’intégration de l’activité physique dans le milieu professionnel est essentielle pour
              améliorer la santé et le bien-être des employés. Nos programmes de sport en entreprise sont conçus pour non seulement
              encourager l’activité physique mais aussi optimiser les environnements de travail grâce à l’ergonomie.
            </p>
            <h4>Avantages du Sport en Entreprise :</h4>
            <ul>
              <li><strong>Réduction des Arrêts de Travail :</strong> Des études montrent que les entreprises qui intègrent des programmes d’activité physique voient une réduction significative des
arrêts de travail. En moyenne, les programmes d’activité physique en entreprise peuvent réduire les absences liées à des
problèmes de santé de 25 à 30%. Nos clients constatent souvent une diminution des arrêts de travail, améliorant ainsi la
productivité globale.</li>
              <br/><li><strong>Amélioration de la Productivité :</strong> L’activité physique régulière est directement liée à une augmentation de la productivité. Des recherches indiquent que les
employés qui participent à des programmes de sport en entreprise peuvent améliorer leur concentration et leur performance de
15 à 20%. En renforçant l’endurance et la concentration, nos programmes contribuent à une meilleure performance au travail.</li>
              <br/><li><strong>Réduction du Stress :</strong> L'exercice physique est un excellent moyen de réduire le stress et d'améliorer l'humeur. Nos programmes sont conçus pour offrir
des séances dynamiques qui aident à réduire le stress au travail et à promouvoir un environnement de travail plus positif et
dynamique.</li>
            </ul>
            <br/>
            <h4>Ergonomie au Travail :</h4>
            <ul>
              <li><strong>Optimisation des Espaces :</strong> En plus de nos programmes d’activité physique, nous proposons également des conseils en ergonomie pour améliorer les
espaces de travail. Une bonne ergonomie peut prévenir les troubles musculo-squelettiques et améliorer le confort des employés.
Nous offrons des évaluations ergonomiques et des recommandations personnalisées pour ajuster les postes de travail et les
équipements.</li>
<br/>
              <li><strong>Formations Ergonomiques :</strong> Nous organisons des ateliers et des formations sur les meilleures pratiques ergonomiques, enseignant aux employés comment
              adopter des postures correctes et ajuster leur environnement de travail pour minimiser les risques de blessures.</li>
            </ul>
            <h4>Pourquoi choisir APAMIX ?</h4>
            <p>
            Nos programmes de sport en entreprise sont conçus pour répondre aux besoins spécifiques de votre organisation et de vos
            employés. En combinant l’activité physique avec des conseils ergonomiques, nous offrons une solution complète pour améliorer
            la santé, le bien-être, et la productivité au travail.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutCeo2;
