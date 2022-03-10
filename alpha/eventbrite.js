require("dotenv").config()
const eventbrite = require("eventbrite").default

// Create configured Eventbrite SDK
const sdk = eventbrite({token: process.env.EVENTBRITE_TOKEN})
const organizer = process.env.EVENTBRITE_ORGANIZER

// See: https://www.eventbrite.com/developer/v3/endpoints/users/#ebapi-get-users-id
// sdk
//   .request("/users/me/")
//   .then(res => {
//     console.log(res)
//   })
sdk
  .request(`/organizers/${organizer}/events/`)
  .then(res => {
    const eventIds = res.events
      .filter(event => event.status === "live")
      .map(event => event.id)
    eventIds.map(id =>
      sdk
        .request(`/events/${id}/ticket_classes/`)
        .then(res => {
          let ticketClass = res.ticket_classes[0]
          console.log(
            `${ticketClass.quantity_sold}/${ticketClass.quantity_total}`
          )
        })
        .catch(error => {
          console.error(error)
        })
    )
  })
  .catch(error => {
    console.error(error)
  })
// sdk
//   .request("/users/me/organizations/")
//   .then(res => {
//     console.log(res)
//     const organizationId = res.organizations[0].id
//     sdk
//       .request(`/organizations/${organizationId}/events/`)
//       .then(res => {
//         const upcomingEvents = res.events.map(event => event.start.local).sort()
//         return console.log(upcomingEvents)
//       })
//       .catch(error => {
//         console.error(error)
//       })
//   })
//   .catch(error => {
//     console.error(error)
//   })

// .filter(event => event.start.local > new Date())
//.map(event => event.title.text)

// https://www.eventbriteapi.com/v3/events/:event_id/ticket_classes/

// capacity: 30,
// quantity_total: 30,
// quantity_sold: 0,
