import { useInView } from "react-intersection-observer";

// Importez vos propres icônes
import HomeIcon from "/images/fav-icon/house-cleaning.png";
import OfficeIcon from "/images/fav-icon/house.png";
import VideoIcon from "/images/fav-icon/videoconference.png";
import OutdoorIcon from "/images/fav-icon/landscape.png";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const options = [
    { icon: HomeIcon, label: "À domicile" },
    { icon: OfficeIcon, label: "En cabinet" },
    { icon: VideoIcon, label: "En visio" },
    { icon: OutdoorIcon, label: "En extérieur" },
  ];

  return (
    <div className="row justify-content-center" ref={ref}>
      {options.map((option, index) => (
        <div
          key={index}
          className="d-flex flex-column align-items-center"
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
          style={{
            border: "1px solid #d3d3d3", // Gris clair pour la bordure
            padding: "8px",
            borderRadius: "6px",
            textAlign: "center",
            backgroundColor: "transparent",
            margin: "7px",
            width: "100px", // Taille réduite pour chaque boîte
          }}
        >
          <img
            src={option.icon}
            alt={option.label}
            style={{ width: "25px", height: "25px", marginBottom: "4px", marginTop: "15px" }} // Réduction de l'icône
          />
          <p style={{ marginTop: "8px", fontSize: "12px" }}>{option.label}</p> {/* Réduction de la police */}
        </div>
      ))}
    </div>
  );
};

export default Counter;





