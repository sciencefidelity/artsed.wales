import * as data from "../mock_data/mockEventData.json"

const Sales = () => {
  const dataRemaining = data.map(e => {
    return Object.assign(e, {
      remaining: e.capacity - e.quantity_sold_en - e.quantity_sold_cy
    })
  })
  return (
    <div>
      {JSON.stringify(dataRemaining)}
    </div>
  )
}
export default Sales
