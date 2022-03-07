import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us13"
})

export default async function subscribe(req, res) {
  const response = await mailchimp.lists.addListMember("dc2f9bfec3", {
    email_address: req.body.email,
    status: "pending"
  })
  console.log(response)
  res.status(200).json({ response })
}
