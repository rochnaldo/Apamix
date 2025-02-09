import Seo from "../../components/common/Seo";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Header from "../../components/home-page/home-7/Header";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactV1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    sessionType: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recipientEmail: "eliottroche97419@gmail.com"
        }),
      });
      if (response.ok) {
        alert("Votre demande a été envoyée avec succès.");
        setFormData({ firstName: "", lastName: "", birthDate: "", sessionType: "", phone: "", email: "" });
      } else {
        alert("Une erreur s'est produite, veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire", error);
      alert("Erreur de connexion. Veuillez réessayer.");
    }
  };
  

  return (
    <>
      <Seo pageTitle="Contact" />
      <Header />
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Contact Info
                </div>
                <h2 className="main-title fw-500 tx-dark">Inscription à une séance</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <form className="form-style-one" onSubmit={handleSubmit}>
                <div className="messages" />
                <div className="row controls">
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-35">
                      <label className="d-block">Prénom*</label>
                      <input type="text" placeholder="Votre prénom" name="firstName" value={formData.firstName} onChange={handleChange} required />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-35">
                      <label className="d-block">Nom*</label>
                      <input type="text" placeholder="Votre nom" name="lastName" value={formData.lastName} onChange={handleChange} required />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-35">
                      <label className="d-block">Date de naissance*</label>
                      <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-35">
                      <label className="d-block">Séance souhaitée*</label>
                      <select name="sessionType" value={formData.sessionType} onChange={handleChange} required>
                        <option value="">Sélectionner une séance</option>
                        <option value="individuelle">Séance individuelle</option>
                        <option value="collective">Séance collective</option>
                      </select>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-35">
                      <label className="d-block">Numéro de téléphone*</label>
                      <input type="tel" placeholder="Votre numéro" name="phone" value={formData.phone} onChange={handleChange} required />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-40">
                      <label className="d-block">Email*</label>
                      <input type="email" placeholder="Votre email" name="email" value={formData.email} onChange={handleChange} required />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn-one fw-500 w-100 text-uppercase fs-14 d-block">Valider</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className="footer-style-ten theme-basic-footer zn2 position-relative mt-40">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo/Apamix_title11.png" alt="logo" width={95}/>
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  Entreprise Française.
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1} 
                </p>
              </div>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV1;
