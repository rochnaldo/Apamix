const AppBanner = () => {
  const features = [
    "Compare different insurance Item",
    "Buy, store and share all your policies online",
    "Email & Live chat.",
  ];

  const buttons = [
    {
      platform: "Google play",
      icon: "images/icon/playstore.svg",
      className: "windows-button",
    },
    {
      platform: "App store",
      icon: "images/icon/apple-black.svg",
      className: "ios-button",
    },
  ];

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven" data-aos="fade-right">
          <div className="title-style-one">
            <h2 className="main-title fw-500 tx-dark m0">
              L’ Activité physique adaptée ?
            </h2>
          </div>
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
            L' activité physique est reconnue comme un élément crucial pour la santé, au point qu'elle est
            maintenant prescrite par les médecins pour les personnes de tous âges, qu'elles soient en bonne
            santé, atteintes de maladies chroniques, ou dans des situations spécifiques telles que la
            grossesse ou le vieillissement. La Haute Autorité de Santé souligne que l'activité physique apporte des bienfaits avérés
            pour la santé, la condition physique et la préservation de l'indépendance tout au long de la vie, la plaçant ainsi comme une thérapeutique à part entière.
          </p>
          <ul className="style-none list-item">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {/* End list */}

          {/* /.platform-button-group-three */}
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6" data-aos="fade-left">
        <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80">
          <img
            src="images/assets/run.svg"
            alt=""
            className="lazy-img screen-two"
          />
        </div>{" "}
        {/* /.illustration-holder */}
      </div>
    </div>
  );
};

export default AppBanner;
