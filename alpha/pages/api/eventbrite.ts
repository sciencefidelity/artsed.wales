import eventbrite from "eventbrite"
require("dotenv").config()

interface EventResponse {
  events: Event[]
}
interface TicketResponse {
  ticket_classes: any
}
interface Event {
  id: number
  name: Name
}
interface Name {
  text: string
  html: string
}
interface TicketClass {
  capacity: number
  quantity_sold: number
}

const sdk = eventbrite({token: process.env.EVENTBRITE_TOKEN})
const organizerEn = process.env.EVENTBRITE_ORGANIZER_EN
// const organizerCy = process.env.EVENTBRITE_ORGANIZER_CY
let data = []
async function getSalesFigures(req, res) {
  try {
    const response = await sdk.request(`/organizers/${organizerEn}/events/`)
    const { events } = response as EventResponse
    for (let i = 0; i < events.length; i++) {
      const { id, name } = events[i]
      try {
        const response = await sdk.request(`/events/${id}/ticket_classes/`)
        const { ticket_classes } = response as TicketResponse
        const title = name.text
        const { capacity, quantity_sold } = ticket_classes[0] as TicketClass
        data.push({ title, capacity, quantity_sold })
      } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message })
      }
    }
    console.log(data)
    res.status(200).json({data})
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
}
export default getSalesFigures
