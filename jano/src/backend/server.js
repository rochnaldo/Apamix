require("dotenv").config(); // Charge les variables d'environnement
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // Autorise uniquement ton frontend
// Autorise les requêtes depuis le frontend

// 📩 Route API pour envoyer un email
app.post("/api/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, sessionType, requestType, birthDate } = req.body;

  // ⚡ Configuration du service SMTP (Gmail, Outlook, etc.)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Email utilisé
      pass: process.env.EMAIL_PASS, // Mot de passe ou App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL, // L'email où tu veux recevoir les infos
    subject: "Nouvelle inscription à une séance",
    text: `Nouvelle demande de contact :
    - Nom: ${firstName} ${lastName}
    - Email: ${email}
    - Téléphone: ${phone}
    - Séance: ${sessionType}
    - Type de demande: ${requestType}
    - Date de naissance: ${birthDate}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("Erreur d'envoi d'email :", error);
    res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur en écoute sur le port ${PORT}`);
});
