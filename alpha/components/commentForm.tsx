import { useState } from "react"
import u from "styles/utils.module.scss"

const CommentForm = ({ id }: { id: string }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [twitterHandle, setTwitterHandle] = useState("")
  const [message, setMessage] = useState("")
  const [buttonText, setButtonText] = useState("Send")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setButtonText("Sending")
    const res = await fetch("/api/comment", {
      body: JSON.stringify({
        name: name,
        email: email,
        twitterHandle: twitterHandle,
        message: message,
        id: id
      }),
      headers: {"Content-Type": "application/json"},
      method: "POST"
    })
    const { error } = await res.json()
    if (error) {
      console.log(error)
      setShowSuccessMessage(false)
      setShowFailureMessage(true)
      setButtonText("Send")
      setName("")
      setEmail("")
      setTwitterHandle("")
      setMessage("")
      return
    }
    setShowSuccessMessage(true)
    setShowFailureMessage(false)
    setButtonText("Send")
    setName("")
    setEmail("")
    setTwitterHandle("")
    setMessage("")
  }
  return (
    <form className={u.container} onSubmit={handleSubmit}>
      <p>Leave a comment</p>
      <label htmlFor="name" style={{display:"block"}}>Name</label>
      <input
        type="text"
        value={name}
        onChange={e => {setName(e.target.value)}}
        name="name"
        style={{display:"block"}}
      />
      <label htmlFor="email" style={{display:"block"}}>E-mail</label>
      <input
        type="email"
        value={email}
        onChange={e => {setEmail(e.target.value)}}
        name="email"
        style={{display:"block"}}
      />
      <label htmlFor="" style={{display:"block"}}>Twitter</label>
      <input
        type="twitterHandle"
        value={twitterHandle}
        onChange={e => {setTwitterHandle(e.target.value)}}
        name="twitterHandle"
        style={{display:"block"}}
      />
      <label htmlFor="comment" style={{display:"block"}}>Comment</label>
      <textarea
        name="text"
        value={message}
        onChange={e => {setMessage(e.target.value)}}
      ></textarea>
      <button type="submit" style={{display:"block"}}>{buttonText}</button>
      <div>
        {showSuccessMessage && (
          <p>
            Thankyou! Your Message has been delivered.
          </p>
        )}
        {showFailureMessage && (
          <p>
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
    </form>
  )
}
export default CommentForm
