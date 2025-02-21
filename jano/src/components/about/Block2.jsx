import { Link } from "react-router-dom";
import React, { useState } from "react";

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
    description: "Permis de conduire et voiture personnelle.",
    delay: 200,
  },
  {
    id: 3,
    iconSrc: "/images/icon/recruitment.png",
    bgColor: "white",
    title: "Type de poste.",
    description: "Indépendant, à temps partiel.",
    delay: 300,
  },
  {
    id: 4,
    iconSrc: "/images/icon/social-care.png",
    bgColor: "white",
    title: "Responsabilités.",
    description: "Passion pour l’Activité Physique Adaptée, compétence technique et esprit d’équipe.",
    fullDescription: `
      <strong>- Passion pour l’Activité Physique Adaptée :</strong> Un véritable enthousiasme pour aider les personnes à améliorer leur bien-être physique et mental.<br/>
      <strong>- Compétence Technique et Expertise :</strong> Une solide connaissance des techniques d’activité physique adaptée et des compétences en réhabilitation physique.<br/>
      <strong>- Empathie et Patience :</strong> La capacité à comprendre les besoins individuels des clients et à les accompagner avec bienveillance et patience.<br/>
      <strong>- Excellentes Compétences en Communication :</strong> La capacité à expliquer clairement les exercices, à motiver les clients et à établir des relations de confiance.<br/>
      <strong>- Capacité d’Adaptation :</strong> La flexibilité pour ajuster les programmes en fonction des besoins variés des clients et des situations.<br/>
      <strong>- Esprit d’Équipe :</strong> Un bon collaborateur, capable de travailler en harmonie avec d'autres professionnels pour offrir les meilleurs résultats.<br/>
      <strong>- Sens de l’Organisation :</strong> Une bonne gestion du temps et des ressources pour planifier et exécuter les séances de manière efficace.<br/>
      <strong>- Compétences en Évaluation et Analyse :</strong> La capacité à réaliser des bilans de santé, à évaluer les progrès des clients et à ajuster les programmes en conséquence.<br/>
      <strong>- Sens de l’Initiative et Créativité :</strong> La capacité à proposer des idées nouvelles et à créer des programmes innovants qui répondent aux besoins des clients.<br/>
      <strong>- Compétences en Gestion de Stress :</strong> La capacité à gérer des situations stressantes et à rester calme et professionnel en toutes circonstances.<br/>
      <strong>- Respect de l’Éthique Professionnelle :</strong> Un engagement ferme à respecter les normes éthiques et à garantir la confidentialité des informations des clients.
    `,
    delay: 0,
  },
];

const Block2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (fullText) => {
    setModalContent(fullText);
    setShowModal(true);
  };

  return (
    <>
      <div className="row justify-content-center">
        {cardData.map((card) => (
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

              <p className="mb-25">
                {card.description}
                {/* Afficher le lien "Voir la suite" uniquement pour "Responsabilités" */}
                {card.id === 4 && (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal(card.fullDescription);
                    }}
                    className="text-primary fw-bold"
                    style={{ cursor: "pointer", textDecoration: "underline", marginLeft: "5px" }}
                  >
                    Voir la suite
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal d'affichage en grand */}
      {showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>❌</button>
            <h3 className="modal-title">Responsabilités</h3>
            <p dangerouslySetInnerHTML={{ __html: modalContent }}></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Block2;
