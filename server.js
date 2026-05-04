const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.VITE_EMAIL_USER,
    pass: process.env.VITE_EMAIL_PASS,
  },
});

app.post('/api/send-email', async (req, res) => {
  const { user_email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.VITE_EMAIL_USER,
    to: process.env.VITE_EMAIL_FROM,
    replyTo: user_email,
    subject: `Contact Form: ${subject}`,
    text: `From: ${user_email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error sending email' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
