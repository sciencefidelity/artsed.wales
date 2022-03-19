// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
require("dotenv").config()
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: "matt@artsed.wales",
  from: "hello@artsed.wales",
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: `

  `
}
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent")
  })
  .catch(error => {
    console.error(error)
  })
