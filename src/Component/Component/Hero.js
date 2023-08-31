import React, { useState, useEffect } from 'react';
import './FancyButton.css';
import './FancyButton2.css';
import './FancyButton3.css';
import './FancyButton4.css';
import './FancyButton5.css';
import './FancyButton6.css';
import './FancyButtonS.css';
import './FancyButtonD.css';
import './RadioButton.css';
import './Hero.css';
import ASHRAE1App from './ASHRAE1App';
import ASHRAE1cfmApp from './ASHRAE1cfmApp';
import ASHRAE2cfmApp from './ASHRAE2cfmApp';
import LANCET1cfmApp from './LANCET1cfmApp';
import LANCET2cfmApp from './LANCET2cfmApp';
import LANCET3cfmApp from './LANCET3cfmApp';
import HeatmapD3App from './HeatmapD3App';
import HeatmapD3_11App from './HeatmapD3_11App';
import HeatmapD3_111App from './HeatmapD3_111App';
import HeatmapD3_2App from './HeatmapD3_2App';
import HeatmapD3_3App from './HeatmapD3_3App';
import './Results.css';
import Select from 'react-select';



const Hero = ({saveForComparison}) => {
  const [graphChoice, setGraphChoice] = useState("Filter Efficiency vs. Outdoor Air");
  const [graphChoice2, setGraphChoice2] = useState("Equivalent Air Change Rate");
  const [resultGraph, setResultGraph] = useState("Estimated Infection Risk");
  const [unitChoice, setUnitChoice] = useState("cfm");
  const [occupancyCategory, setOccupancyCategory] = useState("Commercial");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [modes, setModes] = useState("IRMM");
  const [occupantNumber, setOccupantNumber] = useState(12);
  const [occupiedPeriod, setOccupiedPeriod] = useState(60);
  const [expiratoryActivity, setExpiratoryActivity] = useState(null);
  const [physicalActivity, setPhysicalActivity] = useState(null);
  const [floorArea, setFloorArea] = useState(2000);
  const [height, setHeight] = useState(9);
  const [supplyAir, setSupplyAir] = useState(1800);
  const [outdoorAir, setOutdoorAir] = useState(240);
  const [merv, setMerv] = useState(0.86);
  const [filter, setFilter] = useState(0.86); 
  const [hvacUV, setHvacUV] = useState("0");
  const [hvacTreatment, setHvacTreatment] = useState(0);
  const [roomTreatment, setRoomTreatment] = useState(100);
  const [roomUV, setRoomUV] = useState(150);
  const [roomAC, setRoomAC] = useState(300);
  const [roomTreatmentQ, setRoomTreatmentQ] = useState("0");
  const [roomUVQ, setRoomUVQ] = useState("0");
  const [roomACQ, setRoomACQ] = useState("0");
  const [maskInfector, setMaskInfector] = useState("0");
  const [maskSus, setMaskSus] = useState("0");
  const [virusType, setVirusType] = useState("SARS-CoV-2");
  const [immunityProportion, setImmunityProportion] = useState("0");
  const [infectorStatus, setInfectorStatus] = useState("Regional Prevalence");
  const [casesPerDay, setCasesPerDay] = useState("10");
  const [infectiousPeriod, setInfectiousPeriod] = useState("7");
  const [unreportedCases, setUnreportedCases] = useState("50");
  const [infectorNumber, setInfectorNumber] = useState("1");
  const [selectedTab, setSelectedTab] = useState("ASHRAE");
  const [ASHRAE, setASHRAE] = useState(30);
  const [ASHRAE2, setASHRAE2] = useState(60);
  const [ASHRAE62p, setASHRAE62p] = useState(5);
  const [ASHRAE62ft, setASHRAE62ft] = useState(0.06);
  const [showSummary, setShowSummary] = useState(false);
  const [showBuilding, setShowBuilding] = useState(false);
  const [showQuanta, setShowQuanta] = useState(false);
  const [showInfector, setShowInfector] = useState(false);
  const [showHVAC, setShowHVAC] = useState(false);
  const [showInRoom, setShowInRoom] = useState(false);
  const [showNonEngineering, setShowNonEngineering] = useState(false);
  const [showVentilation, setShowVentilation] = useState(false);
  const [showFiltration, setShowFiltration] = useState(false);
  const [showDisinfection, setShowDisinfection] = useState(false);
  const [showMask, setShowMask] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const [showUnit, setShowUnit] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showDistance, setShowDistance] = useState(true)
  const [distance, setDistance] = useState(6)
  const [unit, setUnit] = useState('IP');
  const [showValue, setShowValue] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [ACM, setACM] = useState('Continuous Distribution');
  const [breathing, setBreathing] = useState(0);
  const [whispered, setWhispered] = useState(0);
  const [voiced, setVoiced] = useState(0);
  const [coughing, setCoughing] = useState(0);
  const [whispering, setWhispering] = useState(0);
  const [speaking, setSpeaking] = useState(0);
  const [type1, setType1] = useState("Lognormal");
  const [type2, setType2] = useState("Lognormal");
  const [type3, setType3] = useState("Lognormal");
  const [type4, setType4] = useState("Lognormal");
  const [type5, setType5] = useState("Lognormal");
  const [type6, setType6] = useState("Lognormal");
  const [type11, setType11] = useState("Constant");
  const [type22, setType22] = useState("Constant");
  const [type33, setType33] = useState("Constant");
  const [type44, setType44] = useState("Constant");
  const [type55, setType55] = useState("Constant");
  const [type66, setType66] = useState("Constant");
  const [showValuedetail, setShowValuedetail] = useState(false);
  const [showResultdetail, setShowResultdetail] = useState(false);
  const [showACMdetail, setShowACMdetail] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopupValue, setShowPopupValue] = useState(false);
  const [showPopupResult, setShowPopupResult] = useState(false);
  const [resting, setResting] = useState(0);
  const [standing, setStanding] = useState(0);
  const [light, setLight] = useState(0);
  const [moderate, setModerate] = useState(0);
  const [heavy, setHeavy] = useState(0);
  const [type111, setType111] = useState("Uniform");
  const [type222, setType222] = useState("Uniform");
  const [type333, setType333] = useState("Uniform");
  const [type444, setType444] = useState("Uniform");
  const [type555, setType555] = useState("Uniform");

  const [EA1mu, setEA1mu] = useState(0.098);
  const [EA1sigma, setEA1sigma] = useState(0.0098);
  const [EA1min, setEA1min] = useState(0.098);
  const [EA1max, setEA1max] = useState(0.098);
  const [DD1mu, setDD1mu] = useState(1.8);
  const [DD1sigma, setDD1sigma] = useState(0.18);
  const [DD1min, setDD1min] = useState(1.8);
  const [DD1max, setDD1max] = useState(1.8);

  const [EA2mu, setEA2mu] = useState(0.13);
  const [EA2sigma, setEA2sigma] = useState(0.013);
  const [EA2min, setEA2min] = useState(0.13);
  const [EA2max, setEA2max] = useState(0.13);
  const [DD2mu, setDD2mu] = useState(1.8);
  const [DD2sigma, setDD2sigma] = useState(0.18);
  const [DD2min, setDD2min] = useState(1.8);
  const [DD2max, setDD2max] = useState(1.8);

  const [EA3mu, setEA3mu] = useState(0.322);
const [EA3sigma, setEA3sigma] = useState(0.0322);
const [EA3min, setEA3min] = useState(0.322);
const [EA3max, setEA3max] = useState(0.322);
const [DD3mu, setDD3mu] = useState(1.8);
const [DD3sigma, setDD3sigma] = useState(0.18);
const [DD3min, setDD3min] = useState(1.8);
const [DD3max, setDD3max] = useState(1.8);

const [EA4mu, setEA4mu] = useState(0.678);
const [EA4sigma, setEA4sigma] = useState(0.0678);
const [EA4min, setEA4min] = useState(0.678);
const [EA4max, setEA4max] = useState(0.678);
const [DD4mu, setDD4mu] = useState(1.8);
const [DD4sigma, setDD4sigma] = useState(0.18);
const [DD4min, setDD4min] = useState(1.8);
const [DD4max, setDD4max] = useState(1.8);

const [EA5mu, setEA5mu] = useState(0.402);
const [EA5sigma, setEA5sigma] = useState(0.0402);
const [EA5min, setEA5min] = useState(0.402);
const [EA5max, setEA5max] = useState(0.402);
const [DD5mu, setDD5mu] = useState(1.8);
const [DD5sigma, setDD5sigma] = useState(0.18);
const [DD5min, setDD5min] = useState(1.8);
const [DD5max, setDD5max] = useState(1.8);

const [EA6mu, setEA6mu] = useState(0.705);
const [EA6sigma, setEA6sigma] = useState(0.0705);
const [EA6min, setEA6min] = useState(0.705);
const [EA6max, setEA6max] = useState(0.705);
const [DD6mu, setDD6mu] = useState(1.8);
const [DD6sigma, setDD6sigma] = useState(0.18);
const [DD6min, setDD6min] = useState(1.8);
const [DD6max, setDD6max] = useState(1.8);

const [EA1_1, setEA1_1] = useState(0.084);
const [EA1_2, setEA1_2] = useState(0.009);
const [EA1_3, setEA1_3] = useState(0.003);
const [EA1_4, setEA1_4] = useState(0.002);

const [EA2_1, setEA2_1] = useState(0.110);
const [EA2_2, setEA2_2] = useState(0.014);
const [EA2_3, setEA2_3] = useState(0.004);
const [EA2_4, setEA2_4] = useState(0.002);

const [EA3_1, setEA3_1] = useState(0.236);
const [EA3_2, setEA3_2] = useState(0.068);
const [EA3_3, setEA3_3] = useState(0.007);
const [EA3_4, setEA3_4] = useState(0.011);

const [EA4_1, setEA4_1] = useState(0.567);
const [EA4_2, setEA4_2] = useState(0.093);
const [EA4_3, setEA4_3] = useState(0.012);
const [EA4_4, setEA4_4] = useState(0.006);

const [EA5_1, setEA5_1] = useState(0.373);
const [EA5_2, setEA5_2] = useState(0.026);
const [EA5_3, setEA5_3] = useState(0.002);
const [EA5_4, setEA5_4] = useState(0.001);

const [EA6_1, setEA6_1] = useState(0.494);
const [EA6_2, setEA6_2] = useState(0.104);
const [EA6_3, setEA6_3] = useState(0.073);
const [EA6_4, setEA6_4] = useState(0.035);

const [BR1mu, setBR1mu] = useState(0.49);
const [BR1sigma, setBR1sigma] = useState(0.1);
const [BR1min, setBR1min] = useState(0.49);
const [BR1max, setBR1max] = useState(0.49);

const [BR2mu, setBR2mu] = useState(0.54);
const [BR2sigma, setBR2sigma] = useState(0.11);
const [BR2min, setBR2min] = useState(0.54);
const [BR2max, setBR2max] = useState(0.54);

const [BR3mu, setBR3mu] = useState(1.3);
const [BR3sigma, setBR3sigma] = useState(0.26);
const [BR3min, setBR3min] = useState(1.38);
const [BR3max, setBR3max] = useState(1.38);

const [BR4mu, setBR4mu] = useState(2.35);
const [BR4sigma, setBR4sigma] = useState(0.47);
const [BR4min, setBR4min] = useState(2.35);
const [BR4max, setBR4max] = useState(2.35);

const [BR5mu, setBR5mu] = useState(3.30);
const [BR5sigma, setBR5sigma] = useState(0.66);
const [BR5min, setBR5min] = useState(3.30);
const [BR5max, setBR5max] = useState(3.30);

  const options = ['Breathing', 'Whispered Counting', 'Voiced Counting', 'Coughing', 'Whispering', 'Speaking'];
  const options2 = ['Resting', 'Standing', 'Light Exercise', 'Moderate Exercise', 'Heavy Exercise'];

  const toggleOption = (option) => {
    const newSelectedOptions = [...selectedOptions];
    const optionIndex = newSelectedOptions.indexOf(option);
  
    // If the option is currently selected
    if (optionIndex > -1) {
      newSelectedOptions.splice(optionIndex, 1);
  
      // Set the corresponding state value to 0
      setValueToOption(option, 0);
    } else {
      // Otherwise, add the option to the array
      newSelectedOptions.push(option);
    }
  
    setSelectedOptions(newSelectedOptions);
  
    // Distribute the value of 100 among all the selected options
    const value = 100 / newSelectedOptions.length;
    newSelectedOptions.forEach((selectedOption) => {
      setValueToOption(selectedOption, value);
    });
  };
  
  // Sets the value to a specific option
  const setValueToOption = (option, value) => {
    switch(option) {
      case "Breathing":
        setBreathing(value);
        break;
      case "Whispered Counting":
        setWhispered(value);
        break;
      case "Voiced Counting":
        setVoiced(value);
        break;
      case "Coughing":
          setCoughing(value);
          break;
      case "Whispering":
          setWhispering(value);
          break;
      case "Speaking":
          setSpeaking(value);
          break;
      default:
          break;
    }
  };

  const toggleOption2 = (option2) => {
    const newSelectedOptions2 = [...selectedOptions2];
    const optionIndex = newSelectedOptions2.indexOf(option2);
  
    // If the option is currently selected
    if (optionIndex > -1) {
      newSelectedOptions2.splice(optionIndex, 1);
  
      // Set the corresponding state value to 0
      setValueToOption2(option2, 0);
    } else {
      // Otherwise, add the option to the array
      newSelectedOptions2.push(option2);
    }
  
    setSelectedOptions2(newSelectedOptions2);
  
    // Distribute the value of 100 among all the selected options
    const value = 100 / newSelectedOptions2.length;
    newSelectedOptions2.forEach((selectedOption) => {
      setValueToOption2(selectedOption, value);
    });
  };
  
  // Sets the value to a specific option
  const setValueToOption2 = (option2, value) => {
    switch(option2) {
      case "Resting":
        setResting(value);
        break;
      case "Standing":
        setStanding(value);
        break;
      case "Light Exercise":
        setLight(value);
        break;
      case "Moderate Exercise":
        setModerate(value);
        break;
      case "Heavy Exercise":
        setHeavy(value);
        break;
      default:
        break;
    }
  };


  const handleAddSimulation2 = () => {
    // Handle the addition of a new simulation
    // Your logic to add a new simulation here

    // Get a reference to the #hero element
    const compareElement = document.getElementById('compare');

    // Scroll to the bottom of the #hero section
    compareElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  const handleSaveClick = (event) => {
    saveForComparison({ floorArea, occupantNumber });

  };

  const subcategoriesOptions = {
    "Correctional": ["Cell", "Dayroom"],
    "Commercial": ["Food and Beverage Facilities", "Gym", "Office", "Retail", "Transportation Waiting"],
    "Educational": ["Classroom", "Lecture Hall"],
    "Industrial": ["Manufacturing", "Sorting, Packing, Light Assembly", "Warehouse"],
    "Healthcare": ["Exam Room", "Group Treatment Area", "Patient Room", "Resident Room", "Waiting Room"],
    "Public": ["Auditorium", "Place of Religious Workship", "Museum", "Convention", "Spectator Area", "Lobbies"],
    "Residential": ["Common Space", "Dwelling Unit"]
  };

  const [subcategories, setSubcategories] = useState(subcategoriesOptions[occupancyCategory]);

  const ASHRAEValues = {
    "Cell": 30,
    "Dayroom": 40,
    "Food and Beverage Facilities": 60,
    "Gym": 80,
    "Office": 30,
    "Retail": 40,
    "Transportation Waiting": 60,
    "Classroom": 40,
    "Lecture Hall": 50,
    "Manufacturing": 50,
    "Sorting, Packing, Light Assembly": 20,
    "Warehouse": 20, 
    "Exam Room": 40,
    "Group Treatment Area": 70,
    "Patient Room": 70,
    "Resident Room": 50,
    "Waiting Room": 90,
    "Auditorium": 50,
    "Place of Religious Workship": 50,
    "Museum": 60,
    "Convention": 60,
    "Spectator Area": 50,
    "Lobbies": 50,
    "Common Space": 50,
    "Dwelling Unit": 30

  };

  
  const ASHRAEValues2 = {
    "Cell": 30 * 2,
    "Dayroom": 40,
    "Food and Beverage Facilities": 60 * 2,
    "Gym": 80 * 2,
    "Office": 30 * 2,
    "Retail": 40 * 2,
    "Transportation Waiting": 60 * 2,
    "Classroom": 40 * 2,
    "Lecture Hall": 50 * 2,
    "Manufacturing": 50 * 2,
    "Sorting, Packing, Light Assembly": 20 * 2,
    "Warehouse": 20 * 2, 
    "Exam Room": 40 * 2,
    "Group Treatment Area": 70 * 2,
    "Patient Room": 70 * 2,
    "Resident Room": 50 * 2,
    "Waiting Room": 90 * 2,
    "Auditorium": 50 * 2,
    "Place of Religious Workship": 50 * 2,
    "Museum": 60 * 2,
    "Convention": 60 * 2,
    "Spectator Area": 50 * 2,
    "Lobbies": 50 * 2,
    "Common Space": 50 * 2,
    "Dwelling Unit": 30 * 2

  };

  


  const ASHRAEValuesp = {
    "Cell": 5,
    "Dayroom": 5,
    "Food and Beverage Facilities": 7.5,
    "Gym": 20,
    "Office": 5,
    "Retail": 7.5,
    "Transportation Waiting": 7.5,
    "Classroom": 10,
    "Lecture Hall": 7.5,
    "Manufacturing": 10,
    "Sorting, Packing, Light Assembly": 7.5,
    "Warehouse": 10, 
    "Exam Room": 7.5,
    "Group Treatment Area": 5,
    "Patient Room": 0,
    "Resident Room": 0,
    "Waiting Room": 0,
    "Auditorium": 5,
    "Place of Religious Workship": 5,
    "Museum": 7.5,
    "Convention": 5,
    "Spectator Area": 7.5,
    "Lobbies": 5,
    "Common Space": 7.5,
    "Dwelling Unit": 5

  };

  const ASHRAEValuesft = {
    "Cell": 0.12,
    "Dayroom": 0.06,
    "Food and Beverage Facilities": 0.18,
    "Gym": 0.18,
    "Office": 0.06,
    "Retail": 0.12,
    "Transportation Waiting": 0.06,
    "Classroom": 0.18,
    "Lecture Hall": 0.06,
    "Manufacturing": 0.18,
    "Sorting, Packing, Light Assembly": 0.12,
    "Warehouse": 0.06, 
    "Exam Room": 0.12,
    "Group Treatment Area": 0.06,
    "Patient Room": 0,
    "Resident Room": 0,
    "Waiting Room": 0,
    "Auditorium": 0.06,
    "Place of Religious Workship": 0.06,
    "Museum": 0.06,
    "Convention": 0.06,
    "Spectator Area": 0.06,
    "Lobbies": 0.06,
    "Common Space": 0,
    "Dwelling Unit": 0

  };
  
  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
    setASHRAE(ASHRAEValues[event.target.value]);
    setASHRAE2(ASHRAEValues2[event.target.value]);
    setASHRAE62p(ASHRAEValuesp[event.target.value]);
    setASHRAE62ft(ASHRAEValuesft[event.target.value]);
  };


  const handleRadioChange = (event) => {
    setRoomACQ(Number(event.target.value));
  };

  useEffect(() => {
    setRoomACQ(0);
  }, []);

  const handleRadioChange2 = (event) => {
    setRoomUVQ(Number(event.target.value));
  };

  useEffect(() => {
    setRoomUVQ(0);
  }, []);

  const handleRadioChange3 = (event) => {
    setRoomTreatmentQ(Number(event.target.value));
  };

  useEffect(() => {
    setRoomTreatmentQ(0);
  }, []);

  const handleRadioChange4 = (e) => {
    setUnit(e.target.value);  // Update the unit state.
  };

  useEffect(() => {
    setSubcategories(subcategoriesOptions[occupancyCategory]);
    let defaultSubcategory;
    switch(occupancyCategory) {
      case "Correctional":
        defaultSubcategory = "Cell";
        break;
      case "Commercial":
        defaultSubcategory = "Office";
        break;
      case "Educational":
        defaultSubcategory = "Classroom";
        break;
      case "Industrial":
        defaultSubcategory = "Manufacturing";
        break;
      case "Healthcare":
        defaultSubcategory = "Exam Room";
        break;
      case "Public":
        defaultSubcategory = "Auditorium";
        break;
      case "Residential":
        defaultSubcategory = "Common Space";
        break;
      default:
        defaultSubcategory = subcategoriesOptions[occupancyCategory][0];
    }
    setSelectedSubcategory(defaultSubcategory);
    setASHRAE(ASHRAEValues[defaultSubcategory]);
    setASHRAE2(ASHRAEValues2[defaultSubcategory]);
    setASHRAE62p(ASHRAEValuesp[defaultSubcategory]);
    setASHRAE62ft(ASHRAEValuesft[defaultSubcategory]);
  }, [occupancyCategory]);

  
useEffect(() => {
  console.log(
    selectedSubcategory,
    floorArea,
    height,
    occupantNumber,
    occupiedPeriod,
    expiratoryActivity,
    physicalActivity,
    virusType,
    immunityProportion,
    infectorStatus,
    casesPerDay,
    infectiousPeriod,
    unreportedCases,
    infectorNumber,
    supplyAir,
    outdoorAir,
    merv,
    filter,
    hvacUV,
    hvacTreatment,
    roomTreatment,
    roomUV,
    roomAC,
    roomTreatmentQ,
    roomUVQ,
    roomACQ,
    maskInfector,
    maskSus
  );
}, [selectedSubcategory, floorArea, height, occupantNumber, occupiedPeriod, expiratoryActivity, physicalActivity, virusType, immunityProportion, infectorStatus, casesPerDay, infectiousPeriod, unreportedCases, infectorNumber, supplyAir, outdoorAir, merv, filter, hvacUV, hvacTreatment, roomTreatment, roomUV, roomAC, roomTreatmentQ, roomUVQ, roomACQ, maskInfector, maskSus]);


  const ASHRAEInputs = () => (
    <div className="input-container">
      <br/>

      <button
        className="fancy-button6"
        style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
        onClick={() => setShowPopup(true)}
      >
        {showUnit ? 'Units and Values' : 'Units and Values'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <br/>

      {showPopup && (
  <div className="popup">
    <label htmlFor="units" style={{ fontSize: '1.1rem', display: 'block', textAlign: 'center', color: 'green' }}>Units</label>
    <br/>

    <div style={{ display: 'flex', fontSize: '1rem', alignItems: 'center', justifyContent: 'center' }}>
      <div className="radio-buttons">
        {["IP"].map((value) => (
          <label key={value} className={`radio-button ${unit === value ? 'selected' : ''}`}>
            <input
              type="radio"
              name="unit"
              value={value}
              checked={unit === value}
              onChange={handleRadioChange4}
              style={{ display: 'none' }}
            />
            {value}
          </label>
        ))}
      </div>
    </div>
    <br/>

    <label htmlFor="values" style={{ fontSize: '1.1rem', display: 'block', textAlign: 'center', color: 'green' }}>Values</label>
    <br/>

    <button onClick={() => setShowPopup(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}

      <button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowBuilding(!showBuilding)}
      >
        {showBuilding ? 'Building and Occupancy' : 'Building and Occupancy'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>


<br/>

{showBuilding && (
  <div>
      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
  <label htmlFor="occupancyCategory" style={{ fontSize: '0.9rem'}}>Occupancy Category:</label>
  <select id="occupancyCategory" 
          value={occupancyCategory} 
          onChange={(e) => setOccupancyCategory(e.target.value)} 
          style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
    <option value="Correctional">Correctional Facilities</option>
    <option value="Commercial">Commercial/Retail</option>
    <option value="Educational">Educational Facilities</option>
    <option value="Industrial">Industrial</option>
    <option value="Healthcare">Healthcare</option>
    <option value="Public">Public Assembly/Sports & Entertainment</option>
  </select>
</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
  <label htmlFor="subcategories" style={{ fontSize: '0.9rem'}}>Subcategories:</label>
  <select id="subcategories" 
          value={selectedSubcategory} 
          onChange={handleSubcategoryChange} 
          style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
    {subcategories.map((subcategory, index) => (
      <option key={index} value={subcategory}>{subcategory}</option>
    ))}
  </select>
  <label htmlFor="modes" style={{ fontSize: '0.9rem' }}>Mode:</label>
  <select
    id="modes"
    value={modes}
    onChange={(e) => {
      setModes(e.target.value);
      if (e.target.value === "Normal") {
        setOccupantNumber(8);
      } else {
        setOccupantNumber(12);
      }
    }}
    style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '130px' }}
  >
    <option value="IRMM">IRMM</option>
    <option value="Normal">Normal</option>
  </select>
</div>


      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <label htmlFor="floorArea" style={{ fontSize: '0.9rem' }}>Floor Area (sqft): </label>
<input
  type="number"
  id="floorArea"
  value={floorArea}
  onChange={event => {
    const newFloorArea = event.target.value;
    const newSupplyAir = newFloorArea * 0.9; // Calculate the new supply air based on floor area
    setFloorArea(newFloorArea);
    setSupplyAir(newSupplyAir);
    const newOutdoorAir = (newFloorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
    setOutdoorAir(newOutdoorAir);
  }}
  min="1"
  max="100000"
  step="1"
  style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
/>
        <label htmlFor="height" style={{ fontSize: '0.9rem'}}>Height (ft): </label>
        <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px',}} />
      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="occupantNumber" style={{ fontSize: '0.9rem'}}>Occupant Number: </label>
        <input type="number" id="occupantNumber" value={occupantNumber} 
        min="1"
        max="200"
        onChange={event => {
          let newOccupantNumber = event.target.value;
          if (newOccupantNumber > 200) {
            newOccupantNumber = 200;
          }
          setOccupantNumber(newOccupantNumber);
          const newOutdoorAir = Math.round((floorArea * ASHRAE62ft + newOccupantNumber * ASHRAE62p) / 0.75 * 100) / 100;
          setOutdoorAir(newOutdoorAir);
        }}
        style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
        <label htmlFor="occupiedPeriod" style={{ fontSize: '0.9rem'}}>Occupied Period (min): </label>
        <input type="number" id="occupiedPeriod" value={occupiedPeriod} onChange={event => setOccupiedPeriod(event.target.value)} min="1" max="1440" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
      </div>

      
      <br/>

      

      </div>
)}


<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowQuanta(!showQuanta)}
      >
        {showQuanta ? 'Quanta Emission and Breathing Rate' : 'Quanta Emission and Breathing Rate'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showQuanta && (
  <div>

<div style={{ display: 'flex', justifyContent: 'center'}}>
  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px'}}
    onClick={() => setShowPopupValue(true)}
  >
    {showValuedetail ? 'Default Values' : 'Default Values'}
  </button>&emsp;


  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px', color: 'rgb(70, 140, 190)'}}
    onClick={() => setShowPopupResult(true)}
  >
    {showResultdetail ? 'Calculated Result' : 'Calculated Result'}
  </button>
</div>
<span style={{ lineHeight: '0.5' }}>&nbsp;</span>



{showPopupValue && (
  <div className="popupS">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Quanta Emission Rates</label>
    <br/>
</div>
)}




<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="ACM" style={{ fontSize: '0.9rem'}}>Aerosol Counting Mode: </label>
<select value={ACM} onChange={event => setACM(event.target.value)} style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
    <option value="Continuous Distribution">Continuous Distribution</option>
    <option value="Size Bin">Size Bin</option>
</select>


{showPopup2 && (
  <div className="popup2">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Quanta Emission Rates</label>
    <br/>


    {selectedOptions.includes("Breathing") && ACM === 'Continuous Distribution' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Breathing</label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{breathing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type1} onChange={event => setType1(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &emsp;
    {type1 == 'Lognormal' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="EA1mu" value={EA1mu} onChange={event => setEA1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="EA1sigma" value={EA1sigma} onChange={event => setEA1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}

{type1 == 'Uniform' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="EA1min" value={EA1min} onChange={event => setEA1min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="EA1max" value={EA1max} onChange={event => setEA1max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label> &emsp;

    {type1 == 'Lognormal' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="DD1mu" value={DD1mu} onChange={event => setDD1mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="DD1sigma" value={DD1sigma} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

{type1 == 'Uniform' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="DD1min" value={DD1min} onChange={event => setDD1min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="DD1max" value={DD1max} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}


{selectedOptions.includes("Breathing") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type11" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Breathing</label> &emsp;
    <label htmlFor="type11" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{breathing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type11" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type11} onChange={event => setType11(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA1_1" value={EA1_1} onChange={event => setEA1_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA1_2" value={EA1_2} onChange={event => setEA1_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA1_3" value={EA1_3} onChange={event => setEA1_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA1_4" value={EA1_4} onChange={event => setEA1_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Whispered Counting") && ACM === 'Continuous Distribution' && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>Whispered</label>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispered.toFixed(1)} % </label> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type2} onChange={event => setType2(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &emsp;
            {type2 == 'Lognormal' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA2mu" value={EA2mu} onChange={event => setEA2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA2sigma" value={EA2sigma} onChange={event => setEA2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 == 'Uniform' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA2min" value={EA2min} onChange={event => setEA2min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA2max" value={EA2max} onChange={event => setEA2max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label> &emsp;
            {type2 == 'Lognormal' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD2mu" value={DD2mu} onChange={event => setDD2mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD2sigma" value={DD2sigma} onChange={event => setDD2sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 == 'Uniform' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD2min" value={DD2min} onChange={event => setDD2min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD2max" value={DD2max} onChange={event => setDD2max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}

{selectedOptions.includes("Whispered Counting") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type22" style={{ fontSize: '0.8rem' }}>Whispered</label>
        <label htmlFor="type22" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type22" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispered.toFixed(1)} % </label> &emsp;
    <label htmlFor="type22" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type22} onChange={event => setType22(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA2_1" value={EA2_1} onChange={event => setEA2_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA2_2" value={EA2_2} onChange={event => setEA2_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA2_3" value={EA2_3} onChange={event => setEA2_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA2_4" value={EA2_4} onChange={event => setEA2_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}
        
 {selectedOptions.includes("Voiced Counting") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>Voiced</label>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{voiced.toFixed(1)} % </label>&emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type3} onChange={event => setType3(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type3 == 'Lognormal' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA3mu" value={EA3mu} onChange={event => setEA3mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA3sigma" value={EA3sigma} onChange={event => setEA3sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 == 'Uniform' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA3min" value={EA3min} onChange={event => setEA3min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA3max" value={EA3max} onChange={event => setEA3max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type3 == 'Lognormal' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD3mu" value={DD3mu} onChange={event => setDD3mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD3sigma" value={DD3sigma} onChange={event => setDD3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 == 'Uniform' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD3min" value={DD3min} onChange={event => setDD3min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD3max" value={DD3max} onChange={event => setDD3max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
 )}

{selectedOptions.includes("Voiced Counting") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type33" style={{ fontSize: '0.8rem' }}>Voiced</label>
        <label htmlFor="type33" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type33" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{voiced.toFixed(1)} % </label> &emsp;
    <label htmlFor="type33" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type33} onChange={event => setType33(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type33 == 'Constant' && (
      <div>
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA3_1" value={EA3_1} onChange={event => setEA3_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA3_2" value={EA3_2} onChange={event => setEA3_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type33 == 'Constant' && (
      <div>
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA3_3" value={EA3_3} onChange={event => setEA3_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA3_4" value={EA3_4} onChange={event => setEA3_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Coughing") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Coughing</label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{coughing.toFixed(1)} % </label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type4} onChange={event => setType4(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type4 == 'Lognormal' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA4mu" value={EA4mu} onChange={event => setEA4mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA4sigma" value={EA4sigma} onChange={event => setEA4sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 == 'Uniform' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA4min" value={EA4min} onChange={event => setEA4min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA4max" value={EA4max} onChange={event => setEA4max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type4 == 'Lognormal' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD4mu" value={DD4mu} onChange={event => setDD4mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD4sigma" value={DD4sigma} onChange={event => setDD4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 == 'Uniform' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD4min" value={DD4min} onChange={event => setDD4min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD4max" value={DD4max} onChange={event => setDD4max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>

)}

{selectedOptions.includes("Coughing") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type44" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Coughing</label> &emsp;
    <label htmlFor="type44" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{coughing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type44" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type44} onChange={event => setType44(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type44 == 'Constant' && (
      <div>
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA4_1" value={EA4_1} onChange={event => setEA4_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA4_2" value={EA4_2} onChange={event => setEA4_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA4_3" value={EA4_3} onChange={event => setEA4_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA4_4" value={EA4_4} onChange={event => setEA4_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Whispering") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering</label>&emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispering.toFixed(1)} % </label> &emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type5} onChange={event => setType5(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type5 == 'Lognormal' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA5mu" value={EA5mu} onChange={event => setEA5mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA5sigma" value={EA5sigma} onChange={event => setEA5sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 == 'Uniform' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA5min" value={EA5min} onChange={event => setEA5min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA5max" value={EA5max} onChange={event => setEA5max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type5 == 'Lognormal' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD5mu" value={DD5mu} onChange={event => setDD5mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD5sigma" value={DD5sigma} onChange={event => setDD5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 == 'Uniform' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD5min" value={DD5min} onChange={event => setDD5min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD5max" value={DD5max} onChange={event => setDD5max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}

{selectedOptions.includes("Whispering") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type55" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering</label> &emsp;
    <label htmlFor="type55" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispering.toFixed(1)} % </label> &emsp;
    <label htmlFor="type55" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type55} onChange={event => setType55(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '0px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA5_1" value={EA5_1} onChange={event => setEA5_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA5_2" value={EA5_2} onChange={event => setEA5_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA5_3" value={EA5_3} onChange={event => setEA5_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA5_4" value={EA5_4} onChange={event => setEA5_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Speaking") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Speaking</label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{speaking.toFixed(1)} % </label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type6} onChange={event => setType6(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type6 == 'Lognormal' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA6mu" value={EA6mu} onChange={event => setEA6mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA6sigma" value={EA6sigma} onChange={event => setEA6sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 == 'Uniform' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA6min" value={EA6min} onChange={event => setEA6min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA6max" value={EA6max} onChange={event => setEA6max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type6 == 'Lognormal' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD6mu" value={DD6mu} onChange={event => setDD6mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD6sigma" value={DD6sigma} onChange={event => setDD6sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 == 'Uniform' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD6min" value={DD6min} onChange={event => setDD6min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD6max" value={DD6max} onChange={event => setDD6max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>

)}

{selectedOptions.includes("Speaking") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type66" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Speaking</label> &emsp;
    <label htmlFor="type66" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{speaking.toFixed(1)} % </label> &emsp;
    <label htmlFor="type66" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type66} onChange={event => setType66(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA6_1" value={EA6_1} onChange={event => setEA6_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA6_2" value={EA6_2} onChange={event => setEA6_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA6_3" value={EA6_3} onChange={event => setEA6_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA6_4" value={EA6_4} onChange={event => setEA6_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{
    selectedOptions.length === 0 && (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            fontSize: '0.9rem' 
        }}>
           Please select least one Expiratory Activity
        </div>
    )
}

<br/>

    <button onClick={() => setShowPopup2(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}

</div>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
  <label htmlFor="expiratoryActivity" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex' }}>Expiratory Activity</label>
  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    {options.map(option => (
      <button
        key={option}
        className={`fancy-buttonS ${selectedOptions.includes(option) ? 'selected' : ''}`}
        style={{
          fontSize: '0.9rem',
          padding: '0px 10px',
          height: '32px',
          margin: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => toggleOption(option)}
      >
        {option}
      </button>
    ))}
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px'}}
    onClick={() => setShowPopup2(true)}
  >
    {showACMdetail ? 'See Details' : 'See Details'}
  </button>
</div>
<span style={{ lineHeight: '0.5' }}>&nbsp;</span>

<div className="graph-choice" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '20px'}}>

{selectedOptions.includes("Breathing") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="breathing" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Breathing (%) {breathing} </label>
    <input type="number" id="breathing" value={breathing} onChange={event => setBreathing(event.target.value)} min="0" max={100 - whispered - voiced - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />

  </div>
)}

{selectedOptions.includes("Whispered Counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>Whispered</label>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>Counting (%)</label>
    </div>
    <input type="number" id="whispered" value={whispered} onChange={event => setWhispered(event.target.value)} min="0" max={100 - breathing - voiced - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions.includes("Voiced Counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>Voiced</label>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>Counting (%)</label>
    </div>
    <input type="number" id="voiced" value={voiced} onChange={event => setVoiced(event.target.value)} min="0" max={100 - breathing - whispered - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions.includes("Coughing") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="coughing" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Coughing (%)</label>
    <input type="number" id="coughing" value={coughing} onChange={event => setCoughing(event.target.value)} min="0" max={100 - breathing - whispered - voiced - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />
  </div>
)}

{selectedOptions.includes("Whispering") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="whispering" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering (%)</label>
    <input type="number" id="whispering" value={whispering} onChange={event => setWhispering(event.target.value)} min="0" max={100 - breathing - whispered - voiced - coughing - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />
  </div>
)}

{selectedOptions.includes("Speaking") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="speaking" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '10px' }}>Speaking (%)</label>
    <input type="number" id="speaking" value={speaking} onChange={event => setSpeaking(event.target.value)} min="0" max={100 - breathing - whispered - voiced - coughing - whispering} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />
  </div>
)}


</div>

{/*

{
    selectedOptions.length !== 0 && (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.9rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-20px', // Adjust this value according to your need
        }}>
           {Number(breathing) + Number(whispered) + Number(voiced) + Number(coughing) + Number(whispering) + Number(speaking)} %
        </div>
    )
}
*/}

{showPopup3 && (
  <div className="popup2">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Breathing Rates</label>
    <br/>


    {selectedOptions2.includes("Resting") && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Resting</label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{resting.toFixed(1)} % </label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type111} onChange={event => setType111(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
    {type111 == 'Lognormal' && (
      <div>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR1mu" value={BR1mu} onChange={event => setBR1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR1sigma" value={BR1sigma} onChange={event => setBR1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type111 == 'Uniform' && (
      <div>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="BR1min" value={BR1min} onChange={event => setBR1min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="BR1max" value={BR1max} onChange={event => setBR1max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

</div>
        </div>

    )}



{selectedOptions2.includes("Standing") && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Standing</label> &emsp;
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{standing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type222} onChange={event => setType222(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
    {type222 == 'Lognormal' && (
      <div>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR2mu" value={BR2mu} onChange={event => setBR2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR2sigma" value={BR2sigma} onChange={event => setBR2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type222 == 'Uniform' && (
      <div>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="BR2min" value={BR2min} onChange={event => setBR2min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="BR2max" value={BR2max} onChange={event => setBR2max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

</div>
        </div>

    )}


{selectedOptions2.includes("Light Exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>Light</label>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>Exercise</label>
    </div> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{light.toFixed(1)} % </label> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type333} onChange={event => setType333(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
            {type333 == 'Lognormal' && (
            <div>
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR3mu" value={BR3mu} onChange={event => setBR3mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR3sigma" value={BR3sigma} onChange={event => setBR3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type333 == 'Uniform' && (
            <div>
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="BR3min" value={BR3min} onChange={event => setBR3min(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="BR3max" value={BR3max} onChange={event => setBR3max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
     
    </div>
</div>
)}


{selectedOptions2.includes("Moderate Exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>Moderate</label>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>Exercise</label>
    </div> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{moderate.toFixed(1)} % </label> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type444} onChange={event => setType444(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
            {type444 == 'Lognormal' && (
            <div>
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR4mu" value={BR4mu} onChange={event => setBR4mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR4sigma" value={BR4sigma} onChange={event => setBR4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type444 == 'Uniform' && (
            <div>
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="BR4min" value={BR4min} onChange={event => setBR4min(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="BR4max" value={BR4max} onChange={event => setBR4max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
     
    </div>
</div>
)}


{selectedOptions2.includes("Heavy Exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>Heavy</label>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>Exercise</label>
    </div> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{heavy.toFixed(1)} % </label> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type555} onChange={event => setType555(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
            {type555 == 'Lognormal' && (
            <div>
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR5mu" value={BR5mu} onChange={event => setBR5mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR5sigma" value={BR5sigma} onChange={event => setBR5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type555 == 'Uniform' && (
            <div>
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="BR5min" value={BR5min} onChange={event => setBR5min(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="BR5max" value={BR5max} onChange={event => setBR5max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
     
    </div>
</div>
)}


{
    selectedOptions2.length === 0 && (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            fontSize: '0.9rem' 
        }}>
           Please select least one Physical Activity
        </div>
    )
}

<br/>

    <button onClick={() => setShowPopup3(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px', marginTop: '20px'}}>
      <label htmlFor="physicalActivity" style={{ fontSize: '0.9rem',  justifyContent: 'center', display: 'flex' }}>Physical Activity</label>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginLeft: '7px' }}>
        {options2.map(option2 => (
          <button  
            key={option2}
            className={`fancy-buttonS ${selectedOptions2.includes(option2) ? 'selected' : ''}`}
            style={{ 
              fontSize: '0.9rem', 
              padding: '0px 10px', 
              height: '32px', 
              margin: '5px', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center' 
            }}
            onClick={() => toggleOption2(option2)}
          >
            {option2}
          </button>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px'}}
    onClick={() => setShowPopup3(true)}
  >
    {showACMdetail ? 'See Details' : 'See Details'}
  </button>
</div>
<span style={{ lineHeight: '0.5' }}>&nbsp;</span>

<div className="graph-choice" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '20px'}}>

{selectedOptions2.includes("Resting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="resting" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Resting (%) </label>
    <input type="number" id="resting" value={resting} onChange={event => setResting(event.target.value)} min="0" max={100 - standing - light - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />

  </div>
)}

{selectedOptions2.includes("Standing") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="standing" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Standing (%) </label>
    <input type="number" id="standing" value={standing} onChange={event => setStanding(event.target.value)} min="0" max={100 - resting - light - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />

  </div>
)}

{selectedOptions2.includes("Light Exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>Light</label>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>Exercise (%)</label>
    </div>
    <input type="number" id="light" value={light} onChange={event => setLight(event.target.value)} min="0" max={100 - resting - standing - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Moderate Exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>Moderate</label>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>Exercise (%)</label>
    </div>
    <input type="number" id="moderate" value={moderate} onChange={event => setModerate(event.target.value)} min="0" max={100 - resting - standing - light - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Heavy Exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>Heavy</label>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>Exercise (%)</label>
    </div>
    <input type="number" id="heavy" value={heavy} onChange={event => setHeavy(event.target.value)} min="0" max={100 - resting - standing - light - moderate} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}
  </div>

  </div>
)}

<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowInfector(!showInfector)}
      >
        {showInfector ? 'Infector Status and Immunity' : 'Infector Status and Immunity'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInfector && (
  <div>
<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="virusType" style={{ fontSize: '0.9rem'}}>Virus Type: </label>
<select value={virusType} onChange={event => setVirusType(event.target.value)} style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
    <option value="SARS-CoV-2">SARS-CoV-2</option>
        {/*
    <option value="Influenza A">Influenza A</option>
      */}

</select>

<label htmlFor="immunityProportion" style={{ fontSize: '0.9rem'}}>Immunity Proportion (%): </label>
        <input type="number" id="immunityProportion" value={immunityProportion} onChange={event => setImmunityProportion(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

  

                <label htmlFor="infectorStatus" style={{ fontSize: '0.9rem'}}>Infector Status: </label>
                <select
                    id="infectorStatus"
                    value={infectorStatus}
                    onChange={event => setInfectorStatus(event.target.value)}
                    style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}>
                    <option value="Regional Prevalence">Regional Prevalence</option>
                    <option value="Number of Infector">Number of Infector</option>
                </select>

                {infectorStatus === 'Regional Prevalence' && (
                <div>
                    <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates Absolute Result</h>
                </div>

            )}

            {infectorStatus === 'Number of Infector' && (
                <div>
                    <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates Conditional Result</h>
                </div>

            )}

            </div>


            <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

            {infectorStatus === 'Regional Prevalence' && (
                <div>
                    <label htmlFor="casesPerDay" style={{ fontSize: '0.9rem'}}>Cases per 100,000 per Day: </label>
                    <input type="number" id="casesPerDay" value={casesPerDay} onChange={event => setCasesPerDay(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>
            )}

            
{infectorStatus === 'Number of Infector' && (
                <div>
                    <label htmlFor="infectorNumber" style={{ fontSize: '0.9rem'}}>Infector Number: </label>
                    <input type="number" id="infectorNumber" value={infectorNumber} onChange={event => setInfectorNumber(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>

            )}


</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{infectorStatus === 'Regional Prevalence' && (
                <div>
                    <label htmlFor="infectiousPeriod" style={{ fontSize: '0.9rem'}}>Infectious Period (days): </label>
                    <input type="number" id="infectiousPeriod" value={infectiousPeriod} onChange={event => setInfectiousPeriod(event.target.value)} min="1" max="365" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                    <label htmlFor="unreportedCases" style={{ fontSize: '0.9rem'}}>Unreported Cases (%): </label>
                    <input type="number" id="unreportedCases" value={unreportedCases} onChange={event => setUnreportedCases(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                </div>
            )}

</div>

</div>
)}


<br/>

<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowHVAC(!showHVAC)}
      >
        {showHVAC ? 'Engineering Control - HVAC' : 'Engineering Control - HVAC'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showHVAC && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
  <br/>
  <label htmlFor="supplyAir" style={{ fontSize: '0.9rem' }}>Supply Air (cfm): </label>
<input
  type="number"
  id="supplyAir"
  value={supplyAir}
  onChange={event => setSupplyAir(Number(event.target.value))}
  min="1"
  max="100000"
  step="1"
  style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>

<label htmlFor="outdoorAir" style={{ fontSize: '0.9rem' }}>Outdoor Air (cfm): </label>
<input
  type="number"
  id="outdoorAir"
  value={outdoorAir}
  onChange={event => setOutdoorAir(Number(event.target.value))}
  min="0"
  max="100000"
  step="1"
  style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>
</div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>

      <label htmlFor="merv" style={{ fontSize: '0.9rem'}}>Filter Rating:</label>
      <select
      id="merv"
     value={merv}
       onChange={(e) => {
       setMerv(e.target.value);
       setFilter(e.target.value);
     }}
    style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
    > 
  <option value="0">None</option>
  <option value="0.16">MERV 4</option>
  <option value="0.24">MERV 5</option>
  <option value="0.28">MERV 6</option>
  <option value="0.36">MERV 7</option>
  <option value="0.49">MERV 8</option>
  <option value="0.54">MERV 9</option>
  <option value="0.57">MERV 10</option>
  <option value="0.67">MERV 11</option>
  <option value="0.77">MERV 12</option>
  <option value="0.86">MERV 13</option>
  <option value="0.93">MERV 14</option>
  <option value="0.94">MERV 15</option>
  <option value="0.97">MERV 16</option>
</select>

  <label htmlFor="hvacUV" style={{ fontSize: '0.9rem'}}>UVC Inactivation (%): </label>
        <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

  </div>

  <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="hvacTreatment" style={{ fontSize: '0.9rem'}}>Air Treatment CADR (cfm): </label>
        <input type="number" id="hvacTreatment" value={hvacTreatment} onChange={event => setHvacTreatment(Number(event.target.value))} min="0" max={(supplyAir - outdoorAir) * (1 - filter) * (1 - hvacUV / 100)} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

        </div> 


</div>

)}

<br/>

<button
  className="fancy-button5"
  style={{
    display: 'block',
    margin: '0 auto',
    textAlign: 'center',
  }}
  onClick={() => setShowInRoom(!showInRoom)}
>
  {showInRoom ? 'Engineering Control - In Room' : 'Engineering Control - In Room'}
</button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInRoom && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomACQ" style={{ fontSize: '0.9rem'}}>Air Cleaner</label>&nbsp;&nbsp;

        <div className="radio-buttons">
      {[0, 1, 2, 3, 4].map((value) => (
        <label key={value} className={`radio-button ${roomACQ === value ? 'selected' : ''}`}>
          <input
            type="radio"
            name="roomACQ"
            value={value}
            checked={roomACQ === value}
            onChange={handleRadioChange}
            style={{ display: 'none' }}
          />
          {value}
        </label>
      ))}
    </div>&emsp;

  <label htmlFor="roomAC" style={{ fontSize: '0.9rem'}}>Default CADR (cfm): </label>
        <input type="number" id="roomAC" value={roomAC} onChange={event => setRoomAC(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomUVQ" style={{ fontSize: '0.9rem'}}>In Room UV</label>&nbsp;&nbsp;

  <div className="radio-buttons">
    {[0, 1, 2, 3, 4].map(value => (
      <label key={value} className={`radio-button ${roomUVQ === value ? 'selected' : ''}`}>
        <input
          type="radio"
          name="roomUVQ"
          value={value}
          checked={roomUVQ === value}
          onChange={handleRadioChange2}
          style={{ display: 'none' }}
        />
        {value}
      </label>
    ))}
  </div>&emsp;

  <label htmlFor="roomUV" style={{ fontSize: '0.9rem'}}>Default CADR (cfm): </label>
        <input type="number" id="roomUV" value={roomUV} onChange={event => setRoomUV(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomTreatmentQ" style={{ fontSize: '0.9rem', marginRight: '5px' }}>
    Air Treatment Device
  </label>
  <div className="radio-buttons">
    {[0, 1, 2, 3, 4].map((value) => (
      <label key={value} className={`radio-button ${roomTreatmentQ === value ? 'selected' : ''}`}>
        <input
          type="radio"
          name="roomTreatmentQ"
          value={value}
          checked={roomTreatmentQ === value}
          onChange={handleRadioChange3}
          style={{ display: 'none' }}
        />
        {value}
      </label>
    ))}
  </div>
  <label htmlFor="roomTreatment" style={{ fontSize: '0.9rem', marginRight: '5px', marginLeft: '10px' }}>
    Default CADR (cfm):
  </label>
  <input
    type="number"
    id="roomTreatment"
    value={roomTreatment}
    onChange={(event) => setRoomTreatment(event.target.value)}
    min="0"
    max="1000"
    step="1"
    style={{
      borderRadius: '5px',
      border: '1px solid #ccc',
      padding: '3px 10px',
      fontFamily: 'Arial',
      fontSize: '0.9rem',
    }}
  />
</div>
</div>
)}


<br/>

<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowNonEngineering(!showNonEngineering)}
      >
        {showNonEngineering ? 'Non-engieering Controls' : 'Non-engieering Controls'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showNonEngineering && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="maskInfector" style={{ fontSize: '0.9rem'}}>
            Mask Efficiency
            <br/>
            Infector (%): </label>
        <input type="number" id="maskInfector" value={maskInfector} onChange={event => setMaskInfector(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding:  '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />

<label htmlFor="maskSus" style={{ fontSize: '0.9rem'}}>
    Mask Efficiency
    <br/>
    Susceptible (%): </label>
<input type="number" id="maskSus" value={maskSus} onChange={event => setMaskSus(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />
</div>
</div>
)}


<br/>

{/*
<button className="fancy-button" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>
Get Design Tips: AI Advisor
</button>
*/}

</div>


);

const LANCETInputs = () => (
  <div className="input-container">
    <br/>

    <button
        className="fancy-button6"
        style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
        onClick={() => setShowPopup(true)}
      >
        {showUnit ? 'Units and Values' : 'Units and Values'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <br/>

      {showPopup && (
  <div className="popup">
    <label htmlFor="units and values" style={{ fontSize: '1.1rem', display: 'block', textAlign: 'center', color: 'green' }}>Units and Values</label>
<br/>

    <div style={{ display: 'flex', fontSize: '1rem', alignItems: 'center', justifyContent: 'center'}}>

      <div className="radio-buttons">
        {["IP"].map((value) => (
          <label key={value} className={`radio-button ${unit === value ? 'selected' : ''}`}>
            <input
              type="radio"
              name="unit"
              value={value}
              checked={unit === value}
              onChange={handleRadioChange4}
              style={{ display: 'none' }}
            />
            {value}
          </label>
        ))}
      </div>
    </div>
    <br/>
    <button onClick={() => setShowPopup(false)} className="fancy-button4" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>Close</button>
  </div>
)}


    <button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowBuilding(!showBuilding)}
    >
      {showBuilding ? 'Building and Occupancy' : 'Building and Occupancy'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>


<br/>

{showBuilding && (
<div>
    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
<label htmlFor="occupancyCategory" style={{ fontSize: '0.9rem'}}>Occupancy Category:</label>
<select id="occupancyCategory" 
        value={occupancyCategory} 
        onChange={(e) => setOccupancyCategory(e.target.value)} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Correctional">Correctional Facilities</option>
  <option value="Commercial">Commercial/Retail</option>
  <option value="Educational">Educational Facilities</option>
  <option value="Industrial">Industrial</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Public">Public Assembly/Sports & Entertainment</option>
</select>
</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
<label htmlFor="subcategories" style={{ fontSize: '0.9rem'}}>Subcategories:</label>
<select id="subcategories" 
        value={selectedSubcategory} 
        onChange={handleSubcategoryChange} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  {subcategories.map((subcategory, index) => (
    <option key={index} value={subcategory}>{subcategory}</option>
  ))}
</select>

</div>


    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
    <label htmlFor="floorArea" style={{ fontSize: '0.9rem' }}>Floor Area (sqft): </label>
<input
type="number"
id="floorArea"
value={floorArea}
onChange={event => {
  const newFloorArea = event.target.value;
  const newSupplyAir = newFloorArea * 0.9; // Calculate the new supply air based on floor area
  setFloorArea(newFloorArea);
  setSupplyAir(newSupplyAir);
  const newOutdoorAir = (newFloorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
  setOutdoorAir(newOutdoorAir);
}}
min="1"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
/>
      <label htmlFor="height" style={{ fontSize: '0.9rem'}}>Height (ft): </label>
      <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px',}} />
    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="occupantNumber" style={{ fontSize: '0.9rem'}}>Occupant Number: </label>
      <input type="number" id="occupantNumber" value={occupantNumber} 
      min="1"
      max="200"
      onChange={event => {
        let newOccupantNumber = event.target.value;
        if (newOccupantNumber > 200) {
          newOccupantNumber = 200;
        }
        setOccupantNumber(newOccupantNumber);
        const newOutdoorAir = Math.round((floorArea * ASHRAE62ft + newOccupantNumber * ASHRAE62p) / 0.75 * 100) / 100;
        setOutdoorAir(newOutdoorAir);
      }}
      style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
      <label htmlFor="occupiedPeriod" style={{ fontSize: '0.9rem'}}>Occupied Period (min): </label>
      <input type="number" id="occupiedPeriod" value={occupiedPeriod} onChange={event => setOccupiedPeriod(event.target.value)} min="1" max="1440" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
    </div>
    
    <br/>

    </div>
)}

<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowQuanta(!showQuanta)}
      >
        {showQuanta ? 'Quanta Emission and Breathing Rate' : 'Quanta Emission and Breathing Rate'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showQuanta && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="ACM" style={{ fontSize: '0.9rem'}}>Aerosol Counting Mode: </label>
<select value={ACM} onChange={event => setACM(event.target.value)} style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
    <option value="Continuous Distribution">Continuous Distribution</option>
    <option value="Size Bin">Size Bin</option>
</select>


{showPopup2 && (
  <div className="popup2">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Quanta Emission Rates</label>
    <br/>


    {selectedOptions.includes("Breathing") && ACM === 'Continuous Distribution' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Breathing</label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{breathing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type1} onChange={event => setType1(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &emsp;
    {type1 == 'Lognormal' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="EA1mu" value={EA1mu} onChange={event => setEA1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="EA1sigma" value={EA1sigma} onChange={event => setEA1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}

{type1 == 'Uniform' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="EA1min" value={EA1min} onChange={event => setEA1min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="EA1max" value={EA1max} onChange={event => setEA1max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label> &emsp;

    {type1 == 'Lognormal' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="DD1mu" value={DD1mu} onChange={event => setDD1mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="DD1sigma" value={DD1sigma} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

{type1 == 'Uniform' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="DD1min" value={DD1min} onChange={event => setDD1min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="DD1max" value={DD1max} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}


{selectedOptions.includes("Breathing") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type11" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Breathing</label> &emsp;
    <label htmlFor="type11" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{breathing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type11" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type11} onChange={event => setType11(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA1_1" value={EA1_1} onChange={event => setEA1_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA1_2" value={EA1_2} onChange={event => setEA1_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA1_3" value={EA1_3} onChange={event => setEA1_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA1_4" value={EA1_4} onChange={event => setEA1_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Whispered Counting") && ACM === 'Continuous Distribution' && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>Whispered</label>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispered.toFixed(1)} % </label> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type2} onChange={event => setType2(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &emsp;
            {type2 == 'Lognormal' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA2mu" value={EA2mu} onChange={event => setEA2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA2sigma" value={EA2sigma} onChange={event => setEA2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 == 'Uniform' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA2min" value={EA2min} onChange={event => setEA2min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA2max" value={EA2max} onChange={event => setEA2max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label> &emsp;
            {type2 == 'Lognormal' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD2mu" value={DD2mu} onChange={event => setDD2mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD2sigma" value={DD2sigma} onChange={event => setDD2sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 == 'Uniform' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD2min" value={DD2min} onChange={event => setDD2min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD2max" value={DD2max} onChange={event => setDD2max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}

{selectedOptions.includes("Whispered Counting") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type22" style={{ fontSize: '0.8rem' }}>Whispered</label>
        <label htmlFor="type22" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type22" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispered.toFixed(1)} % </label> &emsp;
    <label htmlFor="type22" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type22} onChange={event => setType22(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA2_1" value={EA2_1} onChange={event => setEA2_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA2_2" value={EA2_2} onChange={event => setEA2_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA2_3" value={EA2_3} onChange={event => setEA2_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA2_4" value={EA2_4} onChange={event => setEA2_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}
        
 {selectedOptions.includes("Voiced Counting") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>Voiced</label>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{voiced.toFixed(1)} % </label>&emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type3} onChange={event => setType3(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type3 == 'Lognormal' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA3mu" value={EA3mu} onChange={event => setEA3mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA3sigma" value={EA3sigma} onChange={event => setEA3sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 == 'Uniform' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA3min" value={EA3min} onChange={event => setEA3min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA3max" value={EA3max} onChange={event => setEA3max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type3 == 'Lognormal' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD3mu" value={DD3mu} onChange={event => setDD3mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD3sigma" value={DD3sigma} onChange={event => setDD3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 == 'Uniform' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD3min" value={DD3min} onChange={event => setDD3min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD3max" value={DD3max} onChange={event => setDD3max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
 )}

{selectedOptions.includes("Voiced Counting") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type33" style={{ fontSize: '0.8rem' }}>Voiced</label>
        <label htmlFor="type33" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type33" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{voiced.toFixed(1)} % </label> &emsp;
    <label htmlFor="type33" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type33} onChange={event => setType33(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type33 == 'Constant' && (
      <div>
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA3_1" value={EA3_1} onChange={event => setEA3_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA3_2" value={EA3_2} onChange={event => setEA3_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type33 == 'Constant' && (
      <div>
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA3_3" value={EA3_3} onChange={event => setEA3_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA3_4" value={EA3_4} onChange={event => setEA3_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Coughing") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Coughing</label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{coughing.toFixed(1)} % </label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type4} onChange={event => setType4(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type4 == 'Lognormal' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA4mu" value={EA4mu} onChange={event => setEA4mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA4sigma" value={EA4sigma} onChange={event => setEA4sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 == 'Uniform' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA4min" value={EA4min} onChange={event => setEA4min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA4max" value={EA4max} onChange={event => setEA4max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type4 == 'Lognormal' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD4mu" value={DD4mu} onChange={event => setDD4mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD4sigma" value={DD4sigma} onChange={event => setDD4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 == 'Uniform' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD4min" value={DD4min} onChange={event => setDD4min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD4max" value={DD4max} onChange={event => setDD4max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>

)}

{selectedOptions.includes("Coughing") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type44" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Coughing</label> &emsp;
    <label htmlFor="type44" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{coughing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type44" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type44} onChange={event => setType44(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type44 == 'Constant' && (
      <div>
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA4_1" value={EA4_1} onChange={event => setEA4_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA4_2" value={EA4_2} onChange={event => setEA4_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA4_3" value={EA4_3} onChange={event => setEA4_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA4_4" value={EA4_4} onChange={event => setEA4_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Whispering") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering</label>&emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispering.toFixed(1)} % </label> &emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type5} onChange={event => setType5(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type5 == 'Lognormal' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA5mu" value={EA5mu} onChange={event => setEA5mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA5sigma" value={EA5sigma} onChange={event => setEA5sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 == 'Uniform' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA5min" value={EA5min} onChange={event => setEA5min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA5max" value={EA5max} onChange={event => setEA5max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type5 == 'Lognormal' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD5mu" value={DD5mu} onChange={event => setDD5mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD5sigma" value={DD5sigma} onChange={event => setDD5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 == 'Uniform' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD5min" value={DD5min} onChange={event => setDD5min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD5max" value={DD5max} onChange={event => setDD5max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}

{selectedOptions.includes("Whispering") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type55" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering</label> &emsp;
    <label htmlFor="type55" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispering.toFixed(1)} % </label> &emsp;
    <label htmlFor="type55" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type55} onChange={event => setType55(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '0px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA5_1" value={EA5_1} onChange={event => setEA5_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA5_2" value={EA5_2} onChange={event => setEA5_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA5_3" value={EA5_3} onChange={event => setEA5_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA5_4" value={EA5_4} onChange={event => setEA5_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Speaking") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Speaking</label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{speaking.toFixed(1)} % </label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type6} onChange={event => setType6(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type6 == 'Lognormal' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA6mu" value={EA6mu} onChange={event => setEA6mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA6sigma" value={EA6sigma} onChange={event => setEA6sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 == 'Uniform' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA6min" value={EA6min} onChange={event => setEA6min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA6max" value={EA6max} onChange={event => setEA6max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type6 == 'Lognormal' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD6mu" value={DD6mu} onChange={event => setDD6mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD6sigma" value={DD6sigma} onChange={event => setDD6sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 == 'Uniform' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD6min" value={DD6min} onChange={event => setDD6min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD6max" value={DD6max} onChange={event => setDD6max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>

)}

{selectedOptions.includes("Speaking") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type66" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Speaking</label> &emsp;
    <label htmlFor="type66" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{speaking.toFixed(1)} % </label> &emsp;
    <label htmlFor="type66" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type66} onChange={event => setType66(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA6_1" value={EA6_1} onChange={event => setEA6_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA6_2" value={EA6_2} onChange={event => setEA6_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA6_3" value={EA6_3} onChange={event => setEA6_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA6_4" value={EA6_4} onChange={event => setEA6_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{
    selectedOptions.length === 0 && (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            fontSize: '0.9rem' 
        }}>
           Please select least one Expiratory Activity
        </div>
    )
}

<br/>

    <button onClick={() => setShowPopup2(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}

</div>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
  <label htmlFor="expiratoryActivity" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex' }}>Expiratory Activity</label>
  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    {options.map(option => (
      <button
        key={option}
        className={`fancy-buttonS ${selectedOptions.includes(option) ? 'selected' : ''}`}
        style={{
          fontSize: '0.9rem',
          padding: '0px 10px',
          height: '32px',
          margin: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => toggleOption(option)}
      >
        {option}
      </button>
    ))}
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px'}}
    onClick={() => setShowPopup2(true)}
  >
    {showACMdetail ? 'See details' : 'See details'}
  </button>
</div>
<span style={{ lineHeight: '0.5' }}>&nbsp;</span>

<div className="graph-choice" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '20px'}}>

{selectedOptions.includes("Breathing") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="breathing" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Breathing (%) </label>
    <input type="number" id="breathing" value={breathing} onChange={event => setBreathing(event.target.value)} min="0" max={100 - whispered - voiced - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />

  </div>
)}

{selectedOptions.includes("Whispered Counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>Whispered</label>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>Counting (%)</label>
    </div>
    <input type="number" id="whispered" value={whispered} onChange={event => setWhispered(event.target.value)} min="0" max={100 - breathing - voiced - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions.includes("Voiced Counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>Voiced</label>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>Counting (%)</label>
    </div>
    <input type="number" id="voiced" value={voiced} onChange={event => setVoiced(event.target.value)} min="0" max={100 - breathing - whispered - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions.includes("Coughing") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="coughing" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Coughing (%)</label>
    <input type="number" id="coughing" value={coughing} onChange={event => setCoughing(event.target.value)} min="0" max={100 - breathing - whispered - voiced - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />
  </div>
)}

{selectedOptions.includes("Whispering") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="whispering" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering (%)</label>
    <input type="number" id="whispering" value={whispering} onChange={event => setWhispering(event.target.value)} min="0" max={100 - breathing - whispered - voiced - coughing - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />
  </div>
)}

{selectedOptions.includes("Speaking") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="speaking" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '10px' }}>Speaking (%)</label>
    <input type="number" id="speaking" value={speaking} onChange={event => setSpeaking(event.target.value)} min="0" max={100 - breathing - whispered - voiced - coughing - whispering} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />
  </div>
)}


</div>

{/*

{
    selectedOptions.length !== 0 && (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.9rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-20px', // Adjust this value according to your need
        }}>
           {Number(breathing) + Number(whispered) + Number(voiced) + Number(coughing) + Number(whispering) + Number(speaking)} %
        </div>
    )
}
*/}

{showPopup3 && (
  <div className="popup2">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Breathing Rates</label>
    <br/>


    {selectedOptions2.includes("Resting") && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Resting</label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{resting.toFixed(1)} % </label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type111} onChange={event => setType111(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
    {type111 == 'Lognormal' && (
      <div>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR1mu" value={BR1mu} onChange={event => setBR1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR1sigma" value={BR1sigma} onChange={event => setBR1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type111 == 'Uniform' && (
      <div>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="BR1min" value={BR1min} onChange={event => setBR1min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="BR1max" value={BR1max} onChange={event => setBR1max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

</div>
        </div>

    )}



{selectedOptions2.includes("Standing") && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Standing</label> &emsp;
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{standing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type222} onChange={event => setType222(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
    {type222 == 'Lognormal' && (
      <div>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR2mu" value={BR2mu} onChange={event => setBR2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR2sigma" value={BR2sigma} onChange={event => setBR2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type222 == 'Uniform' && (
      <div>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="BR2min" value={BR2min} onChange={event => setBR2min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="BR2max" value={BR2max} onChange={event => setBR2max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

</div>
        </div>

    )}


{selectedOptions2.includes("Light Exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>Light</label>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>Exercise</label>
    </div> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{light.toFixed(1)} % </label> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type333} onChange={event => setType333(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
            {type333 == 'Lognormal' && (
            <div>
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR3mu" value={BR3mu} onChange={event => setBR3mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR3sigma" value={BR3sigma} onChange={event => setBR3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type333 == 'Uniform' && (
            <div>
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="BR3min" value={BR3min} onChange={event => setBR3min(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="BR3max" value={BR3max} onChange={event => setBR3max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
     
    </div>
</div>
)}


{selectedOptions2.includes("Moderate Exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>Moderate</label>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>Exercise</label>
    </div> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{moderate.toFixed(1)} % </label> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type444} onChange={event => setType444(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
            {type444 == 'Lognormal' && (
            <div>
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR4mu" value={BR4mu} onChange={event => setBR4mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR4sigma" value={BR4sigma} onChange={event => setBR4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type444 == 'Uniform' && (
            <div>
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="BR4min" value={BR4min} onChange={event => setBR4min(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="BR4max" value={BR4max} onChange={event => setBR4max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
     
    </div>
</div>
)}


{selectedOptions2.includes("Heavy Exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>Heavy</label>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>Exercise</label>
    </div> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{heavy.toFixed(1)} % </label> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type555} onChange={event => setType555(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
            {type555 == 'Lognormal' && (
            <div>
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR5mu" value={BR5mu} onChange={event => setBR5mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR5sigma" value={BR5sigma} onChange={event => setBR5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type555 == 'Uniform' && (
            <div>
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="BR5min" value={BR5min} onChange={event => setBR5min(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="BR5max" value={BR5max} onChange={event => setBR5max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
     
    </div>
</div>
)}


{
    selectedOptions2.length === 0 && (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            fontSize: '0.9rem' 
        }}>
           Please select least one Physical Activity
        </div>
    )
}

<br/>

    <button onClick={() => setShowPopup3(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px', marginTop: '20px'}}>
      <label htmlFor="physicalActivity" style={{ fontSize: '0.9rem',  justifyContent: 'center', display: 'flex' }}>Physical Activity</label>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginLeft: '7px' }}>
        {options2.map(option2 => (
          <button  
            key={option2}
            className={`fancy-buttonS ${selectedOptions2.includes(option2) ? 'selected' : ''}`}
            style={{ 
              fontSize: '0.9rem', 
              padding: '0px 10px', 
              height: '32px', 
              margin: '5px', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center' 
            }}
            onClick={() => toggleOption2(option2)}
          >
            {option2}
          </button>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px'}}
    onClick={() => setShowPopup3(true)}
  >
    {showACMdetail ? 'See details' : 'See details'}
  </button>
</div>
<span style={{ lineHeight: '0.5' }}>&nbsp;</span>

<div className="graph-choice" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '20px'}}>

{selectedOptions2.includes("Resting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="resting" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Resting (%) </label>
    <input type="number" id="resting" value={resting} onChange={event => setResting(event.target.value)} min="0" max={100 - standing - light - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />

  </div>
)}

{selectedOptions2.includes("Standing") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="standing" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Standing (%) </label>
    <input type="number" id="standing" value={standing} onChange={event => setStanding(event.target.value)} min="0" max={100 - resting - light - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />

  </div>
)}

{selectedOptions2.includes("Light Exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>Light</label>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>Exercise (%)</label>
    </div>
    <input type="number" id="light" value={light} onChange={event => setLight(event.target.value)} min="0" max={100 - resting - standing - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Moderate Exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>Moderate</label>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>Exercise (%)</label>
    </div>
    <input type="number" id="moderate" value={moderate} onChange={event => setModerate(event.target.value)} min="0" max={100 - resting - standing - light - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Heavy Exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>Heavy</label>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>Exercise (%)</label>
    </div>
    <input type="number" id="heavy" value={heavy} onChange={event => setHeavy(event.target.value)} min="0" max={100 - resting - standing - light - moderate} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}
  </div>

  </div>
)}


<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowInfector(!showInfector)}
    >
      {showInfector ? 'Infector Status and Immunity' : 'Infector Status and Immunity'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInfector && (
<div>
<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="virusType" style={{ fontSize: '0.9rem'}}>Virus Type: </label>
<select value={virusType} onChange={event => setVirusType(event.target.value)} style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
  <option value="SARS-CoV-2">SARS-CoV-2</option>
      {/*
  <option value="Influenza A">Influenza A</option>
    */}

</select>

<label htmlFor="immunityProportion" style={{ fontSize: '0.9rem'}}>Immunity Proportion (%): </label>
      <input type="number" id="immunityProportion" value={immunityProportion} onChange={event => setImmunityProportion(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>



              <label htmlFor="infectorStatus" style={{ fontSize: '0.9rem'}}>Infector Status: </label>
              <select
                  id="infectorStatus"
                  value={infectorStatus}
                  onChange={event => setInfectorStatus(event.target.value)}
                  style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}>
                  <option value="Regional Prevalence">Regional Prevalence</option>
                  <option value="Number of Infector">Number of Infector</option>
              </select>

              {infectorStatus === 'Regional Prevalence' && (
              <div>
                  <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates Absolute Result</h>
              </div>

          )}

          {infectorStatus === 'Number of Infector' && (
              <div>
                  <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates Conditional Result</h>
              </div>

          )}

          </div>


          <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

          {infectorStatus === 'Regional Prevalence' && (
              <div>
                  <label htmlFor="casesPerDay" style={{ fontSize: '0.9rem'}}>Cases per 100,000 per Day: </label>
                  <input type="number" id="casesPerDay" value={casesPerDay} onChange={event => setCasesPerDay(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
              </div>
          )}

          
{infectorStatus === 'Number of Infector' && (
              <div>
                  <label htmlFor="infectorNumber" style={{ fontSize: '0.9rem'}}>Infector Number: </label>
                  <input type="number" id="infectorNumber" value={infectorNumber} onChange={event => setInfectorNumber(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
              </div>

          )}


</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{infectorStatus === 'Regional Prevalence' && (
              <div>
                  <label htmlFor="infectiousPeriod" style={{ fontSize: '0.9rem'}}>Infectious Period (days): </label>
                  <input type="number" id="infectiousPeriod" value={infectiousPeriod} onChange={event => setInfectiousPeriod(event.target.value)} min="1" max="365" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                  <label htmlFor="unreportedCases" style={{ fontSize: '0.9rem'}}>Unreported Cases (%): </label>
                  <input type="number" id="unreportedCases" value={unreportedCases} onChange={event => setUnreportedCases(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
              </div>
          )}

</div>

</div>
)}


<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowVentilation(!showVentilation)}
    >
      {showVentilation ? 'Ventilation - HVAC' : 'Ventilation - HVAC'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showVentilation && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
<br/>
<label htmlFor="supplyAir" style={{ fontSize: '0.9rem' }}>Supply Air (cfm): </label>
<input
type="number"
id="supplyAir"
value={supplyAir}
onChange={event => setSupplyAir(Number(event.target.value))}
min="1"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>

<label htmlFor="outdoorAir" style={{ fontSize: '0.9rem' }}>Outdoor Air (cfm): </label>
<input
type="number"
id="outdoorAir"
value={outdoorAir}
onChange={event => setOutdoorAir(Number(event.target.value))}
min="0"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>
</div>


</div>

)}

<br/>

<button
className="fancy-button5"
style={{
  display: 'block',
  margin: '0 auto',
  textAlign: 'center',
}}
onClick={() => setShowFiltration(!showFiltration)}
>
{showFiltration ? 'Filtration' : 'Filtration'}
</button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showFiltration && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>

    <label htmlFor="merv" style={{ fontSize: '0.9rem'}}>HVAC Filter Rating:</label>
    <select
    id="merv"
   value={merv}
     onChange={(e) => {
     setMerv(e.target.value);
     setFilter(e.target.value);
   }}
  style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
  > 
  <option value="0">None</option>
<option value="0.16">MERV 4</option>
<option value="0.24">MERV 5</option>
<option value="0.28">MERV 6</option>
<option value="0.36">MERV 7</option>
<option value="0.49">MERV 8</option>
<option value="0.54">MERV 9</option>
<option value="0.57">MERV 10</option>
<option value="0.67">MERV 11</option>
<option value="0.77">MERV 12</option>
<option value="0.86">MERV 13</option>
<option value="0.93">MERV 14</option>
<option value="0.94">MERV 15</option>
<option value="0.97">MERV 16</option>
</select>

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomACQ" style={{ fontSize: '0.9rem'}}>Air Cleaner</label>&nbsp;&nbsp;

      <div className="radio-buttons">
    {[0, 1, 2, 3, 4].map((value) => (
      <label key={value} className={`radio-button ${roomACQ === value ? 'selected' : ''}`}>
        <input
          type="radio"
          name="roomACQ"
          value={value}
          checked={roomACQ === value}
          onChange={handleRadioChange}
          style={{ display: 'none' }}
        />
        {value}
      </label>
    ))}
  </div>&emsp;

<label htmlFor="roomAC" style={{ fontSize: '0.9rem'}}>Default NADR (cfm): </label>
      <input type="number" id="roomAC" value={roomAC} onChange={event => setRoomAC(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

</div>
)}

<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowDisinfection(!showDisinfection)}
    >
      {showDisinfection ? 'Disinfection' : 'Disinfection'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showDisinfection && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>

<label htmlFor="hvacUV" style={{ fontSize: '0.9rem'}}>HVAC In-duct GUV Distinfection (%): </label>
      <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomUVQ" style={{ fontSize: '0.9rem'}}>GUV System</label>&nbsp;&nbsp;

<div className="radio-buttons">
  {[0, 1, 2, 3, 4].map(value => (
    <label key={value} className={`radio-button ${roomUVQ === value ? 'selected' : ''}`}>
      <input
        type="radio"
        name="roomUVQ"
        value={value}
        checked={roomUVQ === value}
        onChange={handleRadioChange2}
        style={{ display: 'none' }}
      />
      {value}
    </label>
  ))}
</div>&emsp;

<label htmlFor="roomUV" style={{ fontSize: '0.9rem'}}>Default NADR (cfm): </label>
      <input type="number" id="roomUV" value={roomUV} onChange={event => setRoomUV(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>
</div>
)}


<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowMask(!showMask)}
    >
      {showMask ? 'Mask' : 'Mask'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showMask && (
<div>

<div className="graph-choice" style ={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="maskInfector" style={{ fontSize: '0.9rem'}}>
          Mask Efficiency
          <br/>
          Infector (%): </label>
      <input type="number" id="maskInfector" value={maskInfector} onChange={event => setMaskInfector(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding:  '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />

<label htmlFor="maskSus" style={{ fontSize: '0.9rem'}}>
  Mask Efficiency
  <br/>
  Susceptible (%): </label>
<input type="number" id="maskSus" value={maskSus} onChange={event => setMaskSus(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />
</div>
</div>
)}


<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowOthers(!showOthers)}
    >
      {showOthers ? 'Others' : 'Others'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showOthers && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="hvacTreatment" style={{ fontSize: '0.9rem'}}>HVAC Air Treatment NADR (cfm): </label>
        <input type="number" id="hvacTreatment" value={hvacTreatment} onChange={event => setHvacTreatment(Number(event.target.value))} min="0" max={(supplyAir - outdoorAir) * (1 - filter) * (1 - hvacUV / 100)} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
</div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomTreatmentQ" style={{ fontSize: '0.9rem', marginRight: '5px' }}>
    Air Treatment Device
  </label>
  <div className="radio-buttons">
    {[0, 1, 2, 3, 4].map((value) => (
      <label key={value} className={`radio-button ${roomTreatmentQ === value ? 'selected' : ''}`}>
        <input
          type="radio"
          name="roomTreatmentQ"
          value={value}
          checked={roomTreatmentQ === value}
          onChange={handleRadioChange3}
          style={{ display: 'none' }}
        />
        {value}
      </label>
    ))}
  </div>
  <label htmlFor="roomTreatment" style={{ fontSize: '0.9rem', marginRight: '5px', marginLeft: '10px' }}>
    Default NADR (cfm):
  </label>
  <input
    type="number"
    id="roomTreatment"
    value={roomTreatment}
    onChange={(event) => setRoomTreatment(event.target.value)}
    min="0"
    max="1000"
    step="1"
    style={{
      borderRadius: '5px',
      border: '1px solid #ccc',
      padding: '3px 10px',
      fontFamily: 'Arial',
      fontSize: '0.9rem',
    }}
  />
</div>


        
</div>

)}


<br/>

{/*
<button className="fancy-button" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>
Get Design Tips: AI Advisor
</button>
*/}

</div>


);

const TargetInputs = () => (
  <div className="input-container">
    <br/>

    <button
      className="fancy-button6"
      style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
      onClick={() => setShowPopup(true)}
    >
      {showUnit ? 'Units and Values' : 'Units and Values'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

    <br/>

    {showPopup && (
<div className="popup">
  <label htmlFor="units and values" style={{ fontSize: '1.1rem', display: 'block', textAlign: 'center', color: 'green' }}>Units and Values</label>
<br/>

  <div style={{ display: 'flex', fontSize: '1rem', alignItems: 'center', justifyContent: 'center'}}>

    <div className="radio-buttons">
      {["IP"].map((value) => (
        <label key={value} className={`radio-button ${unit === value ? 'selected' : ''}`}>
          <input
            type="radio"
            name="unit"
            value={value}
            checked={unit === value}
            onChange={handleRadioChange4}
            style={{ display: 'none' }}
          />
          {value}
        </label>
      ))}
    </div>
  </div>
  <br/>
  <button onClick={() => setShowPopup(false)} className="fancy-button4" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>Close</button>
</div>
)}

    <button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowBuilding(!showBuilding)}
    >
      {showBuilding ? 'Building and Occupancy' : 'Building and Occupancy'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>


<br/>

{showBuilding && (
<div>
    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
<label htmlFor="occupancyCategory" style={{ fontSize: '0.9rem'}}>Occupancy Category:</label>
<select id="occupancyCategory" 
        value={occupancyCategory} 
        onChange={(e) => setOccupancyCategory(e.target.value)} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Correctional">Correctional Facilities</option>
  <option value="Commercial">Commercial/Retail</option>
  <option value="Educational">Educational Facilities</option>
  <option value="Industrial">Industrial</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Public">Public Assembly/Sports & Entertainment</option>
</select>
</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
<label htmlFor="subcategories" style={{ fontSize: '0.9rem'}}>Subcategories:</label>
<select id="subcategories" 
        value={selectedSubcategory} 
        onChange={handleSubcategoryChange} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  {subcategories.map((subcategory, index) => (
    <option key={index} value={subcategory}>{subcategory}</option>
  ))}
</select>
<label htmlFor="modes" style={{ fontSize: '0.9rem' }}>Mode:</label>
<select
  id="modes"
  value={modes}
  onChange={(e) => {
    setModes(e.target.value);
    if (e.target.value === "Normal") {
      setOccupantNumber(8);
    } else {
      setOccupantNumber(12);
    }
  }}
  style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '130px' }}
>
  <option value="IRMM">IRMM</option>
  <option value="Normal">Normal</option>
</select>
</div>


    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
    <label htmlFor="floorArea" style={{ fontSize: '0.9rem' }}>Floor Area (sqft): </label>
<input
type="number"
id="floorArea"
value={floorArea}
onChange={event => {
  const newFloorArea = event.target.value;
  const newSupplyAir = newFloorArea * 0.9; // Calculate the new supply air based on floor area
  setFloorArea(newFloorArea);
  setSupplyAir(newSupplyAir);
  const newOutdoorAir = (newFloorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
  setOutdoorAir(newOutdoorAir);
}}
min="1"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
/>
      <label htmlFor="height" style={{ fontSize: '0.9rem'}}>Height (ft): </label>
      <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px',}} />
    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="occupantNumber" style={{ fontSize: '0.9rem'}}>Occupant Number: </label>
      <input type="number" id="occupantNumber" value={occupantNumber} 
      min="1"
      max="200"
      onChange={event => {
        let newOccupantNumber = event.target.value;
        if (newOccupantNumber > 200) {
          newOccupantNumber = 200;
        }
        setOccupantNumber(newOccupantNumber);
        const newOutdoorAir = Math.round((floorArea * ASHRAE62ft + newOccupantNumber * ASHRAE62p) / 0.75 * 100) / 100;
        setOutdoorAir(newOutdoorAir);
      }}
      style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
      <label htmlFor="occupiedPeriod" style={{ fontSize: '0.9rem'}}>Occupied Period (min): </label>
      <input type="number" id="occupiedPeriod" value={occupiedPeriod} onChange={event => setOccupiedPeriod(event.target.value)} min="1" max="1440" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
    </div>


    <br/>

    </div>
)}

<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowQuanta(!showQuanta)}
      >
        {showQuanta ? 'Quanta Emission and Breathing Rate' : 'Quanta Emission and Breathing Rate'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showQuanta && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="ACM" style={{ fontSize: '0.9rem'}}>Aerosol Counting Mode: </label>
<select value={ACM} onChange={event => setACM(event.target.value)} style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
    <option value="Continuous Distribution">Continuous Distribution</option>
    <option value="Size Bin">Size Bin</option>
</select>


{showPopup2 && (
  <div className="popup2">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Quanta Emission Rates</label>
    <br/>


    {selectedOptions.includes("Breathing") && ACM === 'Continuous Distribution' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Breathing</label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{breathing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type1} onChange={event => setType1(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &emsp;
    {type1 == 'Lognormal' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="EA1mu" value={EA1mu} onChange={event => setEA1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="EA1sigma" value={EA1sigma} onChange={event => setEA1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}

{type1 == 'Uniform' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="EA1min" value={EA1min} onChange={event => setEA1min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="EA1max" value={EA1max} onChange={event => setEA1max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label> &emsp;

    {type1 == 'Lognormal' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="DD1mu" value={DD1mu} onChange={event => setDD1mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="DD1sigma" value={DD1sigma} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

{type1 == 'Uniform' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="DD1min" value={DD1min} onChange={event => setDD1min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="DD1max" value={DD1max} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}


{selectedOptions.includes("Breathing") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type11" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Breathing</label> &emsp;
    <label htmlFor="type11" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{breathing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type11" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type11} onChange={event => setType11(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA1_1" value={EA1_1} onChange={event => setEA1_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA1_2" value={EA1_2} onChange={event => setEA1_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA1_3" value={EA1_3} onChange={event => setEA1_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA1_4" value={EA1_4} onChange={event => setEA1_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Whispered Counting") && ACM === 'Continuous Distribution' && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>Whispered</label>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispered.toFixed(1)} % </label> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type2} onChange={event => setType2(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &emsp;
            {type2 == 'Lognormal' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA2mu" value={EA2mu} onChange={event => setEA2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA2sigma" value={EA2sigma} onChange={event => setEA2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 == 'Uniform' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA2min" value={EA2min} onChange={event => setEA2min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA2max" value={EA2max} onChange={event => setEA2max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label> &emsp;
            {type2 == 'Lognormal' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD2mu" value={DD2mu} onChange={event => setDD2mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD2sigma" value={DD2sigma} onChange={event => setDD2sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 == 'Uniform' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD2min" value={DD2min} onChange={event => setDD2min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD2max" value={DD2max} onChange={event => setDD2max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}

{selectedOptions.includes("Whispered Counting") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type22" style={{ fontSize: '0.8rem' }}>Whispered</label>
        <label htmlFor="type22" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type22" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispered.toFixed(1)} % </label> &emsp;
    <label htmlFor="type22" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type22} onChange={event => setType22(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA2_1" value={EA2_1} onChange={event => setEA2_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA2_2" value={EA2_2} onChange={event => setEA2_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA2_3" value={EA2_3} onChange={event => setEA2_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA2_4" value={EA2_4} onChange={event => setEA2_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}
        
 {selectedOptions.includes("Voiced Counting") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>Voiced</label>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{voiced.toFixed(1)} % </label>&emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type3} onChange={event => setType3(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type3 == 'Lognormal' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA3mu" value={EA3mu} onChange={event => setEA3mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA3sigma" value={EA3sigma} onChange={event => setEA3sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 == 'Uniform' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA3min" value={EA3min} onChange={event => setEA3min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA3max" value={EA3max} onChange={event => setEA3max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type3 == 'Lognormal' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD3mu" value={DD3mu} onChange={event => setDD3mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD3sigma" value={DD3sigma} onChange={event => setDD3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 == 'Uniform' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD3min" value={DD3min} onChange={event => setDD3min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD3max" value={DD3max} onChange={event => setDD3max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
 )}

{selectedOptions.includes("Voiced Counting") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type33" style={{ fontSize: '0.8rem' }}>Voiced</label>
        <label htmlFor="type33" style={{ fontSize: '0.8rem' }}>Counting</label>
    </div> &emsp;
    <label htmlFor="type33" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{voiced.toFixed(1)} % </label> &emsp;
    <label htmlFor="type33" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type33} onChange={event => setType33(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type33 == 'Constant' && (
      <div>
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA3_1" value={EA3_1} onChange={event => setEA3_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA3_2" value={EA3_2} onChange={event => setEA3_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type33 == 'Constant' && (
      <div>
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA3_3" value={EA3_3} onChange={event => setEA3_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA3_4" value={EA3_4} onChange={event => setEA3_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Coughing") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Coughing</label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{coughing.toFixed(1)} % </label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type4} onChange={event => setType4(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type4 == 'Lognormal' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA4mu" value={EA4mu} onChange={event => setEA4mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA4sigma" value={EA4sigma} onChange={event => setEA4sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 == 'Uniform' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA4min" value={EA4min} onChange={event => setEA4min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA4max" value={EA4max} onChange={event => setEA4max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type4 == 'Lognormal' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD4mu" value={DD4mu} onChange={event => setDD4mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD4sigma" value={DD4sigma} onChange={event => setDD4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 == 'Uniform' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD4min" value={DD4min} onChange={event => setDD4min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD4max" value={DD4max} onChange={event => setDD4max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>

)}

{selectedOptions.includes("Coughing") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type44" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Coughing</label> &emsp;
    <label htmlFor="type44" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{coughing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type44" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type44} onChange={event => setType44(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type44 == 'Constant' && (
      <div>
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA4_1" value={EA4_1} onChange={event => setEA4_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA4_2" value={EA4_2} onChange={event => setEA4_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA4_3" value={EA4_3} onChange={event => setEA4_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA4_4" value={EA4_4} onChange={event => setEA4_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Whispering") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering</label>&emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispering.toFixed(1)} % </label> &emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type5} onChange={event => setType5(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type5 == 'Lognormal' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA5mu" value={EA5mu} onChange={event => setEA5mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA5sigma" value={EA5sigma} onChange={event => setEA5sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 == 'Uniform' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA5min" value={EA5min} onChange={event => setEA5min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA5max" value={EA5max} onChange={event => setEA5max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type5 == 'Lognormal' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD5mu" value={DD5mu} onChange={event => setDD5mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD5sigma" value={DD5sigma} onChange={event => setDD5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 == 'Uniform' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD5min" value={DD5min} onChange={event => setDD5min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD5max" value={DD5max} onChange={event => setDD5max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}

{selectedOptions.includes("Whispering") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type55" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering</label> &emsp;
    <label htmlFor="type55" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{whispering.toFixed(1)} % </label> &emsp;
    <label htmlFor="type55" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type55} onChange={event => setType55(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '0px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA5_1" value={EA5_1} onChange={event => setEA5_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA5_2" value={EA5_2} onChange={event => setEA5_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA5_3" value={EA5_3} onChange={event => setEA5_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA5_4" value={EA5_4} onChange={event => setEA5_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{selectedOptions.includes("Speaking") && ACM === 'Continuous Distribution' && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Speaking</label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{speaking.toFixed(1)} % </label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type6} onChange={event => setType6(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label>&emsp;
            {type6 == 'Lognormal' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA6mu" value={EA6mu} onChange={event => setEA6mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA6sigma" value={EA6sigma} onChange={event => setEA6sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 == 'Uniform' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA6min" value={EA6min} onChange={event => setEA6min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA6max" value={EA6max} onChange={event => setEA6max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>Droplet Diameter (µm)</label>&emsp;
            {type6 == 'Lognormal' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD6mu" value={DD6mu} onChange={event => setDD6mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD6sigma" value={DD6sigma} onChange={event => setDD6sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 == 'Uniform' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD6min" value={DD6min} onChange={event => setDD6min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD6max" value={DD6max} onChange={event => setDD6max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>

)}

{selectedOptions.includes("Speaking") && ACM === 'Size Bin' && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type66" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Speaking</label> &emsp;
    <label htmlFor="type66" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{speaking.toFixed(1)} % </label> &emsp;
    <label htmlFor="type66" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type66} onChange={event => setType66(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Constant">Constant</option>
        </select> &emsp;
        <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>Exhaled Aerosols (#/cm³)</label> &nbsp;

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type11 == 'Constant' && (
      <div>
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>0.8µm: </label> 
    <input type="number" id="EA6_1" value={EA6_1} onChange={event => setEA6_1(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>1.8µm: </label> 
    <input type="number" id="EA6_2" value={EA6_2} onChange={event => setEA6_2(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>

{type11 == 'Constant' && (
      <div>
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>3.5µm: </label> 
    <input type="number" id="EA6_3" value={EA6_3} onChange={event => setEA6_3(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>5.5µm: </label> 
    <input type="number" id="EA6_4" value={EA6_4} onChange={event => setEA6_4(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}

{
    selectedOptions.length === 0 && (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            fontSize: '0.9rem' 
        }}>
           Please select least one Expiratory Activity
        </div>
    )
}

<br/>

    <button onClick={() => setShowPopup2(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}

</div>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
  <label htmlFor="expiratoryActivity" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex' }}>Expiratory Activity</label>
  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    {options.map(option => (
      <button
        key={option}
        className={`fancy-buttonS ${selectedOptions.includes(option) ? 'selected' : ''}`}
        style={{
          fontSize: '0.9rem',
          padding: '0px 10px',
          height: '32px',
          margin: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => toggleOption(option)}
      >
        {option}
      </button>
    ))}
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px'}}
    onClick={() => setShowPopup2(true)}
  >
    {showACMdetail ? 'See details' : 'See details'}
  </button>
</div>
<span style={{ lineHeight: '0.5' }}>&nbsp;</span>

<div className="graph-choice" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '20px'}}>

{selectedOptions.includes("Breathing") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="breathing" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Breathing (%) </label>
    <input type="number" id="breathing" value={breathing} onChange={event => setBreathing(event.target.value)} min="0" max={100 - whispered - voiced - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />

  </div>
)}

{selectedOptions.includes("Whispered Counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>Whispered</label>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>Counting (%)</label>
    </div>
    <input type="number" id="whispered" value={whispered} onChange={event => setWhispered(event.target.value)} min="0" max={100 - breathing - voiced - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions.includes("Voiced Counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>Voiced</label>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>Counting (%)</label>
    </div>
    <input type="number" id="voiced" value={voiced} onChange={event => setVoiced(event.target.value)} min="0" max={100 - breathing - whispered - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions.includes("Coughing") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="coughing" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Coughing (%)</label>
    <input type="number" id="coughing" value={coughing} onChange={event => setCoughing(event.target.value)} min="0" max={100 - breathing - whispered - voiced - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />
  </div>
)}

{selectedOptions.includes("Whispering") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="whispering" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering (%)</label>
    <input type="number" id="whispering" value={whispering} onChange={event => setWhispering(event.target.value)} min="0" max={100 - breathing - whispered - voiced - coughing - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />
  </div>
)}

{selectedOptions.includes("Speaking") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="speaking" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '10px' }}>Speaking (%)</label>
    <input type="number" id="speaking" value={speaking} onChange={event => setSpeaking(event.target.value)} min="0" max={100 - breathing - whispered - voiced - coughing - whispering} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />
  </div>
)}


</div>

{/*

{
    selectedOptions.length !== 0 && (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.9rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-20px', // Adjust this value according to your need
        }}>
           {Number(breathing) + Number(whispered) + Number(voiced) + Number(coughing) + Number(whispering) + Number(speaking)} %
        </div>
    )
}
*/}

{showPopup3 && (
  <div className="popup2">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Breathing Rates</label>
    <br/>


    {selectedOptions2.includes("Resting") && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Resting</label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{resting.toFixed(1)} % </label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type111} onChange={event => setType111(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
    {type111 == 'Lognormal' && (
      <div>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR1mu" value={BR1mu} onChange={event => setBR1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR1sigma" value={BR1sigma} onChange={event => setBR1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type111 == 'Uniform' && (
      <div>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="BR1min" value={BR1min} onChange={event => setBR1min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="BR1max" value={BR1max} onChange={event => setBR1max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

</div>
        </div>

    )}



{selectedOptions2.includes("Standing") && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Standing</label> &emsp;
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{standing.toFixed(1)} % </label> &emsp;
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type222} onChange={event => setType222(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
    {type222 == 'Lognormal' && (
      <div>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR2mu" value={BR2mu} onChange={event => setBR2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR2sigma" value={BR2sigma} onChange={event => setBR2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type222 == 'Uniform' && (
      <div>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="BR2min" value={BR2min} onChange={event => setBR2min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="BR2max" value={BR2max} onChange={event => setBR2max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

</div>
        </div>

    )}


{selectedOptions2.includes("Light Exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>Light</label>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>Exercise</label>
    </div> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{light.toFixed(1)} % </label> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type333} onChange={event => setType333(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
            {type333 == 'Lognormal' && (
            <div>
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR3mu" value={BR3mu} onChange={event => setBR3mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR3sigma" value={BR3sigma} onChange={event => setBR3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type333 == 'Uniform' && (
            <div>
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="BR3min" value={BR3min} onChange={event => setBR3min(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="BR3max" value={BR3max} onChange={event => setBR3max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
     
    </div>
</div>
)}


{selectedOptions2.includes("Moderate Exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>Moderate</label>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>Exercise</label>
    </div> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{moderate.toFixed(1)} % </label> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type444} onChange={event => setType444(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
            {type444 == 'Lognormal' && (
            <div>
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR4mu" value={BR4mu} onChange={event => setBR4mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR4sigma" value={BR4sigma} onChange={event => setBR4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type444 == 'Uniform' && (
            <div>
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="BR4min" value={BR4min} onChange={event => setBR4min(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="BR4max" value={BR4max} onChange={event => setBR4max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
     
    </div>
</div>
)}


{selectedOptions2.includes("Heavy Exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>Heavy</label>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>Exercise</label>
    </div> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{heavy.toFixed(1)} % </label> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type555} onChange={event => setType555(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>Breathing Rate (m³/h)</label> &emsp;
            {type555 == 'Lognormal' && (
            <div>
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR5mu" value={BR5mu} onChange={event => setBR5mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR5sigma" value={BR5sigma} onChange={event => setBR5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type555 == 'Uniform' && (
            <div>
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="BR5min" value={BR5min} onChange={event => setBR5min(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="BR5max" value={BR5max} onChange={event => setBR5max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
     
    </div>
</div>
)}


{
    selectedOptions2.length === 0 && (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            fontSize: '0.9rem' 
        }}>
           Please select least one Physical Activity
        </div>
    )
}

<br/>

    <button onClick={() => setShowPopup3(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px', marginTop: '20px'}}>
      <label htmlFor="physicalActivity" style={{ fontSize: '0.9rem',  justifyContent: 'center', display: 'flex' }}>Physical Activity</label>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginLeft: '7px' }}>
        {options2.map(option2 => (
          <button  
            key={option2}
            className={`fancy-buttonS ${selectedOptions2.includes(option2) ? 'selected' : ''}`}
            style={{ 
              fontSize: '0.9rem', 
              padding: '0px 10px', 
              height: '32px', 
              margin: '5px', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center' 
            }}
            onClick={() => toggleOption2(option2)}
          >
            {option2}
          </button>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px'}}
    onClick={() => setShowPopup3(true)}
  >
    {showACMdetail ? 'See details' : 'See details'}
  </button>
</div>
<span style={{ lineHeight: '0.5' }}>&nbsp;</span>

<div className="graph-choice" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '20px'}}>

{selectedOptions2.includes("Resting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="resting" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Resting (%) </label>
    <input type="number" id="resting" value={resting} onChange={event => setResting(event.target.value)} min="0" max={100 - standing - light - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />

  </div>
)}

{selectedOptions2.includes("Standing") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <label htmlFor="standing" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex', marginLeft: '9px' }}>Standing (%) </label>
    <input type="number" id="standing" value={standing} onChange={event => setStanding(event.target.value)} min="0" max={100 - resting - light - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '10px', marginRight: '20px', width: '70px' }} />

  </div>
)}

{selectedOptions2.includes("Light Exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>Light</label>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>Exercise (%)</label>
    </div>
    <input type="number" id="light" value={light} onChange={event => setLight(event.target.value)} min="0" max={100 - resting - standing - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Moderate Exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>Moderate</label>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>Exercise (%)</label>
    </div>
    <input type="number" id="moderate" value={moderate} onChange={event => setModerate(event.target.value)} min="0" max={100 - resting - standing - light - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Heavy Exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>Heavy</label>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>Exercise (%)</label>
    </div>
    <input type="number" id="heavy" value={heavy} onChange={event => setHeavy(event.target.value)} min="0" max={100 - resting - standing - light - moderate} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}
  </div>

  </div>
)}


<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowInfector(!showInfector)}
    >
      {showInfector ? 'Infector Status and Immunity' : 'Infector Status and Immunity'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInfector && (
<div>
<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="virusType" style={{ fontSize: '0.9rem'}}>Virus Type: </label>
<select value={virusType} onChange={event => setVirusType(event.target.value)} style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
  <option value="SARS-CoV-2">SARS-CoV-2</option>
      {/*
  <option value="Influenza A">Influenza A</option>
    */}

</select>

<label htmlFor="immunityProportion" style={{ fontSize: '0.9rem'}}>Immunity Proportion (%): </label>
      <input type="number" id="immunityProportion" value={immunityProportion} onChange={event => setImmunityProportion(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>



              <label htmlFor="infectorStatus" style={{ fontSize: '0.9rem'}}>Infector Status: </label>
              <select
                  id="infectorStatus"
                  value={infectorStatus}
                  onChange={event => setInfectorStatus(event.target.value)}
                  style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}>
                  <option value="Regional Prevalence">Regional Prevalence</option>
                  <option value="Number of Infector">Number of Infector</option>
              </select>

              {infectorStatus === 'Regional Prevalence' && (
              <div>
                  <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates Absolute Result</h>
              </div>

          )}

          {infectorStatus === 'Number of Infector' && (
              <div>
                  <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates Conditional Result</h>
              </div>

          )}

          </div>


          <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

          {infectorStatus === 'Regional Prevalence' && (
              <div>
                  <label htmlFor="casesPerDay" style={{ fontSize: '0.9rem'}}>Cases per 100,000 per Day: </label>
                  <input type="number" id="casesPerDay" value={casesPerDay} onChange={event => setCasesPerDay(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
              </div>
          )}

          
{infectorStatus === 'Number of Infector' && (
              <div>
                  <label htmlFor="infectorNumber" style={{ fontSize: '0.9rem'}}>Infector Number: </label>
                  <input type="number" id="infectorNumber" value={infectorNumber} onChange={event => setInfectorNumber(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
              </div>

          )}


</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{infectorStatus === 'Regional Prevalence' && (
              <div>
                  <label htmlFor="infectiousPeriod" style={{ fontSize: '0.9rem'}}>Infectious Period (days): </label>
                  <input type="number" id="infectiousPeriod" value={infectiousPeriod} onChange={event => setInfectiousPeriod(event.target.value)} min="1" max="365" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                  <label htmlFor="unreportedCases" style={{ fontSize: '0.9rem'}}>Unreported Cases (%): </label>
                  <input type="number" id="unreportedCases" value={unreportedCases} onChange={event => setUnreportedCases(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
              </div>
          )}

</div>

</div>
)}


<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowHVAC(!showHVAC)}
    >
      {showHVAC ? 'Engineering Control - HVAC' : 'Engineering Control - HVAC'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showHVAC && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
<br/>
<label htmlFor="supplyAir" style={{ fontSize: '0.9rem' }}>Supply Air (cfm): </label>
<input
type="number"
id="supplyAir"
value={supplyAir}
onChange={event => setSupplyAir(Number(event.target.value))}
min="1"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>

<label htmlFor="outdoorAir" style={{ fontSize: '0.9rem' }}>Outdoor Air (cfm): </label>
<input
type="number"
id="outdoorAir"
value={outdoorAir}
onChange={event => setOutdoorAir(Number(event.target.value))}
min="0"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>
</div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>

    <label htmlFor="merv" style={{ fontSize: '0.9rem'}}>Filter Rating:</label>
    <select
    id="merv"
   value={merv}
     onChange={(e) => {
     setMerv(e.target.value);
     setFilter(e.target.value);
   }}
  style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
  > 
<option value="0">None</option>
<option value="0.16">MERV 4</option>
<option value="0.24">MERV 5</option>
<option value="0.28">MERV 6</option>
<option value="0.36">MERV 7</option>
<option value="0.49">MERV 8</option>
<option value="0.54">MERV 9</option>
<option value="0.57">MERV 10</option>
<option value="0.67">MERV 11</option>
<option value="0.77">MERV 12</option>
<option value="0.86">MERV 13</option>
<option value="0.93">MERV 14</option>
<option value="0.94">MERV 15</option>
<option value="0.97">MERV 16</option>
</select>

<label htmlFor="hvacUV" style={{ fontSize: '0.9rem'}}>UVC Inactivation (%): </label>
      <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="hvacTreatment" style={{ fontSize: '0.9rem'}}>Air Treatment CADR (cfm): </label>
      <input type="number" id="hvacTreatment" value={hvacTreatment} onChange={event => setHvacTreatment(Number(event.target.value))} min="0" max={(supplyAir - outdoorAir) * (1 - filter) * (1 - hvacUV / 100)} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

      </div> 


</div>

)}

<br/>

<button
className="fancy-button5"
style={{
  display: 'block',
  margin: '0 auto',
  textAlign: 'center',
}}
onClick={() => setShowInRoom(!showInRoom)}
>
{showInRoom ? 'Engineering Control - In Room' : 'Engineering Control - In Room'}
</button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInRoom && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomACQ" style={{ fontSize: '0.9rem'}}>Air Cleaner</label>&nbsp;&nbsp;

      <div className="radio-buttons">
    {[0, 1, 2, 3, 4].map((value) => (
      <label key={value} className={`radio-button ${roomACQ === value ? 'selected' : ''}`}>
        <input
          type="radio"
          name="roomACQ"
          value={value}
          checked={roomACQ === value}
          onChange={handleRadioChange}
          style={{ display: 'none' }}
        />
        {value}
      </label>
    ))}
  </div>&emsp;

<label htmlFor="roomAC" style={{ fontSize: '0.9rem'}}>Default CADR (cfm): </label>
      <input type="number" id="roomAC" value={roomAC} onChange={event => setRoomAC(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomUVQ" style={{ fontSize: '0.9rem'}}>In Room UV</label>&nbsp;&nbsp;

<div className="radio-buttons">
  {[0, 1, 2, 3, 4].map(value => (
    <label key={value} className={`radio-button ${roomUVQ === value ? 'selected' : ''}`}>
      <input
        type="radio"
        name="roomUVQ"
        value={value}
        checked={roomUVQ === value}
        onChange={handleRadioChange2}
        style={{ display: 'none' }}
      />
      {value}
    </label>
  ))}
</div>&emsp;

<label htmlFor="roomUV" style={{ fontSize: '0.9rem'}}>Default CADR (cfm): </label>
      <input type="number" id="roomUV" value={roomUV} onChange={event => setRoomUV(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomTreatmentQ" style={{ fontSize: '0.9rem', marginRight: '5px' }}>
  Air Treatment Device
</label>
<div className="radio-buttons">
  {[0, 1, 2, 3, 4].map((value) => (
    <label key={value} className={`radio-button ${roomTreatmentQ === value ? 'selected' : ''}`}>
      <input
        type="radio"
        name="roomTreatmentQ"
        value={value}
        checked={roomTreatmentQ === value}
        onChange={handleRadioChange3}
        style={{ display: 'none' }}
      />
      {value}
    </label>
  ))}
</div>
<label htmlFor="roomTreatment" style={{ fontSize: '0.9rem', marginRight: '5px', marginLeft: '10px' }}>
  Default CADR (cfm):
</label>
<input
  type="number"
  id="roomTreatment"
  value={roomTreatment}
  onChange={(event) => setRoomTreatment(event.target.value)}
  min="0"
  max="1000"
  step="1"
  style={{
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '3px 10px',
    fontFamily: 'Arial',
    fontSize: '0.9rem',
  }}
/>
</div>
</div>
)}


<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowNonEngineering(!showNonEngineering)}
    >
      {showNonEngineering ? 'Non-engieering Controls' : 'Non-engieering Controls'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showNonEngineering && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="maskInfector" style={{ fontSize: '0.9rem'}}>
          Mask Efficiency
          <br/>
          Infector (%): </label>
      <input type="number" id="maskInfector" value={maskInfector} onChange={event => setMaskInfector(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding:  '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />

<label htmlFor="maskSus" style={{ fontSize: '0.9rem'}}>
  Mask Efficiency
  <br/>
  Susceptible (%): </label>
<input type="number" id="maskSus" value={maskSus} onChange={event => setMaskSus(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />
</div>
</div>
)}


<br/>

{/*
<button className="fancy-button" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>
Get Design Tips: AI Advisor
</button>
*/}

</div>


);

const ShortInputs = () => (
  <div className="input-container">
    <br/>

    <button
      className="fancy-button6"
      style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
      onClick={() => setShowPopup(true)}
    >
      {showUnit ? 'Units and Values' : 'Units and Values'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

    <br/>

    {showPopup && (
<div className="popup">
  <label htmlFor="units and values" style={{ fontSize: '1.1rem', display: 'block', textAlign: 'center', color: 'green' }}>Units and Values</label>
<br/>

  <div style={{ display: 'flex', fontSize: '1rem', alignItems: 'center', justifyContent: 'center'}}>

    <div className="radio-buttons">
      {["IP"].map((value) => (
        <label key={value} className={`radio-button ${unit === value ? 'selected' : ''}`}>
          <input
            type="radio"
            name="unit"
            value={value}
            checked={unit === value}
            onChange={handleRadioChange4}
            style={{ display: 'none' }}
          />
          {value}
        </label>
      ))}
    </div>
  </div>
  <br/>
  <button onClick={() => setShowPopup(false)} className="fancy-button4" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>Close</button>
</div>
)}



<button
      className="fancy-button5"
      style={{ display: 'block', margin: '0 auto', textAlign: 'center', color: 'rgb(0, 46, 98)' }}
      onClick={() => setShowDistance(!showDistance)}
    >
      {showDistance ? 'Distance' : 'Distance'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

    <br/>

    {showDistance && (

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '15px' }}>
  <div style={{ display: 'flex', flexDirection: 'row', width: '70%', alignItems: 'center', justifyContent: 'center'}}>
    <input
      type="range"
      id="distance"
      value={distance}
      onChange={event => setDistance(Number(event.target.value).toFixed(1))}
      min="0"
      max="20"
      step="0.1"
      style={{
        borderRadius: '5px',
        appearance: 'none',
        width: '100%',
        height: '15px',
        border: '1px solid #ccc',
        backgroundImage: `linear-gradient(to right, rgb(0, 46, 98) 0% ${(distance / 20) * 100}%, #d3d3d3 ${(distance / 20) * 100}% 100%)`,
        outline: 'none',
        fontFamily: 'Arial',
        fontSize: '0.9rem',
        flex: 0.7,
      }}
    />
    <span style={{ marginLeft: '10px', fontFamily: 'Arial', fontWeight: 'normal', flex: '0.1', textAlign: 'right', color: 'rgb(0, 46, 98)' }}>{parseFloat(distance).toFixed(1)}&nbsp;ft</span>
  </div>

</div>

    )}


    <button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowBuilding(!showBuilding)}
    >
      {showBuilding ? 'Building and Occupancy' : 'Building and Occupancy'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>


<br/>

{showBuilding && (
<div>


    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
<label htmlFor="occupancyCategory" style={{ fontSize: '0.9rem'}}>Occupancy Category:</label>
<select id="occupancyCategory" 
        value={occupancyCategory} 
        onChange={(e) => setOccupancyCategory(e.target.value)} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Correctional">Correctional Facilities</option>
  <option value="Commercial">Commercial/Retail</option>
  <option value="Educational">Educational Facilities</option>
  <option value="Industrial">Industrial</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Public">Public Assembly/Sports & Entertainment</option>
</select>
</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
<label htmlFor="subcategories" style={{ fontSize: '0.9rem'}}>Subcategories:</label>
<select id="subcategories" 
        value={selectedSubcategory} 
        onChange={handleSubcategoryChange} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  {subcategories.map((subcategory, index) => (
    <option key={index} value={subcategory}>{subcategory}</option>
  ))}
</select>
<label htmlFor="modes" style={{ fontSize: '0.9rem' }}>Mode:</label>
<select
  id="modes"
  value={modes}
  onChange={(e) => {
    setModes(e.target.value);
    if (e.target.value === "Normal") {
      setOccupantNumber(8);
    } else {
      setOccupantNumber(12);
    }
  }}
  style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '130px' }}
>
  <option value="IRMM">IRMM</option>
  <option value="Normal">Normal</option>
</select>
</div>


    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
    <label htmlFor="floorArea" style={{ fontSize: '0.9rem' }}>Floor Area (sqft): </label>
<input
type="number"
id="floorArea"
value={floorArea}
onChange={event => {
  const newFloorArea = event.target.value;
  const newSupplyAir = newFloorArea * 0.9; // Calculate the new supply air based on floor area
  setFloorArea(newFloorArea);
  setSupplyAir(newSupplyAir);
  const newOutdoorAir = (newFloorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
  setOutdoorAir(newOutdoorAir);
}}
min="1"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
/>
      <label htmlFor="height" style={{ fontSize: '0.9rem'}}>Height (ft): </label>
      <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px',}} />
    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="occupantNumber" style={{ fontSize: '0.9rem'}}>Occupant Number: </label>
      <input type="number" id="occupantNumber" value={occupantNumber} 
      min="1"
      max="200"
      onChange={event => {
        let newOccupantNumber = event.target.value;
        if (newOccupantNumber > 200) {
          newOccupantNumber = 200;
        }
        setOccupantNumber(newOccupantNumber);
        const newOutdoorAir = Math.round((floorArea * ASHRAE62ft + newOccupantNumber * ASHRAE62p) / 0.75 * 100) / 100;
        setOutdoorAir(newOutdoorAir);
      }}
      style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
      <label htmlFor="occupiedPeriod" style={{ fontSize: '0.9rem'}}>Occupied Period (min): </label>
      <input type="number" id="occupiedPeriod" value={occupiedPeriod} onChange={event => setOccupiedPeriod(event.target.value)} min="1" max="1440" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
    </div>

    
    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="expiratoryActivity" style={{ fontSize: '0.9rem'}}>Expiratory Activity:</label>
<select id="expiratoryActivity" 
        value={expiratoryActivity} 
        onChange={(e) => setExpiratoryActivity(e.target.value)} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Breathing">Breathing</option>
  <option value="Whispered">Whispered Counting</option>
  <option value="Voiced">Voiced Counting</option>
  <option value="Speaking">Speaking</option>
  <option value="Unmodulated">Unmodulated Vocalization</option>
</select>

      <label htmlFor="physicalActivity" style={{ fontSize: '0.9rem'}}>Physical Activity:</label>
<select id="physicalActivity" 
        value={physicalActivity} 
        onChange={(e) => setPhysicalActivity(e.target.value)} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="0.288">Resting</option>
  <option value="0.318">Standing</option>
  <option value="0.565">Standing+Light</option>
  <option value="0.812">Light Exercise</option>
  <option value="1.383">Moderate Exercise</option>
  <option value="1.942">Heavy Exercise</option>
</select>
    </div>
    <br/>

    </div>
)}

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowInfector(!showInfector)}
    >
      {showInfector ? 'Infector Status and Immunity' : 'Infector Status and Immunity'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInfector && (
<div>
<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="virusType" style={{ fontSize: '0.9rem'}}>Virus Type: </label>
<select value={virusType} onChange={event => setVirusType(event.target.value)} style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
  <option value="SARS-CoV-2">SARS-CoV-2</option>
      {/*
  <option value="Influenza A">Influenza A</option>
    */}

</select>

<label htmlFor="immunityProportion" style={{ fontSize: '0.9rem'}}>Immunity Proportion (%): </label>
      <input type="number" id="immunityProportion" value={immunityProportion} onChange={event => setImmunityProportion(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>



              <label htmlFor="infectorStatus" style={{ fontSize: '0.9rem'}}>Infector Status: </label>
              <select
                  id="infectorStatus"
                  value={infectorStatus}
                  onChange={event => setInfectorStatus(event.target.value)}
                  style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}>
                  <option value="Regional Prevalence">Regional Prevalence</option>
                  <option value="Number of Infector">Number of Infector</option>
              </select>

              {infectorStatus === 'Regional Prevalence' && (
              <div>
                  <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates absolute result</h>
              </div>

          )}

          {infectorStatus === 'Number of Infector' && (
              <div>
                  <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates conditional result</h>
              </div>

          )}

          </div>


          <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

          {infectorStatus === 'Regional Prevalence' && (
              <div>
                  <label htmlFor="casesPerDay" style={{ fontSize: '0.9rem'}}>Cases per 100,000 per Day: </label>
                  <input type="number" id="casesPerDay" value={casesPerDay} onChange={event => setCasesPerDay(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
              </div>
          )}

          
{infectorStatus === 'Number of Infector' && (
              <div>
                  <label htmlFor="infectorNumber" style={{ fontSize: '0.9rem'}}>Infector Number: </label>
                  <input type="number" id="infectorNumber" value={infectorNumber} onChange={event => setInfectorNumber(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
              </div>

          )}


</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{infectorStatus === 'Regional Prevalence' && (
              <div>
                  <label htmlFor="infectiousPeriod" style={{ fontSize: '0.9rem'}}>Infectious Period (days): </label>
                  <input type="number" id="infectiousPeriod" value={infectiousPeriod} onChange={event => setInfectiousPeriod(event.target.value)} min="1" max="365" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                  <label htmlFor="unreportedCases" style={{ fontSize: '0.9rem'}}>Unreported Cases (%): </label>
                  <input type="number" id="unreportedCases" value={unreportedCases} onChange={event => setUnreportedCases(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
              </div>
          )}

</div>

</div>
)}


<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowHVAC(!showHVAC)}
    >
      {showHVAC ? 'Engineering Control - HVAC' : 'Engineering Control - HVAC'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showHVAC && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
<br/>
<label htmlFor="supplyAir" style={{ fontSize: '0.9rem' }}>Supply Air (cfm): </label>
<input
type="number"
id="supplyAir"
value={supplyAir}
onChange={event => setSupplyAir(Number(event.target.value))}
min="1"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>

<label htmlFor="outdoorAir" style={{ fontSize: '0.9rem' }}>Outdoor Air (cfm): </label>
<input
type="number"
id="outdoorAir"
value={outdoorAir}
onChange={event => setOutdoorAir(Number(event.target.value))}
min="0"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>
</div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>

    <label htmlFor="merv" style={{ fontSize: '0.9rem'}}>Filter Rating:</label>
    <select
    id="merv"
   value={merv}
     onChange={(e) => {
     setMerv(e.target.value);
     setFilter(e.target.value);
   }}
  style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
  > 
<option value="0">None</option>
<option value="0.16">MERV 4</option>
<option value="0.24">MERV 5</option>
<option value="0.28">MERV 6</option>
<option value="0.36">MERV 7</option>
<option value="0.49">MERV 8</option>
<option value="0.54">MERV 9</option>
<option value="0.57">MERV 10</option>
<option value="0.67">MERV 11</option>
<option value="0.77">MERV 12</option>
<option value="0.86">MERV 13</option>
<option value="0.93">MERV 14</option>
<option value="0.94">MERV 15</option>
<option value="0.97">MERV 16</option>
</select>

<label htmlFor="hvacUV" style={{ fontSize: '0.9rem'}}>UVC Inactivation (%): </label>
      <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="hvacTreatment" style={{ fontSize: '0.9rem'}}>Air Treatment CADR (cfm): </label>
      <input type="number" id="hvacTreatment" value={hvacTreatment} onChange={event => setHvacTreatment(Number(event.target.value))} min="0" max={(supplyAir - outdoorAir) * (1 - filter) * (1 - hvacUV / 100)} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

      </div> 


</div>

)}

<br/>

<button
className="fancy-button5"
style={{
  display: 'block',
  margin: '0 auto',
  textAlign: 'center',
}}
onClick={() => setShowInRoom(!showInRoom)}
>
{showInRoom ? 'Engineering Control - In Room' : 'Engineering Control - In Room'}
</button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInRoom && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomACQ" style={{ fontSize: '0.9rem'}}>Air Cleaner</label>&nbsp;&nbsp;

      <div className="radio-buttons">
    {[0, 1, 2, 3, 4].map((value) => (
      <label key={value} className={`radio-button ${roomACQ === value ? 'selected' : ''}`}>
        <input
          type="radio"
          name="roomACQ"
          value={value}
          checked={roomACQ === value}
          onChange={handleRadioChange}
          style={{ display: 'none' }}
        />
        {value}
      </label>
    ))}
  </div>&emsp;

<label htmlFor="roomAC" style={{ fontSize: '0.9rem'}}>Default CADR (cfm): </label>
      <input type="number" id="roomAC" value={roomAC} onChange={event => setRoomAC(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomUVQ" style={{ fontSize: '0.9rem'}}>In Room UV</label>&nbsp;&nbsp;

<div className="radio-buttons">
  {[0, 1, 2, 3, 4].map(value => (
    <label key={value} className={`radio-button ${roomUVQ === value ? 'selected' : ''}`}>
      <input
        type="radio"
        name="roomUVQ"
        value={value}
        checked={roomUVQ === value}
        onChange={handleRadioChange2}
        style={{ display: 'none' }}
      />
      {value}
    </label>
  ))}
</div>&emsp;

<label htmlFor="roomUV" style={{ fontSize: '0.9rem'}}>Default CADR (cfm): </label>
      <input type="number" id="roomUV" value={roomUV} onChange={event => setRoomUV(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomTreatmentQ" style={{ fontSize: '0.9rem', marginRight: '5px' }}>
  Air Treatment Device
</label>
<div className="radio-buttons">
  {[0, 1, 2, 3, 4].map((value) => (
    <label key={value} className={`radio-button ${roomTreatmentQ === value ? 'selected' : ''}`}>
      <input
        type="radio"
        name="roomTreatmentQ"
        value={value}
        checked={roomTreatmentQ === value}
        onChange={handleRadioChange3}
        style={{ display: 'none' }}
      />
      {value}
    </label>
  ))}
</div>
<label htmlFor="roomTreatment" style={{ fontSize: '0.9rem', marginRight: '5px', marginLeft: '10px' }}>
  Default CADR (cfm):
</label>
<input
  type="number"
  id="roomTreatment"
  value={roomTreatment}
  onChange={(event) => setRoomTreatment(event.target.value)}
  min="0"
  max="1000"
  step="1"
  style={{
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '3px 10px',
    fontFamily: 'Arial',
    fontSize: '0.9rem',
  }}
/>
</div>
</div>
)}


<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowNonEngineering(!showNonEngineering)}
    >
      {showNonEngineering ? 'Non-engieering Controls' : 'Non-engieering Controls'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showNonEngineering && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="maskInfector" style={{ fontSize: '0.9rem'}}>
          Mask Efficiency
          <br/>
          Infector (%): </label>
      <input type="number" id="maskInfector" value={maskInfector} onChange={event => setMaskInfector(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding:  '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />

<label htmlFor="maskSus" style={{ fontSize: '0.9rem'}}>
  Mask Efficiency
  <br/>
  Susceptible (%): </label>
<input type="number" id="maskSus" value={maskSus} onChange={event => setMaskSus(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />
</div>
</div>
)}


<br/>

{/*
<button className="fancy-button" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>
Get Design Tips: AI Advisor
</button>
*/}

</div>


);



let convertedOutdoorAir = outdoorAir;
let convertedSupplyAir = supplyAir;
let convertedHVACUV = hvacUV;
let convertedHVACTreatment = hvacTreatment;
let convertedRoomUV = roomUV * roomUVQ;
let convertedRoomAC = roomAC * roomACQ;
let convertedRoomTreatment = roomTreatment * roomTreatmentQ;
let totalCADR = convertedOutdoorAir + (convertedSupplyAir - convertedOutdoorAir) * filter + (convertedSupplyAir-convertedOutdoorAir) * (1 - filter) * hvacUV / 100 +
convertedHVACTreatment +
convertedRoomUV + convertedRoomAC + convertedRoomTreatment;

// Check the selected unit choice and perform conversions if necessary

if (unitChoice === "cfm") {
convertedOutdoorAir = outdoorAir.toFixed(0);
convertedSupplyAir = supplyAir.toFixed(0);
convertedHVACTreatment = hvacTreatment;
convertedRoomAC = (roomAC * roomACQ).toFixed(0);
convertedRoomUV = (roomUV * roomUVQ).toFixed(0);
convertedRoomTreatment = (roomTreatment * roomTreatmentQ).toFixed(0);
totalCADR = (totalCADR).toFixed(0);

} else if (unitChoice === "cfm/p") {
convertedOutdoorAir = (outdoorAir / occupantNumber).toFixed(1);
convertedSupplyAir = (supplyAir / occupantNumber).toFixed(1);
convertedHVACTreatment = (hvacTreatment / occupantNumber).toFixed(1);
convertedRoomAC = ((roomAC / occupantNumber) * roomACQ).toFixed(1);
convertedRoomAC = ((roomUV / occupantNumber) * roomUVQ).toFixed(1);
convertedRoomTreatment = ((roomTreatment / occupantNumber) * roomTreatmentQ).toFixed(1);
totalCADR = (totalCADR/occupantNumber).toFixed(1);

} else if (unitChoice === "cfm/ft²") {
convertedOutdoorAir = (outdoorAir / floorArea).toFixed(1);
convertedSupplyAir = (supplyAir / floorArea).toFixed(1);
convertedHVACTreatment = (hvacTreatment / floorArea).toFixed(1);
convertedRoomAC = ((roomAC / floorArea) * roomACQ).toFixed(1);
convertedRoomAC = ((roomUV / floorArea) * roomUVQ).toFixed(1);
convertedRoomTreatment = ((roomTreatment / floorArea) * roomTreatmentQ).toFixed(1);
totalCADR = (totalCADR/floorArea).toFixed(1);

} else if (unitChoice === "h⁻¹") {
convertedOutdoorAir = ((outdoorAir / (floorArea * height)) * 60).toFixed(1);
convertedSupplyAir = ((supplyAir / (floorArea * height)) * 60).toFixed(1);
convertedHVACTreatment = ((hvacTreatment / (floorArea * height)) * 60).toFixed(1);
convertedRoomAC = (((roomAC / (floorArea * height)) * 60) * roomACQ).toFixed(1);
convertedRoomAC = (((roomUV / (floorArea * height)) * 60) * roomUVQ).toFixed(1);
convertedRoomTreatment = (((roomTreatment / (floorArea * height)) * 60) * roomTreatmentQ).toFixed(1);
totalCADR = (totalCADR/(floorArea * height) * 60).toFixed(1);
}


const totalCADRR = (outdoorAir + 
(supplyAir - outdoorAir) * filter + 
(supplyAir - outdoorAir) * (1 - filter) * hvacUV / 100 +
hvacTreatment +
roomUV * roomUVQ + 
roomAC * roomACQ + 
roomTreatment * roomTreatmentQ)/occupantNumber;

{/*
const isCompliant = totalCADRR >= (expiratoryActivity === "Unmodulated" ? ASHRAE2 : ASHRAE);
*/}

const isCompliant = totalCADRR >= ASHRAE;

const LANCET_ach = totalCADR/(floorArea * height) * 60;

const getLancetText = (LANCET_ach) => {
  if (LANCET_ach < 4) {
    return '✗';
  } else if (LANCET_ach >= 4 && LANCET_ach < 6) {
    return <> Good&nbsp;</>;
  } else if (LANCET_ach === 6) {
    return <> Better&nbsp;</>;
  } else {
    return <> Best&nbsp;</>;
  }
}

const LANCET_occ = totalCADR/(occupantNumber);

const getLancetText2 = (LANCET_occ) => {
  if (LANCET_occ < 21) {
    return '✗' ;
  } else if (LANCET_occ >= 21 && LANCET_occ < 30) {
    return <> Good</>;
  } else if (LANCET_occ === 30) {
    return <>Better</>;
  } else {
    return <>Best</>;
  }
}

const getLancetText3 = (totalCADR) => {
  if (totalCADR < floorArea * (ASHRAE62ft + 0.75) + occupantNumber * ASHRAE62p) {
    return '✗';
  } else if (totalCADR >= floorArea * (ASHRAE62ft + 0.75) + occupantNumber * ASHRAE62p && totalCADR < floorArea * (ASHRAE62ft + 1) + occupantNumber * ASHRAE62p) {
    return <> Good</>;
  } else if (totalCADR === floorArea * (ASHRAE62ft + 1) + occupantNumber * ASHRAE62p) {
    return <> Better</>;
  } else {
    return <> Best</>;
  }
}


return (
<div className="hero" id="hero">
<div className="container">
<div className="content">
<div className="card">
<div className="top-navbar" style={{ fontSize: '0.9rem'}}>
    <a href="#ASHRAE" style={{ color: selectedTab === "ASHRAE" ? 'rgb(7,114,185)' : 'inherit' }} onClick={() => setSelectedTab("ASHRAE")}>ASHRAE Standard 241</a>
    <a href="#LANCET" style={{ color: selectedTab === "LANCET" ? 'rgb(7,114,185)' : 'inherit' }} onClick={() => setSelectedTab("LANCET")}>LANCET</a>
    {/*
    <a href="#REHVA" style={{ color: selectedTab === "REHVA" ? 'rgb(7,114,185)' : 'inherit' }} onClick={() => setSelectedTab("REHVA")}>REHVA</a>
    <a href="#Nordic" style={{ color: selectedTab === "Nordic" ? 'rgb(7,114,185)' : 'inherit' }} onClick={() => setSelectedTab("Nordic")}>Nordic Ventilation Group</a>
*/}
<a href="#Target" style={{ color: selectedTab === "Target" ? 'rgb(7,114,185)' : 'inherit' }} onClick={() => setSelectedTab("Target")}>Target Risk</a>
{/*
<a href="#Short" style={{ color: selectedTab === "Short" ? 'rgb(7,114,185)' : 'inherit' }} onClick={() => setSelectedTab("Short")}>Short-range</a>
  */}
</div>

  {selectedTab === "ASHRAE" && ASHRAEInputs()}
  {selectedTab === "LANCET" && LANCETInputs()}
  {selectedTab === "Target" && TargetInputs()}
  {selectedTab === "Short" && ShortInputs()}
  </div>

  <div className="graph-container">
  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  {selectedTab === "ASHRAE" && (
    <>
    <div className="card2">
      <div className={`result-container ${isCompliant ? 'compliant' : 'noncompliant'}`}>
        {isCompliant ? (
          <>
            <span>✓</span>&nbsp;
            Complies with ASHRAE Standard 241 {/*(  ECAᵢ: {(expiratoryActivity === "Unmodulated" ? ASHRAE2 : ASHRAE)} cfm/p )*/}
          </>
        ) : (
          <>
            <span>✗</span>&nbsp;
            Not Complies with ASHRAE Standard 241 {/*( {(expiratoryActivity === "Unmodulated" ? ASHRAE2 : ASHRAE)} cfm/person )*/}
          </>
        )}
      </div>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: isCompliant ? 'green' : '#B22222'
        }}
      >
        Total CADR: {totalCADR} {unitChoice}&emsp;Absolute Risk: 0.03% (3 people)&emsp;Relative Risk: 30%
      </span>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <button
        className={isCompliant ? "fancy-button2" : "fancy-button3"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide Summary: Current Status' : 'Show Summary: Current Status'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showSummary && selectedTab === "ASHRAE" && (

<div>

<span
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '0px',
    marginTop: '5px',
    fontFamily: 'Arial',
    fontSize: '0.9rem',
    color: 'rgb(50,50,50)'
  }}
>
  <div style={{display: 'flex', alignItems: 'center', textSize: '0.9rem'}}>
  <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', textSize: '0.9rem'}}>
    <select
      id="resultGraph"
      value={resultGraph}
      onChange={(e) => setResultGraph(e.target.value)}
      style={{ fontSize: '0.9rem' }}
    >
      <option value="Total Quanta emission rate">
      Total Quanta Emission Rate
      </option>
      <option value="Estimated Infection Risk">
      Estimated Infection Risk
      </option>
      <option value="Estimated Infected People">
      Estimated Infected People
      </option>
      <option value="Reproduction Number">
      Reproduction Number
      </option>
    </select>
  </div>
  </div>
</span>

<span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: '0px',
            fontFamily: 'Arial',
            fontSize: '0.9rem',
            color: 'rgb(50,50,50)'
          }}
        >

     <div>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         [ HVAC ]&emsp;OA: {convertedOutdoorAir} {unitChoice}&emsp;RA: {(convertedSupplyAir - convertedOutdoorAir).toFixed(1)} {unitChoice} ({((supplyAir - outdoorAir) / supplyAir * 100).toFixed(1)}%)&emsp;Filter: {filter*100}%
         <br/>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;UVC Inactivation: {convertedHVACUV}%&emsp;Air Treatment: {convertedHVACTreatment} {unitChoice}
       </div>
       [ In Room ]&emsp;Air Cleaner: {convertedRoomAC} {unitChoice}&emsp;UVC: {convertedRoomUV} cfm&emsp;Air Treatment: {convertedRoomTreatment} {unitChoice} 
       <br/>
       [ Nonengineering ]&emsp;{maskInfector === "0" && maskSus === "0" ? "No Mask" : "Mask On"}
     </div>
   </span>
   </div>
 )}
 </div>
</>
)}

{selectedTab === "LANCET" && (
    <>
    <div className="card2">
    <span style={{color: '#333333'}}>Compliance to Proposed NADR by LANCET </span>
    <table>
    <thead>
      <tr>
        <th style={{padding: '10px'}}>Equivalent Air Change Rate</th>
        <th style={{padding: '10px'}}>Number of Occupants</th>
        <th style={{padding: '10px'}}>Floor Area + Min ASHRAE</th>
        <th style={{padding: '10px'}}>Secondary Attack Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td style={{padding: '10px', color: getLancetText(LANCET_ach) === '✗' ? '#B22222' : 'green'}}> {getLancetText(LANCET_ach)}</td>
  <td style={{padding: '10px', color: getLancetText2(LANCET_occ) === '✗' ? '#B22222' : 'green'}}> {getLancetText2(LANCET_occ)}</td>
  <td style={{padding: '10px', color: getLancetText3(totalCADR) === '✗' ? '#B22222' : 'green'}}> {getLancetText3(totalCADR)}</td>
  <td style={{padding: '10px', color: getLancetText2(LANCET_occ) === '✗' ? '#B22222' : 'green'}}> {getLancetText2(LANCET_occ)}</td>
      </tr>
    </tbody>
  </table>


      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: '#333333'
        }}
      >
        Total NADR: {totalCADR} {unitChoice}&emsp;Absolute Risk: 0.03% (3 people)&emsp;Relative Risk: 30%
      </span>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <button
        className={"fancy-button4"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide Summary: Current Status' : 'Show Summary: Current Status'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showSummary && selectedTab === "LANCET" && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: '0px',
            fontFamily: 'Arial',
            fontSize: '0.9rem',
            color: 'rgb(50,50,50)'
          }}
        >
     <div>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
       [ Ventilation ]&emsp;HVAC OA: {convertedOutdoorAir} {unitChoice}&emsp;RA: {(convertedSupplyAir - convertedOutdoorAir).toFixed(1)} {unitChoice} ({((supplyAir - outdoorAir) / supplyAir * 100).toFixed(1)}%)
       </div>
       [ Filtration ]&emsp;HVAC Filter: {filter*100}%&emsp;Air Cleaner: {convertedRoomAC} {unitChoice}
       <br/>
       [ Disinfection ]&emsp;In-duct GUV Disinfection: {convertedHVACUV} {unitChoice}&emsp;GUV System: {convertedRoomUV} {unitChoice}
       <br/>
       [ Mask ]&emsp;{maskInfector === "0" && maskSus === "0" ? "No Mask" : "Mask On"}
       <br/>
       [ Others ]&emsp;HVAC Air Treatment: {convertedHVACTreatment} {unitChoice}&emsp;In-Room Air Treatment: {convertedRoomTreatment} {unitChoice}
     </div>
   </span>
 )}
 </div>
</>
)}

<br/>

{selectedTab === "LANCET" && (

    <div className="graph-choice2">
      <label htmlFor="graphChoice2" style={{fontSize: '0.9rem'}}> Graph: </label>
      <select
        id="graphChoice2"
        value={graphChoice2}
        onChange={(e) => setGraphChoice2(e.target.value)}
        style={{ fontSize: '0.9rem', marginRight: '20px' }}
      >
        <option value="Equivalent Air Change Rate">
          Equivalent Air Change Rate
        </option>
        <option value="Number of Occupants">
          Number of Occupants
        </option>
        <option value="Floor Area + Min ASHRAE">
          Floor Area + Min ASHRAE
        </option>
        <option value="Secondary Attack Rate">
          Secondary Attack Rate
        </option>

      </select>

      <label htmlFor="unitChoice" style={{ fontSize: '0.9rem'}}>Unit: </label>
<select
id="unitChoice"
value={unitChoice}
onChange={(e) => setUnitChoice(e.target.value)}
style={{ fontSize: '0.9rem', marginRight: '20px' }}
>
<option value="cfm">
cfm
</option>
{/*
<option value="cfm/p">
cfm/p
</option>
<option value="cfm/ft²">
cfm/ft²
</option>
<option value="h⁻¹">
h⁻¹
</option>
*/}
</select>
    </div>

)}

{selectedTab === "ASHRAE" && (

<div className="graph-choice">
  <label htmlFor="graphChoice" style={{fontSize: '0.9rem'}}> Graph: </label>
  <select
    id="graphChoice"
    value={graphChoice}
    onChange={(e) => setGraphChoice(e.target.value)}
    style={{ fontSize: '0.9rem', marginRight: '20px' }}
  >
    <option value="Filter Efficiency vs. Outdoor Air">
      Filter Efficiency vs. Outdoor Air
    </option>
    {/*
    <option value="Return Air vs. Outdoor Air">
      Return Air vs. Outdoor Air
    </option>
    */}
  </select>

  <label htmlFor="unitChoice" style={{ fontSize: '0.9rem'}}>Unit: </label>
<select
id="unitChoice"
value={unitChoice}
onChange={(e) => setUnitChoice(e.target.value)}
style={{ fontSize: '0.9rem', marginRight: '20px' }}
>
<option value="cfm">
cfm
</option>
{/*
<option value="cfm/p">
cfm/p
</option>
<option value="cfm/ft²">
cfm/ft²
</option>
<option value="h⁻¹">
h⁻¹
</option>
*/}
</select>
</div>

)}

    <div className="chart">

      {selectedTab === "ASHRAE" && graphChoice === "Filter Efficiency vs. Outdoor Air" && unitChoice === "cfm" && (
        <ASHRAE1cfmApp selectedSubcategory={selectedSubcategory} 
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
        filter={filter}
        hvacUV={hvacUV} 
        hvacTreatment={hvacTreatment}
        roomTreatment={roomTreatment} 
        roomUV={roomUV} 
        roomAC={roomAC} 
        roomTreatmentQ={roomTreatmentQ} 
        roomUVQ={roomUVQ} 
        roomACQ={roomACQ} 
        maskInfector={maskInfector} 
        maskSus={maskSus}
        ASHRAE={ASHRAE}
        ASHRAE2={ASHRAE2}/>
      )}
      {selectedTab === "ASHRAE" && graphChoice === "Filter Efficiency vs. Outdoor Air" && unitChoice === "cfm/p" && (
        <ASHRAE1App occupantNumber={occupantNumber} floorArea={floorArea} height={height} />
      )}
      {selectedTab === "ASHRAE" && graphChoice === "Filter Efficiency vs. Outdoor Air" && unitChoice === "cfm/ft²" && (
        <ASHRAE1App occupantNumber={occupantNumber} floorArea={floorArea} height={height} />
      )}
      {selectedTab === "ASHRAE" && graphChoice === "Filter Efficiency vs. Outdoor Air" && unitChoice === "h⁻¹" && (
        <ASHRAE1App occupantNumber={occupantNumber} floorArea={floorArea} height={height} />
      )}
      
      {selectedTab === "LANCET" && graphChoice2 === "Equivalent Air Change Rate" && unitChoice === "cfm" && (
        <LANCET1cfmApp selectedSubcategory={selectedSubcategory} 
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
        filter={filter}
        hvacUV={hvacUV} 
        hvacTreatment={hvacTreatment}
        roomTreatment={roomTreatment} 
        roomUV={roomUV} 
        roomAC={roomAC} 
        roomTreatmentQ={roomTreatmentQ} 
        roomUVQ={roomUVQ} 
        roomACQ={roomACQ} 
        maskInfector={maskInfector} 
        maskSus={maskSus}
        ASHRAE={ASHRAE}
        ASHRAE2={ASHRAE2} />
        
      )}

{selectedTab === "LANCET" && graphChoice2 === "Number of Occupants" && unitChoice === "cfm" && (
        <LANCET2cfmApp selectedSubcategory={selectedSubcategory} 
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
        filter={filter}
        hvacUV={hvacUV} 
        hvacTreatment={hvacTreatment}
        roomTreatment={roomTreatment} 
        roomUV={roomUV} 
        roomAC={roomAC} 
        roomTreatmentQ={roomTreatmentQ} 
        roomUVQ={roomUVQ} 
        roomACQ={roomACQ} 
        maskInfector={maskInfector} 
        maskSus={maskSus}
        ASHRAE={ASHRAE}
        ASHRAE2={ASHRAE2} />
      )}

{selectedTab === "LANCET" && graphChoice2 === "Floor Area + Min ASHRAE" && unitChoice === "cfm" && (
        <LANCET3cfmApp selectedSubcategory={selectedSubcategory} 
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
        filter={filter}
        hvacUV={hvacUV} 
        hvacTreatment={hvacTreatment}
        roomTreatment={roomTreatment} 
        roomUV={roomUV} 
        roomAC={roomAC} 
        roomTreatmentQ={roomTreatmentQ} 
        roomUVQ={roomUVQ} 
        roomACQ={roomACQ} 
        maskInfector={maskInfector} 
        maskSus={maskSus}
        ASHRAE={ASHRAE}
        ASHRAE2={ASHRAE2}
        ASHRAE62ft={ASHRAE62ft}
        ASHRAE62p={ASHRAE62p} />
      )}

      {selectedTab === "Target" && (
        <HeatmapD3_3App />
      )}
      
    </div>
    <br/>
    <br/>
    <br/>
    <button onClick={() => { handleSaveClick(); handleAddSimulation2(); }} className="fancy-button" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>
  Save Result to Compare
</button>

  </div>
</div>
</div>
</div>
);
};

export default Hero;