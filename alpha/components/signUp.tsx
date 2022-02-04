import { FC } from "react"
import { SignUpProps } from "lib/interfaces"
import s from "components/signUp.module.scss"
import u from "styles/utils.module.scss"

const SignUp: FC<SignUpProps> = ({ site, statements }) => {
  return (
    <section className={`${u.mbLarge} ${u.textCenter}`}>
      <h2>{statements[10].statement.en}</h2>
      <div>
        <form>
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
            className={s.signupSend}
          />
        </form>
      </div>
      <div className={`${s.signupText} ${u.center} ${u.textLeft}`}>
        <p>{statements[11].statement.en}</p>
      </div>
{/*       <img
        src={Theatre}
        alt="Theatre and Performance at Blackwood Miners Institute with Theatr Iolo"
        className="fw-img block border shadow center mt-large"
        width="600"
        height="400"
        decoding="async"
        loading="lazy"
      /> */}
    </section>
  )
}
export default SignUp
