import React from 'react';
import HeatmapD3 from './HeatmapD3';

function HeatmapD3App( baseline, occupantNumber, floorArea, height ) {
  return (
    <div className="App">
      <HeatmapD3 baseline={baseline} occupantNumber={occupantNumber} floorArea={floorArea} height={height} />
    </div>
  );
}

export default HeatmapD3App;