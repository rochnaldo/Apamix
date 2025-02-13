import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutCeo = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const products = [
    {
      title: {
        subtitle: "Offre",
        mainTitle: (
          <>
            Séance <span>individuelle</span>
          </>
        ),
      },
      content: {
        sectionTitle: "Comment se passe la séance ?",
        description:
          "Dans une séance individuelle d'activité physique adaptée, bénéficiez d'un accompagnement personnalisé et attentif à vos besoins spécifiques. Explorez un programme sur mesure conçu pour améliorer votre condition physique, votre santé et votre bien-être, le tout dans un environnement confortable et sécurisé."
      },
      rating: {
        text: "Vous êtes intéressé ?",
        starsCount: 5,
      },
      img: "/images/media/img_01.jpg"
    },
    {
      title: {
        subtitle: "Offre",
        mainTitle: (
          <>
            Séance <span>Collective</span>
          </>
        ),
      },
      content: {
        sectionTitle: "Sous quelle forme ?",
        description: showFullDescription
          ? (<>
              Nos séances collectives sont conçues pour répondre aux besoins de chacun, quel que soit votre niveau ou votre situation de santé. Chaque groupe est formé en fonction des demandes et des disponibilités, ce qui vous permet de rejoindre un programme adapté à vos objectifs spécifiques. Chaque cours est pensé pour que vous puissiez évoluer à votre rythme, tout en bénéficiant de l’énergie du collectif. En plus de l’activité physique, ces séances sont une opportunité unique de partager votre expérience, de créer des liens, et de trouver du soutien auprès d’autres personnes qui traversent des défis similaires.
              <br/><br/>
              Pour savoir quels groupes sont ouverts en ce moment, n’hésitez pas à faire une demande ! Nous serons ravis de vous accompagner.
            </>)
          : "Nos séances collectives sont conçues pour répondre aux besoins de chacun, quel que soit votre niveau ou votre situation de santé. Chaque groupe est formé en fonction des demandes et des disponibilités...",
      },
      rating: {
        text: "Vous êtes intéressé ?",
        starsCount: 4,
      },
      img: "/images/media/img_01.jpg"
    },
    {
      title: {
        subtitle: "Offre",
        mainTitle: (
          <>
            Conseils en Nutrition et  <span>Bien-être</span>
          </>
        ),
      },
      content: {
        sectionTitle: "En quoi ça consiste ?",
        description: "Notre offre est là pour vous aider à atteindre un équilibre de vie sain et durable. Nous vous proposons un accompagnement personnalisé pour améliorer vos habitudes alimentaires, que ce soit pour perdre du poids, améliorer votre énergie, ou gérer une pathologie spécifique. Nos experts en nutrition élaboreront avec vous un plan adapté à vos besoins et à votre rythme, tout en prenant en compte vos préférences et contraintes."
      },
      rating: {
        text: "Vous êtes intéressé ?",
        starsCount: 5,
      },
      img: "/images/media/img_01.jpg"
    },
    {
      title: {
        subtitle: "Offre",
        mainTitle: (
          <>
            Les<span> livrets</span>
          </>
        ),
      },
      content: {
        sectionTitle: "En quoi ça consiste ?",
        description:
        "Chaque livret est disponible à l’achat unique et couvre une thématique spécifique, comme par exemple la perte de poids, le cancer, les troubles du sommeil, le diabète, ou la perte d’autonomie. Conçu pour offrir des information précises et adaptées, chaque livret vous guide sur les exercices que vous pouvez pratiquer en toute sécurité, en tenant compte de votre situation personnelle, de la difficulté ou des contre-indications liées à votre conditi ou maladie. Ces guides sont conçus pour vous aider à intégrer des activités physiques adaptées à votre état de santé, afin de vous soutenir dans votre parcours vers le bien-être."
      },
      rating: {
        text: "Vous êtes intéressé ?",
        starsCount: 4,
      },
      img: "/images/media/img_01.jpg"
    },
  ];

  const changeProduct = (increment) => {
    const newIndex = (currentProductIndex + increment + products.length) % products.length;
    setCurrentProductIndex(newIndex);
    setShowFullDescription(false); // Réinitialiser l'affichage de la description
  };

  return (
    <div className="row align-items-start">
      <div className="col-md-6 order-md-first img-container" data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 sm-mt-90">
          <img
            style={{ objectFit: "cover", height: "100%" }}
            src={products[currentProductIndex].img}
            alt="Product Image"
            className="lazy-img"
          />
        </div>
      </div>

      <div className="col-lg-5 col-md-6 order-md-last">
        <div className="block-style-one" data-aos="fade-left">
          <div className="title-style-one">
            <div className="sc-title text-uppercase">{products[currentProductIndex].title.subtitle}</div>
            <h2 className="main-title text-black">{products[currentProductIndex].title.mainTitle}</h2>
          </div>
          <h4 className="tx-dark pt-65 pb-20 lg-pt-40 lg-pb-10">{products[currentProductIndex].content.sectionTitle}</h4>
          <p className="fs-20">{products[currentProductIndex].content.description}</p>
          <p className="fs-18 mb-10 pt-30 lg-pt-20">
            <span className="fw-500 tx-dark">{products[currentProductIndex].rating.text}</span>
          </p>
          <button type="button" className="btn-twentyOne fw-500 tran3s">
            <Link to="/contact/contact-v1" className="text-white text-decoration-none">
              Prendre contact
            </Link>
          </button>
        </div>
      </div>

      <div className="col-md-1 order-md-last d-flex align-items-center justify-content-center" style={{ height: "100%", marginTop: "300px" }}>
        <img
          src="images/assets/fleche-droite.png"
          alt="Next Product"
          onClick={() => changeProduct(1)}
          className="img-fluid"
          style={{ cursor: "pointer", transition: "transform 0.3s" }}
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
    </div>
  );
};

export default AboutCeo;
