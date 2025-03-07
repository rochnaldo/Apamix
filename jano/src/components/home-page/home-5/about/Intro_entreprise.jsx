import ImgGallery2 from "./ImgGallery2";
import "../../../../../Insurance.css";

const Intro2 = () => {
  return (
    <>
      <div className="title-style-eleven">
        <h2 className="main-title hero-heading fw-bold mt-45 mb-40 md-mt-20">
          Apamix pour les <span className="text-mobile-white">Professionnels</span>
        </h2>
      </div>

      {/* Image affichée entre le titre et le paragraphe sur mobile uniquement */}
      <div className="d-md-none mt-3 mb-3" style={{ textAlign: "center" }}>
        <ImgGallery2 />
      </div>

      <div className="d-flex mt-70 mb-40 lg-mt-40 lg-mb-10">
        <p className="text-lg d-lg-block">
          Chez APAMIX, nous sommes fiers de collaborer avec divers établissements et organisations 
          pour offrir des solutions d’activité physique adaptée sur mesure. 
          Nous avons des services conçus pour répondre à vos besoins spécifiques et ceux de vos bénéficiaires.
        </p>
      </div>
    </>
  );
};

export default Intro2;

