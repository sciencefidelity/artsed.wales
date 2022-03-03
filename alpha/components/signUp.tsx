import { FC, useState } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { localize } from "lib/utils"
import { components } from "components/portableTextComponents"
import { SignUpProps } from "lib/interfaces"
import { LocaleString } from "generated/schema"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const SignUp: FC<SignUpProps> = ({ site, statements }) => {
  const [email, setEmail] = useState("")
  const { locale } = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch("api/mailchimp", {
      body: JSON.stringify({
        email: email
      }),
      headers: {"Content-Type": "application/json"},
      method: "POST"
    })
    const { error } = await res.json()
    if (error) {
      console.log(error)
      setEmail("")
      return
    }
    setEmail("")
  }
  const label: LocaleString = {
    _type: "localeString",
    cy: "Anfonwch eich cyfeiriad ebost",
    en: "Send your email address"
  }
  return (
    <section className={`${u.mbMedium}`}>
      <div className={`${u.textCenter}`}>
        {statements[10].statement && <PortableText
          value={locale === "cy" && statements[10].statement.cy
            ? statements[10].statement.cy
            : statements[10].statement.en}
          components={components}
        />}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => {setEmail(e.target.value)}}
            placeholder={
              localize(site.signUpPlaceholder, locale).toUpperCase()
            }
            className={`${s.signupInput} ${u.sans} ${u.bgWhite}`}
          />
          <label htmlFor="submit" />
          <button
            type="submit"
            name="submit"
            className={s.signupSend}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              style={{ height: "27px" }}
            >
              <path
                d="M285 273L91 467c-9 10-24 10-34 0l-22-22c-10-10-10-25-1-34l155-155L34 101c-9-9-9-24 1-34l22-22c10-10 25-10 34 0l194 194c10 9 10 25 0 34z"
                fill="#fff"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className={`${s.signupText} ${u.center} ${u.textLeft}`}>
        {statements[11].statement && <PortableText
          value={locale === "cy" && statements[11].statement.cy
            ? statements[11].statement.cy
            : statements[11].statement.en}
          components={components}
        />}
      </div>
    </section>
  )
}
export default SignUp
