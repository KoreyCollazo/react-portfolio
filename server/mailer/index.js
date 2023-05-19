const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config()



const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendemail(name, email, message) {
  const mailSent = await transporter.sendMail({
    text: 'Contact from portfolio',
    subject: 'Welcome ',
    from: ['koreysportfoliocontact@gmail.com'],
    to: 'koreycollazo@gmail.com',
    html: `
    <html>
    <body>
      <h1> ${name} is reaching out! Nice job!</h1>
      <h2> Reply @ ${email} </h2>
      <p> ${message} </p>
      <br></br>
      <p><p/>
    </body>
  </html> 
    `,
  });
}

module.exports = sendemail;