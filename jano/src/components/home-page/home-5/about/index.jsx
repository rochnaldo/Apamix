import Counter from "./Counter";
import ImgGallery from "./ImgGallery";
import Intro2 from "./Intro.jsx";

const index = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6 position-relative order-lg-first">
        <ImgGallery />
        {/* /.img-gallery */}
      </div>
      {/* End .col-lg-6 */}

      <div className="col-lg-5 ms-auto order-lg-last" data-aos="fade-left">
        <div className="ps-xl-4">
          <Intro2 />
          <div className="row justify-content-between">
            <Counter />
          </div>
        </div>
      </div>
      {/* End .col-lg-6 */}
    </div>
  );
};

export default index;
