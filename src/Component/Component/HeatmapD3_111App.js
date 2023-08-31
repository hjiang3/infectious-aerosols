import React from 'react';
import HeatmapD3_111 from './HeatmapD3_111';

function HeatmapD3_111App( baseline, occupantNumber, floorArea, height ) {
  return (
    <div className="App">
      <HeatmapD3_111 baseline={baseline} occupantNumber={occupantNumber} floorArea={floorArea} height={height} />
    </div>
  );
}

export default HeatmapD3_111App;