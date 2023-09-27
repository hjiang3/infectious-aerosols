import React, { useState } from 'react';
import './Compare.css';
import { rowNames } from './rowNames';

export default function Compare({ comparisonData, setComparisonData, setCurrentPage }) {
  console.log("Data in Compare component", comparisonData);
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleColumnHover = (index) => {
    if (index >= 0) {
      setHoveredColumn(index);
    }
  };

  const handleColumnRemove = (index) => {
    if (comparisonData.length > 0) {
      setComparisonData((prevData) => {
        const newData = prevData.filter((_, i) => i !== index);
        return newData;
      });
    }
  };

  const handleAddSimulation = () => {
    setCurrentPage('hero'); // Update the currentPage state to 'hero'
    window.scrollTo(0, 0);  // Scroll to the top of the page
    window.scrollTo(0, 200);  // Scroll to the top of the page
  };

  const handleExportCSV = () => {
    if (comparisonData.length === 0) {
      console.log("No options available for export.");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";

    csvContent += ",";
    comparisonData.forEach((_, index) => {
      csvContent += `Option ${index + 1},`;
    });
    csvContent += "\n";

    const transposedData = [];
    for (let i = 0; i < Object.keys(comparisonData[0]).length; i++) {
      const rowData = [];
      Object.keys(comparisonData).forEach((key) => {
        rowData.push(comparisonData[key][Object.keys(comparisonData[key])[i]]);
      });
      transposedData.push(rowData);
    }

    for (let i = 0; i < transposedData.length; i++) {
      csvContent += `${rowNames[Object.keys(comparisonData[0])[i]]},`;
      for (let j = 0; j < transposedData[i].length; j++) {
        csvContent += `${transposedData[i][j]},`;
      }
      csvContent += "\n";
    }

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "compare_infectious-aerosols.csv");
    link.click();
  };

  return (
    <div className="compare" id="compare">
      <div className="container">
        <br />
        <br />
        <br />
        <div className="card">
          <div className="export-button-container">
            <button className="export-button" onClick={handleExportCSV}>
              Export as CSV
            </button>
          </div>
          <div className="table-container">
            {comparisonData.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {comparisonData.map((_, index) => (
                      <th
                        key={index}
                        onMouseEnter={() => handleColumnHover(index)}
                        onMouseLeave={() => handleColumnHover(null)}
                      >
                        Option {index + 1}
                        {hoveredColumn === index && (
                          <button
                            className="remove-button"
                            onClick={() => handleColumnRemove(index)}
                          >
                            ×
                          </button>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(comparisonData[0]).map((rowName) => (
                    <tr key={rowName}>
                      <td className="bold-text">{rowNames[rowName]}</td>
                      {comparisonData.map((data, index) => (
                        <td key={index}>{data[rowName]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>Save result to compare options.</div>
            )}
            <div className="add-button-container">
              {comparisonData.length < 5 && (
                <button className="add-button" onClick={handleAddSimulation}>
                  +
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}