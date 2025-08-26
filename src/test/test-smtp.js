// test-smtp.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE === "true",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  logger: true,
  debug: true,
});

async function run() {
  try {
    console.log("Verifying...");
    await transporter.verify();
    console.log("Verified. Sending test email...");
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: "SMTP test",
      text: "If you get this, SMTP works!",
    });
    console.log("Sent.");
  } catch (err) {
    console.error("SMTP test failed:", err);
  }
}

run();
