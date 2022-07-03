import { AcwLogo } from "components/icons/acwLogo"
import { LotteryLogo } from "components/icons/lotteryLogo"
import { WgLogo } from "components/icons/wgLogo"
import { WlgaLogo } from "components/icons/wlgaLogo"
import s from "styles/layout.module.scss"
import u from "styles/utils.module.scss"

export const Logos = () => {
	return (
		<div className={`${s.logos} ${u.flex}`}>
			<WlgaLogo />
			<AcwLogo />
			<LotteryLogo />
			<WgLogo />
		</div>
	)
}
