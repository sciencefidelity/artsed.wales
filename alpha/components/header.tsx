import { FC } from "react"
import { useRouter } from "next/router"
import { acronym, localize } from "lib/utils"
import Localize from "components/localize"
import { Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"

interface Props {
  settings: Settings
}

const Header: FC<Props> = ({ settings }) => {
  const { locale } = useRouter()
  return (
    <header className={u.container}>
      <div>
        <Localize data={settings.siteName} />
      </div>
    </header>
  )
}
export default Header
