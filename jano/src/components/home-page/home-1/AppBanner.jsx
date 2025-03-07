const AppBanner = () => {
  const features = [
    <>
      <strong>Améliorer la condition physique générale</strong> : renforcer la force,
      l’endurance, la flexibilité et la coordination.
    </>,
    <>
      <strong>Optimiser le bien-être mental</strong> : réduire le stress, l’anxiété et
      améliorer l’humeur.
    </>,
    <>
      <strong>Prévenir et gérer les maladies chroniques</strong> : aider à mieux gérer
      les symptômes et à améliorer la qualité de vie.
    </>,
    <>
      <strong>Favoriser l’autonomie</strong> : aider les personnes à accomplir les
      activités quotidiennes avec plus de facilité.
    </>
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
              <h2 className="hero-heading fw-bold m0" style={{paddingLeft: "15px"}}>
                Qu’est ce que l’activité physique adaptée ?
              </h2>
            </div>
            <p className="fs-20 pt-30 pb-30 lg-pb-20" style={{marginLeft: "15px"}}>
              L’ activité physique adaptée (APA) est une pratique spécialisée qui
              consiste à concevoir et à encadrer des programmes d’exercices
              physiques en fonction des besoins individuels des personnes. Cette approche est
              conçue pour améliorer la santé, le bien-être et la qualité de vie des individus, en
              tenant compte de leurs capacités physiques, de leurs conditions médicales et de
              leurs objectifs personnels.
            </p>
            <ul className="style-none list-item fs-4 p-3 border" style={{borderRadius: 25, borderStyle: 'solid'}}>
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
          </div>
          {" "}

          <div className="col-lg-12 mb-3 text-start" style={{marginTop: "380px"}}>
            <h2 className="hero-heading fw-bold m0" style={{paddingLeft: "5px"}}>Sport sur ordonnance</h2>
            <p className="fs-20 pt-30 pb-30 lg-pb-20" style={{marginLeft: "5px"}}>
              L’ activité physique adaptée est souvent prescrite par les médecins comme
              complément aux traitements médicaux traditionnels. Les professionnels de santé
              recommandent des programmes d’APA pour les personnes ayant des besoins
              spécifiques, qu’ils soient liés à des pathologies, des séquelles de blessures ou des
              conditions de vie particulières. L’objectif est de personnaliser l’activité physique
              pour qu’elle soit à la fois sûre et efficace.
            </p>
          </div>
        </div>
      </div>
          );
          };

          export default AppBanner;
