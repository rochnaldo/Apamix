import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-banner-seven p-30">
      <div className="bg-wrapper position-relative pt-200 pb-20 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7" data-aos="fade-right">
              <h1 className="hero-heading fw-bold mt-40 mb-40 md-mt-20">
                Faites bouger votre vie vers la santé et le bien-être.
              </h1>
              <p className="text-lg mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40">
                Avec notre expertise en activité physique adaptée, découvrez le chemin
                vers une vie plus saine et équilibrée, où chaque mouvement compte.
              </p>
              <Link
                  to="/pages-menu/pricing"
                  className="btn-fourteen fw-500 tran3s"
              >
                Plans starting at only $3.95/mo
              </Link>
            </div>
          </div>
          {/* End .container */}

          <div className="illustration-holder" data-aos="fade-left">
            <img
              src="/images/assets/home_img.svg"
              alt="illustration"
              className="lazy-img main-illustration"
            />
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </div>
  );
};

export default Hero;
