import Slider from "react-slick";

const Partner = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    centerMode: false, // Désactivé par défaut
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          centerMode: true, // Centre les logos sur mobile
          centerPadding: "20px", // Ajoute un léger padding pour éviter qu'ils touchent les bords
        },
      },
    ],
  };

  const partnerLogos = [
    "/images/fav-icon/favicon_mediaustral.png",
    "/images/fav-icon/mairie.png",
    "/images/fav-icon/opepedia.png",
    "/images/fav-icon/chu.png",
    "/images/fav-icon/clinique.png",
  ];

  return (
    <>
      <style>
        {`
          .partner-slider .item {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px;
          }

          .partner-slider img {
            width: 120px; /* Taille uniforme */
            height: auto;
            max-height: 80px;
            object-fit: contain;
            transition: transform 0.3s ease-in-out;
          }

          .partner-slider img:hover {
            transform: scale(1.1);
          }

          @media (max-width: 768px) {
            .partner-slider img {
              width: 100px;
              max-height: 60px;
            }
          }

          @media (max-width: 576px) {
            .partner-slider img {
              width: 90px;
              max-height: 50px;
            }

            .partner-slider .slick-track {
              display: flex;
              justify-content: center; /* Centre les éléments */
            }
          }
        `}
      </style>

      <Slider {...settings} arrows={false} className="partner-slider">
        {partnerLogos.map((logo, index) => (
          <div className="item" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Partner;
