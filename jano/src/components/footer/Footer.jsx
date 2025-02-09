const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Liens Utiles",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Accueil", href: "/" },
        { label: "Particulier", href: "/particuliers" },
        { label: "Professionnel", href: "/entreprises" },
        { label: "Coachs", href: "/coachs" },
        { label: "Prendre contact", href: "/contact/contact-v1" },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "https://www.facebook.com/profile.php?id=61568578475352&locale=fr_FR",
    },
    {
      iconClass: "fab fa-instagram",
      link: "https://www.instagram.com/apamix_974?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Nous suivre</h5>
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
