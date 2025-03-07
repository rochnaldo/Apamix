import Counter from "./Counter";
import ImgGallery from "./ImgGallery";
import Intro2 from "./Intro.jsx";

const Index = () => {
  return (
    <div className="row align-items-center">
      {/* Image affichée sur Desktop uniquement */}
      <div className="col-lg-6 position-relative order-lg-first d-none d-md-block">
        <ImgGallery />
      </div>

      {/* Contenu principal */}
      <div className="col-lg-5 ms-auto order-lg-last" data-aos="fade-left">
        <div className="ps-xl-4">
          <Intro2 />
          <div className="row justify-content-between">
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
