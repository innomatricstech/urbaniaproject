import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create Nodemailer transporter for Zoho
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    // Do not fail on invalid certificates
    rejectUnauthorized: false
  }
});

// Verify transporter connection on startup
transporter.verify(function(error, success) {
  if (error) {
    console.log("❌ SMTP Connection Error:", error);
  } else {
    console.log("✅ SMTP Server is ready to send emails");
    console.log("📧 Using email:", process.env.EMAIL_USER);
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  console.log('📥 Received new message request:', req.body);
  const { name, email, message, phone, journeyType, duration, service } = req.body;

  try {
    const mailOptions = {
      from: {
        name: "Urbania Rentals",
        address: process.env.EMAIL_USER
      },
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Booking Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Journey Type: ${journeyType}
        Duration: ${duration}
        Vehicle Service: ${service}
        Message: ${message}
      `,
      html: `
        <h3>New Booking Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Journey Type:</strong> ${journeyType}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Vehicle Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    console.log('📤 Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    
    res.status(200).json({ 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
}); 