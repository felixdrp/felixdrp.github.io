
// D3 library imported/loaded at html page level

/* 
* * Paint natural exponential in polar coordinates.
*/

// Related
// https://observablehq.com/@d3/d3-lineradial
// http://using-d3js.com/05_03_radial_lines.html
// https://www.originlab.com/doc/Tutorials/polar-custom-radial
// https://en.wikipedia.org/wiki/Polar_coordinate_system
// https://devdocs.io/d3~7/

import { createEffect } from 'solid-js';

function* exponentialPolarData(stopLimit=5) {
  let i=0

  while(i<stopLimit) {
    yield {
      angle: Math.PI * i,
      radius: Math.E**i
    }
    i+=0.1
  }
}

const drawChart = ({svgClass =''}) => {
  // Generate data
  const data = Array.from(exponentialPolarData(4.6))

  // Create data line for svg path
  const lineRadial = d3.lineRadial()
    .angle((d) => d.angle)
    .radius((d) => d.radius)
    .curve(d3.curveBasis)(data);

  const svg = d3.select("#PolarExponentialPlot")
    .append("svg")
    .attr("width", 300)
    .attr("height", 300)
    .attr("class", svgClass || null);

  // const svgSize = svg.node().getBBox()

  // linear Axis, Coordinates line, units value from 0 to 90
  const scale = d3.scaleLinear()
  .domain([0, d3.max(data, elemt => elemt.radius)]) //
  .range([0, 90] ) // unit: pixels
  const axis = d3.axisBottom(scale).ticks(5);

  svg.append("g")
    .attr("transform", "translate(150,150)")
    // .attr("class", "stroke-blue-500")
    .style('stroke',"#aaa")
    .style('stroke-width', "0.5")
    .call(axis);

  // coordinate circles, mark every 20 units
  const r = d3.scaleLinear()
    .domain([0, .5])
    .range([0, 100]);

  const gr = svg.append("g")
    .attr("transform", "translate(150,150)")
    .attr("class", "r axis")
    .selectAll("g")
    .data(r.ticks(5).slice(1))
    .enter().append("g");

  gr.append("circle")
    .style('stroke',"#aaa")
    .style('stroke-dasharray',"5,10,5")
    .style('fill',"none")
    .attr("r", r);

  // Angle Axis Radial
  const angles = ['0', 'π/2', 'π', `3π/2`]
  const x = d3.scaleBand()
  .domain(angles)
  .range([0, 2 * Math.PI])
  .align(0)

  const xAxis = g => g
  .attr("text-anchor", "middle")
  .call(g => g.selectAll("g")
    .data(angles)
    .join("g")
      .attr("transform", d => `
      translate(${150+(Math.cos(x(d))*100)},${150+(-Math.sin(x(d))*100)})
      `)
      .call(g => g.append("line")
        .attr("x2", -10)
        .attr("stroke", "#000")
        .attr("transform", d => (Math.round(Math.sin(x(d))) == 0
        ? "rotate(0) translate(5,0)"
        : "rotate(90) translate(5,0)")))
      .call(g => g.append("text")
        // Re-Position angles labels
        .attr("transform", (d, i) => i==0 && "rotate(0) translate(15,5)" ||
        i==1 && "rotate(0) translate(0,-12)" ||
        i==2 && "rotate(0) translate(-15,5)" ||
        i==3 && "rotate(0) translate(0,22)"
        )
        .attr('font-family',"Libertinus Serif, Times, \"Times New Roman\", Georgia, serif")
        .text(d => d)))

  svg.append('g')
      .call(xAxis)

  // paint exponential line polar coordinates
  svg.append('path')
    .attr('d', lineRadial)
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr('transform', `
      translate(150,150)
      rotate(-90)
      scale(1, -1)
    `)
}

function PolarExponentialPlot(props) {

  createEffect(() => drawChart({svgClass: props.svgClass}));
  return <div
    id="PolarExponentialPlot"
    class="
    "
  ></div>
}

export default PolarExponentialPlot;