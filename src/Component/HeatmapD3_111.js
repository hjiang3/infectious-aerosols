import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const HeatmapD3_11 = ({ baseline, occupantNumber, floorArea, height }) => {
  const d3Container = useRef(null);
  const [userValue, setUserValue] = useState(0.75);
  const [airCleaner, setAirCleaner] = useState(false);
  const [uvgi, setUvgi] = useState(false);
  const [selectedCube, setSelectedCube] = useState(null);

  const xLabels = [...Array(21).keys()].map((i) => (i * 0.5).toFixed(1));
  const yLabels = [...Array(21).keys()].map((i) => (i * 5).toFixed(0));

  const data = () =>
    new Array(yLabels.length)
      .fill(0)
      .map((_, y) =>
        new Array(xLabels.length).fill(0).map((_, x) => {
          const xValue = parseFloat(xLabels[x]);
          const yValue = parseFloat(yLabels[y]);
          const baseNADR = xValue + (xValue / (1 - userValue)) * userValue * (yValue / 100);
          let newNADR = baseNADR;

          if (airCleaner && baseNADR < thresholdValue) {
            newNADR += 1.4;
            if (newNADR < thresholdValue) {
              newNADR += 1.4;
            }
          }

          return newNADR;
        })
      );

      const data2 = () =>
    new Array(yLabels.length)
      .fill(0)
      .map((_, y) =>
        new Array(xLabels.length).fill(0).map((_, x) => {
          const xValue = parseFloat(xLabels[x]);
          const yValue = parseFloat(yLabels[y]);
          return xValue + (xValue / (1 - userValue)) * userValue * (yValue / 100);
        })
      );

      const rr = () =>
      new Array(yLabels.length)
        .fill(0)
        .map((_, y) =>
          new Array(xLabels.length).fill(0).map((_, x) => {
            const xValue = parseFloat(xLabels[x]);
            const yValue = parseFloat(yLabels[y]);
            const baseNADR = xValue + (xValue / (1 - userValue)) * userValue * (yValue / 100);
            let newNADR = baseNADR;
  
            if (airCleaner && baseNADR < thresholdValue) {
              newNADR += 1.4;
              if (newNADR < thresholdValue) {
                newNADR += 1.4;
              }
            }

            const ar = (1 - Math.exp((-9.7 * 19 / (810 * 10) * 8) / newNADR)) * 100;
            const minOA = (5 * 60 * 5 + 0.06 * 60 * 810) / (810 * 10);
            const minFilter = 0;
            const minValue = minOA + (minOA / (1 - 0.75)) * 0.75 * (minFilter / 100);
            const minRisk = (1 - Math.exp((-9.7 * 19 / (810 * 10) * 8) / minValue)) * 100;

  
            return ar / minRisk;
          })
        );

  const defaultOA = (5 * 60 * 5 + 0.06 * 60 * 810) / (810 * 10) * 6;
  const defaultFilter = 0;
  const thresholdValue = defaultOA + (defaultOA / (1 - 0.75)) * 0.75 * (defaultFilter / 100);

  const [hoveredNADR, setHoveredNADR] = useState(thresholdValue.toFixed(2));
  const [hoveredOA, setHoveredOA] = useState(defaultOA.toFixed(1));
  const [hoveredFilter, setHoveredFilter] = useState(defaultFilter);
  const [hoveredRR, setHoveredRR] = useState(rr()[0][0].toFixed(2));

  useEffect(() => {
    if (d3Container.current) {
      d3.select(d3Container.current).selectAll('*').remove();
      const svg = d3.select(d3Container.current).append('svg').attr('width', 550).attr('height', 550);

      const maxValue = Math.max(...data().flat());
      const greyColor = '#808080';

      const colorFunction = (x, y) => {
        const baseValue = data2()[y][x];
        const greyColor = '#808080';
        
        if (baseValue + 1.4 * 2 < thresholdValue) {
          return greyColor;
        } else {
          const scale = d3.scaleLinear().domain([0, maxValue]).range([0, 1]);
          const color = d3.interpolateBlues(scale(baseValue));
          if (airCleaner && baseValue + 1.4 < thresholdValue) {
            return '#64bc6f';
          } else if (airCleaner && baseValue < thresholdValue) {
            return '#def2da';
          } else if (baseValue < thresholdValue) {
            return greyColor;
          } else {
            return color;
          }
        }
      };


      const xScale = d3.scaleBand().domain(xLabels).range([50, 500]);
      const yScale = d3.scaleBand().domain(yLabels).range([500, 50]);

      const xAxis = d3.axisBottom(xScale)
        .tickValues(xLabels.filter((d, i) => i % 2 === 0))
        .tickFormat(d => d)
        .tickSizeOuter(0)
        .tickPadding(10); // Add tick padding

      const yAxis = d3.axisLeft(yScale)
        .tickValues(yLabels.filter((d, i) => i % 2 === 0))
        .tickFormat(d => d)
        .tickSizeOuter(0)
        .tickPadding(10); // Add tick padding

      svg
      .append('g')
      .attr('transform', 'translate(0, 500)')
      .call(xAxis)
      .selectAll("text")
        .style("font-size", "0.8rem") // Set tick label font size to 0.8rem
        .style("font-family", "Arial") // Set font family to Arial
        .attr("dy", "0.1rem"); // Move tick labels closer to the axis

      svg
        .append("text")
        .attr('x', 275) // Adjust x position
        .attr('y', 535)
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .style('font-family', 'Arial') // Set font family to Arial
        .style('font-size', '0.9rem') // Set font size to 0.9rem
        .text('Outdoor Air Flow Rate (ACH)');

      svg
        .append('g')
        .attr('transform', 'translate(50, 0)')
        .call(yAxis)
        .selectAll("text")
          .style("font-size", "0.8rem") // Set tick label font size to 0.8rem
          .style("font-family", "Arial") // Set font family to Arial
          .attr("dx", "0.3rem"); // Move tick labels closer to the axis

      svg
        .append("text")
        .attr('x', -250) // Adjust x position
        .attr('y', 15) // Adjust y position
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .style('font-family', 'Arial') // Set font family to Arial
        .style('font-size', '0.9rem') // Set font size to 0.9rem
        .attr('transform', 'rotate(-90)')
        .text('Filter Efficiency (%)');

      svg
        .selectAll('.cell')
        .data(data().flat())
        .join('rect')
        .attr('class', 'cell')
        .attr('x', (d, i) => xScale(xLabels[i % xLabels.length]))
        .attr('y', (d, i) => yScale(yLabels[Math.floor(i / xLabels.length)]))
        .attr('width', xScale.bandwidth())
        .attr('height', yScale.bandwidth())
        .attr('fill', (d, i) => colorFunction(i % xLabels.length, Math.floor(i / xLabels.length)))
        .on('mouseover', function (event, d) {
          const i = data().flat().indexOf(d);
          const x = i % xLabels.length;
          const y = Math.floor(i / xLabels.length);
          const value = data()[y][x].toFixed(2);
          const xValue = xLabels[x];
          const yValue = yLabels[y];
          const relativeRisk = rr()[y][x].toFixed(2);
          

          d3.select(this).style('opacity', 0.5);
      
          setHoveredNADR(value);
          setHoveredOA(xValue);
          setHoveredFilter(yValue);
          setHoveredRR(relativeRisk);

        })
        .on('mouseout', (event, d) => {
          d3.select(event.currentTarget).style('opacity', 1);
          tooltip.style('opacity', 0);
        });

        const tooltip = d3
        .select(d3Container.current)
        .append('div')
        .attr('class', 'tooltip')
        .style('position', 'absolute')
        .style('background-color', 'white')
        .style('border', 'solid')
        .style('border-width', '1px')
        .style('padding', '5px')
        .style('opacity', 0)
        .style('z-index', '1000')
        .style('pointer-events', 'none')
        .style("font-family", "Arial") // Set font family to Arial
        .style("font-size", "0.9rem"); // Set font size to 0.9rem
    }
  }, [d3Container.current, userValue, airCleaner, uvgi, baseline, occupantNumber, floorArea, height ]);


  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '-20px',
        }}
      >
        <label
          style={{
            fontFamily: 'Arial',
            fontSize: '1rem',
            marginRight: '10px',
          }}
        >
          Return Air:
        </label>
        <input
  type="number"
  value={userValue}
  onChange={event => setUserValue(event.target.value)}
  min="0"
  max="1" // Change the max value to your desired limit
  step="0.05"
  style={{
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '3px 10px',
    fontFamily: 'Arial',
    fontSize: '1rem',
    marginRight: '20px',
  }}
/>
        <label style={{ fontFamily: 'Arial', fontSize: '1rem', marginRight: '10px' }}>
          Air Cleaner
        </label>
        <input
          type="checkbox"
          checked={airCleaner}
          onChange={(e) => setAirCleaner(e.target.checked)}
          style={{ marginRight: '20px' }}
        />
        <label style={{ fontFamily: 'Arial', fontSize: '1rem', marginRight: '10px' }}>
          UVGI
        </label>
        <input
          type="checkbox"
          checked={uvgi}
          onChange={(e) => setUvgi(e.target.checked)}
        />

</div>
<br />
    <div style={{ marginBottom: '-30px' }}>
    {hoveredNADR && (
    <>
      <span
        style={{
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '1rem',
          color: parseFloat(hoveredNADR) >= thresholdValue ? 'green' : '#B22222', // Change the text color based on the condition
        }}
      >
        {parseFloat(hoveredNADR) >= thresholdValue ? (
          <>
            Complies with ASHRAE
          </>
        ) : (
          <>
            Not complies with ASHRAE
          </>
        )}
      </span>
      <span
        style={{
          marginLeft: '20px',
          fontFamily: 'Arial',
          fontSize: '1rem',
        }}
      >
        Risk {hoveredRR}&emsp;Filter: {hoveredFilter}%&emsp;OA: {hoveredOA}
      </span>
    </>
  )}
</div>
    <div ref={d3Container}></div>
  </div>
);
};

export default HeatmapD3_11;