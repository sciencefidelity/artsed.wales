import eventbrite from "eventbrite"
// require("dotenv").config()

interface EventResponse {
  events: Event[]
}
interface TicketResponse {
  ticket_classes: TicketClass[]
}
interface Event {
  id: number
  name: Name
  status: string
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
const organizerCy = process.env.EVENTBRITE_ORGANIZER_CY
let data = []
async function getSalesFigures(req, res) {
  try {
    const responseEn = await sdk
      .request(`/organizers/${organizerEn}/events/`) as EventResponse
    const responseCy = await sdk
      .request(`/organizers/${organizerCy}/events/`) as EventResponse
    const eventsEn = responseEn.events.filter(event => event.status === "live")
    const eventsCy = responseCy.events.filter(event => event.status === "live")
    for (let i = 0; i < eventsEn.length; i++) {
      const name_en = eventsEn[i].name.text
      const name_cy = eventsCy[i].name.text
      const idEn = eventsEn[i].id
      const idCy = eventsCy[i].id
      try {
        const responseEn = await sdk
          .request(`/events/${idEn}/ticket_classes/`) as TicketResponse
        const responseCy = await sdk
          .request(`/events/${idCy}/ticket_classes/`) as TicketResponse
        const ticketClassesEn = responseEn.ticket_classes
        const ticketClassesCy = responseCy.ticket_classes
        const { capacity } = ticketClassesEn[0] as TicketClass
        const quantity_sold_en = ticketClassesEn[0].quantity_sold
        const quantity_sold_cy = ticketClassesCy[0].quantity_sold
        data.push({
          name_en,
          name_cy, capacity,
          quantity_sold_en,
          quantity_sold_cy
        })
      } catch (error) {
        return res.status(error.statusCode || 500)
          .json({ error: error.message })
      }
    }
    console.log(data)
    res.status(200).json({data})
  } catch (error) {
    return res.status(error.statusCode || 500)
      .json({ error: error.message })
  }
}
export default getSalesFigures
