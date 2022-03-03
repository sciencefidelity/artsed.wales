import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us13"
})

export default async function handler(req, res) {
  const response = await mailchimp.ping.get()
  res.status(200).json({ response })
}
