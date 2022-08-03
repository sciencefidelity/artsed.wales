import { useRouter } from "next/router"
import type { LocaleString } from "lib/interfaces"

/**
 * Localizes a Sanity string definded by the {@link LocaleString} interface
 * @remarks returns the localized string
 * @param data - a {@link LocaleString} object
 * @returns the localized string
 */
export function Localize({ data }: { data: LocaleString }): JSX.Element {
  const { locale } = useRouter()
  return <>{locale === "cy" && data.cy ? data.cy : data.en}</>
}
