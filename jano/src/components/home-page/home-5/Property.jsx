import { Link } from "react-router-dom";

const Property = () => {
  const properties = [
    {
      image: "/images/media/img_73.jpg",
      title: "Individuelle",
      delay: "100",
    },
    {
      image: "/images/media/img_74.jpg",
      title: "Collectif",
      delay: "200",
    },
    {
      image: "/images/media/img_75.jpg",
      title: "Remise en forme",
      delay: "300",
    },
  ];

  return (
    <>
      {properties.map((property, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={property.delay}
        >
          <div className="card-style-twentyOne position-relative mt-35">
            <img
              src={property.image}
              alt={property.title}
              className="lazy-img w-100"
            />
            <div className="hover-overlay d-flex flex-column align-items-center position-absolute tran3s">
              <h3 className="tx-dark">{property.title}</h3>
              <Link
                to="/pages-menu/service-details"
                className="btn-four fw-500 mt-auto"
              >
                View Details
              </Link>
            </div>
            {/* /.hover-overlay */}
          </div>
          {/* /.card-style-twentyOne */}
        </div>
      ))}
    </>
  );
};

export default Property;
