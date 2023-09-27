import React from 'react';
import ASHRAES from './ASHRAES';

function ASHRAESApp(props) {
  return (
    <div className="App">
      <ASHRAES selectedSubcategory={props.selectedSubcategory} 
                 floorArea={props.floorArea} 
                 height={props.height} 
                 occupantNumber={props.occupantNumber} 
                 occupiedPeriod={props.occupiedPeriod} 
                 supplyAir={props.supplyAir} 
                 outdoorAir={props.outdoorAir} 
                 merv={props.merv} 
                 filter={props.filter}
                 hvacUV={props.hvacUV} 
                 hvacTreatment={props.hvacTreatment}
                 roomTreatment={props.roomTreatment} 
                 roomUV={props.roomUV} 
                 roomAC={props.roomAC} 
                 roomTreatmentQ={props.roomTreatmentQ} 
                 roomUVQ={props.roomUVQ} 
                 roomACQ={props.roomACQ} 
                 ASHRAE={props.ASHRAE}
                 />
    </div>
  );
}

export default ASHRAESApp;