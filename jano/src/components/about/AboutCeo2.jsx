import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";


const AboutCeo2 = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
   const titleRef = useRef(null);
   const navigate = useNavigate();

   const handleSelect = (event) => {
    const selectedIndex = Number(event.target.value);
    setCurrentProductIndex(selectedIndex);
  
    // Si tu veux scroller jusqu'au titre :
    if (titleRef.current) {
      const yOffset = 100;
      const yPosition =
        titleRef.current.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  const products = [
    {
      title: { subtitle: "Offre", mainTitle: <>Prises en Charge <span>Collectives et Individuelles</span></> },
      content: {
        sectionTitle: "Des programmes adaptés aux besoins de vos patients ou résidents",
        description: `Nous proposons des programmes d’activité physique adaptée en groupe ou en individuel, selon les besoins de vos patients ou résidents. 
        Nos interventions peuvent être intégrées directement dans vos structures ou organisées en sessions régulières pour soutenir la santé et le bien-être des participants.`
      },
      rating: { text: "Vous êtes intéressé ?", starsCount: 5 },
      img: "/images/Menu/en1.jpeg"
    },
    {
      title: { subtitle: "Offre", mainTitle: <>Bilans de Santé et <span>Évaluations Personnalisées</span></> },
      content: {
        sectionTitle: "Une évaluation complète pour optimiser l’accompagnement",
        description: `Nos experts réalisent des bilans de santé complets pour évaluer les besoins physiques de chaque individu. 
        Ces évaluations nous permettent de concevoir des programmes personnalisés qui optimisent les bénéfices de l’activité physique en fonction des conditions spécifiques et des objectifs de chaque personne.`
      },
      rating: { text: "Vous êtes intéressé ?", starsCount: 4 },
      img: "/images/Menu/pa3.jpeg"
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
      img: "/images/Menu/3.jpeg"
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
      img: "/images/Menu/1.jpeg"
    }
  ];

  const changeProduct = (increment) => {
    const newIndex = (currentProductIndex + increment + products.length) % products.length;
    setCurrentProductIndex(newIndex);

    if (titleRef.current) {
      const yOffset = 100; // Décale vers le haut de 15px
      const yPosition = titleRef.current.getBoundingClientRect().top + window.scrollY - yOffset;
  
      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Affichage normal */}
      <div className="text-center mb-4">
  <label htmlFor="offerSelect" className="fw-bold">Sélectionnez votre offre :</label>
  <select
    id="offerSelect"
    className="form-select mt-2"
    style={{ maxWidth: "300px", margin: "0 auto" }}
    onChange={handleSelect}
    value={currentProductIndex}
  >
    {products.map((product, index) => (
      <option key={index} value={index}>
        {product.title.mainTitle}
      </option>
    ))}
  </select>
</div>
      {!showDetails ? (
        <div className="row align-items-start" ref={titleRef}>
          {/* Image à gauche sur Desktop uniquement */}
          <div className="col-md-6 order-md-first img-container d-none d-md-block" data-aos="fade-right">
            <img 
              src={products[currentProductIndex].img} 
              alt="Product Image" 
              className="lazy-img"
              style={{ 
                width: "100%", 
                height: "720px", 
                objectFit: "cover", 
                borderRadius: "0px",
                boxShadow: "none",
                maxHeight: "800px"
              }} 
            />
          </div>

          <div className="col-lg-5 col-md-6 order-md-last">
            <div className="block-style-one" data-aos="fade-left">
              <div className="title-style-one">
                <div className="sc-title text-uppercase">{products[currentProductIndex].title.subtitle}</div>
                <h2 className="hero-heading fw-bold">{products[currentProductIndex].title.mainTitle}</h2>

                {/* Image sous le titre pour mobile uniquement */}
                <div className="d-md-none" style={{ marginTop: "15px", marginBottom: "20px", textAlign: "center" }}>
                  <img 
                    src={products[currentProductIndex].img} 
                    alt="Product Image" 
                    className="lazy-img"
                    style={{ 
                      width: "100%", 
                      maxWidth: "350px",  
                      maxHeight: "250px", 
                      objectFit: "cover", 
                      borderRadius: "15px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
                    }} 
                  />
                </div>
              </div>

              <h4 className="tx-dark pt-65 pb-20 lg-pt-40 lg-pb-10">{products[currentProductIndex].content.sectionTitle}</h4>
              <p className="fs-20">{products[currentProductIndex].content.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", justifyContent: "center", width: "100%", padding: "0 10px" }}>
                <button  onClick={() => navigate("/contact/contact-v1")} className="btn-twentyOne" style={{ width: "100%", maxWidth: "400px" }}>
                  Prendre contact
                </button>

                <button 
                  className="btn-twentyOne" 
                  style={{ backgroundColor: "grey", width: "100%", maxWidth: "400px" }} 
                  onClick={() => changeProduct(1)}
                >
                  Offre suivante →
                </button>
              </div>
            </div>
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
              améliorer la santé et le bien-être des employés. Nos programmes de sport en entreprise sont conçus pour encourager
              l’activité physique et optimiser les environnements de travail grâce à l’ergonomie.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutCeo2;
