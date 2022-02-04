import { FC } from "react"
import { SignUpProps } from "lib/interfaces"
import chevron from "../icons/chevron-right-solid.svg"
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
              placeholder={site.signUpPlaceholder.en}
              className={`${s.signupInput} ${u.sans} ${u.bgWhite}`}
            />
          </label>
          <input
            type="image"
            src={chevron}
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
