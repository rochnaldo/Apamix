import Slider from "react-slick";

const Testimonial = () => {
  const testimonial = {
    icon: "/images/icon/icon_42.svg",
    feedback:
      `Nous sommes régulièrement à la recherche de professionnels
passionnés et compétents pour rejoindre notre équipe en tant
qu'enseignants en activité physique adaptée.
En rejoignant APAMIX, vous aurez l’opportunité de contribuer à
des projets innovants et de faire une réelle différence dans la vie
de nos clients tout en développant vos compétences au sein
d'une équipe dynamique et engagée.`,
    name: "John Doe",
  };

  return (
    <div className="item">
      <div className="feedback-block-twelve mt-50">
      <p className="tx-dark mt-35 lg-mt-20" style={{ fontSize: "1.5rem" }}>
  {testimonial.feedback}
</p>

      </div>
    </div>
  );
};

export default Testimonial;
