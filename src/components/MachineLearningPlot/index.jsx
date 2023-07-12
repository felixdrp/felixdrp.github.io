// D3 library imported/loaded at html page level

import { createEffect } from 'solid-js';

const drawChart = () => {
  const data = [12, 5, 6, 6, 9, 10];
  const svg = d3.select("#dibu").append("svg")
    // .attr("width", 700)
    // .attr("height", 300);
    .attr("width", '100%')
    .attr("height", 300);
  const svgSize = svg.node().getBBox()
  // if (svgSize.width == 0) return
  // debugger
  svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 70)
  .attr("y", (d, i) => 300 - 10 * d)
  .attr("width", 65)
  .attr("height", (d, i) => d * 10)
  .attr("fill", "green");

  svg.selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 70)
  .attr("y", (d, i) => 300 - (10 * d) - 3)
}

function MachineLearningPlot() {
  createEffect(() => drawChart());
  return <div
    id="dibu"
    class="
    "
    //  overscroll-x-none
    //  overflow-hidden
  ></div>
}

export default MachineLearningPlot;