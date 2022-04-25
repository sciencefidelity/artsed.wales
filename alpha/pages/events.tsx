import { useEffect, useState } from "react"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import Checkboxes from "components/checkboxes"
import EventDate from "components/eventDate"
import Link from "components/link"
import { eventsQuery } from "lib/queries"
import {
  Artform,
  Event,
  Keystage,
  Label,
  Navigation,
  Settings,
  Staff
} from "lib/interfaces"

interface CheckboxEvent {
  target: {
    checked: boolean
    id: string
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(eventsQuery)
  return {
    props: { data }
  }
}

const Home = ({ data }) => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const { locale } = useRouter()
  const {
    artforms,
    events,
    facilitators,
    keystages,
    labels,
    navigation,
    settings
  } = data as {
    artforms: Artform[]
    events: Event[]
    keystages: Keystage[]
    labels: Label[]
    navigation: Navigation
    settings: Settings
    facilitators: Staff[]
  }

  useEffect(() => {
    setFilteredEvents(events)
  }, [])

  const handleChange = (e: CheckboxEvent) => {
    if (e.target.checked) {
      return setCheckedItems(prev => [...prev, e.target.id])
    }
    if (!e.target.checked) {
      return setCheckedItems(prev => prev.filter(item => item !== e.target.id))
    }
  }

  useEffect(() => {
    if (checkedItems.length === 0) {
      setFilteredEvents(events)
      return
    }
    const filtered = events.filter(event => {
      return event.artform?.find(i => checkedItems.includes(i.slug))
        || event.facilitators?.find(i => checkedItems.includes(i.slug))
        || event.keystage?.find(i => checkedItems.includes(i.slug))
    })
    setFilteredEvents(filtered)
  }, [checkedItems])

  const facilitatorsSorted = facilitators.sort((a, b) => {
    return a.title.split(" ").pop().localeCompare(b.title.split(" ").pop())
  })

  return (
    <Layout labels={labels} navigation={navigation} settings={settings}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr"
      }}>
        <section>
          {filteredEvents.map(event =>
            <div key={event._id}>
              {event.title &&
                <h2>
                  <Link href={`/${event._type}/${event.slug}`}>
                    {locale === "cy" && event.__i18n_refs
                      ? event.__i18n_refs.title
                      : event.title}
                  </Link>
                </h2>
              }
              {event.summary &&
                <p>
                  {locale === "cy" && event.__i18n_refs
                    ? event.__i18n_refs.summary
                    : event.summary}
                </p>
              }
              {event.dateStart &&
                <EventDate
                  dateEnd={event.dateEnd}
                  dateStart={event.dateStart}
                />
              }
            </div>
          )}
        </section>
        <div>
          <h2>Filters</h2>
          <button>Clear Filters</button>
          <section>
            <h3>Key Stage</h3>
            {keystages && keystages.map(item =>
              <div key={item._id}>
                <input
                  type="checkbox"
                  id={item.slug}
                  onChange={e => handleChange(e)}
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
            )}
          </section>
          <section>
            <h3>Facilitator</h3>
            {facilitatorsSorted && facilitatorsSorted.map(item =>
              <div key={item._id}>
                <input
                  type="checkbox"
                  id={item.slug}
                  onChange={e => handleChange(e)}
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
            )}
          </section>
          <section>
            <h3>Artform</h3>
            {artforms && artforms.map(item =>
              <div key={item._id}>
                <input
                  type="checkbox"
                  id={item.slug}
                  onChange={e => handleChange(e)}
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
            )}
          </section>
          {/* <Checkboxes
            data={keystages}
            title={locale === "cy" ? "Cyfnod Allweddol" : "Key Stage"}
          /> */}
          {/* <Checkboxes
            data={facilitatorsSorted}
            title={locale === "cy" ? "Hwylusydd" : "Facilitator"}
          /> */}
          {/* <Checkboxes
            data={artforms}
            title={locale === "cy" ? "Ffurf ar gelfyddyd" : "Artform"}
          /> */}
        </div>
      </div>
    </Layout>
  )
}
export default Home
