import Counter from "./Counter";
import ImgGallery2 from "./ImgGallery2";

import Intro2 from "./Intro_entreprise.jsx";
import index from "@/components/home-page/home-5/about/index.jsx";

const index_entreprise = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6 position-relative order-lg-first">
        <ImgGallery2 />
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

export default index_entreprise;
