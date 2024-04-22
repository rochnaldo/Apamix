import React, { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Particuliers",
    details: "Pour les particuliers",
    price: "$8",
    src: "/images/assets/particulier.svg",
    billing: "Per editor, monthly",
    limit: "with unlimited email",
    btnClass: "trial-button",
    features: [
      "Avancées en âge",
      "En situation de handicap",
      "Atteintes de maladies chroniques",
      "Remise en forme",
    ],
    bgColor: "#25abbe",
    animDelay: "0",
  },
  {
    id: 2,
    name: "Entreprises",
    details: "Pour les entrepreneurs",
    price: "$12",
    src: "/images/assets/entreprise.svg",
    billing: "For team, monthly",
    limit: "team with 8 users",
    btnClass: "trial-button",
    features: [
      "Entreprises privés",
      "EHPAD",
      "Résidence sénior",
      "FAM",
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
          className="col-xl-4 col-sm-6"
          key={plan.id}
          data-aos="fade-up"
          data-aos-delay={plan.animDelay}
        >
          <div
              className="pr-table-wrapper mt-40 d-flex flex-column justify-content-between"
              style={{height: "800px", backgroundColor: plan.bgColor, borderRadius: 30}}
          >
            <div className="pack-name fw-500 tx-dark">{plan.name}</div>
            <div className="pack-details text-uppercase fs-14" style={{maxHeight: "400px", color: "white"}}>
              {plan.details}
            </div>
            <div className="d-flex justify-content-center mb-3">
              <img
                  src={plan.src}
                  className="lazy-img avatar-img"
                  alt="man"
              />
            </div>
            {/* /.top-banner */}
            <ul className="pr-feature style-none">
              {plan.features.map((feature, i) => (
                  <li style={{color: "white"}}  key={i}>{feature}</li>
              ))}
            </ul>
            <a href="#" className={plan.btnClass}>
              Voir l'offre
            </a>
            <div className="trial-text pt-25 tx-dark">
              Offre disponible
            </div>
          </div>
          {/* /.pr-table-wrapper */}
        </div>

      ))}
    </>
  );
};

export default Pricing;
