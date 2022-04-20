import { FC } from "react"
import { useRouter } from "next/router"
import { acronym, localize } from "lib/utils"
import { Company, Settings } from "lib/interfaces"

interface Props {
  company: Company
  settings: Settings
}

const Header: FC<Props> = ({ company, settings }) => {
  const router = useRouter()
  const { locale } = router
  return (
    <header>
      <div>{company.title.en}</div>
    </header>
  )
}
export default Header
