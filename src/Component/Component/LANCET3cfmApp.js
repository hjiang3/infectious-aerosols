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
                 ASHRAE2={props.ASHRAE2}
                 ASHRAE62ft={props.ASHRAE62ft}
                 ASHRAE62p={props.ASHRAE62p}  />
    </div>
  );
}

export default LANCET3cfmApp;