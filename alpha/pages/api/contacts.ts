// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import client from "@sendgrid/client"
client.setApiKey(process.env.SENDGRID_API_KEY)

const headers = {
  "on-behalf-of":
    "The subuser's username. This header generates the API call as if the subuser account was making the call."
}

async function getContacts(req, res) {
  try {
    await client.request({
      url: "/v3/contactdb/lists",
      method: "GET",
      headers: headers
    }).then(([response, body]) => {
      console.log(response.statusCode)
      console.log(response.body)
    })
  } catch (error) {
    // console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
  return res.status(200).json({ error: "" })
}
export default getContacts

// client
//   .request(request)
//   .then(([response, body]) => {
//     console.log(response.statusCode)
//     console.log(response.body)
//   })
//   .catch(error => {
//     console.error(error)
//   })
