import { FC } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { SignUpProps } from "lib/interfaces"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const SignUp: FC<SignUpProps> = ({ site, statements }) => {
  const { locale } = useRouter()
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
        <form
          action="https://wales.us13.list-manage.com/subscribe/post?u=56ba9559a01451645f1910eda&amp;id=dc2f9bfec3"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <label>
            <input
              type="text"
              name={site.signUpPlaceholder.en}
              placeholder={site.signUpPlaceholder.en.toUpperCase()}
              className={`${s.signupInput} ${u.sans} ${u.bgWhite}`}
            />
          </label>
          <input
            type="image"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath d='M285 273L91 467c-9 10-24 10-34 0l-22-22c-10-10-10-25-1-34l155-155L34 101c-9-9-9-24 1-34l22-22c10-10 25-10 34 0l194 194c10 9 10 25 0 34z' fill='%23fff'/%3E%3C/svg%3E"
            alt="Send your email address"
            name="subscribe"
            id="mc-embedded-subscribe"
            className={s.signupSend}
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
