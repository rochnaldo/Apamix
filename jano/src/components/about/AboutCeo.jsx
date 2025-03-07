import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../AboutCeo.css"

const AboutCeo = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("intro");
  const titleRef = useRef(null);
  const navigate = useNavigate();

  const products = [
    {
      title: { subtitle: "Offre", mainTitle: <>Séance <span>individuelle</span></> },
      content: {
        sectionTitle: "Comment se passe la séance ?",
        description: `Dans une séance individuelle d'activité physique adaptée, bénéficiez d'un accompagnement personnalisé et attentif à vos besoins spécifiques. 
        Explorez un programme sur mesure conçu pour améliorer votre condition physique, votre santé et votre bien-être, le tout dans un environnement confortable et sécurisé.`
      },
      rating: { text: "Vous êtes intéressé ?", starsCount: 5 },
      img: "/images/Menu/2.jpeg"
    },
    {
      title: { subtitle: "Offre", mainTitle: <>Séance <span>Collective</span></> },
      content: {
        sectionTitle: "Sous quelle forme ?",
        description: `Nos séances collectives sont conçues pour répondre aux besoins de chacun, quel que soit votre niveau ou votre
        situation de santé. Chaque groupe est formé en fonction des demandes et des disponibilités, ce qui vous permet de
        rejoindre un programme adapté à vos objectifs spécifiques. Chaque cours est pensé pour que vous puissiez évoluer à
        votre rythme, tout en bénéficiant de l’énergie du collectif. En plus de l’activité physique, ces séances sont une
        opportunité unique de partager votre expérience, de créer des liens, et de trouver du soutien auprès d’autres
        personnes qui traversent des défis similaires. <br></br>
        Pour savoir quels groupes sont ouverts en ce moment, n’hésitez pas à faire une demande ! Nous serons ravis de vous
        orienter vers le programme qui correspond le mieux à vos besoins.`
      },
      rating: { text: "Vous êtes intéressé ?", starsCount: 4 },
      img: "/images/Menu/1.jpeg"
    },
    {
      title: { subtitle: "Offre", mainTitle: <>Conseils en Nutrition et <span>Bien-être</span></> },
      content: {
        sectionTitle: "En quoi ça consiste ?",
        tabs: {
          intro: `<p><strong>Atteignez un équilibre de vie sain et durable avec un accompagnement personnalisé.</strong> <br/> <br/>Notre objectif est de vous aider à trouver un équilibre de vie optimal en prenant en compte tous les
                  aspects de votre bien-être. Notre programme se divise en 5 phases essentielles : hydratation,
                  nutrition, activité physique, sommeil et création planning. Chaque phase est conçue pour agir en
                  synergie et vous offrir des résultats durables.</p>`,
          guide: `<p><strong>Ce que nous vous proposons :</strong></p>
          <ul>
            <li><strong>Un guide complet et gratuit</strong> : Découvrez notre PDF exclusif qui vous guidera à travers ces 5 phases clés. Découvrez notre PDF exclusif qui vous guidera à travers ces 5 phases clés pour un bien-être optimal.
            Ce guide vous aidera à poser les bases d'une vie plus saine et plus équilibrée, en ajustant vos
            habitudes au quotidien.</li>
            <li><strong>Un accompagnement personnalisé</strong> : Après le téléchargement de notre guide, vous pouvez bénéficier d'un suivi adapté à vos besoins
                spécifiques. Que vous souhaitiez une transformation rapide ou une évolution progressive, nos experts
                élaboreront avec vous un plan nutritionnel et bien-être adapté à votre rythme et à vos objectifs.</li>
          </ul>`,
          suivi: `<p><strong>Nos offres de suivi personnalisé :</strong></p>
          <ul>
            <li>Suivi <strong>1 mois</strong> : Posez les bases de votre bien-être.</li>
            <li>Suivi <strong>3 mois</strong> : Un accompagnement avec des ajustements mensuels.</li>
            <li>Suivi <strong>6 mois</strong> : Un suivi approfondi avec des check-ins réguliers.</li>
          </ul>`,
          programme: `<p><strong>Un programme complet pour un bien-être global :</strong></p>
          <ul>
            <li><strong>Hydratation</strong> : L’importance de bien s’hydrater.</li>
            <li><strong>Alimentation</strong> : Des choix alimentaires adaptés.</li>
            <li><strong>Activité physique</strong> : Intégrer l’exercice au quotidien.</li>
            <li><strong>Sommeil</strong> : Stratégies pour améliorer la qualité du sommeil.</li>
            <li><strong>Création planning</strong> : Adapter ses habitudes pour garantir la pérennité des changements.</li><br/>
            <p>Prêt(e) à faire le premier pas vers une vie plus saine ?
              Téléchargez notre guide gratuit et commencez votre transformation aujourd'hui ! Pour un suivi plus
              personnalisé, contactez-nous et ensemble, nous établirons un plan sur mesure pour vous.</p>
          </ul>`
        }
      },
      rating: { text: "Vous êtes intéressé ?", starsCount: 5 },
      img: "/images/5 steps to.png"
    },
    {
      title: { subtitle: "Offre", mainTitle: <>Les <span>livrets</span></> },
      content: {
        sectionTitle: "Les livrets personnalisés : des solutions adaptées à votre pathologie",
        tabs: {
          intro: `<p>Nos livrets personnalisés sont conçus pour vous apporter des conseils pratiques et des solutions sur mesure selon votre pathologie.</p>
          <p>Chaque livret est dédié à une problématique spécifique et offre des recommandations ciblées tant sur l’alimentation que sur l’activité physique.</p>`,
    
          nutrition: `<p><strong>1. Conseils d’alimentation adaptés à votre pathologie</strong></p>
          <p>Conseils d’alimentation adaptés à votre pathologie
          Chaque livret propose des recommandations nutritionnelles spécifiques pour mieux gérer votre
          pathologie. Par exemple, pour la lombalgie chronique, vous trouverez des aliments anti-inflammatoires,
          des astuces pour soulager les douleurs et améliorer la mobilité, ainsi que des conseils pour favoriser la
          guérison.</p>`,
    
          exercices: `<p><strong>2. Programme d’exercice physique ciblé</strong></p>
          <p>Nos livrets contiennent des exercices simples et efficaces adaptés à chaque pathologie. 
          Ils sont conçus pour être accessibles à tous, même sans expérience en sport.</p>
          <p>Le but est de renforcer votre corps progressivement tout en évitant d'aggraver la situation. 
          Les exercices sont expliqués de manière détaillée, avec des photos ou illustrations pour vous guider.</p>`,
    
          exemples: `<p><strong>Nos exemples de livrets personnalisés :</strong></p>
          <ul>
            <li><strong>Lombalgie chronique :</strong> Réduire l'inflammation et améliorer la mobilité.</li>
            <li><strong>Douleurs articulaires :</strong> Exercices pour améliorer la flexibilité.</li>
            <li><strong>Problèmes de circulation :</strong> Exercices et alimentation pour stimuler la circulation sanguine.</li>
            <li><strong>Stress et anxiété :</strong> Stratégies de relaxation et exercices physiques.</li>
          </ul>`,
    
          commande: `<p><strong>Pourquoi choisir nos livrets ?</strong></p>
          <p>Nos livrets offrent un suivi détaillé et des solutions adaptées à long terme.</p>
          <p><strong>Prêt(e) à adopter une approche sur mesure pour votre pathologie ?</strong></p>
          <p>Commandez dès maintenant nos livrets personnalisés et commencez à appliquer les conseils et exercices recommandés.</p>`
        }
      },
      rating: { text: "Vous êtes intéressé ?", starsCount: 4 },
      img: "/images/media/conseils_nutrition.png"
    }
    
  ];

  // Permet de sélectionner l'offre dans le menu déroulant
const handleSelect = (event) => {
  const selectedIndex = Number(event.target.value);
  setCurrentProductIndex(selectedIndex);
};


  const changeProduct = (increment) => {
    const newIndex = (currentProductIndex + increment + products.length) % products.length;
    setCurrentProductIndex(newIndex);

    // Défilement vers le mainTitle
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
    <div>
    {/* MENU DÉROULANT EN HAUT AU CENTRE */}
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
    
    <div className="row align-items-start" ref={titleRef}>

      {/* IMAGE */}
      <div className="col-md-6 order-md-first img-container d-none d-md-block">
        <img 
          src={products[currentProductIndex].img} 
          alt="Product Image" 
          className="lazy-img"
          style={{ 
            width: "100%", 
            height: "730px", 
            objectFit: "cover", 
            borderRadius: "0px",
            boxShadow: "none",
            maxHeight: "800px"
          }} 
        />
      </div>
  
      {/* CONTENU */}
      <div className="col-lg-5 col-md-6 order-md-last">
        <div className="block-style-one">
          <div className="title-style-one">
          <div className="sc-title text-uppercase" style={{ display: window.innerWidth <= 768 ? 'none' : 'block' }}>
            {products[currentProductIndex].title.subtitle}
          </div>
            <h2 className="hero-heading fw-bold">{products[currentProductIndex].title.mainTitle}</h2>
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
  
          <h4>{products[currentProductIndex].content.sectionTitle}</h4>
  
          {(currentProductIndex === 2 || currentProductIndex === 3) ? (
          <>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center"
            }}>
              {Object.keys(products[currentProductIndex].content.tabs).map((tab) => (
                <button key={tab}
                  style={{
                    flex: "1 1 45%",
                    minWidth: "120px",
                    padding: "8px",
                    backgroundColor: activeTab === tab ? "#25ABBE" : "#f5f5f5",
                    color: activeTab === tab ? "white" : "black",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveTab(tab)}>
                  {tab === "intro" ? "Introduction" :
                    tab === "guide" ? "Guide & Accompagnement" :
                    tab === "suivi" ? "Suivi Personnalisé" :
                    tab === "nutrition" ? "Conseils Nutrition" :
                    tab === "exercices" ? "Exercices Ciblés" :
                    tab === "exemples" ? "Exemples de Livrets" :
                    "Commander"}
                </button>
              ))}
            </div>
              <div style={{marginTop: "20px"}}>
                  <p className="fs-20" style={{margintTop: ''}} dangerouslySetInnerHTML={{ __html: products[currentProductIndex].content.tabs[activeTab] }}></p>
              </div>
          </>
        ) : (
          <div style={{marginTop: "20px"}}>
            <p className="fs-20" dangerouslySetInnerHTML={{ __html: products[currentProductIndex].content.description }}></p> 
          </div>
        )}
  
          {/* Bouton de contact */}
          <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",        // Le container prend toute la largeur
    padding: "0 10px",    // Petite marge latérale pour éviter que le bouton soit collé
  }}
>
  <button
    className="btn-twentyOne"
    style={{
      // Sur un mobile (écran étroit), width="100%" prendra toute la largeur possible
      // Sur un écran plus large, on limite la taille max à 400px pour ne pas étirer le bouton à l’infini
      width: "100%",
      maxWidth: "400px",
    }}
    onClick={() => navigate("/contact/contact-v1")}
  >
    Prendre Contact
  </button>

  <button
    className="btn-twentyOne"
    style={{
      backgroundColor: "grey",
      width: "100%",
      maxWidth: "400px",
    }}
    onClick={() => changeProduct(1)}
  >
    Offre suivante →
  </button>
</div>

        </div>
      </div>
    </div>
    </div>
  );
};  
// ✅ STYLES INLINE
const styles = {
  tabContainer: { display: "flex", gap: "10px", marginBottom: "15px" },
  tabButton: { padding: "8px", backgroundColor: "#f5f5f5", borderRadius: "5px", cursor: "pointer" },
  activeTab: { padding: "8px", backgroundColor: "#000", color: "white", borderRadius: "5px" }
};

export default AboutCeo;
