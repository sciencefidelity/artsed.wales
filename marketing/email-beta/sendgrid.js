// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
require("dotenv").config()
const fs = require("fs")
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: "hello@mattcook.dev",
  from: "Matt Cook <hello@artsed.wales>",
  subject: "National Arts & Education Network",
  text: "Professional development programme for teachers and educators",
  html: fs.readFileSync("./dist/index.html", "utf8")
}
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent")
  })
  .catch(error => {
    console.error(error)
  })
