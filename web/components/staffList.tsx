import { useRouter } from "next/router"
import { acronym } from "lib/utils"
import { Staff } from "lib/interfaces"
import { SanityImage } from "components/image"
import { LinkTo } from "components/linkTo"
import u from "styles/utils.module.scss"
import s from "styles/staffList.module.scss"

interface Props {
  person: Staff
}

export function StaffList({ person }: Props) {
  const { locale } = useRouter()
  return (
    <li className={`${s.person} ${u.flex}`}>
      <LinkTo
        href={`/${person._type}/${person.slug}`}
        className={`${u.noUnderline}`}
      >
        <div className={`${s.avatar} ${u.grid}`}>
          {person.avatar && (
            <SanityImage
              image={person.avatar}
              alt={person.title}
              height={200}
              width={200}
              lazy
            />
          )}
          {!person.avatar && (
            <div className={`${s.initials} ${u.mono} ${u.bold}`}>
              {acronym(person.title)}
            </div>
          )}
        </div>
      </LinkTo>
      <div>
        <h3 className={`${s.heading}`}>
          <LinkTo
            href={`/${person._type}/${person.slug}`}
            className={`${u.noUnderline}`}
          >
            {person.title}
          </LinkTo>
        </h3>
        {person.job && (
          <div className={`${s.bio}`}>
            {locale === "cy" && person.__i18n_refs
              ? person.__i18n_refs.job
              : person.job}
          </div>
        )}
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className={`${u.underline} ${s.emailAddress}`}
          >
            {locale === "cy" && person.__i18n_refs
              ? person.__i18n_refs.email
              : person.email}
          </a>
        )}
      </div>
    </li>
  )
}
