import React from 'react';
import HeatmapD3_2 from './HeatmapD3_2';

function HeatmapD3_2App({baseline, floorArea, height}) {
  return (
    <div className="App">
      <HeatmapD3_2 baseline={baseline} floorArea={floorArea} height={height}/>
    </div>
  );
}

export default HeatmapD3_2App;