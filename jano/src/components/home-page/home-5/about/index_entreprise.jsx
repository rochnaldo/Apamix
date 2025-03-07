import Counter from "./Counter";
import ImgGallery2 from "./ImgGallery2";
import Intro2 from "./Intro_entreprise.jsx";

const IndexEntreprise = () => {
  return (
    <div className="row align-items-center">
      {/* Image affichée sur Desktop uniquement */}
      <div className="col-lg-6 position-relative order-lg-first d-none d-md-block">
        <ImgGallery2 />
      </div>

      {/* Contenu principal */}
      <div className="col-lg-5 ms-auto order-lg-last" data-aos="fade-left">
        <div className="ps-xl-4">
          <Intro2 />

          {/* Image affichée entre le titre et le contenu sur Mobile uniquement */}
          <div className="row justify-content-between">
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexEntreprise;
