import { TwitterApi } from "twitter-api-v2"

const client = new TwitterApi(process.env.TWITTER_TOKEN)

// const roClient = client.readOnly

// async function getUser(req, res) {
//   const response = await client.v2.userByUsername("artsed_wales", {
//     "user.fields": ["public_metrics"]
//   })
//   const { data } = response
//   const { followers_count } = data.public_metrics
//   console.log(data)
//   res.status(200).json({ followers_count })
// }
// export default getUser

// async function getTweet(req, res) {
//   const tweet = await client.v2.singleTweet("20")
//   console.log(tweet)
//   res.status(200).json({ tweet })
// }
// export default getTweet

async function sendTweet(req, res) {
  const { data: createdTweet } = await client.v2.tweet("Wondering about the name change? We've joined with @EdauCymru and @NAWRcymru to serve all Wales.")
  res.status(200).json({ createdTweet })
}
export default sendTweet
