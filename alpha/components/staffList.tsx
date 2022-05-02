import { FC } from "react"
import { useRouter } from "next/router"
import { acronym } from "lib/utils"
import { Staff } from "lib/interfaces"
import Image from "components/image"
import Link from "components/link"
import u from "styles/utils.module.scss"
import s from "styles/staffList.module.scss"

interface Props {
  person: Staff
}

export const StaffList: FC<Props> = ({ person }) => {
  const { locale } = useRouter()
  return (
    <li key={person._id} className={`${s.person} ${u.flex}`}>
      <Link
        href={`/${person._type}/${person.slug}`}
        className={`${u.noUnderline}`}
      >
        <div className={`${s.avatar} ${u.grid}`}>
          {person.avatar &&
            <Image
              image={person.avatar}
              alt={person.title}
              height={200}
              width={200}
              lazy={true}
            />
          }
          {!person.avatar &&
            <div className={`${s.initials} ${u.mono} ${u.bold}`}>
              {acronym(person.title)}
            </div>
          }
        </div>
      </Link>
      <div>
        <h3 className={`${s.heading}`}>
          <Link
            href={`/${person._type}/${person.slug}`}
            className={`${u.noUnderline}`}
          >{person.title}</Link>
        </h3>
        {person.job &&
          <div className={`${s.bio}`}>
            {locale === "cy" && person.__i18n_refs
              ? person.__i18n_refs.job
              : person.job}
          </div>
        }
        {person.email &&
          <a
            href={`mailto:${person.email}`}
            className={`${u.underline} ${s.emailAddress}`}
          >
            {locale === "cy" && person.__i18n_refs
              ? person.__i18n_refs.email
              : person.email}
          </a>
        }
      </div>
    </li>
  )
}
