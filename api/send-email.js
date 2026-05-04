import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { user_email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: process.env.VITE_EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.VITE_EMAIL_USER,
      pass: process.env.VITE_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.VITE_EMAIL_FROM,
    to: process.env.VITE_EMAIL_FROM, // Sending to yourself
    replyTo: user_email,
    subject: `Contact Form: ${subject}`,
    text: `You have received a new message from ${user_email}:\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
