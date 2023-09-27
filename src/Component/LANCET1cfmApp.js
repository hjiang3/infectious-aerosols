import React from 'react';
import LANCET1cfm from './LANCET1cfm';

function LANCET1cfmApp(props) {
  return (
    <div className="App">
      <LANCET1cfm selectedSubcategory={props.selectedSubcategory} 
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
                 roomACQ={props.roomACQ}/>
    </div>
  );
}

export default LANCET1cfmApp;