import PieChart from "components/pieChart"
import * as data from "../mock_data/mockEventData.json"

const Sales = () => {
  const totalSales = data[3].quantity_sold_en - data[3].quantity_sold_cy
  const pieData = [
    {
      label: "English",
      value: data[3].quantity_sold_en
    },
    {
      label: "Welsh",
      value: data[3].quantity_sold_cy
    },
    {
      label: "Remaining",
      value: data[3].capacity - totalSales
    }
  ]
  return (
    <div style={{
      margin: "auto",
      width: "100%"
    }}>
      <PieChart
        data={pieData}
        innerRadius={50}
        outerRadius={100}
        title={data[3].name_en}
      />
    </div>
  )
}
export default Sales
