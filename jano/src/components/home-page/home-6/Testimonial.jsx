import React, { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      id: 1,
      text: "Grâce à APAMIX, j’ai retrouvé une meilleure qualité de vie et une grande motivation pour rester actif. Les séances sont parfaitement adaptées à mes besoins, et l’équipe est incroyablement attentive et bienveillante.",
      name: "Gabriel M.",
      role: "Client satisfait",
    },
    {
      id: 2,
      text: "Les programmes d’APAMIX ont transformé ma vision de l’exercice. Les entraîneurs sont experts et très encourageants, ce qui me pousse à dépasser mes limites en toute sécurité.",
      name: "Raphaël D.",
      role: "Participant aux séances",
    },
    {
      id: 3,
      text: "Grâce à vous, je peux enfin me coiffer et me brosser les dents !",
      name: "Guylène, 78 ans",
      role: "Bénéficiaire des séances",
    },
    {
      id: 4,
      text: "Franchement, je ne pensais pas qu’une activité physique pouvait être aussi fun. Les séances sont adaptées à mes besoins, et je prends plaisir à chaque rendez-vous. L’ambiance est top et ça me motive à fond !",
      name: "Maxime T.",
      role: "Sportif en progression",
    },
    {
      id: 5,
      text: "Je suis venu à APAMIX sur conseil d’un ami, et je ne regrette pas du tout ! L’équipe est super sympa et sait vraiment comment adapter les exercices pour que ça soit efficace sans être trop dur. Merci pour tout !",
      name: "Léa V.",
      role: "Nouvelle adhérente",
    },
    {
      id: 6,
      text: "Un grand merci à APAMIX pour m’avoir aidé à retrouver confiance en moi. Les séances sont super bien pensées, et je me sens tellement mieux dans mon corps et dans ma tête. Je recommande vivement !",
      name: "Julie, 38 ans",
      role: "Cliente satisfaite",
    },
    {
      id: 7,
      text: "J’arrive à marcher 30 min d’affilée sans m’arrêter !",
      name: "Jean-Pierre S.",
      role: "Participant aux séances",
    }
  ];

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="container mt-5">
      {/* Titre centré */}
      <h2 className="text-center my-4">Nos retours Clients</h2>
      <h4 className="text-center my-2">
        Chez APAMIX, on est ravis de voir nos clients retrouver le sourire et l’énergie grâce à nos séances d’activité physique adaptée. 
        Voici quelques retours de ceux qui nous ont fait confiance.
      </h4>

      {/* Contenu en deux colonnes : Vidéo à gauche, Témoignages à droite */}
      <div className="row align-items-center mt-4">
        
        {/* Vidéo à gauche */}
        <div className="col-md-6 text-center">
          <video width="100%" height="600px" controls>
            <source src="/videos/temoignages.MOV" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>

        {/* Témoignages à droite */}
        <div className="col-md-6">
          <div className="feedback_slider_two">
            <Slider ref={sliderRef} {...settings} arrows={false}>
              {testimonials.map((testimonial) => (
                <div className="item p-4" key={testimonial.id}>
                  <div className="feedback-block-two text-center bg-light p-4 rounded shadow-sm">
                    <p className="mb-4 font-italic">"{testimonial.text}"</p>
                    <h4 className="m0 text-primary">{testimonial.name}</h4>
                    <span className="opacity-75 d-block mt-2">{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Flèches de navigation */}
          <ul className="slider-arrows slick-arrow-two d-flex justify-content-center style-none mt-3">
            <li className="prev_f2 slick-arrow tran3s mx-3" onClick={goToPrev}>
              <i className="bi bi-arrow-left" />
            </li>
            <li className="next_f2 slick-arrow tran3s mx-3" onClick={goToNext}>
              <i className="bi bi-arrow-right" />
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
