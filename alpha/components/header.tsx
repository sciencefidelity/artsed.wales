import { FC } from "react"
import { useRouter } from "next/router"
import { acronym, buildUrl, localize } from "lib/utils"
import Language from "components/language"
import Link from "components/link"
import Localize from "components/localize"
import { Navigation, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"

interface Props {
  navigation: Navigation
  settings: Settings
}

const Header: FC<Props> = ({ navigation, settings }) => {
  const { locale } = useRouter()
  return (
    <header className={u.container}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr"
      }}>
        <div>
          <Language />
          <Link href="/"><Localize data={settings.siteName} /></Link>
        </div>
        <nav>
          <ul>
            {navigation.primary.map(item =>
              <li key={item._id}>
                <Link href={buildUrl(item.url._type, item.url.slug)}>
                  <Localize data={item.label} />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
