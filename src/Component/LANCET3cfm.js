import React, { useState, useEffect, useRef } from 'react'; 
import * as d3 from 'd3';
import './FancyButton.css';

const LANCET3cfm = ({ selectedSubcategory, floorArea, 
  height, occupantNumber, occupiedPeriod, 
  supplyAir, outdoorAir, merv, filter, hvacUV, 
  roomUV, roomAC, roomUVQ, roomACQ, maskInfector, maskSus, ASHRAE62ft, ASHRAE62p,
  }) => {

 const [showControl, setShowControl] = useState(false);
 const d3Container = useRef(null);


  const max = (supplyAir / 20);

  const xLabels = [...Array(21).keys()].map((i) => (i * max).toFixed(0));
  const yLabels = [...Array(21).keys()].map((i) => (i * 5).toFixed(0));


  const totalCADRR = outdoorAir + 
    (supplyAir - outdoorAir) * filter + 
    (supplyAir - outdoorAir) * (1 - filter) * hvacUV / 100 +
    roomUV * roomUVQ + 
    roomAC * roomACQ;

  const data = () =>
  new Array(yLabels.length).fill(0).map((_, y) =>
    new Array(xLabels.length).fill(0).map((_, x) => {
      const xValue = x  ;
      const yValue = y ;
      return xValue * 100 + yValue;
    })
  );

  const data2 = () =>
  new Array(yLabels.length).fill(0).map((_, y) =>
    new Array(xLabels.length).fill(0).map((_, x) => {
      const xValue = x * max ;
      const yValue = y * 5 ;
      const baseNADR = xValue + 
        (supplyAir - xValue) * yValue / 100 + 
        (supplyAir - xValue) * (1 - yValue / 100) * hvacUV / 100 +
        roomUV * roomUVQ + 
    roomAC * roomACQ;

      return baseNADR;
    })
  );

const defaultOA = outdoorAir;
const defaultFilter = filter * 100;
const outdoorAirValue = outdoorAir;
const filterValue = filter;
const defaultNADR = outdoorAir + 
(supplyAir - outdoorAir) * filter / 100 + 
(supplyAir - outdoorAir) * (1 - filter / 100) * hvacUV / 100 +
roomUV * roomUVQ + 
roomAC * roomACQ;
        
const [hoveredNADR, setHoveredNADR] = useState(defaultNADR.toFixed(1));
const [hoveredOA, setHoveredOA] = useState(defaultOA.toFixed(1));
const [hoveredFilter, setHoveredFilter] = useState(defaultFilter);

  useEffect(() => {

    console.log(
      selectedSubcategory,
      floorArea,
      height,
      occupantNumber,
      occupiedPeriod,
      supplyAir,
      outdoorAir,
      merv,
      filter,
      hvacUV,
      roomUV,
      roomAC,
      roomUVQ,
      roomACQ,
      ASHRAE62ft,
      ASHRAE62p,
      
    );
    
    if (d3Container.current) {
      d3.select(d3Container.current).selectAll('*').remove();
      const svg = d3.select(d3Container.current).append('svg').attr('width', 550).attr('height', 550);

      const maxValue = Math.max(...data2().flat());

      const newF1 = floorArea * (ASHRAE62ft + 0.75) + occupantNumber * ASHRAE62p;
      const newF2 = floorArea * (ASHRAE62ft + 1) + occupantNumber * ASHRAE62p;

      const colorFunction = (x, y) => {
        const baseValue = data2()[y][x];
    
        const greyColor = '#C8C8C8';

        if (baseValue < newF1) {
          if (x == (Math.round(outdoorAirValue / max)) &&
          y == (Math.round(filterValue * 100 / 5))) {

            if (totalCADRR >= newF1) {
              return 'black'
            }
            else {
          return '#B22222'
            };

        } else {
   
          return greyColor;         
        }

        } else if (baseValue >= newF1 && baseValue < newF2) {
            if (x == (Math.round(outdoorAirValue / max)) &&
            y == (Math.round(filterValue * 100 / 5))) {
              if (totalCADRR >= newF1) {

                return '#006400'
              }
              else {
            return 'black'
              };

        } else {

          
          return 'rgba(100, 150, 190)';         
        }
        } else if (baseValue == newF2) {
          if (x == (Math.round(outdoorAirValue / max)) &&
          y == (Math.round(filterValue * 100 / 5))) {
            if (totalCADRR >= newF2) {

              return '#006400'
            }
            else {
          return 'black'
            };

      } else {

        
        return 'rgba(60, 115, 175)';         
      }
      } else if (baseValue > newF2) {
        if (x == (Math.round(outdoorAirValue / max)) &&
        y == (Math.round(filterValue * 100 / 5))) {
          if (totalCADRR >= newF1) {

            return '#006400'
          }
          else {
        return 'black'
          };

    } else {

      
      return 'rgba(60, 115, 175)';         
    }
    }
    };


      const xScale = d3.scaleBand().domain(xLabels).range([50, 500]);
      const yScale = d3.scaleBand().domain(yLabels).range([500, 50]);

      const xAxis = d3.axisBottom(xScale)
        .tickValues(xLabels.filter((d, i) => i % 5 === 0))
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
        .text('Outdoor airflow rate (cfm)');

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
        .text('Filter efficiency (%)');

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
          const value = data2()[y][x].toFixed(0);
          const xValue = xLabels[x];
          const yValue = yLabels[y];
          d3.select(this).style('opacity', 0.5);
      
          setHoveredNADR(value);
          setHoveredOA(xValue);
          setHoveredFilter(yValue);
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
  }, [d3Container.current, selectedSubcategory, floorArea,
    height, occupantNumber, occupiedPeriod, 
    supplyAir, outdoorAir, merv, filter, hvacUV,
    roomUV, roomAC, roomUVQ, roomACQ, maskInfector, maskSus, ASHRAE62ft, ASHRAE62p,
  ]);

  return (

    <div style={{ textAlign: 'center', position: 'relative', marginBottom: '-60px' }}>
      
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '-20px',
        }}
      >

  </div>
  <br />
    <div style={{ marginTop: '-20px', marginBottom: '-50px' }}>
    {hoveredNADR && (
    <>
      <span
        style={{
          marginLeft: '20px',
          fontFamily: 'Arial',
          fontSize: '0.9rem',
        }}
      >
 Total NADR {hoveredNADR} cfm&emsp;Good: {(floorArea * (ASHRAE62ft + 0.75) + occupantNumber * ASHRAE62p).toFixed(0)} cfm&emsp;Better: {(floorArea * (ASHRAE62ft + 1) + occupantNumber * ASHRAE62p).toFixed(0)} cfm<br/> OA: {hoveredOA} cfm&emsp;RA: {(supplyAir-hoveredOA).toFixed(1)} cfm ({((supplyAir - hoveredOA) / supplyAir * 100).toFixed(1)}%)&emsp;Filter: {hoveredFilter}%
        </span>
        <br/>
        

    </>
  )}
</div>
<span style={{ lineHeight: '0.3' }}>&nbsp;</span>
    <div ref={d3Container}></div>
  </div>
);
};

export default LANCET3cfm;