import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <>
        <h1 className="hero-heading fw-bold mt-45 mb-40 md-mt-20">
            Prenez le contrôle de votre santé avec <span className="gradient-text">Apamix</span>  <br/>
            Excellence en mouvement.
        </h1>
        <p className="text-lg mb-50 lg-mb-30 pe-xxl-4">
            Le sport pour tous !
            Offrez-vous la santé que vous méritez : commencez dès
            maintenant avec une séance d’activité physique adaptée
            et transformez votre vie
        </p>

        <div className="d-sm-flex align-items-center">
        <Link
            href="#"
            className="btn-sixteen fw-500 tran3s mb-25 me-4 order-sm-first"
        >
            Réservez votre séance
        </Link>
    </div>
        {/*<h2 className="fw-500 mt-40 mb-5">A+ Rating </h2>*/}
        {/*<p className="fs-18 opacity-75">*/}
        {/*  Avg rating 4.8 makes us world most best apps.*/}
        {/*</p>*/}
    </>
  );
};

export default Hero;
