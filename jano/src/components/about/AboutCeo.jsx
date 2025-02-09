import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutCeo = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

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
        "Dans une séance individuelle d'activité physique adaptée, bénéficiez d'un accompagnement personnalisé et attentif à vos besoins spécifiques. Explorez un programme sur mesure conçu pour améliorer votre condition physique, votre santé et votre bien-être, le tout dans un environnement confortable et sécurisé "
      },
      rating: {
        text: "Vous êtes interessez ?",
        starsCount: 5,
      },
      img: "/images/media/img_01.jpg"
    },
    {
      title: {
        subtitle: "Offre",
        mainTitle: (
            <>
              Séance <span>Collectives</span>
            </>
        ),
      },
      content: {
        sectionTitle: "Comment se passe la séance ?",
        description:
        "Déroulez-vous dans une séance collective d'activité physique adaptée, alliant dynamisme et sécurité. Sous la direction d'un professionnel, explorez une variété d'exercices stimulants et adaptés à chacun, favorisant le bien-être et la convivialité."
      },
      rating: {
        text: "Vous êtes interessez ?",
        starsCount: 4,
      },
      img: "/images/media/img_01.jpg"
    },
    {
    title: {
      subtitle: "Offre",
      mainTitle: (
        <>
            Programme <span>Remise en forme</span> après blessure
          </>
      ),
    },
    content: {
      sectionTitle: "Comment se passe la séance ?",
      description:
      "Plongez dans une séance de remise en forme dynamique, conçue pour vous aider à atteindre vos objectifs de santé et de bien-être. Sous la guidance d'un professionnel qualifié, engagez-vous dans un mélange d'exercices variés et stimulants, adaptés à votre niveau et visant à renforcer votre corps et à revitaliser votre esprit"
    },
    rating: {
      text: "Vous êtes interessez ?",
      starsCount: 4,
    },
      img: "/images/media/img_01.jpg"
  },
    {
      title: {
        subtitle: "Offre",
        mainTitle: (
            <>
              Programme <span>ADL</span>
            </>
        ),
      },
      content: {
        sectionTitle: "Comment se passe la séance ?",
        description:
        "Découvrez un programme d'activités de la vie quotidienne conçu pour améliorer votre autonomie et votre qualité de vie. Avec une approche personnalisée, explorez des exercices pratiques visant à renforcer vos capacités fonctionnelles, à faciliter vos tâches quotidiennes et à favoriser votre bien-être général, le tout dans un environnement sécurisé et encourageant"

      },
      rating: {
        text: "Vous êtes interessez ?",
        starsCount: 4,
      },
      img: "/images/media/img_01.jpg"
    },
  ];

 const renderProduct = (product) => {
  const starIcons = Array.from(
    { length: product.rating.starsCount },
    (_, index) => (
      <li key={index}>
        <i className="bi bi-star-fill" />
      </li>
    )
  );

    return (
    <div className="row align-items-start">
      <div className="col-md-6 order-md-first img-container" data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 sm-mt-90">
          <img
            style={{ objectFit: "cover", height: "100%" }}
            src={product.img} // Change this to use product.image
            alt="Product Image"
            className="lazy-img"
          />
          {/* Autres éléments de style pour l'image */}
        </div>
      </div>

      <div className="col-lg-5 col-md-6 order-md-last">
        <div className="block-style-one" data-aos="fade-left">
          <div className="title-style-one">
            <div className="sc-title text-uppercase">{product.title.subtitle}</div>
            <h2 className="main-title text-black">{product.title.mainTitle}</h2>
          </div>
          <h4 className="tx-dark pt-65 pb-20 lg-pt-40 lg-pb-10">{product.content.sectionTitle}</h4>
          <p className="fs-20">{product.content.description}</p>
          <p className="fs-18 mb-10 pt-30 lg-pt-20">
            <span className="fw-500 tx-dark">{product.rating.text}</span>
          </p>
          <button type="button" className="btn-twentyOne fw-500 tran3s">
            <Link to="/contact/contact-v1" className="text-white text-decoration-none">
              Prendre contact
            </Link>
          </button>

        </div>
      </div>

      {/* Image de la flèche de droite */}
      <div className="col-md-1 order-md-last d-flex align-items-center justify-content-center"
           style={{height: "100%", marginTop: "300px"}}>
        <img
            src="images/assets/fleche-droite.png"
            alt="Next Product"
            onClick={() => changeProduct(1)}
            className="img-fluid"
            style={{cursor: "pointer", transition: "transform 0.3s"}}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
      </div>


    </div>
    );
 };


  const changeProduct = (increment) => {
    const newIndex = (currentProductIndex + increment + products.length) % products.length;
    setCurrentProductIndex(newIndex);
  };

  return (
      <>
        {renderProduct(products[currentProductIndex])}

      </>
  );
};

export default AboutCeo;
