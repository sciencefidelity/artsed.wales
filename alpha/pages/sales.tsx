import PieChart from "components/pieChart"
import * as events from "../mock_data/mockEventData.json"

const Sales = () => {
  const pieData = events.map(e => [
    e.quantity_sold_en,
    e.quantity_sold_cy,
    e.capacity - e.quantity_sold_en - e.quantity_sold_cy
  ])
  console.log(pieData)
  return (
    <div>
      {pieData.map((data, idx) => (
        <PieChart
          key={idx}
          data={data}
          innerRadius={50}
          outerRadius={100}
          title={idx + 1}
        />
      ))}
    </div>
  )
}
export default Sales
