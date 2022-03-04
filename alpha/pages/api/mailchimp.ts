import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us13"
})

export default async function subscribe(req, res) {
  const email = req.body.email
  // const FNAME = req.body.firstName || ""
  // const LNAME = req.body.lastName || ""
  const response = await mailchimp.lists.addListMember("dc2f9bfec3", true, {
    email_address: email
  })
  console.log(response)
  res.status(200).json({ response })
}
