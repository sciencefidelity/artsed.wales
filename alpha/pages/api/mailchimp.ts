import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us13"
})

export default async function subscribe(req, res) {
  const email = req.body.email
  const FNAME = req.body.firstName || ""
  const LNAME = req.body.lastName || ""
  const response = await mailchimp.lists.addListMember("dc2f9bfec3", {
    email_address: email,
    status: "pending",
    merge_fields: {
      FNAME: FNAME,
      LNAME: LNAME
    }
  })
  console.log(response)
  res.status(200).json({ response })
}
