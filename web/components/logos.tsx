import AcwLogo from "components/acwLogo"
import LotteryLogo from "components/lotteryLogo"
import WgLogo from "components/wgLogo"
import WlgaLogo from "components/wlgaLogo"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const Logos = () => {
  return (
    <div className={`${s.logos} ${u.flex} ${u.wrap} ${u.mbSmall}`}>
      <WlgaLogo />
      <AcwLogo />
      <LotteryLogo />
      <WgLogo />
    </div>
  )
}
export default Logos
