import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="text-center mt-150 lg-mt-100" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-7 m-auto">
          <h2 className="tx-dark">
            Vous souhaitez rejoindre notre équipe ?
          </h2>
        </div>
      </div>
      {/* End .row */}
      <p className="cr-text text-lg tx-dark mt-30 mb-50 md-mt-20">
        Vous pouvez envoyer une candidature
      </p>
      <Link to="/contact" className="btn-twentyOne fw-500 tran3s">
        Nous rejoindre
      </Link>
    </div>
  );
};

export default CallToAction;
