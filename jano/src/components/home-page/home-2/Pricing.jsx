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
    bgColor: "#FFF7EB",
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
    bgColor: "#E2F2FD",
    animDelay: "100",
  },
  // {
  //   id: 3,
  //   name: "VPS",
  //   details: "For individuals and teams",
  //   price: "$37",
  //   billing: "All users, monthly",
  //   limit: "for unlimited users",
  //   btnClass: "trial-button",
  //   features: [
  //     "Unlimited Email",
  //     "5gb Hosting",
  //     "2 website 3 sub domain",
  //     "Email & Live chat",
  //     "Backling",
  //     "Discount Program",
  //   ],
  //   bgColor: "#FFEBEB",
  //   animDelay: "200",
  // },
  // {
  //   id: 4,
  //   name: "Dedicated",
  //   details: "For individuals and teams",
  //   price: "$79",
  //   billing: "All users, monthly",
  //   limit: "for unlimited users",
  //   btnClass: "trial-button",
  //   features: [
  //     "Unlimited Email",
  //     "5gb Hosting",
  //     "2 website 3 sub domain",
  //     "Email & Live chat",
  //     "Backling",
  //     "Discount Program",
  //   ],
  //   bgColor: "#E4F4F1",
  //   animDelay: "300",
  // },
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
              style={{height: "800px"}} //
          >
            <div className="pack-name fw-500 tx-dark">{plan.name}</div>
            <div className="pack-details text-uppercase fs-14">
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
                  <li key={i}>{feature}</li>
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
