import { Link } from "react-router-dom";
import React, { useRef, useEffect } from "react";

const cardData = [
  {
    id: 1,
    iconSrc: "/images/icon/certificate.png",
    bgColor: "white",
    title: "Qualifications.",
    description:
      "Licence STAPS (Activité Physique Adaptée et Santé) + Master 2 (Activité Physique Adaptée et Santé).",
    delay: 0,
  },
  {
    id: 2,
    iconSrc: "/images/icon/3d-car.png",
    bgColor: "white",
    title: "Permis & véhicule.",
    description:
      "Permis de conduire et voiture personnelle.",
    delay: 200,
  },
  {
    id: 3,
    iconSrc: "/images/icon/recruitment.png",
    bgColor: "white",
    title: "Type de poste.",
    description:
      "Indépendant, à temps partiel.",
    delay: 300,
  },
  {
    id: 4,
    iconSrc: "/images/icon/social-care.png",
    bgColor: "white",
    title: "Responsabilités.",
    description:
      "Encadrer un public spécifique. Animer des séances en toute sécurité. Travailler efficacement en équipe. Adapter les séances en fonction du public cible. Ajuster les exercices en temps réel pour répondre aux besoins individuels.",
    delay: 0,
  },
];

const Block2 = () => {
  return (
    <div className="row justify-content-center">
      {cardData.map((card, index) => (
        <div
          className="col-lg-3 col-sm-6 mb-20"
          data-aos="fade-up"
          data-aos-delay={card.delay}
          key={card.id}
        >
          <div
            className="card-style-one pe-xxl-5 position-relative mb-90 md-mb-70"
            style={{ backgroundColor: card.bgColor }}
          >
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: card.bgColor }}
            >
              <img src={card.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h5 className="fw-500 mt-35 mb-25">
              <Link to="/pages-menu/service-details" className="tran3s tx-dark">
                {card.title}
              </Link>
            </h5>
            <p className="mb-25">{card.description}</p>
            <Link to="/pages-menu/service-details">

            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block2;
