import { FC } from "react"
import { useRouter } from "next/router"
import { acronym, localize } from "lib/utils"
import Link from "components/link"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const Header: FC = () => {
  const router = useRouter()
  const { locale } = router
  return (
    <header>
      <div>Header</div>
    </header>
  )
}
export default Header
