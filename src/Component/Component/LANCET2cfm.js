import React, { useState, useEffect, useRef } from 'react'; 
import * as d3 from 'd3';
import './FancyButton4.css';

const LANCET2cfm = ({ selectedSubcategory, floorArea, 
  height, occupantNumber, occupiedPeriod, expiratoryActivity, physicalActivity,
  virusType, immunityProportion, infectorStatus, casesPerDay, infectiousPeriod, unreportedCases, infectorNumber,
  supplyAir, outdoorAir, merv, filter, hvacUV, hvacTreatment,
  roomTreatment, roomUV, roomAC, roomTreatmentQ, roomUVQ, roomACQ, maskInfector, maskSus, ASHRAE, ASHRAE2}) => {

 const [showControl, setShowControl] = useState(false);
 const d3Container = useRef(null);

 const [ac, setAc] = useState(false);
 const [uvc, setUvc] = useState(false);
 const [air, setAir] = useState(false);


 useEffect(() => {
  setAc(roomACQ !== 0);
  setUvc(roomUVQ !== 0);
  setAir(roomTreatmentQ !== 0);
}, [roomACQ, roomUVQ, roomTreatmentQ]);

    

  const max = (supplyAir / 20);

  const xLabels = [...Array(21).keys()].map((i) => (i * max).toFixed(0));
  const yLabels = [...Array(21).keys()].map((i) => (i * 5).toFixed(0));

  const totalCADRR = outdoorAir + 
    (supplyAir - outdoorAir) * filter + 
    (supplyAir - outdoorAir) * (1 - filter) * hvacUV / 100 +
    hvacTreatment + 
    roomUV * roomUVQ + 
    roomAC * roomACQ + 
    roomTreatment * roomTreatmentQ;

    const standard = ASHRAE
    
  const isCompliant = totalCADRR >= standard;

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
        hvacTreatment +
        roomUV * roomUVQ + 
    roomAC * roomACQ + 
    roomTreatment * roomTreatmentQ ;

      return baseNADR;
    })
  );

      const ar = () =>
      new Array(yLabels.length).fill(0).map((_, y) =>
      new Array(xLabels.length).fill(0).map((_, x) => {
        const xValue = x * max; // Modify this line to use a constant step size (e.g., 90)
        const yValue = y * 5;
        const baseNADR = xValue + (supplyAir - xValue) * (yValue / 100);

            return (1 - Math.exp((-9.7 * 19 / (810 * 10) * 8) / baseNADR)) * 100;
          })
        );

      const rr = () =>
      new Array(yLabels.length).fill(0).map((_, y) =>
      new Array(xLabels.length).fill(0).map((_, x) => {
      const xValue = x * max / 20; // Adjust the x-value scaling factor
      const yValue = y * 5;
      const baseNADR = xValue + (supplyAir - xValue) * (yValue / 100);
  
              const ar = (1 - Math.exp((-9.7 * 19 / (810 * 10) * 8) / baseNADR)) * 100;
              const minOA = (5 * 60 * 5 + 0.06 * 60 * 810) / (810 * 10);
              const minFilter = 0;
              const minValue = minOA + (minOA / (1 - 0.75)) * 0.75 * (minFilter / 100);
              const minRisk = (1 - Math.exp((-9.7 * 19 / (810 * 10) * 8) / minValue)) * 100;
  
    
              return ar / minRisk;
            })
          );

          const defaultOA = outdoorAir;
          const defaultFilter = filter * 100;
          const thresholdValue = standard * occupantNumber;
          const outdoorAirValue = outdoorAir;
          const filterValue = filter;
        
          const [hoveredNADR, setHoveredNADR] = useState(thresholdValue.toFixed(2));
          const [hoveredOA, setHoveredOA] = useState(defaultOA.toFixed(1));
          const [hoveredFilter, setHoveredFilter] = useState(defaultFilter);
          const [hoveredAR, setHoveredAR] = useState(ar()[0][0].toFixed(2));
          const [hoveredRR, setHoveredRR] = useState(rr()[0][0].toFixed(2));

  useEffect(() => {

    console.log(
      selectedSubcategory,
      floorArea,
      height,
      occupantNumber,
      occupiedPeriod,
      expiratoryActivity,
      physicalActivity,
      virusType,
      immunityProportion,
      infectorStatus,
      casesPerDay,
      infectiousPeriod,
      unreportedCases,
      infectorNumber,
      supplyAir,
      outdoorAir,
      merv,
      filter,
      hvacUV,
      hvacTreatment,
      roomTreatment,
      roomUV,
      roomAC,
      roomTreatmentQ,
      roomUVQ,
      roomACQ,
      maskInfector,
      maskSus,
      ASHRAE,
      ASHRAE2
    );
    
    if (d3Container.current) {
      d3.select(d3Container.current).selectAll('*').remove();
      const svg = d3.select(d3Container.current).append('svg').attr('width', 550).attr('height', 550);

      const maxValue = Math.max(...data2().flat());

      const LANCET_occ = totalCADRR/occupantNumber;


      const colorFunction = (x, y) => {
        const baseValue = data2()[y][x] / occupantNumber;
    
        const greyColor = '#C8C8C8';
    
        const scale = d3.scaleLinear().domain([thresholdValue, maxValue]).range([0.3, 1]);
        const color = d3.interpolateBlues(scale(baseValue));
        

        if (baseValue < 21) {
          if (x == (Math.round(outdoorAirValue / max)) &&
          y == (Math.round(filterValue * 100 / 5))) {

            if (LANCET_occ >= 21) {
              return 'rgba(255, 215, 0, 0.7)'
            }
            else {
          return '#B22222'
            };

        } else {
   
          return greyColor;         
        }

        } else if (baseValue >= 21 && baseValue < 30) {
            if (x == (Math.round(outdoorAirValue / max)) &&
            y == (Math.round(filterValue * 100 / 5))) {
              if (LANCET_occ >= 21) {

                return '#006400'
              }
              else {
            return 'rgba(255, 215, 0, 0.7)'
              };

        } else {

          
          return 'rgba(100, 150, 190)';         
        }
        } else if (baseValue == 30) {
          if (x == (Math.round(outdoorAirValue / max)) &&
          y == (Math.round(filterValue * 100 / 5))) {
            if (LANCET_occ >= 21) {

              return '#006400'
            }
            else {
          return 'rgba(255, 215, 0, 0.7)'
            };

      } else {

        
        return 'rgba(60, 115, 175)';         
      }
      } else if (baseValue > 30) {
        if (x == (Math.round(outdoorAirValue / max)) &&
        y == (Math.round(filterValue * 100 / 5))) {
          if (LANCET_occ >= 21) {

            return '#006400'
          }
          else {
        return 'rgba(255, 215, 0, 0.7)'
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
        .text('Outdoor Airflow Rate (cfm)');

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
          const value = data2()[y][x].toFixed(0);
          const xValue = xLabels[x];
          const yValue = yLabels[y];
          const value2 = ar()[y][x].toFixed(2);
          const value3 = rr()[y][x].toFixed(2);
          d3.select(this).style('opacity', 0.5);
      
          setHoveredNADR(value);
          setHoveredOA(xValue);
          setHoveredFilter(yValue);
          setHoveredAR(value2);
          setHoveredRR(value3);
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
    height, occupantNumber, occupiedPeriod, expiratoryActivity, physicalActivity,
    virusType, immunityProportion, infectorStatus, casesPerDay, infectiousPeriod, unreportedCases, infectorNumber,
    supplyAir, outdoorAir, merv, filter, hvacUV, hvacTreatment,
    roomTreatment, roomUV, roomAC, roomTreatmentQ, roomUVQ, roomACQ, maskInfector, maskSus, ASHRAE, ASHRAE2 ]);

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
        Total NADR {hoveredNADR} cfm&emsp;Absolute Risk: {hoveredAR}%&emsp;Relative Risk: {hoveredRR}<br/> OA: {hoveredOA} cfm&emsp;RA: {supplyAir-hoveredOA} cfm ({((supplyAir - hoveredOA) / supplyAir * 100).toFixed(1)}%)&emsp;Filter: {hoveredFilter}%
        </span>
        <br/>
        
{/*

        <button
        className='fancy-button4'
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowControl(!showControl)}
      >
        {showControl ? 'Hide Controller' : 'Show Controller'}
      </button>


      {showControl && ( 
        <div>
      <span
      style={{
        marginLeft: '20px',
        fontFamily: 'Arial',
        fontSize: '0.9rem',
      }}
    >
        [ HVAC ]&emsp;UVC Inactivation: {hvacUV}%&emsp;Air Treatment: {hvacTreatment} cfm
        <br/>
        <span style={{ lineHeight: '1.7' }}>&nbsp;</span>
         <label style={{ fontFamily: 'Arial', fontSize: '0.9rem', marginRight: '10px' }}>
        [ In Room ]&emsp;Air Cleaner
      </label>
      <input
        type="checkbox"
        checked={ac}
        onChange={(e) => setAc(e.target.checked)}
      />
&emsp;
      <label style={{ fontFamily: 'Arial', fontSize: '0.9rem', marginRight: '10px' }}>
        UVC
      </label>
      <input
        type="checkbox"
        checked={uvc}
        onChange={(e) => setUvc(e.target.checked)}
      />
&emsp;
      <label style={{ fontFamily: 'Arial', fontSize: '0.9rem', marginRight: '10px' }}>
        Air Treatent
      </label>
      <input
        type="checkbox"
        checked={air}
        onChange={(e) => setAir(e.target.checked)}
      />
      </span>
      </div>
      )}
      */}

    </>
  )}
</div>
<span style={{ lineHeight: '0.3' }}>&nbsp;</span>
    <div ref={d3Container}></div>
  </div>
);
};

export default LANCET2cfm;