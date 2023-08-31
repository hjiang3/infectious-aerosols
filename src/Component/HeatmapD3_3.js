import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const HeatmapD3_3 = () => {
  const d3Container = useRef(null);
  const [userValue, setUserValue] = useState(0.75);

  const xLabels = [...Array(21).keys()].map(i => (i * 0.5).toFixed(1));
  const yLabels = [...Array(21).keys()].map(i => (i * 5).toFixed(0));

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

  const data = () =>
    new Array(yLabels.length)
      .fill(0)
      .map((_, y) =>
        new Array(xLabels.length).fill(0).map((_, x) => {
          const xValue = parseFloat(xLabels[x]);
          const yValue = parseFloat(yLabels[y]);
          const NADR = xValue + (xValue / (1 - userValue)) * userValue * (yValue / 100);
          return (1 - Math.exp((-9.7 * 0.54 / 229 * 8) / NADR)) * 100;
        })
      );

      const defaultOA = 2.5;
      const defaultFilter = 86;
      const thresholdValue = defaultOA + (defaultOA / (1 - 0.75)) * 0.75 * (defaultFilter / 100);

  const findDefaultRiskCell = () => {
    for (let y = 0; y < yLabels.length; y++) {
      for (let x = 0; x < xLabels.length; x++) {
        const value = data()[y][x];
        if (value >= 3) {
          return {
            x: x,
            y: y,
            value: value,
          };
        }
      }
    }
    return {
      x: 0,
      y: 0,
      value: data()[0][0],
    };
  };

  const [hoveredNADR, setHoveredNADR] = useState(thresholdValue.toFixed(2));
  const [hoveredValue, setHoveredValue] = useState(findDefaultRiskCell().value.toFixed(2));
  const [hoveredXValue, setHoveredXValue] = useState(xLabels[findDefaultRiskCell().x]);
  const [hoveredYValue, setHoveredYValue] = useState(yLabels[findDefaultRiskCell().y]);

  useEffect(() => {
    if (d3Container.current) {
      d3.select(d3Container.current).selectAll('*').remove();
      const svg = d3
        .select(d3Container.current)
        .append('svg')
        .attr('width', 550)
        .attr('height', 550);


      const colorFunction = (x, y) => {
        const value = data()[y][x];
        if (value < 1) {
          return 'rgba(20, 86, 139, 0.8)';
        } else if (value < 3) {
          return 'rgba(255, 215, 0, 0.7)';
        } else {
          return 'rgba(242, 99, 91, 0.9)';
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
        .attr('y', 535) //
        .attr('y', 535) // Adjust y position
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .style('font-family', 'Arial') // Set font family to Arial
        .style('font-size', '0.9rem') // Set font size to 0.9rem
        .text('Outdoor Air Flow Rate (OA)');

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
          const value2 = data2()[y][x].toFixed(2);
          const value = data()[y][x].toFixed(2);
          setHoveredNADR(value2);
          setHoveredValue(value);
          setHoveredXValue(xLabels[x]);
          setHoveredYValue(yLabels[y]);
          d3.select(this).style('opacity', 0.5);
        })
        .on('mouseout', (event, d) => {
          d3.select(event.currentTarget).style('opacity', 1);
        });

    }
  }, [d3Container.current, userValue]);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'inline-block', marginBottom: '10px' }}>
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
      </div>
      <br />
      <div style={{ marginBottom: '-35px' }}>
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
              Risk: {hoveredValue}%&emsp;Filter: {hoveredYValue}%&emsp;OA: {hoveredXValue}
            </span>
          </>
        )}
      </div>
      <div ref={d3Container}></div>
    </div>
  );
};

export default HeatmapD3_3;
