import React from 'react';
import LANCET2cfm from './LANCET2cfm';

function LANCET2cfmApp(props) {
  return (
    <div className="App">
      <LANCET2cfm selectedSubcategory={props.selectedSubcategory} 
                 floorArea={props.floorArea} 
                 height={props.height} 
                 occupantNumber={props.occupantNumber} 
                 occupiedPeriod={props.occupiedPeriod} 
                 expiratoryActivity={props.expiratoryActivity} 
                 physicalActivity={props.physicalActivity}
                 virusType={props.virusType} 
                 immunityProportion={props.immunityProportion} 
                 infectorStatus={props.infectorStatus} 
                 casesPerDay={props.casesPerDay} 
                 infectiousPeriod={props.infectiousPeriod} 
                 unreportedCases={props.unreportedCases} 
                 infectorNumber={props.infectorNumber}
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
                 maskInfector={props.maskInfector} 
                 maskSus={props.maskSus}
                 ASHRAE={props.ASHRAE}
                 ASHRAE2={props.ASHRAE2}  />
    </div>
  );
}

export default LANCET2cfmApp;