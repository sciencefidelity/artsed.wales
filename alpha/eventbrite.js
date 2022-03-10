require("dotenv").config()
const eventbrite = require("eventbrite").default

// Create configured Eventbrite SDK
const sdk = eventbrite({token: process.env.EVENTBRITE_TOKEN})

// See: https://www.eventbrite.com/developer/v3/endpoints/users/#ebapi-get-users-id
sdk
  .request("/users/me/")
  .then(res => {
    console.log(res)
  })
sdk
  .request("/users/me/organizations/")
  .then(res => {
    console.log(res)
    const organizationId = res.organizations[0].id
    sdk
      .request(`/organizations/${organizationId}/events/`)
      .then(res => {
        const upcomingEvents = res.events.map(event => event.start.local).sort()
        return console.log(upcomingEvents)
      })
      .catch(error => {
        console.error(error)
      })
  })
  .catch(error => {
    console.error(error)
  })

// .filter(event => event.start.local > new Date())
//.map(event => event.title.text)
