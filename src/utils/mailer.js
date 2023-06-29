const { SMTP_USER, SMTP_PASS } = require("@config");
const nodemailer = require("nodemailer");

async function contactForm(payload) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        const mailOptions = {
            from: "Rahat - Aid Token Distribution",
            to: "mani@rumsan.net",
            subject: "Rahat Website - Request for Demo",
            html: `
          <h2>Full Name:</h2>${payload.contactName}<br/>
          <h2>Phone:</h2>${payload.contactPhone}<br/>
          <h2>Email:</h2>${payload.contactEmail}<br/>
          <h2>Message:</h2>${payload.contactMessage}<br/>
        `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

module.exports = { contactForm };

