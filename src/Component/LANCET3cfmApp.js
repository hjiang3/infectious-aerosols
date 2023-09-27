import React from 'react';
import LANCET3cfm from './LANCET3cfm';

function LANCET3cfmApp(props) {
  return (
    <div className="App">
      <LANCET3cfm selectedSubcategory={props.selectedSubcategory} 
                 floorArea={props.floorArea} 
                 height={props.height} 
                 occupantNumber={props.occupantNumber} 
                 occupiedPeriod={props.occupiedPeriod} 
                 supplyAir={props.supplyAir} 
                 outdoorAir={props.outdoorAir} 
                 merv={props.merv} 
                 filter={props.filter}
                 hvacUV={props.hvacUV} 
                 roomUV={props.roomUV} 
                 roomAC={props.roomAC} 
                 roomUVQ={props.roomUVQ} 
                 roomACQ={props.roomACQ}
                 ASHRAE62ft={props.ASHRAE62ft}
                 ASHRAE62p={props.ASHRAE62p}/>
    </div>
  );
}

export default LANCET3cfmApp;