import React, { useEffect } from "react"
import * as d3 from "d3"

function PieChart(props) {
  const { data, innerRadius, outerRadius, title } = props
  console.log(data)
  const margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  }

  const width = 2 * outerRadius + margin.left + margin.right
  const height = 2 * outerRadius + margin.top + margin.bottom

  const colors = [
    "hsl(24, 100%, 68%)",
    "hsl(180, 68%, 61%)",
    "hsl(320, 60%, 68%)"
  ]

  useEffect(() => {
    drawChart()
  }, [data])

  function drawChart() {
    // Remove the old svg
    d3.select("#pie-container").select("svg").remove()

    // Create new svg
    const svg = d3
      .select(".pie-container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)

    const arc = svg
      .selectAll()
      .data(d3.pie()(data))
      .enter()

    // Append arcs
    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (d, i) => colors[i % data.length])
      .style("stroke", "black")
      .style("stroke-width", "2px")
  }

  return (
    <>
      <div className="pie-container" />
      <p style={{
        fontFamily: "ui-serif",
        fontSize: "1.6rem",
        textAlign: "center"
      }}>{title}</p>
    </>
  )
}

export default PieChart
