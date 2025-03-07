import ImgGallery from "./ImgGallery";
import "../../../../../Insurance.css";

const Intro = () => {
  return (
    <>
      <div className="title-style-eleven">
        <h2 className="main-title hero-heading fw-bold mt-45 mb-40 md-mt-20">
            Apamix pour les <span className="text-mobile-white">Particuliers</span>
        </h2>
      </div>

      {/* Image affichée au milieu sur mobile uniquement */}
      <div className="d-md-none mb-3" style={{ textAlign: "center" }}>
        <ImgGallery />
      </div>

      <div className="d-flex mt-70 mb-40 lg-mt-40 lg-mb-10">
        <p className="text-lg d-lg-block">
          Plus besoin de se déplacer, nous intervenons directement chez vous !
          Nous vous proposons des séances d’activité physique adaptée tout au long de l’année.
        </p>
      </div>
    </>
  );
};

export default Intro;
