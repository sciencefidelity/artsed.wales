import { useState } from "react"
import u from "styles/utils.module.scss"

export default function ContactUs() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [buttonText, setButtonText] = useState("Send")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setButtonText("Sending")
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
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
      setFirstName("")
      setLastName("")
      setEmail("")
      setMessage("")
      return
    }
    setShowSuccessMessage(true)
    setShowFailureMessage(false)
    setButtonText("Send")
    setFirstName("")
    setLastName("")
    setEmail("")
    setMessage("")
  }
  return (
    <main>
      <form className={u.container} onSubmit={handleSubmit}>
        <p>Send a message</p>
        <label htmlFor="firstName" style={{display:"block"}}>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={e => {setFirstName(e.target.value)}}
          name="firstName"
          style={{display:"block"}}
        />
        <label htmlFor="lastName" style={{display:"block"}}>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={e => {setLastName(e.target.value)}}
          name="lastName"
          style={{display:"block"}}
        />
        <label htmlFor="email" style={{display:"block"}}>E-mail</label>
        <input
          type="text"
          value={email}
          onChange={e => {setEmail(e.target.value)}}
          name="email"
          style={{display:"block"}}
        />
        <label htmlFor="message" style={{display:"block"}}>Message</label>
        <textarea
          name="message"
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
    </main>
  )
}
