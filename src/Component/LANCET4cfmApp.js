import React from 'react';
import LANCET4cfm from './LANCET4cfm';

function LANCET4cfmApp(props) {
  return (
    <div className="App">
      <LANCET4cfm selectedSubcategory={props.selectedSubcategory} 
                 floorArea={props.floorArea} 
                 height={props.height} 
                 occupantNumber={props.occupantNumber} 
                 occupiedPeriod={props.occupiedPeriod} 
                 immunityProportion={props.immunityProportion} 
                 infectorNumber={props.infectorNumber}
                 supplyAir={props.supplyAir} 
                 outdoorAir={props.outdoorAir} 
                 merv={props.merv} 
                 filter={props.filter}
                 hvacUV={props.hvacUV} 
                 roomUV={props.roomUV} 
                 roomAC={props.roomAC} 
                 roomUVQ={props.roomUVQ} 
                 roomACQ={props.roomACQ} 
                 maskInfector={props.maskInfector} 
                 maskSus={props.maskSus}
                 secondQuanta={props.secondQuanta}
                 secondBreath={props.secondBreath} />
    </div>
  );
}

export default LANCET4cfmApp;