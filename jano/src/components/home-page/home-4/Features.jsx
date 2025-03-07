const features = [
  {
    icon: "/images/assets/personnalise.png",
    title: "Personnalisation",
    description: `Chaque individu est unique. 
    Nous adaptons nos programmes pour répondre précisément 
    à vos besoins et objectifs personnels.`,
    color: "#FFD94F",
    delay: 100,
  },
  {
    icon: "/images/assets/bienveillance.png",
    title: "Bienveillance",
    description: `Nous créons un environnement chaleureux 
    et inclusif où chacun se sent soutenu et motivé.`,
    color: "#36E0D1",
    delay: 200,
  },
  {
    icon: "/images/assets/competences.png",
    title: "Expertise",
    description: `Nos professionnels sont formés et expérimentés 
    dans l’activité physique adaptée. Ils assurent des séances sécurisées 
    et efficaces.`,
    color: "#FF5555",
    delay: 300,
  },
  {
    icon: "/images/assets/serrer-la-main.png",
    title: "Engagement",
    description: `Nous nous investissons pleinement pour vous aider 
    à atteindre vos objectifs de bien-être et de santé.`,
    color: "#B855FF",
    delay: 400,
  },
];

const Features = () => {
  return (
    <>
      {features.map((feature, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
          style={{
            flex: "1 1 25%",
            padding: "15px",
            display: "flex",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              position: "relative",
              transition: "transform 0.3s",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "15px",
                height: "70px", // Assure un conteneur uniforme pour centrer l'icône
              }}
            >
              <img
                src={feature.icon}
                alt="icon"
                style={{
                  maxWidth: "50px",
                  height: "auto",
                }}
              />
            </div>
            <h4
              style={{
                fontSize: "1.2rem",
                margin: "10px 0",
                minHeight: "50px",
                color: "#333",
              }}
            >
              {feature.title}
            </h4>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#6c757d",
                lineHeight: "1.5",
                margin: "0 auto 15px auto",
                maxWidth: "90%",
                minHeight: "80px",
              }}
            >
              {feature.description}
            </p>
            <span
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                height: "4px",
                width: "100%",
                background: feature.color,
                borderRadius: "0 0 10px 10px",
              }}
            ></span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;

