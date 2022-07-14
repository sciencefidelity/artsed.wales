import { useRouter } from "next/router"
import { Artform, Keystage, Staff } from "lib/interfaces"

interface Props {
  data: Artform[] | Keystage[] | Staff[]
  title: string
}

/**
 * Checkboxes to filter documents in a sidebar
 * @param data - an array of documents to be filtered
 * @param title - a string defining the title of the checkbox
 * @returns The JSX Code for the checkbox
 */
export function Checkbox({ data, title }: Props) {
  const { locale } = useRouter()
  return (
    <section>
      <h3>{title}</h3>
      {data &&
        data.map((item: Artform | Keystage | Staff) => (
          <div key={item._id}>
            <input
              type="checkbox"
              id={item.slug}
              name={
                locale === "cy" && item.__i18n_refs
                  ? item.__i18n_refs.title
                  : item.title
              }
            />
            <label htmlFor={item.slug}>
              {locale === "cy" && item.__i18n_refs
                ? item.__i18n_refs.title
                : item.title}
            </label>
          </div>
        ))}
    </section>
  )
}
