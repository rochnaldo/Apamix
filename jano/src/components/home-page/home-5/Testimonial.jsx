import Slider from "react-slick";

const Testimonial = () => {
  const testimonial = {
    icon: "/images/icon/icon_42.svg",
    feedback:
      "Nous sommes à la recherche d'un professionnel passionné et compétent pour rejoindre notre équipe en tant qu’enseignant en activité physique adaptée",
    name: "John Doe",
  };

  return (
    <div className="item">
      <div className="feedback-block-twelve mt-50">
        <p className="tx-dark mt-35 lg-mt-20">{testimonial.feedback}</p>
      </div>
    </div>
  );
};

export default Testimonial;
