import React, { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Particuliers",
    details: "Pour toi",
    price: "$8",
    src: "/images/assets/particulier.svg",
    billing: "Per editor, monthly",
    limit: "with unlimited email",
    btnClass: "trial-button",
    features: [
      "Une personne âgée",
      "En situation de handicap",
      "Atteinte d’une maladie chronique",
      "Atteint d’une pathologie",
      "Un sportif blessé",
      "En surpoids",
      "Remise en forme",
      "Autres"
    ],
    bgColor: "#25abbe",
    animDelay: "0",
  },
  {
    id: 2,
    name: "Professionels",
    details: "Pour vous",
    price: "$12",
    src: "/images/assets/entreprise.svg",
    billing: "For team, monthly",
    limit: "team with 8 users",
    btnClass: "trial-button",
    features: [
      "Entreprises privées",
      "Collectivités publiques",
      "Établissement de santé",
      "EHPAD",
      "Résidence séniors",
      "FAM",
      "Associations",
      "Autres"
    ],
    bgColor: "#ff66c4",
    animDelay: "100",
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);

  return (
      <>
        {plans.map((plan) => (
            <div
                className="col-xl-4 col-sm-6 mb-4 d-flex align-items-stretch"
                key={plan.id}
                data-aos="fade-up"
                data-aos-delay={plan.animDelay}
            >
              <div
                  className="pr-table-wrapper d-flex flex-column justify-content-between"
                  style={{
                    backgroundColor: plan.bgColor,
                    borderRadius: 30,
                    overflow: "hidden", // Cache les débordements
                    flex: "1 1 0", // Permet aux cartes de prendre toute la largeur disponible
                  }}
              >
                <div className="pack-name fw-500 tx-dark">{plan.name}</div>
                <div className="pack-details text-uppercase fs-14" style={{ maxHeight: "100px", color: "white" }}>
                  {plan.details}
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <img src={plan.src} className="lazy-img avatar-img" alt="man" />
                </div>
                <div className="pr-feature-container" style={{ overflowY: 'auto', maxHeight: '150px' }}>
                  <ul className="pr-feature style-none">
                    {plan.features.map((feature, i) => (
                        <li style={{ color: "white" }} key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <a href="#" className={plan.btnClass}>
                  En savoir plus
                </a>
              </div>
            </div>
        ))}
      </>
  );
};

export default Pricing;
