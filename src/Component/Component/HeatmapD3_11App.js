import React from 'react';
import HeatmapD3_11 from './HeatmapD3_11';

function HeatmapD3_11App( baseline, occupantNumber, floorArea, height ) {
  return (
    <div className="App">
      <HeatmapD3_11 baseline={baseline} occupantNumber={occupantNumber} floorArea={floorArea} height={height} />
    </div>
  );
}

export default HeatmapD3_11App;