import { FC } from "react"
import { useRouter } from "next/router"
import { acronym, localize } from "lib/utils"
import { Company, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"

interface Props {
  company: Company
  settings: Settings
}

const Header: FC<Props> = ({ company, settings }) => {
  const router = useRouter()
  const { locale } = router
  return (
    <header className={u.container}>
      <div>{settings.siteName.en}</div>
    </header>
  )
}
export default Header
