import { FC } from "react"
import { useRouter } from "next/router"
import { localize } from "lib/utils"
import Localize from "components/localize"
import { Label } from "lib/interfaces"
import s from "styles/layout.module.scss"

interface Props {
  labels: Label[]
}

const SignUp: FC<Props> = ({ labels }) => {
  const { locale } = useRouter()
  return (
    <section className={`${s.signUp}`}>
      <div>
        {/* Join the Network */}
        {labels[17].text && <h2><Localize data={labels[17].text} /></h2>}
      </div>
      <div>
        <form
          action="https://wales.us13.list-manage.com/subscribe/post?u=56ba9559a01451645f1910eda&amp;id=dc2f9bfec3"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className={`${s.signUpForm}`}
          target="_blank"
          noValidate
        >
          <label>
            <input
              type="email"
              name={localize(labels[18].text, locale)}
              placeholder={localize(labels[18].text, locale)}
              className={`${s.signUpInput}`}
            />
          </label>
          <input
            type="submit"
            alt={localize(labels[20].text, locale)}
            name="subscribe"
            className={`${s.signUpSend}`}
            id="mc-embedded-subscribe"
            value={localize(labels[20].text, locale)}
          />
          <div id="mce-responses">
            <div id="mce-error-response" style={{ display: "none" }}></div>
          </div>
          <div id="mce-success-response" style={{ display: "none" }}></div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_886d00d2217d67cd8145db87b_625e7cefb6"
              tabIndex={-1}
            />
          </div>
        </form>
      </div>
      <div className={`${s.signUpText}`}>
        {labels[19].text && <p><Localize data={labels[19].text} /></p>}
      </div>
    </section>
  )
}
export default SignUp
