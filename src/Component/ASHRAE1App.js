import React from 'react';
import ASHRAE1 from './ASHRAE1';

function ASHRAE1App( selectedSubcategory, floorArea, height, occupantNumber, occupiedPeriod, expiratoryActivity, physicalActivity,
  virusType, immunityProportion, infectorStatus, casesPerDay, infectiousPeriod, unreportedCases, infectorNumber,
  supplyAir, outdoorAir, merv, hvacUV, hvacTreatment,
  roomTreatment, roomUV, roomAC, roomTreatmentQ, roomUVQ, roomACQ, maskInfector, maskSus ) {
  return (
    <div className="App">
      <ASHRAE1                  selectedSubcategory={selectedSubcategory} 
                 floorArea={floorArea} 
                 height={height} 
                 occupantNumber={occupantNumber} 
                 occupiedPeriod={occupiedPeriod} 
                 expiratoryActivity={expiratoryActivity} 
                 physicalActivity={physicalActivity}
                 virusType={virusType} 
                 immunityProportion={immunityProportion} 
                 infectorStatus={infectorStatus} 
                 casesPerDay={casesPerDay} 
                 infectiousPeriod={infectiousPeriod} 
                 unreportedCases={unreportedCases} 
                 infectorNumber={infectorNumber}
                 supplyAir={supplyAir} 
                 outdoorAir={outdoorAir} 
                 merv={merv} 
                 hvacUV={hvacUV} 
                 hvacTreatment={hvacTreatment}
                 roomTreatment={roomTreatment} 
                 roomUV={roomUV} 
                 roomAC={roomAC} 
                 roomTreatmentQ={roomTreatmentQ} 
                 roomUVQ={roomUVQ} 
                 roomACQ={roomACQ} 
                 maskInfector={maskInfector} 
                 maskSus={maskSus}  />
    </div>
  );
}

export default ASHRAE1App;