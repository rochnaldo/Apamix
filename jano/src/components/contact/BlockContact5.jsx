const BlockContact5 = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_179.svg",
      title: "Par mail",
      content: "megroche12@gmail.com",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_114.svg",
      title: "Par téléphone",
      content: "",
      link: "tel:+262 692 001760",
      delay: "200",
    },
  ];

  return (
    <div className="row justify-content-center"> {/* Centrage horizontal */}
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4 d-flex justify-content-center"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon border rounded-circle d-flex align-items-center justify-content-center m-auto">
              <img src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link.replace("tel:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockContact5;
