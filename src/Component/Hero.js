import React, { useState, useEffect} from 'react';
import './custom-plot.css'; 
import Plot from 'react-plotly.js';
import * as simpleStats from 'simple-statistics';
import {  ResponsiveContainer, AreaChart, XAxis, YAxis, Area, ReferenceLine, ReferenceArea } from 'recharts';
import { upper, central, lower, ft_m, m_ft } from "../Function/Function";
import './FancyButton.css';
import './RadioButton.css';
import './Hero.css';
import './Results.css';
import ASHRAESApp from './ASHRAESApp.js';
import ASHRAE1cfmApp from './ASHRAE1cfmApp';
import LANCET1cfmApp from './LANCET1cfmApp';
import LANCET2cfmApp from './LANCET2cfmApp';
import LANCET3cfmApp from './LANCET3cfmApp';
import LANCET4cfmApp from './LANCET4cfmApp';
import Target1cfmApp from './Target1cfmApp';

const Hero = ({saveForComparison, setCurrentPage}) => {
  const [graphChoice, setGraphChoice] = useState("Filter efficiency vs. Outdoor air");
  const [graphChoiceT, setGraphChoiceT] = useState("Filter efficiency vs. Outdoor air");
  const [graphChoice2, setGraphChoice2] = useState("Equivalent air change rate");
  const [unitChoice, setUnitChoice] = useState("cfm");
  const [occupancyCategory, setOccupancyCategory] = useState("Commercial");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [occupantNumber, setOccupantNumber] = useState(8);
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
  const [infectorStatus, setInfectorStatus] = useState("Number of infector");
  const [casesPerDay, setCasesPerDay] = useState("100");
  const [infectiousPeriod, setInfectiousPeriod] = useState("7");
  const [unreportedCases, setUnreportedCases] = useState("50");
  const [infectorNumber, setInfectorNumber] = useState("1");
  const [selectedTab, setSelectedTab] = useState("ASHRAES");
  const [ASHRAE, setASHRAE] = useState(30);
  const [ASHRAE62p, setASHRAE62p] = useState(5);
  const [ASHRAE62ft, setASHRAE62ft] = useState(0.06);
  const [showPercentile, setShowPercentile] = useState(false)
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
  const [showSecond, setShowSecond] = useState(false);
  const [secondQuanta, setSecondQuanta] = useState(18.6);
  const [secondBreath, setSecondBreath] = useState(0.49);
  const [showUnit, setShowUnit] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showDistance, setShowDistance] = useState(false)
  const [distance, setDistance] = useState(6)
  const [showTarget, setShowTarget] = useState(false)
  const [targetType, setTargetType] = useState("Individual risk (%)")
  const [target, setTarget] = useState(0.1)
  const [target2, setTarget2] = useState(0.15) 
  const [target3, setTarget3] = useState(1)
  const [target4, setTarget4] = useState(1.5)
  const [target5, setTarget5] = useState(1)
  const [target6, setTarget6] = useState(1.5) 
  const [target7, setTarget7] = useState(1)
  const [target8, setTarget8] = useState(1.5)
  const [percentile, setPercentile] = useState(96);
  const [showValue, setShowValue] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
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
  const [showValuedetail, setShowValuedetail] = useState(false);
  const [showResultdetail, setShowResultdetail] = useState(false);
  const [showACMdetail, setShowACMdetail] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopupValue2, setShowPopupValue2] = useState(false);
  const [showPopupValue, setShowPopupValue] = useState(false);
  const [showPopupResult, setShowPopupResult] = useState(false);
  const [showPopupResult2, setShowPopupResult2] = useState(false);
  const [resting, setResting] = useState(0);
  const [standing, setStanding] = useState(0);
  const [light, setLight] = useState(0);
  const [moderate, setModerate] = useState(0);
  const [heavy, setHeavy] = useState(0);
  const [type111, setType111] = useState("Lognormal");
  const [type222, setType222] = useState("Lognormal");
  const [type333, setType333] = useState("Lognormal");
  const [type444, setType444] = useState("Lognormal");
  const [type555, setType555] = useState("Lognormal");

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

const [typeCv, setTypeCv] = useState("Normal");
const [CVmu, setCVmu] = useState(7);
const [CVsigma, setCVsigma] = useState(0.71);
const [CVmin, setCVmin] = useState(1000);
const [CVmax, setCVmax] = useState(1000);

const [typeV, setTypeV] = useState("Beta");
const [VBmin, setVBmin] = useState(0.0001);
const [VBmax, setVBmax] = useState(0.01);
const [Valpha, setValpha] = useState(5);
const [Vbeta, setVbeta] = useState(2);

const [typek, setTypek] = useState("Uniform");
const [kmin, setkmin] = useState(0.43);
const [kmax, setkmax] = useState(0.65);
const [typeK, setTypeK] = useState("Uniform");
const [Kmin, setKmin] = useState(5);
const [Kmax, setKmax] = useState(15);

const [typeCi, setTypeCi] = useState("Uniform");
const [Cimin, setCimin] = useState(null);
const [Cimax, setCimax] = useState(null);

const [typeInfil, setTypeInfil] = useState("Uniform");
const [typeD, setTypeD] = useState("Lognormal");
const [typeInact, setTypeInact] = useState("Lognormal");
const [infilmin, setInfilmin] = useState(0);
const [infilmax, setInfilmax] = useState(0);
const [dmin, setDmin] = useState(0.42);
const [dmax, setDmax] = useState(0.42);
const [dmu, setDmu] = useState(0.42);
const [dsigma, setDsigma] = useState(0.61);
const [inactmin, setInactmin] = useState(0.63);
const [inactmax, setInactmax] = useState(0.63);
const [inactmu, setInactmu] = useState(0.63);
const [inactsigma, setInactsigma] = useState(0.43);

const handleAddSimulation = () => {
  setCurrentPage('compare'); // Update the currentPage state to 'hero'
  window.scrollTo(0, 0);  // Scroll to the top of the page
};

const handleInputChange = (event) => {
  const newDistance = parseFloat(event.target.value);
  if (!isNaN(newDistance)) {
    setDistance(newDistance);
  }
};


const NORMINV = (probability, mean, stdDev) => {
  return simpleStats.probit(probability) * Number(stdDev) + Number(mean);
};


function betaCDF(x, alpha, beta) {
  function gamma(z) {
      // Approximation of gamma function
      const g = [1.000000000000000174663, 5716.400188274341379136, -14815.30426768413909044,
          14291.49277657478554025, -6348.160217641458813289, 1301.608286058321874105,
          -108.1767053514369634679, 2.605696505611755827729, -0.7423452510201416151527e-2,
          0.5384136432509564062961e-7, -0.4023533141268236372067e-8];
      let sum = g[0];
      for (let i = 1; i < 11; i++) {
          sum += g[i] / (z + i);
      }
      return Math.sqrt(2 * Math.PI) * Math.pow((z + 5.5), (z + 0.5)) * Math.exp(-(z + 5.5)) * sum;
  }
  
  let betacdf = 1.0 / (1.0 + betinc(x, alpha, beta));
  return betacdf;

  function betinc(x, a, b) {
      let A = 0;
      let B = 1;
      let sum = 0;
      let Aold = 0;
      let m = 0;
      
      while (Math.abs((A - Aold) / A) > 0.00001) {
          Aold = A;
          let term = (gamma(a + b) / (gamma(a + m) * gamma(b))) * (Math.pow(x, a + m) * Math.pow(1 - x, b)) / (a + m);
          A += term;
          B += term * m / (a + m);
          sum += term;
          m++;
      }
      return sum * x / (a * B);
  }
}

function betaInv(p, alpha, beta) {
  let a = 0, b = 1, c = 0.5;
  let tolerance = 1.0e-6;

  while (b - a > tolerance) {
      if (betaCDF(c, alpha, beta) < p) {
          a = c;
      } else {
          b = c;
      }
      c = (a + b) / 2;
  }

  return c;
}

function uniform(min, max) {

  return Number(min) + (Number(max) - Number(min)) * Math.random();
 
 }

 function beta(min, max, alpha, beta) {

  return betaInv(Math.random(), alpha, beta) * (max - min) + min;
}

function lognormal(muInput, sigmaInput) {

  const mu = Math.log(muInput ** 2 / Math.sqrt(muInput ** 2 + sigmaInput ** 2));
  const sigma = Math.sqrt(Math.log(sigmaInput ** 2 / muInput ** 2 + 1));

 return Math.exp(NORMINV(Math.random(), mu, sigma));

}


function Vd_lognormal(EAmuInput, EAsigmaInput, DDmuInput, DDsigmaInput) {

  const EAmu = Math.log(Number(EAmuInput) ** 2 / Math.sqrt(Number(EAmuInput) ** 2 + Number(EAsigmaInput) ** 2));
  const EAsigma = Math.sqrt(Math.log(Number(EAsigmaInput) ** 2 / Number(EAmuInput) ** 2 + 1));
  const DDmu = Math.log(Number(DDmuInput) ** 2 / Math.sqrt(Number(DDmuInput) ** 2 + Number(DDsigmaInput) ** 2));
  const DDsigma = Math.sqrt(Math.log(Number(DDsigmaInput) ** 2 / Number(DDmuInput) ** 2 + 1));

  const EA = Math.exp(NORMINV(Math.random(), EAmu, EAsigma))
  const DD = Math.exp(NORMINV(Math.random(), DDmu, DDsigma))

  if (virusType === 'SARS-CoV-2') {
    return EA * Math.pow(DD * Math.pow(10, -6) * beta(2,5,5,2), 3) * Math.PI / 6 * Math.pow(10, 6) / Math.pow(0.01, 3);
  } else {
    return EA * Math.pow(DD * Math.pow(10, -6), 3) * Math.PI / 6 * Math.pow(10, 6) / Math.pow(0.01, 3);
  }

}

function Vd_uniform(EAmin, EAmax, DDmin, DDmax) {


  if (virusType === 'SARS-CoV-2') {
          return (Number(EAmin) + (Number(EAmax) - Number(EAmin)) * Math.random()) * 
          (Math.pow((Number(DDmin) + (Number(DDmax) - Number(DDmin)) * Math.random()) * Math.pow(10, -6) * beta(2,5,5,2) , 3)) * 
          Math.PI / 6 * Math.pow(10, 6) / Math.pow(0.01, 3);
        } else {
          return (Number(EAmin) + (Number(EAmax) - Number(EAmin)) * Math.random()) * 
          (Math.pow((Number(DDmin) + (Number(DDmax) - Number(DDmin)) * Math.random()) * Math.pow(10, -6), 3)) * 
          Math.PI / 6 * Math.pow(10, 6) / Math.pow(0.01, 3);
        }
}


 function Cv_calculation(typeCv, Cvmu, Cvsigma, Cvmin, Cvmax) {

  if (typeCv === "Uniform") {

    return uniform(Cvmin, Cvmax);

  } else {

    return Math.pow(10, NORMINV(Math.random(), Cvmu, Cvsigma));

  }
 }

 function Ci_calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax) {

  if (virusType !== "SARS-CoV-2") {

    return uniform(Cimin, Cimax);

  } else {

    return beta(VBmin, VBmax, Valpha, Vbeta) * uniform(kmin, kmax) / uniform(Kmin, Kmax);

  }
 }


 function Vd_calculation(type1, type2, type3, type4, type5, type6, 
 breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max) {


 let Vd1, Vd2, Vd3, Vd4, Vd5, Vd6; // Declare the variables

if (type1 === "Uniform") {
  Vd1 = Vd_uniform(EA1min, EA1max, DD1min, DD1max)
} else if (type1 === "Lognormal")  {
  Vd1 = Vd_lognormal(EA1mu, EA1sigma, DD1mu, DD1sigma)
} 

if (type2 === "Uniform") {
  Vd2 = Vd_uniform(EA2min, EA2max, DD2min, DD2max)
} else if (type2 === "Lognormal")  {
  Vd2 = Vd_lognormal(EA2mu, EA2sigma, DD2mu, DD2sigma)
} 

if (type3 === "Uniform") {
  Vd3 = Vd_uniform(EA3min, EA3max, DD3min, DD3max);
} else if (type3 === "Lognormal") {
  Vd3 = Vd_lognormal(EA3mu, EA3sigma, DD3mu, DD3sigma);
}

if (type4 === "Uniform") {
  Vd4 = Vd_uniform(EA4min, EA4max, DD4min, DD4max);
} else if (type4 === "Lognormal") {
  Vd4 = Vd_lognormal(EA4mu, EA4sigma, DD4mu, DD4sigma);
} 

if (type5 === "Uniform") {
  Vd5 = Vd_uniform(EA5min, EA5max, DD5min, DD5max);
} else if (type5 === "Lognormal") {
  Vd5 = Vd_lognormal(EA5mu, EA5sigma, DD5mu, DD5sigma);
} 

if (type6 === "Uniform") {
  Vd6 = Vd_uniform(EA6min, EA6max, DD6min, DD6max);
} else if (type6 === "Lognormal") {
  Vd6 = Vd_lognormal(EA6mu, EA6sigma, DD6mu, DD6sigma);
} 

const randomValue = Math.random();

if (randomValue < whispered / 100) {
    return Vd2;
} else if (randomValue < (whispered + voiced) / 100) {
    return Vd3;
} else if (randomValue < (whispered + voiced + coughing) / 100) {
    return Vd4;
} else if (randomValue < (whispered + voiced + coughing + whispering) / 100) { 
    return Vd5;
  } else if (randomValue < (whispered + voiced + coughing + whispering + speaking) / 100) { 
    return Vd6;
} else {
    return Vd1;
   }

}

function BR_calculation(type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max) {

    let BR1, BR2, BR3, BR4, BR5; // Declare the variables

if (type111 === "Uniform") {
  BR1 = uniform(BR1min, BR1max)
} else {
  BR1 = lognormal(BR1mu, BR1sigma)
}

if (type222 === "Uniform") {
  BR2 = uniform(BR2min, BR2max)
} else {
  BR2 = lognormal(BR2mu, BR2sigma)
}


if (type333 === "Uniform") {
  BR3 = uniform(BR3min, BR3max)
} else {
  BR3 = lognormal(BR3mu, BR3sigma)
}


if (type444 === "Uniform") {
  BR4 = uniform(BR4min, BR4max)
} else {
  BR4 = lognormal(BR4mu, BR4sigma)
}

if (type555 === "Uniform") {
  BR5 = uniform(BR5min, BR5max)
} else {
  BR5 = lognormal(BR5mu, BR5sigma)
}

const randomValue = Math.random();

if (randomValue < standing / 100) {
    return BR2;
} else if (randomValue < (standing + light) / 100) {
    return BR3;
} else if (randomValue < (standing + light + moderate) / 100) {
    return BR4;
} else if (randomValue < (standing + light + moderate + heavy) / 100) { 
    return BR5;
} else {
    return BR1;
   }

}

function Breathing_calculation(type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max) {

  const simulations = 1000;
  const results = [];

  for (let i = 0; i < simulations; i++) {
    let BR; // Declare the variables

    BR= BR_calculation(type111, type222, type333, type444, type555, 
      resting, standing, light, moderate, heavy, 
      BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
      BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
      BR5mu, BR5sigma, BR5min, BR5max)

      results.push(BR); 
  }
  return results;
}

function V_calculation(breathing, whispered, voiced, coughing, whispering, speaking, 
   maskInfector) {

 
  let V1, V2, V3, V4, V5, V6, final_velocity; // Declare the variables
 
V1 = 1.5;
 
V2 = (1.5 + 3.9) / 2;

V3 = 3.9;

V4 = 11.7;

V5 = (1.5 + 3.9) / 2;

V6 = 3.9;

 const randomValue = Math.random();
 
 if (randomValue < whispered / 100) {
  final_velocity = V2;
 } else if (randomValue < (whispered + voiced) / 100) {
  final_velocity = V3;
 } else if (randomValue < (whispered + voiced + coughing) / 100) {
  final_velocity = V4;
 } else if (randomValue < (whispered + voiced + coughing + whispering) / 100) { 
  final_velocity = V5;
   } else if (randomValue < (whispered + voiced + coughing + whispering + speaking) / 100) { 
    final_velocity = V6;
 } else {
  final_velocity = V1;
    }

    if (maskInfector > 0) {
      final_velocity = final_velocity/2
    }
 
    return final_velocity;
   }

   function Velocity_calculation(breathing, whispered, voiced, coughing, whispering, speaking, 
    maskInfector) {
 
    const simulations = 1000;
    const results = [];


    for (let i = 0; i < simulations; i++) {
      let V; // Declare the variables

      V = V_calculation(breathing, whispered, voiced, coughing, whispering, speaking, 
        maskInfector)

        results.push(V); 
    }
    return results;
  }


   function ER_calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
    typeCv, CVmu, CVsigma, CVmin, CVmax,
    type111, type222, type333, type444, type555, 
    resting, standing, light, moderate, heavy, 
    BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
    BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
    BR5mu, BR5sigma, BR5min, BR5max,
    type1, type2, type3, type4, type5, type6, 
    breathing, whispered, voiced, coughing, whispering, speaking, 
    EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
    EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
    EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
    EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
    EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
    EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
    maskInfector) {
    const simulations = 10000;
    const results = [];

    for (let i = 0; i < simulations; i++) {
      let Ci, Cv, BR, Vd; // Declare the variables

      Ci = Ci_calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax)
      Cv = Cv_calculation(typeCv, CVmu, CVsigma, CVmin, CVmax)
      BR = BR_calculation(type111, type222, type333, type444, type555,  
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max)
      Vd = Vd_calculation(type1, type2, type3, type4, type5, type6,  
        breathing, whispered, voiced, coughing, whispering, speaking, 
         EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
         EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
         EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
         EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
         EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
         EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max)

      results.push(Ci * Cv * BR * Vd * (1 - maskInfector / 100));  // Generates a random number between 0 (inclusive) and 1 (exclusive)
  }

    return results;
   }

   function Infector_calculation(infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases) {
    const simulations = 10000;
    const results = [];

    for (let sim = 0; sim < simulations; sim++) {
        let Infector = 0;

        if (infectorStatus === "Number of infector") {
            Infector = Number(infectorNumber);
        } else {
            for (let occ = 0; occ < occupantNumber; occ++) {
                const randomValue = Math.random();
                const threshold = (infectiousPeriod * casesPerDay / 100000) / (1 - unreportedCases / 100);

                if (randomValue < threshold) {
                    Infector++;
                }
            }
        }

        results.push(Infector);
    }

    return results;
}

function Infil_uniform(infilmin, infilmax) {

  return Number(infilmin) + (Number(infilmax) - Number(infilmin)) * Math.random();
 
 }

 function D_uniform(dmin, dmax) {

  return Number(dmin) + (Number(dmax) - Number(dmin)) * Math.random();
 
 }

 function D_lognormal(dmuInput, dsigmaInput) {

  const dmu = Math.log(dmuInput ** 2 / Math.sqrt(dmuInput ** 2 + dsigmaInput ** 2));
  const dsigma = Math.sqrt(Math.log(dsigmaInput ** 2 / dmuInput ** 2 + 1));

 return Math.exp(NORMINV(Math.random(), dmu, dsigma));

}

 function Inact_uniform(inactmin, inactmax) {

  return Number(inactmin) + (Number(inactmax) - Number(inactmin)) * Math.random();
 
 }

function Inact_lognormal(inactmuInput, inactsigmaInput) {

  const inactmu = Math.log(inactmuInput ** 2 / Math.sqrt(inactmuInput ** 2 + inactsigmaInput ** 2));
  const inactsigma = Math.sqrt(Math.log(inactsigmaInput ** 2 / inactmuInput ** 2 + 1));

 return Math.exp(NORMINV(Math.random(), inactmu, inactsigma));

}


function natural_calculation(typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma) {

  if (typeInact === "Uniform" && typeD === "Uniform") {

    return Inact_uniform(inactmin, inactmax) + D_uniform(dmin, dmax) + Infil_uniform(infilmin, infilmax);

  } else if (typeInact === "Lognormal" && typeD === "Uniform") {

    return Inact_lognormal(inactmu, inactsigma) + D_uniform(dmin, dmax) + Infil_uniform(infilmin, infilmax);

  } else if (typeInact === "Uniform" && typeD === "Lognormal") {

    return Inact_uniform(inactmin, inactmax) + D_lognormal(dmu, dsigma) + Infil_uniform(infilmin, infilmax);

  } else if (typeInact === "Lognormal" && typeD === "Lognormal") {

    return Inact_lognormal(inactmu, inactsigma) + D_lognormal(dmu, dsigma) + Infil_uniform(infilmin, infilmax);

  }


 }

 

function risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
) {

  const simulations = 10000;
  const volume = floorArea * height * 0.02831685;

  

  const results = {
    TE: [],
    INT: [],
    IR: [],
    AR: [],
    Estimated: [],
    Reproduction: []
  };

  for (let i = 0; i < simulations; i++) {

    let IVRR, Ci, Cv, BR, Vd; // Declare the variables

    IVRR = (outdoorAir + 
      (supplyAir - outdoorAir) * filter + 
      (supplyAir - outdoorAir) * (1 - filter) * hvacUV / 100 +
      hvacTreatment +
      roomUV * roomUVQ +  roomAC * roomACQ +  roomTreatment * roomTreatmentQ) * 1.69901082 / volume +
      natural_calculation(typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma)


    Ci = Ci_calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax)
    Cv = Cv_calculation(typeCv, CVmu, CVsigma, CVmin, CVmax)
    BR = BR_calculation(type111, type222, type333, type444, type555,  
      resting, standing, light, moderate, heavy, 
      BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
      BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
      BR5mu, BR5sigma, BR5min, BR5max)
    Vd = Vd_calculation(type1, type2, type3, type4, type5, type6,  
      breathing, whispered, voiced, coughing, whispering, speaking, 
       EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
       EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
       EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
       EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
       EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
       EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max)

       let Infector = 0;

       if (infectorStatus === "Number of infector") {
           Infector = Number(infectorNumber);
       } else {
           for (let occ = 0; occ < occupantNumber; occ++) {
               const randomValue = Math.random();
               const threshold = (infectiousPeriod * casesPerDay / 100000) / (1 - unreportedCases / 100);

               if (randomValue < threshold) {
                   Infector++;
               }
           }
       }

      let Susceptible = occupantNumber - Infector;
      let Final_Susceptible = 0;

        for (let sus = 0; sus < Susceptible; sus++) {
            const randomValue2 = Math.random();
            const threshold2 = immunityProportion / 100;

            if (randomValue2 > threshold2) {
              Final_Susceptible++;
            }
        }
 
      const Total_Emission = Ci * Cv * BR * Vd * (1 - maskInfector / 100) * Infector
      const IntQuanta = Total_Emission / (IVRR * volume) * (occupiedPeriod / 60 + (Math.exp(-1 * IVRR * occupiedPeriod / 60) - 1) / IVRR)
      const iRisk = (1 - Math.exp(-1 * BR * IntQuanta * (1 - maskSus / 100))) * 100
      const infected = iRisk / 100 * Final_Susceptible
      const reproduction = infected / Infector
      const aRisk = (1 - (1 - iRisk / 100) ** Final_Susceptible) * 100


    results.TE.push(Total_Emission);
    results.INT.push(IntQuanta);
    results.IR.push(iRisk);
    results.AR.push(aRisk); 
    results.Estimated.push(infected);
    results.Reproduction.push(reproduction);
  }

  return results;
}

const feet = Array.from(
  { length: (20 - 0) / 0.01 + 1 },
  (value, index) => 0 + index * 0.01
  );

  const precomputedVelocity = Velocity_calculation(breathing, whispered, voiced, coughing, whispering, speaking, maskInfector).sort((a, b) => a - b);


  const exhale = feet.map(x => ({
    distance: x,
    jet: [
      m_ft(upper(ft_m(x), 20.25, precomputedVelocity[Math.floor((percentile-0.1) * 10)])),
      m_ft(lower(ft_m(x), 20.25, precomputedVelocity[Math.floor((percentile-0.1) * 10)]))
    ]
  }));
  
  let D;
  for (let i = 0; i < exhale.length; i++) {
    if (lower(ft_m(feet[i] ), 20.25, precomputedVelocity[Math.floor((percentile-0.1) * 10)]) === null) {
      D = Math.round(feet[i] * 1000) / 1000;  // Use feet[i] instead of i
      break;
    }
  }

  const DD = parseFloat(D.toFixed(1));

function distance_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma) {

      const Total_Emission = risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
        typeCv, CVmu, CVsigma, CVmin, CVmax,
        type111, type222, type333, type444, type555, 
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max,
        type1, type2, type3, type4, type5, type6, 
        breathing, whispered, voiced, coughing, whispering, speaking, 
        EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
        EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
        EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
        EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
        EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
        EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
        maskInfector, maskSus,
        infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
        floorArea, height, occupiedPeriod, immunityProportion,
        outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
        typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
      ).TE.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)];

      const int = risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
        typeCv, CVmu, CVsigma, CVmin, CVmax,
        type111, type222, type333, type444, type555, 
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max,
        type1, type2, type3, type4, type5, type6, 
        breathing, whispered, voiced, coughing, whispering, speaking, 
        EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
        EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
        EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
        EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
        EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
        EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
        maskInfector, maskSus,
        infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
        floorArea, height, occupiedPeriod, immunityProportion,
        outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
        typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
      ).INT.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)];

      const Breathing = Breathing_calculation(type111, type222, type333, type444, type555,  
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max).sort((a, b) => a - b)[Math.floor((percentile-0.1) * 10)];

      let d_int;

      if (distance < DD) {
        d_int = 1 / (ft_m(distance) * 16) * (Total_Emission / Breathing) * occupiedPeriod/60 + (1 - 1 / (ft_m(distance) * 16)) * int

      } else if (distance >= DD + 3.28) {
        d_int = int 
      } else {
d_int = (1 / (ft_m(DD) * 16) * (Total_Emission / Breathing) * occupiedPeriod/60 + (1 - 1 / (ft_m(DD) * 16)) * int) * (ft_m(DD) + 1 - ft_m(distance)) +
int * (ft_m(distance) - ft_m(DD))

      }

return (1 - Math.exp(-1 * Breathing * d_int)) * 100;

}

  const options = ['Breathing', 'Whispered counting', 'Voiced counting', 'Coughing', 'Whispering', 'Speaking'];
  const options2 = ['Resting', 'Standing', 'Light exercise', 'Moderate exercise', 'Heavy exercise'];

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
      case "Whispered counting":
        setWhispered(value);
        break;
      case "Voiced counting":
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
      case "Light exercise":
        setLight(value);
        break;
      case "Moderate exercise":
        setModerate(value);
        break;
      case "Heavy exercise":
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
    compareElement.scrollIntoView({ behavior: 'smooth' });
  };


  const handleSaveClick = (event) => {
    // Initialize the object with all other fields
    saveForComparison({
      st: selectedTabText(),
      virusType: (selectedTab === "ASHRAES" || selectedTab === "LANCET") ? "n/a" : (selectedTab === "ASHRAE") ? "SARS-CoV-2" : virusType,
      occupancyCategory,
      selectedSubcategory,
      floorArea,
      height,
      occupantNumber,
      occupiedPeriod: (selectedTab === "ASHRAES") ? "n/a" : occupiedPeriod,
      supplyAir,
      outdoorAir,
      filter,
      hvacUV,
      hvacTreatment: (selectedTab === "LANCET") ? "n/a" : hvacTreatment,
      roomAC: roomAC * roomACQ,
      roomUV: roomUV * roomUVQ,
      roomTreatment: (selectedTab === "LANCET") ? "n/a" : roomTreatment * roomTreatmentQ,
      maskInfector,
      maskSus,
      totalCADR: outdoorAir + (supplyAir - outdoorAir) * filter +
      (supplyAir-outdoorAir) * (1 - filter) * hvacUV / 100 +
      hvacTreatment +
      roomUV * roomUVQ + roomAC * roomACQ + roomTreatment * roomTreatmentQ,
      ASHRAE: isCompliant ? "V" : "X",
      LANCET1: getLancetText(LANCET_ach),
      LANCET2: getLancetText2(LANCET_occ),
      LANCET3: getLancetText3(totalCADR),
      LANCET4: getLancetText4(totalCADR),
      IR: (selectedTab === "ASHRAES" || selectedTab ==="LANCET") ? "n/a" :(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
        typeCv, CVmu, CVsigma, CVmin, CVmax,
        type111, type222, type333, type444, type555, 
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max,
        type1, type2, type3, type4, type5, type6, 
        breathing, whispered, voiced, coughing, whispering, speaking, 
        EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
        EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
        EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
        EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
        EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
        EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
        maskInfector, maskSus,
        infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
        floorArea, height, occupiedPeriod, immunityProportion,
        outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
        typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
      ).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1),
      AR: (selectedTab === "ASHRAES"|| selectedTab ==="LANCET") ? "n/a" :(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
        typeCv, CVmu, CVsigma, CVmin, CVmax,
        type111, type222, type333, type444, type555, 
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max,
        type1, type2, type3, type4, type5, type6, 
        breathing, whispered, voiced, coughing, whispering, speaking, 
        EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
        EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
        EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
        EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
        EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
        EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
        maskInfector, maskSus,
        infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
        floorArea, height, occupiedPeriod, immunityProportion,
        outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
        typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
      ).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1),
      E: (selectedTab === "ASHRAES"|| selectedTab ==="LANCET") ? "n/a" :(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
        typeCv, CVmu, CVsigma, CVmin, CVmax,
        type111, type222, type333, type444, type555, 
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max,
        type1, type2, type3, type4, type5, type6, 
        breathing, whispered, voiced, coughing, whispering, speaking, 
        EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
        EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
        EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
        EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
        EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
        EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
        maskInfector, maskSus,
        infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
        floorArea, height, occupiedPeriod, immunityProportion,
        outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
        typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
      ).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1),
      R: (selectedTab === "ASHRAES"|| selectedTab ==="LANCET") ? "n/a" :(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
        typeCv, CVmu, CVsigma, CVmin, CVmax,
        type111, type222, type333, type444, type555, 
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max,
        type1, type2, type3, type4, type5, type6, 
        breathing, whispered, voiced, coughing, whispering, speaking, 
        EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
        EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
        EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
        EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
        EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
        EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
        maskInfector, maskSus,
        infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
        floorArea, height, occupiedPeriod, immunityProportion,
        outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
        typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
      ).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1),
      drisk: selectedTab === "Short"? (distance_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
        typeCv, CVmu, CVsigma, CVmin, CVmax,
        type111, type222, type333, type444, type555, 
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max,
        type1, type2, type3, type4, type5, type6, 
        breathing, whispered, voiced, coughing, whispering, speaking, 
        EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
        EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
        EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
        EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
        EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
        EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
        maskInfector, maskSus,
        infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
        floorArea, height, occupiedPeriod, immunityProportion,
        outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
        typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma)).toFixed(1) : "n/a",
      distance: selectedTab === "Short"? distance : "n/a"
    });
  };
  


  const subcategoriesOptions = {
    "Correctional": ["Cell", "Dayroom"],
    "Commercial": ["Food and beverage facilities", "Gym", "Office", "Retail", "Transportation waiting"],
    "Educational": ["Classroom", "Lecture hall"],
    "Industrial": ["Manufacturing", "Sorting, packing, light assembly", "Warehouse"],
    "Healthcare": ["Exam room", "Group treatment area", "Patient room", "Resident room", "Waiting room"],
    "Public": ["Auditorium", "Place of religious worship", "Museum", "Convention", "Spectator area", "Lobbies"],
    "Residential": ["Common space", "Dwelling unit"]
  };

  const [subcategories, setSubcategories] = useState(subcategoriesOptions[occupancyCategory]);

  const ASHRAEValues = {
    "Cell": 30,
    "Dayroom": 40,
    "Food and beverage facilities": 60,
    "Gym": 80,
    "Office": 30,
    "Retail": 40,
    "Transportation waiting": 60,
    "Classroom": 40,
    "Lecture hall": 50,
    "Manufacturing": 50,
    "Sorting, packing, light assembly": 20,
    "Warehouse": 20, 
    "Exam room": 40,
    "Group treatment area": 70,
    "Patient room": 70,
    "Resident room": 50,
    "Waiting room": 90,
    "Auditorium": 50,
    "Place of religious worship": 50,
    "Museum": 60,
    "Convention": 60,
    "Spectator area": 50,
    "Lobbies": 50,
    "Common space": 50,
    "Dwelling unit": 30


  };

  const ASHRAEValuesp = {
    "Cell": 5,
    "Dayroom": 5,
    "Food and beverage facilities": 7.5,
    "Gym": 20,
    "Office": 5,
    "Retail": 7.5,
    "Transportation waiting": 7.5,
    "Classroom": 10,
    "Lecture hall": 7.5,
    "Manufacturing": 10,
    "Sorting, packing, light assembly": 7.5,
    "Warehouse": 10, 
    "Exam room": 0,
    "Group treatment area": 0,
    "Patient room": 0,
    "Resident room": 0,
    "Waiting room": 0,
    "Auditorium": 5,
    "Place of religious worship": 5,
    "Museum": 7.5,
    "Convention": 7.5,
    "Spectator area": 7.5,
    "Lobbies": 5,
    "Common space": 0,
    "Dwelling unit": 5
  };

  const ASHRAEValuesft = {
    "Cell": 0.12,
    "Dayroom": 0.06,
    "Food and beverage facilities": 0.18,
    "Gym": 0.18,
    "Office": 0.06,
    "Retail": 0.12,
    "Transportation waiting": 0.06,
    "Classroom": 0.12,
    "Lecture hall": 0.06,
    "Manufacturing": 0.18,
    "Sorting, packing, light assembly": 0.12,
    "Warehouse": 0.06, 
    "Exam Room": 2*height/60,
    "Group treatment area": 2*height/60,
    "Patient room": 2*height/60,
    "Resident room":2*height/60,
    "Waiting room": 2*height/60,
    "Auditorium": 0.06,
    "Place of religious worship": 0.06,
    "Museum": 0.06,
    "Convention": 0.06,
    "Spectator area": 0.06,
    "Lobbies": 0.06,
    "Common space": 0.06,
    "Dwelling unit": 0.06

  };
  
  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
    setASHRAE(ASHRAEValues[event.target.value]);
    setASHRAE62p(ASHRAEValuesp[event.target.value]);
    setASHRAE62ft(ASHRAEValuesft[event.target.value]);
    const newOutdoorAir = (floorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
    setOutdoorAir(newOutdoorAir);
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
        defaultSubcategory = "Exam room";
        break;
      case "Public":
        defaultSubcategory = "Auditorium";
        break;
      case "Residential":
        defaultSubcategory = "Common space";
        break;
      default:
        defaultSubcategory = subcategoriesOptions[occupancyCategory][0];
    }
    setSelectedSubcategory(defaultSubcategory);
    setASHRAE(ASHRAEValues[defaultSubcategory]);
    setASHRAE62p(ASHRAEValuesp[defaultSubcategory]);
    setASHRAE62ft(ASHRAEValuesft[defaultSubcategory]);
  }, [occupancyCategory]);

  {/*
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
*/}
const ASHRAESInputs = () => (
  <div className="input-container">
    <br/>

    <button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowBuilding(!showBuilding)}
    >
        {showBuilding ? 'Building and occupancy' : 'Building and occupancy'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>


<br/>

{showBuilding && (
<div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
<label htmlFor="occupancyCategory" style={{ fontSize: '0.9rem'}}>Occupancy category:</label>
<select id="occupancyCategory" 
        value={occupancyCategory} 
        onChange={(e) => {
          setOccupancyCategory(e.target.value);
          const newOutdoorAir = (floorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
          setOutdoorAir(newOutdoorAir);
        }}
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Correctional">Correctional facilities</option>
  <option value="Commercial">Commercial / retail</option>
  <option value="Educational">Educational facilities</option>
  <option value="Industrial">Industrial</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Public">Public assembly / sports & entertainment</option>
  <option value="Residential">Residential</option>
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
    <label htmlFor="floorArea" style={{ fontSize: '0.9rem' }}>Floor area (sqft): </label>
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
min="20"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
/>
      <label htmlFor="height" style={{ fontSize: '0.9rem'}}>Height (ft): </label>
      <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px',}} />
    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="occupantNumber" style={{ fontSize: '0.9rem'}}>Occupant number: </label>
      <input type="number" id="occupantNumber" value={occupantNumber} 
      min="1"
      onChange={event => {
        let newOccupantNumber = event.target.value;
        if (newOccupantNumber < 1) {
          newOccupantNumber = 1;
        }
        setOccupantNumber(newOccupantNumber);
        const newOutdoorAir = Math.round((floorArea * ASHRAE62ft + newOccupantNumber * ASHRAE62p) / 0.75 * 100) / 100;
        setOutdoorAir(newOutdoorAir);
      }}
      style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
    </div>

    
    <br/>

    

    </div>
)}

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowHVAC(!showHVAC)}
    >
      {showHVAC ? 'Engineering controls - HVAC' : 'Engineering controls - HVAC'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showHVAC && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
<br/>
<label htmlFor="supplyAir" style={{ fontSize: '0.9rem' }}>Supply air (cfm): </label>
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

<label htmlFor="outdoorAir" style={{ fontSize: '0.9rem' }}>Outdoor air (cfm): </label>
<input
type="number"
id="outdoorAir"
value={outdoorAir}
onChange={event => setOutdoorAir(Number(event.target.value))}
min="0"
max={supplyAir}
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>
</div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>

    <label htmlFor="merv" style={{ fontSize: '0.9rem'}}>Filter rating:</label>
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

<label htmlFor="hvacUV" style={{ fontSize: '0.9rem'}}>UVC inactivation (%): </label>
      <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="hvacTreatment" style={{ fontSize: '0.9rem'}}>Air treatment ECA (cfm): </label>
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
{showInRoom ? 'Engineering controls - in room' : 'Engineering controls - in room'}
</button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInRoom && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomACQ" style={{ fontSize: '0.9rem'}}>Air cleaner</label>&nbsp;&nbsp;

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

<label htmlFor="roomAC" style={{ fontSize: '0.9rem'}}>ECA (cfm): </label>
      <input type="number" id="roomAC" value={roomAC} onChange={event => setRoomAC(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomUVQ" style={{ fontSize: '0.9rem'}}>In-room UV</label>&nbsp;&nbsp;

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

<label htmlFor="roomUV" style={{ fontSize: '0.9rem'}}>ECA (cfm): </label>
      <input type="number" id="roomUV" value={roomUV} onChange={event => setRoomUV(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomTreatmentQ" style={{ fontSize: '0.9rem', marginRight: '5px' }}>
  Air treatment device
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
  ECA (cfm):
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

</div>


);

  const ASHRAEInputs = () => (
    <div className="input-container">
      <br/>

      <button
      className="fancy-button5"
      style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
      onClick={() => setShowPercentile(!showPercentile)}
    >
              {showPercentile ? 'Percentile' : 'Percentile'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <br/>

    {showPercentile && (
 <div>

 <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
 
 <label htmlFor="targetType" style={{ fontSize: '0.9rem'}}>Percentile of the result: </label>
 <input 
    type="number" 
    value={percentile} 
    onChange={event => setPercentile(event.target.value)} 
    min="0" 
    max="100" 
    step="1" 
    style={{
      borderRadius: '5px', 
      border: '1px solid #ccc', 
      padding: '3px 10px', 
      fontFamily: 'Arial', 
      fontSize: '0.9rem',
      width: '60px'
    }} 
  />
  <label style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', marginLeft: '5px' }}>%</label>
 
 </div>

 <br/>
 
 </div>

    )}

      <button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowBuilding(!showBuilding)}
      >
        {showBuilding ? 'Building and occupancy' : 'Building and occupancy'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>


<br/>

{showBuilding && (
  <div>

<div style={{ display: 'flex', justifyContent: 'center'}}>
  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px'}}
    onClick={() => setShowPopupValue2(true)}
  >
    {showValuedetail ? 'Default values' : 'Default values'}
  </button>
  </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  {showPopupValue2 && (
  <div className="popupS">
    <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Default values</label>
    <br/>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>

        <label style={{ fontSize: '0.8rem' }}>Infiltration rate, h⁻¹</label>

    </div> &emsp;&emsp;
    <label style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeInfil} onChange={event => setTypeInfil(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px', width: '90px'  }}>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>


{typeInfil === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="infilmin" value={infilmin} onChange={event => setInfilmin(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="infilmax" value={infilmax} onChange={event => setInfilmax(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}

    </div>

</div>
        </div>


        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Deposition rate, h⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeD" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeD} onChange={event => setTypeD(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px'}}>
        <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        {typeD === 'Lognormal' && (

<div>
<label style={{ fontSize: '0.8rem' }}>µ: </label> 
<input type="number" id="dmu" value={dmu} onChange={event => setDmu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
<label style={{ fontSize: '0.8rem' }}>σ: </label> 
<input type="number" id="dsigma" value={dsigma} onChange={event => setDsigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
</div>

        )}
        
{typeD === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="dmin" value={dmin} onChange={event => setDmin(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="dmax" value={dmax} onChange={event => setDmax(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>

        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Inactivation rate, h⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeInact" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeInact} onChange={event => setTypeInact(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>
        
        {typeInact === 'Lognormal' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="inactmu" value={inactmu} onChange={event => setInactmu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="inactsigma" value={inactsigma} onChange={event => setInactsigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

{typeInact === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="inactmin" value={inactmin} onChange={event => setInactmin(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="inactmax" value={inactmax} onChange={event => setInactmax(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

        </div>



        <button onClick={() => setShowPopupValue2(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
  <label htmlFor="occupancyCategory" style={{ fontSize: '0.9rem'}}>Occupancy category:</label>
  <select id="occupancyCategory" 
          value={occupancyCategory} 
          onChange={(e) => {
            setOccupancyCategory(e.target.value);
            const newOutdoorAir = (floorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
            setOutdoorAir(newOutdoorAir);
          }}
          style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Correctional">Correctional facilities</option>
  <option value="Commercial">Commercial / retail</option>
  <option value="Educational">Educational facilities</option>
  <option value="Industrial">Industrial</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Public">Public assembly / sports & entertainment</option>
  <option value="Residential">Residential</option>
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
      <label htmlFor="floorArea" style={{ fontSize: '0.9rem' }}>Floor area (sqft): </label>
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
  min="20"
  max="100000"
  step="1"
  style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
/>
        <label htmlFor="height" style={{ fontSize: '0.9rem'}}>Height (ft): </label>
        <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px',}} />
      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="occupantNumber" style={{ fontSize: '0.9rem'}}>Occupant number: </label>
        <input type="number" id="occupantNumber" value={occupantNumber} 
        min="1"
        onChange={event => {
          let newOccupantNumber = event.target.value;
          if (newOccupantNumber < 1) {
            newOccupantNumber = 1;
          }
          setOccupantNumber(newOccupantNumber);
          const newOutdoorAir = Math.round((floorArea * ASHRAE62ft + newOccupantNumber * ASHRAE62p) / 0.75 * 100) / 100;
          setOutdoorAir(newOutdoorAir);
        }}
        style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
        <label htmlFor="occupiedPeriod" style={{ fontSize: '0.9rem'}}>Occupied period (min): </label>
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
        {showQuanta ? 'Quanta emission rate' : 'Quanta emission rate'}
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
      {showValuedetail ? 'Default values' : 'Default values'}
  </button>&emsp;


  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px', color: 'rgb(70, 140, 190)'}}
    onClick={() => setShowPopupResult(true)}
  >
    {showResultdetail ? 'Calculated result' : 'Calculated result'}
  </button>
</div>
<span style={{ lineHeight: '0.5' }}>&nbsp;</span>



{(virusType === "SARS-CoV-2") && showPopupValue && (
  <div className="popupS">
    <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Default values</label>
    <br/>
    <label style={{ fontSize: '0.9rem', display: 'block', textAlign: 'center'}}>ER = c<sub>v</sub> ∙ <frac>k/K</frac> ∙ BR ∙ V<sub>d</sub></label>
    <br/>


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem' }}>Viral load in sputum</label>
        {typeCv === 'Normal' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>log₁₀(c<sub>v</sub>) , RNA copies ∙ mL⁻¹</label>
        </div>)}
        {typeCv === 'Uniform' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>c<sub>v</sub> , ×10⁶ RNA copies ∙ mL⁻¹</label>
        </div>)}
    </div> &emsp;&emsp;
    <label htmlFor="typeCv" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeCv} onChange={event => setTypeCv(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Normal">Normal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>

    {typeCv === 'Normal' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="CVmu" value={CVmu} onChange={event => setCVmu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="CVsigma" value={CVsigma} onChange={event => setCVsigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}

{typeCv === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="CVmin" value={CVmin} onChange={event => setCVmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="CVmax" value={CVmax} onChange={event => setCVmax(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}

    </div>

</div>
        </div>


        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Viable fraction</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>v , virion ∙ RNA copies⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeV" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeV} onChange={event => setTypeV(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Beta">Beta</option>
        </select>

        {typeV === 'Beta' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="VBmin" value={VBmin} onChange={event => setVBmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="VBmax" value={VBmax} onChange={event => setVBmax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

    <div style={{ display: 'flex', alignItems: 'center' }}>
<label style={{ fontSize: '0.8rem' }}>α: </label> 
<input type="number" id="Valpha" value={Valpha} onChange={event => setValpha(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;&nbsp;&nbsp;&nbsp;
<label style={{ fontSize: '0.8rem' }}>β: </label> 
<input type="number" id="Vbeta" value={Vbeta} onChange={event => setVbeta(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
</div>
</div>
        )}

        </div>

        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Respiratory tract</label>
        <label style={{ fontSize: '0.8rem' }}>absorption fraction</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>k</label>
    </div> &emsp;&emsp;
    <label htmlFor="typek" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typek} onChange={event => setTypeCi(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Uniform">Uniform</option>
        </select>

           
{typeCi === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="kmin" value={kmin} onChange={event => setkmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="kmax" value={kmax} onChange={event => setkmax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>
        

        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Dose constant</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>K , PFU ∙ quanta⁻¹</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>(1 virion = 1 PFU)</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeK" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeK} onChange={event => setTypeK(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Uniform">Uniform</option>
        </select>

        
{typeCi === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="Kmin" value={Kmin} onChange={event => setKmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="Kmax" value={Kmax} onChange={event => setKmax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>

   <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>BR , m³ ∙ h⁻¹</label>
    </div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on physical activity</label>
    </div>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem'}}>Droplet volume concentration</label>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>V<sub>d</sub> , mL ∙ m⁻³</label>
    </div>&emsp;&emsp;&nbsp;&nbsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on expiratory activity</label>
    </div>

    <button onClick={() => setShowPopupValue(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


{(virusType !== "SARS-CoV-2") && showPopupValue && (
  <div className="popupS">
    <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Default values</label>
    <br/>
    <label style={{ fontSize: '0.9rem', display: 'block', textAlign: 'center'}}>ER = c<sub>v</sub> ∙ c<sub>i</sub> ∙ BR ∙ V<sub>d</sub></label>
    <br/>


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem' }}>Viral load in sputum</label>
        {typeCv === 'Normal' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>log₁₀(c<sub>v</sub>) , RNA copies ∙ mL⁻¹</label>
        </div>)}
        {typeCv === 'Uniform' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>c<sub>v</sub> , ×10⁶ RNA copies ∙ mL⁻¹</label>
        </div>)}
    </div> &emsp;&emsp;
    <label htmlFor="typeCv" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeCv} onChange={event => setTypeCv(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Normal">Normal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>

    {typeCv === 'Normal' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="CVmu" value={CVmu} onChange={event => setCVmu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="CVsigma" value={CVsigma} onChange={event => setCVsigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}

{typeCv === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="CVmin" value={CVmin} onChange={event => setCVmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="CVmax" value={CVmax} onChange={event => setCVmax(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}

    </div>

</div>
        </div>


        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Ratio of an infectious quantum</label>
        <label style={{ fontSize: '0.8rem' }}>to infectious dose</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>c<sub>i</sub> , quanta ∙ RNA copies⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeCi" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeCi} onChange={event => setTypeCi(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Uniform">Uniform</option>
        </select>
        
{typeCi === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="Cimin" value={Cimin} onChange={event => setCimin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="Cimax" value={Cimax} onChange={event => setCimax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>

        
        

   <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>BR , m³ ∙ h⁻¹</label>
    </div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on physical activity</label>
    </div>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem'}}>Droplet volume Concentration</label>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>V<sub>d</sub> , mL ∙ m⁻³</label>
    </div>&emsp;&emsp;&nbsp;&nbsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on expiratory activity</label>
    </div>
    

    <button onClick={() => setShowPopupValue(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}

{showPopupResult && (
        <div className="popupR">
          <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)', fontFamily: 'Arial' }}>
            Quanta emission rates / person
          </label>
<div style={{ display: 'flex', justifyContent: 'center' }}>

          <Plot
  data={[
    {
      y: ER_calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
        typeCv, CVmu, CVsigma, CVmin, CVmax,
        type111, type222, type333, type444, type555, 
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max,
        type1, type2, type3, type4, type5, type6, 
        breathing, whispered, voiced, coughing, whispering, speaking, 
        EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
        EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
        EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
        EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
        EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
        EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
        maskInfector),
      x: 'quanta/h',
      type: 'box',
      boxpoints: 'outliers',
      orientation: 'v',
      showlegend: false, // Hide the legend
      name: 'quanta/h', // Set the name to an empty string to remove the "trace 0" label
    },
  ]}
  config={{ displayModeBar: false }}
  layout={{
    width: 300,
    height: 600,
    margin: {
      t: 30,
      l: 30,
      r: 30,
      b: 50,
    },
    fontFamily: 'Arial',
    hovermode: 'x',
    xaxis: {
      zeroline: false, // Remove the line at y=0
      showline: false, // Remove the axis line
      showticklabels: false, // Remove the tick labels
      automargin: true,
    },
    yaxis: {
      title: 'Quanta emission rate (quanta/h)',  // Added this line
      zeroline: false, // Remove the line at x=0
      automargin: true,
      hoverformat: '.1f', // Display the hovered value with one decimal place in the tooltip
      tickformat: '.1f', // Set the format for the x-axis tick labels
    },
    hoverlabel: {
      bgcolor: 'rgba(7,114,185, 0.1)',
      bordercolor: 'transparent', // Set the border color of the hovered value
      font: { size: 14, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
      yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
    },
  }}
/>
</div>

{
    maskInfector > 0 &&  (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>
          <br/>
          The infector is wearing a mask, and it has been applied.
        </div>
    )}
          <button
            onClick={() => setShowPopupResult(false)}
            className="remove-button"
            style={{
              fontSize: '14px',
              padding: '6px 10px',
              height: '40px',
              display: 'block',
              margin: '0 auto',
              position: 'absolute',
              top: '0px',
              right: '2px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'normal',
            }}
          >
            <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
          </button>
        </div>
      )}


<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{showPopup2 && (
  <div className="popup2">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Quanta emission rates</label>
    <br/>


    {selectedOptions.includes("Breathing") && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Breathing</label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(breathing).toFixed(1)} % </label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type1} onChange={event => setType1(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label> &emsp;
    {type1 === 'Lognormal' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="EA1mu" value={EA1mu} onChange={event => setEA1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="EA1sigma" value={EA1sigma} onChange={event => setEA1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
   </div>
    )}

{type1 === 'Uniform' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="EA1min" value={EA1min} onChange={event => setEA1min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="EA1max" value={EA1max} onChange={event => setEA1max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label> &emsp;

    {type1 === 'Lognormal' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="DD1mu" value={DD1mu} onChange={event => setDD1mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="DD1sigma" value={DD1sigma} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
  </div>
  )}

{type1 === 'Uniform' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="DD1min" value={DD1min} onChange={event => setDD1min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="DD1max" value={DD1max} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}


{selectedOptions.includes("Whispered counting") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>Whispered</label>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>counting</label>
    </div> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(whispered).toFixed(1)} % </label> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type2} onChange={event => setType2(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label> &emsp;
            {type2 === 'Lognormal' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA2mu" value={EA2mu} onChange={event => setEA2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA2sigma" value={EA2sigma} onChange={event => setEA2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 === 'Uniform' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA2min" value={EA2min} onChange={event => setEA2min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA2max" value={EA2max} onChange={event => setEA2max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label> &emsp;
            {type2 === 'Lognormal' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD2mu" value={DD2mu} onChange={event => setDD2mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD2sigma" value={DD2sigma} onChange={event => setDD2sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 === 'Uniform' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD2min" value={DD2min} onChange={event => setDD2min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD2max" value={DD2max} onChange={event => setDD2max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}

 {selectedOptions.includes("Voiced counting") && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>Voiced</label>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>counting</label>
    </div> &emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(voiced).toFixed(1)} % </label>&emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type3} onChange={event => setType3(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type3 === 'Lognormal' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA3mu" value={EA3mu} onChange={event => setEA3mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA3sigma" value={EA3sigma} onChange={event => setEA3sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 === 'Uniform' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA3min" value={EA3min} onChange={event => setEA3min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA3max" value={EA3max} onChange={event => setEA3max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type3 === 'Lognormal' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD3mu" value={DD3mu} onChange={event => setDD3mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD3sigma" value={DD3sigma} onChange={event => setDD3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 === 'Uniform' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD3min" value={DD3min} onChange={event => setDD3min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD3max" value={DD3max} onChange={event => setDD3max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
 )}

{selectedOptions.includes("Coughing")&& (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Coughing</label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(coughing).toFixed(1)} % </label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type4} onChange={event => setType4(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type4 === 'Lognormal' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA4mu" value={EA4mu} onChange={event => setEA4mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA4sigma" value={EA4sigma} onChange={event => setEA4sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 === 'Uniform' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA4min" value={EA4min} onChange={event => setEA4min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA4max" value={EA4max} onChange={event => setEA4max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70x', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type4 === 'Lognormal' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD4mu" value={DD4mu} onChange={event => setDD4mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD4sigma" value={DD4sigma} onChange={event => setDD4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 === 'Uniform' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD4min" value={DD4min} onChange={event => setDD4min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD4max" value={DD4max} onChange={event => setDD4max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>

)}

{selectedOptions.includes("Whispering")&& (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering</label>&emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(whispering).toFixed(1)} % </label> &emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type5} onChange={event => setType5(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type5 === 'Lognormal' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA5mu" value={EA5mu} onChange={event => setEA5mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA5sigma" value={EA5sigma} onChange={event => setEA5sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 === 'Uniform' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA5min" value={EA5min} onChange={event => setEA5min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA5max" value={EA5max} onChange={event => setEA5max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type5 === 'Lognormal' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD5mu" value={DD5mu} onChange={event => setDD5mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD5sigma" value={DD5sigma} onChange={event => setDD5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 === 'Uniform' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD5min" value={DD5min} onChange={event => setDD5min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD5max" value={DD5max} onChange={event => setDD5max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}


{selectedOptions.includes("Speaking") && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Speaking</label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(speaking).toFixed(1)} % </label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type6} onChange={event => setType6(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type6 === 'Lognormal' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA6mu" value={EA6mu} onChange={event => setEA6mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70x', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA6sigma" value={EA6sigma} onChange={event => setEA6sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 === 'Uniform' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA6min" value={EA6min} onChange={event => setEA6min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA6max" value={EA6max} onChange={event => setEA6max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type6 ==='Lognormal' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD6mu" value={DD6mu} onChange={event => setDD6mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD6sigma" value={DD6sigma} onChange={event => setDD6sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 === 'Uniform' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD6min" value={DD6min} onChange={event => setDD6min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD6max" value={DD6max} onChange={event => setDD6max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
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
           Please select least one expiratory activity
           <br/>
        </div>
    )
}

{
    Number(breathing) + Number(whispered) + Number(voiced) + Number(coughing) + Number(whispering) + Number(speaking) < 99.9999 &&  selectedOptions.length !== 0 &&  (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>
          <br/>
           The total percentage does not equal 100%. The remaining percentage will be considered as the "breathing" status.
        </div>
    )}

<br/>

    <button onClick={() => setShowPopup2(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}

</div>

<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center' }}>
<label htmlFor="virusType" style={{ fontSize: '0.9rem'}}>Virus type: </label>
<select value={virusType} onChange={event => setVirusType(event.target.value)} style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
  <option value="SARS-CoV-2">SARS-CoV-2</option>
      {/*
  <option value="Influenza A">Influenza A</option>
    */}

</select>
</div>
<br/>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
  <label htmlFor="expiratoryActivity" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex' }}>Expiratory activity</label>
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

{selectedOptions.includes("Whispered counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>Whispered</label>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>counting (%)</label>
    </div>
    <input type="number" id="whispered" value={whispered} onChange={event => setWhispered(event.target.value)} min="0" max={100 - breathing - voiced - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions.includes("Voiced counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>Voiced</label>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>counting (%)</label>
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


{showPopup3 && (
  <div className="popup22">
    <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Breathing rates (m ∙ h⁻¹)</label>
    <br/>


    {selectedOptions2.includes("Resting") && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Resting</label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(resting).toFixed(1)} % </label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type111} onChange={event => setType111(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type111 === 'Lognormal' && (
      <div>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR1mu" value={BR1mu} onChange={event => setBR1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR1sigma" value={BR1sigma} onChange={event => setBR1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type111 === 'Uniform' && (
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
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(standing).toFixed(1)} % </label> &emsp;
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type222} onChange={event => setType222(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>

    {type222 === 'Lognormal' && (
      <div>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR2mu" value={BR2mu} onChange={event => setBR2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR2sigma" value={BR2sigma} onChange={event => setBR2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type222 === 'Uniform' && (
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


{selectedOptions2.includes("Light exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>Light</label>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>exercise</label>
    </div> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(light).toFixed(1)} % </label> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type333} onChange={event => setType333(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {type333 === 'Lognormal' && (
            <div>
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR3mu" value={BR3mu} onChange={event => setBR3mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR3sigma" value={BR3sigma} onChange={event => setBR3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type333 === 'Uniform' && (
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


{selectedOptions2.includes("Moderate exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>Moderate</label>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>exercise</label>
    </div> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(moderate).toFixed(1)} % </label> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type444} onChange={event => setType444(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {type444 === 'Lognormal' && (
            <div>
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR4mu" value={BR4mu} onChange={event => setBR4mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR4sigma" value={BR4sigma} onChange={event => setBR4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type444 === 'Uniform' && (
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


{selectedOptions2.includes("Heavy exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>Heavy</label>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>exercise</label>
    </div> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(heavy).toFixed(1)} % </label> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type555} onChange={event => setType555(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {type555 === 'Lognormal' && (
            <div>
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR5mu" value={BR5mu} onChange={event => setBR5mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR5sigma" value={BR5sigma} onChange={event => setBR5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type555 === 'Uniform' && (
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
           Please select least one physical activity
        </div>
    )
}

{
    Number(resting) + Number(standing) + Number(light) + Number(moderate) + Number(heavy) < 99.9999 && selectedOptions2.length !== 0 && (
      
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>

                <br/> 
           The total percentage does not equal 100%. The remaining percentage will be considered as the "resting" status.
        </div>
    )}

<br/>

    <button onClick={() => setShowPopup3(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px', marginTop: '20px'}}>
      <label htmlFor="physicalActivity" style={{ fontSize: '0.9rem',  justifyContent: 'center', display: 'flex' }}>Physical activity</label>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginLeft: '15px' }}>
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

{selectedOptions2.includes("Light exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>Light</label>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>exercise (%)</label>
    </div>
    <input type="number" id="light" value={light} onChange={event => setLight(event.target.value)} min="0" max={100 - resting - standing - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Moderate exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>Moderate</label>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>exercise (%)</label>
    </div>
    <input type="number" id="moderate" value={moderate} onChange={event => setModerate(event.target.value)} min="0" max={100 - resting - standing - light - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Heavy exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>Heavy</label>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>exercise (%)</label>
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
        {showInfector ? 'Infector status and immunity' : 'Infector status and immunity'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInfector && (
  <div>

<div className="graph-choice" style={{ display: 'flex', justifyContent: 'center'}}>

<button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px', color: 'rgb(70, 140, 190)'}}
    onClick={() => setShowPopupResult2(true)}
  >
    {showResultdetail ? 'Calculated result' : 'Calculated result'}
  </button>
</div>

{showPopupResult2 && (
        <div className="popupR">
          <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)', fontFamily: 'Arial' }}>
            Number of infectors
          </label>
<div style={{ display: 'flex', justifyContent: 'center' }}>

          <Plot
  data={[
    {
      y: Infector_calculation(infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases),
      x: 'Number of infectors',
      type: 'box',
      boxpoints: 'outliers',
      orientation: 'v',
      showlegend: false, // Hide the legend
      name: 'Number of infectors', // Set the name to an empty string to remove the "trace 0" label
    },
  ]}
  config={{ displayModeBar: false }}
  layout={{
    width: 300,
    height: 600,
    margin: {
      t: 30,
      l: 30,
      r: 30,
      b: 50,
    },
    fontFamily: 'Arial',
    hovermode: 'x',
    xaxis: {
      zeroline: false, // Remove the line at y=0
      showline: false, // Remove the axis line
      showticklabels: false, // Remove the tick labels
      automargin: true,
    },
    yaxis: {
      title: 'Number of infectors (people)',  // Added this line
      zeroline: false, // Remove the line at x=0
      automargin: true,
      hoverformat: '.1f', // Display the hovered value with one decimal place in the tooltip
      tickformat: '.1f', // Set the format for the x-axis tick labels
    },
    hoverlabel: {
      bgcolor: 'rgba(7,114,185, 0.1)',
      bordercolor: 'transparent', // Set the border color of the hovered value
      font: { size: 14, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
      yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
    },
  }}
/>
</div>

{
    maskInfector > 0 &&  (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>
          <br/>
          The infector is wearing a mask, and it has been applied.
        </div>
    )}
          <button
            onClick={() => setShowPopupResult2(false)}
            className="remove-button"
            style={{
              fontSize: '14px',
              padding: '6px 10px',
              height: '40px',
              display: 'block',
              margin: '0 auto',
              position: 'absolute',
              top: '0px',
              right: '2px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'normal',
            }}
          >
            <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
          </button>
        </div>
      )}


<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

                <label htmlFor="infectorStatus" style={{ fontSize: '0.9rem'}}>Infector status: </label>
                <select
                    id="infectorStatus"
                    value={infectorStatus}
                    onChange={event => setInfectorStatus(event.target.value)}
                    style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}>
                   <option value="Regional prevalence">Regional prevalence</option>
                    <option value="Number of infector">Number of infector</option>                      
                </select>

            </div>


            <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

            {infectorStatus === 'Regional prevalence' && (
                <div>
                    <label htmlFor="casesPerDay" style={{ fontSize: '0.9rem'}}>Cases per 100,000 per day: </label>
                    <input type="number" id="casesPerDay" value={casesPerDay} onChange={event => setCasesPerDay(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>
            )}

            
{infectorStatus === 'Number of infector' && (
                <div>
                    <label htmlFor="infectorNumber" style={{ fontSize: '0.9rem'}}>Infector number: </label>
                    <input type="number" id="infectorNumber" value={infectorNumber} onChange={event => setInfectorNumber(event.target.value)} min="1" max={occupantNumber} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>

            )}


</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{infectorStatus === 'Regional prevalence' && (
                <div>
                    <label htmlFor="infectiousPeriod" style={{ fontSize: '0.9rem'}}>Infectious period (days): </label>
                    <input type="number" id="infectiousPeriod" value={infectiousPeriod} onChange={event => setInfectiousPeriod(event.target.value)} min="1" max="365" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                    <label htmlFor="unreportedCases" style={{ fontSize: '0.9rem'}}>Unreported cases (%): </label>
                    <input type="number" id="unreportedCases" value={unreportedCases} onChange={event => setUnreportedCases(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                </div>
            )}

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="immunityProportion" style={{ fontSize: '0.9rem'}}>Immunity proportion (%): </label>
        <input type="number" id="immunityProportion" value={immunityProportion} onChange={event => setImmunityProportion(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />

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
        {showHVAC ? 'Engineering controls - HVAC' : 'Engineering controls - HVAC'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showHVAC && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
  <br/>
  <label htmlFor="supplyAir" style={{ fontSize: '0.9rem' }}>Supply air (cfm): </label>
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

<label htmlFor="outdoorAir" style={{ fontSize: '0.9rem' }}>Outdoor air (cfm): </label>
<input
  type="number"
  id="outdoorAir"
  value={outdoorAir}
  onChange={event => setOutdoorAir(Number(event.target.value))}
  min="0"
  max={supplyAir}
  step="1"
  style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>
</div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>

      <label htmlFor="merv" style={{ fontSize: '0.9rem'}}>Filter rating:</label>
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

  <label htmlFor="hvacUV" style={{ fontSize: '0.9rem'}}>UVC inactivation (%): </label>
        <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

  </div>

  <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="hvacTreatment" style={{ fontSize: '0.9rem'}}>Air treatment ECA (cfm): </label>
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
  {showInRoom ? 'Engineering controls - in room' : 'Engineering controls - in room'}
</button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInRoom && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomACQ" style={{ fontSize: '0.9rem'}}>Air cleaner</label>&nbsp;&nbsp;

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

  <label htmlFor="roomAC" style={{ fontSize: '0.9rem'}}>ECA (cfm): </label>
        <input type="number" id="roomAC" value={roomAC} onChange={event => setRoomAC(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomUVQ" style={{ fontSize: '0.9rem'}}>In-room UV</label>&nbsp;&nbsp;

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

  <label htmlFor="roomUV" style={{ fontSize: '0.9rem'}}>ECA (cfm): </label>
        <input type="number" id="roomUV" value={roomUV} onChange={event => setRoomUV(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomTreatmentQ" style={{ fontSize: '0.9rem', marginRight: '5px' }}>
    Air treatment device
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
    ECA (cfm):
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
        {showNonEngineering ? 'Nonengieering controls' : 'Nonengieering controls'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showNonEngineering && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="maskInfector" style={{ fontSize: '0.9rem'}}>
            Mask efficiency
            <br/>
            infector (%): </label>
        <input type="number" id="maskInfector" value={maskInfector} onChange={event => setMaskInfector(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding:  '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />

<label htmlFor="maskSus" style={{ fontSize: '0.9rem'}}>
    Mask efficiency
    <br/>
    susceptible (%): </label>
<input type="number" id="maskSus" value={maskSus} onChange={event => setMaskSus(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />
</div>
</div>
)}


<br/>

</div>


);

const LANCETInputs = () => (
  <div className="input-container">
    <br/>

<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowBuilding(!showBuilding)}
      >
        {showBuilding ? 'Building and occupancy' : 'Building and occupancy'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>


<br/>

{showBuilding && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
<label htmlFor="occupancyCategory" style={{ fontSize: '0.9rem'}}>Occupancy Category:</label>
<select id="occupancyCategory" 
        value={occupancyCategory} 
        onChange={(e) => {
          setOccupancyCategory(e.target.value);
          const newOutdoorAir = (floorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
          setOutdoorAir(newOutdoorAir);
        }}
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Correctional">Correctional facilities</option>
  <option value="Commercial">Commercial / retail</option>
  <option value="Educational">Educational facilities</option>
  <option value="Industrial">Industrial</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Public">Public assembly / sports & entertainment</option>
  <option value="Residential">Residential</option>
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
      <label htmlFor="floorArea" style={{ fontSize: '0.9rem' }}>Floor area (sqft): </label>
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
  min="20"
  max="100000"
  step="1"
  style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
/>
        <label htmlFor="height" style={{ fontSize: '0.9rem'}}>Height (ft): </label>
        <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px',}} />
      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="occupantNumber" style={{ fontSize: '0.9rem'}}>Occupant number: </label>
        <input type="number" id="occupantNumber" value={occupantNumber} 
        min="1"
        onChange={event => {
          let newOccupantNumber = event.target.value;
          if (newOccupantNumber < 1) {
            newOccupantNumber = 1;
          }
          setOccupantNumber(newOccupantNumber);
          const newOutdoorAir = Math.round((floorArea * ASHRAE62ft + newOccupantNumber * ASHRAE62p) / 0.75 * 100) / 100;
          setOutdoorAir(newOutdoorAir);
        }}
        style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
        <label htmlFor="occupiedPeriod" style={{ fontSize: '0.9rem'}}>Occupied period (min): </label>
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
      onClick={() => setShowVentilation(!showVentilation)}
    >
      {showVentilation ? 'Ventilation' : 'Ventilation'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showVentilation && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
<br/>
<label htmlFor="supplyAir" style={{ fontSize: '0.9rem' }}>Supply air (cfm): </label>
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

<label htmlFor="outdoorAir" style={{ fontSize: '0.9rem' }}>Outdoor air (cfm): </label>
<input
type="number"
id="outdoorAir"
value={outdoorAir}
onChange={event => setOutdoorAir(Number(event.target.value))}
min="0"
max={supplyAir}
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

    <label htmlFor="merv" style={{ fontSize: '0.9rem'}}>HVAC filter rating:</label>
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
      <label htmlFor="roomACQ" style={{ fontSize: '0.9rem'}}>Portable air cleaner</label>&nbsp;&nbsp;

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

<label htmlFor="roomAC" style={{ fontSize: '0.9rem'}}>NADR (cfm): </label>
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

<label htmlFor="hvacUV" style={{ fontSize: '0.9rem'}}>In-duct GUV distinfection (%): </label>
      <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomUVQ" style={{ fontSize: '0.9rem'}}>GUV system</label>&nbsp;&nbsp;

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

<label htmlFor="roomUV" style={{ fontSize: '0.9rem'}}>NADR (cfm): </label>
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
      onClick={() => setShowSecond(!showSecond)}
    >
      {showSecond ? 'Secondary attack rate' : 'Secondary attack rate'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showSecond && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

            
<div>
    <label htmlFor="infectorNumber" style={{ fontSize: '0.9rem'}}>Infector number: </label>
    <input type="number" id="infectorNumber" value={infectorNumber} onChange={event => setInfectorNumber(event.target.value)} min="1" max={occupantNumber} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
    <label htmlFor="immunityProportion" style={{ fontSize: '0.9rem'}}>Immunity proportion (%): </label>
<input type="number" id="immunityProportion" value={immunityProportion} onChange={event => setImmunityProportion(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
</div>
</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
       
    <label htmlFor="secondQuanta" style={{ fontSize: '0.9rem'}}>Quanta emission rate: <br/> (quanta/h) </label>&emsp;
    <input type="number" id="secondQuanta" value={secondQuanta} onChange={event => setSecondQuanta(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
<input type="number" id="secondBreath" value={secondBreath} onChange={event => setSecondBreath(event.target.value)} min="0" max="100" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
</div>




<div className="graph-choice" style ={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="maskInfector" style={{ fontSize: '0.9rem'}}>
          Mask efficiency:
          <br/>
          infector (%) </label>&emsp;
      <input type="number" id="maskInfector" value={maskInfector} onChange={event => setMaskInfector(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding:  '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />

<label htmlFor="maskSus" style={{ fontSize: '0.9rem'}}>
  Mask efficiency:
  <br/>
  susceptible (%) </label>&emsp;
<input type="number" id="maskSus" value={maskSus} onChange={event => setMaskSus(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />
</div>
</div>
)}

<br/>

</div>


);

const TargetInputs = () => (
  <div className="input-container">
    <br/>

    <button
      className="fancy-button5"
      style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
      onClick={() => setShowPercentile(!showPercentile)}
    >
              {showPercentile ? 'Percentile' : 'Percentile'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <br/>

    {showPercentile && (
 <div>

 <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
 
 <label htmlFor="targetType" style={{ fontSize: '0.9rem'}}>Percentile of the result: </label>
 <input 
    type="number" 
    value={percentile} 
    onChange={event => setPercentile(event.target.value)} 
    min="0" 
    max="100" 
    step="1" 
    style={{
      borderRadius: '5px', 
      border: '1px solid #ccc', 
      padding: '3px 10px', 
      fontFamily: 'Arial', 
      fontSize: '0.9rem',
      width: '60px'
    }} 
  />
  <label style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', marginLeft: '5px' }}>%</label>
 
 </div>

 <br/>
 
 </div>

    )}


<button
      className="fancy-button5"
      style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
      onClick={() => setShowTarget(!showTarget)}
    >
      {showTarget ? 'Target risk' : 'Target risk'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

    <br/>

    {showTarget && (
 <div>

 
 <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
 
 <label htmlFor="targetType" style={{ fontSize: '0.9rem'}}>What to target?: </label>
 <select value={targetType} onChange={event => setTargetType(event.target.value)} style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
     <option value="Individual risk (%)">Individual risk (%)</option>
     <option value="Absolute risk (%)">Absolute risk (%)</option>
     <option value="Estimated infected people">Estimated infected people</option>
     <option value="Reproduction number">Reproduction number</option>
 
 </select>
 
 </div>
 
 <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

 {targetType === 'Individual risk (%)' && (
  <div>
 
 <label style={{ fontSize: '0.9rem', color: 'rgba(20, 86, 139, 0.8)'}}>Safer &lt; </label>
                     <input type="number" value={target} onChange={event => setTarget(event.target.value)} min="0" max="100" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                     <label style={{ fontSize: '0.9rem', color: 'rgb(188, 156, 13)'}}> Warning &lt; </label>
                     <input type="number" value={target2} onChange={event => setTarget2(event.target.value)} min="0" max="100" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                     <label style={{ fontSize: '0.9rem', color: 'rgba(222, 79, 71, 0.9)'}}> &le; Dangerous </label>

 </div>       
)}     

{targetType === 'Absolute risk (%)' && (
  <div>
 
 <label style={{ fontSize: '0.9rem', color: 'rgba(20, 86, 139, 0.8)'}}>Safer &lt; </label>
                     <input type="number" value={target3} onChange={event => setTarget3(event.target.value)} min="0" max="100" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                     <label style={{ fontSize: '0.9rem', color: 'rgb(188, 156, 13)'}}> Warning &lt; </label>
                     <input type="number" value={target4} onChange={event => setTarget4(event.target.value)} min="0" max="100" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                     <label style={{ fontSize: '0.9rem', color: 'rgba(222, 79, 71, 0.9)'}}> &le; Dangerous </label>

 </div>       
)}        

{targetType === 'Estimated infected people' && (
  <div>
 
 <label style={{ fontSize: '0.9rem', color: 'rgba(20, 86, 139, 0.8)'}}>Safer &lt; </label>
                     <input type="number" value={target5} onChange={event => setTarget5(event.target.value)} min="0" max="100" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                     <label style={{ fontSize: '0.9rem', color: 'rgb(188, 156, 13)'}}> Warning &lt; </label>
                     <input type="number" value={target6} onChange={event => setTarget6(event.target.value)} min="0" max="100" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                     <label style={{ fontSize: '0.9rem', color: 'rgba(222, 79, 71, 0.9)'}}> &le; Dangerous </label>

 </div>       
)}        

{targetType === 'Reproduction number' && (
  <div>
 
 <label style={{ fontSize: '0.9rem', color: 'rgba(20, 86, 139, 0.8)'}}>Safer &lt; </label>
                     <input type="number" value={target7} onChange={event => setTarget7(event.target.value)} min="0" max="100" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                     <label style={{ fontSize: '0.9rem', color: 'rgb(188, 156, 13)'}}> Warning &lt; </label>
                     <input type="number" value={target8} onChange={event => setTarget8(event.target.value)} min="0" max="100" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                     <label style={{ fontSize: '0.9rem', color: 'rgba(222, 79, 71, 0.9)'}}> &le; Dangerous </label>

 </div>       
)}        
             
                      
             
             </div>

 <br/>
 
 </div>

    )}

<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowBuilding(!showBuilding)}
      >
        {showBuilding ? 'Building and occupancy' : 'Building and occupancy'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>


<br/>

{showBuilding && (
  <div>

<div style={{ display: 'flex', justifyContent: 'center'}}>
  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px'}}
    onClick={() => setShowPopupValue2(true)}
  >
    {showValuedetail ? 'Default values' : 'Default values'}
  </button>
  </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  {showPopupValue2 && (
  <div className="popupS">
    <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Default values</label>
    <br/>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>

        <label style={{ fontSize: '0.8rem' }}>Infiltration Rate, h⁻¹</label>

    </div> &emsp;&emsp;
    <label style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeInfil} onChange={event => setTypeInfil(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px', width: '90px'  }}>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>


{typeInfil === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="infilmin" value={infilmin} onChange={event => setInfilmin(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="infilmax" value={infilmax} onChange={event => setInfilmax(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}

    </div>

</div>
        </div>


        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Deposition Rate, h⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeD" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeD} onChange={event => setTypeD(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px'}}>
        <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        {typeD === 'Lognormal' && (

<div>
<label style={{ fontSize: '0.8rem' }}>µ: </label> 
<input type="number" id="dmu" value={dmu} onChange={event => setDmu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
<label style={{ fontSize: '0.8rem' }}>σ: </label> 
<input type="number" id="dsigma" value={dsigma} onChange={event => setDsigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
</div>

        )}
        
{typeD === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="dmin" value={dmin} onChange={event => setDmin(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="dmax" value={dmax} onChange={event => setDmax(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>

        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Inactivation Rate, h⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeInact" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeInact} onChange={event => setTypeInact(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>
        
        {typeInact === 'Lognormal' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="inactmu" value={inactmu} onChange={event => setInactmu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="inactsigma" value={inactsigma} onChange={event => setInactsigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

{typeInact === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="inactmin" value={inactmin} onChange={event => setInactmin(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="inactmax" value={inactmax} onChange={event => setInactmax(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

        </div>



        <button onClick={() => setShowPopupValue2(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
  <label htmlFor="occupancyCategory" style={{ fontSize: '0.9rem'}}>Occupancy category:</label>
  <select id="occupancyCategory" 
          value={occupancyCategory} 
          onChange={(e) => {
            setOccupancyCategory(e.target.value);
            const newOutdoorAir = (floorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
            setOutdoorAir(newOutdoorAir);
          }}
          style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Correctional">Correctional facilities</option>
  <option value="Commercial">Commercial / retail</option>
  <option value="Educational">Educational facilities</option>
  <option value="Industrial">Industrial</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Public">Public assembly / sports & entertainment</option>
  <option value="Residential">Residential</option>
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
      <label htmlFor="floorArea" style={{ fontSize: '0.9rem' }}>Floor area (sqft): </label>
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
  min="20"
  max="100000"
  step="1"
  style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
/>
        <label htmlFor="height" style={{ fontSize: '0.9rem'}}>Height (ft): </label>
        <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px',}} />
      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="occupantNumber" style={{ fontSize: '0.9rem'}}>Occupant number: </label>
        <input type="number" id="occupantNumber" value={occupantNumber} 
        min="1"
        onChange={event => {
          let newOccupantNumber = event.target.value;
          if (newOccupantNumber < 1) {
            newOccupantNumber = 1;
          }
          setOccupantNumber(newOccupantNumber);
          const newOutdoorAir = Math.round((floorArea * ASHRAE62ft + newOccupantNumber * ASHRAE62p) / 0.75 * 100) / 100;
          setOutdoorAir(newOutdoorAir);
        }}
        style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
        <label htmlFor="occupiedPeriod" style={{ fontSize: '0.9rem'}}>Occupied period (min): </label>
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
        {showQuanta ? 'Quanta emission rate' : 'Quanta emission rate'}
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
    {showValuedetail ? 'Default values' : 'Default values'}
  </button>&emsp;


  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px', color: 'rgb(70, 140, 190)'}}
    onClick={() => setShowPopupResult(true)}
  >
    {showResultdetail ? 'Calculated result' : 'Calculated result'}
  </button>
</div>
<span style={{ lineHeight: '0.5' }}>&nbsp;</span>



{(virusType === "SARS-CoV-2") && showPopupValue && (
  <div className="popupS">
    <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Default values</label>
    <br/>
    <label style={{ fontSize: '0.9rem', display: 'block', textAlign: 'center'}}>ER = c<sub>v</sub> ∙ <frac>k/K</frac> ∙ BR ∙ V<sub>d</sub></label>
    <br/>


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem' }}>Viral load in sputum</label>
        {typeCv === 'Normal' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>log₁₀(c<sub>v</sub>) , RNA copies ∙ mL⁻¹</label>
        </div>)}
        {typeCv === 'Uniform' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>c<sub>v</sub> , ×10⁶ RNA copies ∙ mL⁻¹</label>
        </div>)}
    </div> &emsp;&emsp;
    <label htmlFor="typeCv" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeCv} onChange={event => setTypeCv(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Normal">Normal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>

    {typeCv === 'Normal' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="CVmu" value={CVmu} onChange={event => setCVmu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="CVsigma" value={CVsigma} onChange={event => setCVsigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}

{typeCv === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="CVmin" value={CVmin} onChange={event => setCVmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="CVmax" value={CVmax} onChange={event => setCVmax(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}

    </div>

</div>
        </div>


        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Viable fraction</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>v , virion ∙ RNA copies⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeV" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeV} onChange={event => setTypeV(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Beta">Beta</option>
        </select>

        {typeV === 'Beta' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="VBmin" value={VBmin} onChange={event => setVBmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="VBmax" value={VBmax} onChange={event => setVBmax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

    <div style={{ display: 'flex', alignItems: 'center' }}>
<label style={{ fontSize: '0.8rem' }}>α: </label> 
<input type="number" id="Valpha" value={Valpha} onChange={event => setValpha(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;&nbsp;&nbsp;&nbsp;
<label style={{ fontSize: '0.8rem' }}>β: </label> 
<input type="number" id="Vbeta" value={Vbeta} onChange={event => setVbeta(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
</div>
</div>
        )}

        </div>

        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Respiratory tract</label>
        <label style={{ fontSize: '0.8rem' }}>absorption fraction</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>k</label>
    </div> &emsp;&emsp;
    <label htmlFor="typek" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typek} onChange={event => setTypeCi(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Uniform">Uniform</option>
        </select>

           
{typeCi === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="kmin" value={kmin} onChange={event => setkmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="kmax" value={kmax} onChange={event => setkmax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>
        

        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Dose constant</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>K , PFU ∙ quanta⁻¹</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>(1 virion = 1 PFU)</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeK" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeK} onChange={event => setTypeK(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Uniform">Uniform</option>
        </select>

        
{typeCi === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="Kmin" value={Kmin} onChange={event => setKmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="Kmax" value={Kmax} onChange={event => setKmax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>

   <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem'}}>Breathing rate</label>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>BR , m³ ∙ h⁻¹</label>
    </div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on physical activity</label>
    </div>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem'}}>Droplet volume concentration</label>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>V<sub>d</sub> , mL ∙ m⁻³</label>
    </div>&emsp;&emsp;&nbsp;&nbsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on expiratory activity</label>
    </div>

    <button onClick={() => setShowPopupValue(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


{(virusType !== "SARS-CoV-2") && showPopupValue && (
  <div className="popupS">
    <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Default values</label>
    <br/>
    <label style={{ fontSize: '0.9rem', display: 'block', textAlign: 'center'}}>ER = c<sub>v</sub> ∙ <frac>k/K</frac> ∙ BR ∙ V<sub>d</sub></label>
    <br/>


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem' }}>Viral load in sputum</label>
        {typeCv === 'Normal' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>log₁₀(c<sub>v</sub>) , RNA copies ∙ mL⁻¹</label>
        </div>)}
        {typeCv === 'Uniform' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>c<sub>v</sub> , ×10⁶ RNA copies ∙ mL⁻¹</label>
        </div>)}
    </div> &emsp;&emsp;
    <label htmlFor="typeCv" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeCv} onChange={event => setTypeCv(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Normal">Normal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>

    {typeCv === 'Normal' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="CVmu" value={CVmu} onChange={event => setCVmu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="CVsigma" value={CVsigma} onChange={event => setCVsigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}

{typeCv === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="CVmin" value={CVmin} onChange={event => setCVmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="CVmax" value={CVmax} onChange={event => setCVmax(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}

    </div>

</div>
        </div>


        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Ratio of an infectious quantum</label>
        <label style={{ fontSize: '0.8rem' }}>to infectious dose</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>c<sub>i</sub> , quanta ∙ RNA copies⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeCi" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeCi} onChange={event => setTypeCi(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Uniform">Uniform</option>
        </select>

         
{typeCi === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="Cimin" value={Cimin} onChange={event => setCimin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="Cimax" value={Cimax} onChange={event => setCimax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>

        
        

   <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem'}}>Breathing rate</label>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>BR , m³ ∙ h⁻¹</label>
    </div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on physical activity</label>
    </div>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem'}}>Droplet volume concentration</label>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>V<sub>d</sub> , mL ∙ m⁻³</label>
    </div>&emsp;&emsp;&nbsp;&nbsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on expiratory activity</label>
    </div>

    <button onClick={() => setShowPopupValue(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}

{showPopupResult && (
        <div className="popupR">
          <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)', fontFamily: 'Arial' }}>
            Quanta emission rates / person
          </label>
<div style={{ display: 'flex', justifyContent: 'center' }}>

          <Plot
  data={[
    {
      y: ER_calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
        typeCv, CVmu, CVsigma, CVmin, CVmax,
        type111, type222, type333, type444, type555, 
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max,
        type1, type2, type3, type4, type5, type6, 
        breathing, whispered, voiced, coughing, whispering, speaking, 
        EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
        EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
        EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
        EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
        EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
        EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
        maskInfector),
      x: 'quanta/h',
      type: 'box',
      boxpoints: 'outliers',
      orientation: 'v',
      showlegend: false, // Hide the legend
      name: 'quanta/h', // Set the name to an empty string to remove the "trace 0" label
    },
  ]}
  config={{ displayModeBar: false }}
  layout={{
    width: 300,
    height: 600,
    margin: {
      t: 30,
      l: 30,
      r: 30,
      b: 50,
    },
    fontFamily: 'Arial',
    hovermode: 'x',
    xaxis: {
      zeroline: false, // Remove the line at y=0
      showline: false, // Remove the axis line
      showticklabels: false, // Remove the tick labels
      automargin: true,
    },
    yaxis: {
      title: 'Quanta emission rate (quanta/h)',  // Added this line
      zeroline: false, // Remove the line at x=0
      automargin: true,
      hoverformat: '.1f', // Display the hovered value with one decimal place in the tooltip
      tickformat: '.1f', // Set the format for the x-axis tick labels
    },
    hoverlabel: {
      bgcolor: 'rgba(7,114,185, 0.1)',
      bordercolor: 'transparent', // Set the border color of the hovered value
      font: { size: 14, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
      yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
    },
  }}
/>
</div>

{
    maskInfector > 0 &&  (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>
          <br/>
          The infector is wearing a mask, and it has been applied.
        </div>
    )}
          <button
            onClick={() => setShowPopupResult(false)}
            className="remove-button"
            style={{
              fontSize: '14px',
              padding: '6px 10px',
              height: '40px',
              display: 'block',
              margin: '0 auto',
              position: 'absolute',
              top: '0px',
              right: '2px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'normal',
            }}
          >
            <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
          </button>
        </div>
      )}


<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{showPopup2 && (
  <div className="popup2">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Quanta emission rates</label>
    <br/>


    {selectedOptions.includes("Breathing")  && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Breathing</label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(breathing).toFixed(1)} % </label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type1} onChange={event => setType1(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label> &emsp;
    {type1 === 'Lognormal' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="EA1mu" value={EA1mu} onChange={event => setEA1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="EA1sigma" value={EA1sigma} onChange={event => setEA1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
   </div>
    )}

{type1 === 'Uniform' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="EA1min" value={EA1min} onChange={event => setEA1min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="EA1max" value={EA1max} onChange={event => setEA1max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label> &emsp;

    {type1 === 'Lognormal' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="DD1mu" value={DD1mu} onChange={event => setDD1mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="DD1sigma" value={DD1sigma} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
  </div>
  )}

{type1 === 'Uniform' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="DD1min" value={DD1min} onChange={event => setDD1min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="DD1max" value={DD1max} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}


{selectedOptions.includes("Whispered counting") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>Whispered</label>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>counting</label>
    </div> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(whispered).toFixed(1)} % </label> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type2} onChange={event => setType2(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label> &emsp;
            {type2 === 'Lognormal' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA2mu" value={EA2mu} onChange={event => setEA2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA2sigma" value={EA2sigma} onChange={event => setEA2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 === 'Uniform' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA2min" value={EA2min} onChange={event => setEA2min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA2max" value={EA2max} onChange={event => setEA2max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label> &emsp;
            {type2 === 'Lognormal' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD2mu" value={DD2mu} onChange={event => setDD2mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD2sigma" value={DD2sigma} onChange={event => setDD2sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 === 'Uniform' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD2min" value={DD2min} onChange={event => setDD2min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD2max" value={DD2max} onChange={event => setDD2max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}

 {selectedOptions.includes("Voiced counting") && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>Voiced</label>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>counting</label>
    </div> &emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(voiced).toFixed(1)} % </label>&emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type3} onChange={event => setType3(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type3 === 'Lognormal' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA3mu" value={EA3mu} onChange={event => setEA3mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA3sigma" value={EA3sigma} onChange={event => setEA3sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 === 'Uniform' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA3min" value={EA3min} onChange={event => setEA3min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA3max" value={EA3max} onChange={event => setEA3max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type3 === 'Lognormal' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD3mu" value={DD3mu} onChange={event => setDD3mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD3sigma" value={DD3sigma} onChange={event => setDD3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 === 'Uniform' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD3min" value={DD3min} onChange={event => setDD3min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD3max" value={DD3max} onChange={event => setDD3max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
 )}

{selectedOptions.includes("Coughing")&& (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Coughing</label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(coughing).toFixed(1)} % </label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type4} onChange={event => setType4(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type4 === 'Lognormal' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA4mu" value={EA4mu} onChange={event => setEA4mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA4sigma" value={EA4sigma} onChange={event => setEA4sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 === 'Uniform' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA4min" value={EA4min} onChange={event => setEA4min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA4max" value={EA4max} onChange={event => setEA4max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70x', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type4 === 'Lognormal' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD4mu" value={DD4mu} onChange={event => setDD4mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD4sigma" value={DD4sigma} onChange={event => setDD4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 === 'Uniform' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD4min" value={DD4min} onChange={event => setDD4min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD4max" value={DD4max} onChange={event => setDD4max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>

)}

{selectedOptions.includes("Whispering")&& (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering</label>&emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(whispering).toFixed(1)} % </label> &emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type5} onChange={event => setType5(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type5 === 'Lognormal' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA5mu" value={EA5mu} onChange={event => setEA5mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA5sigma" value={EA5sigma} onChange={event => setEA5sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 === 'Uniform' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA5min" value={EA5min} onChange={event => setEA5min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA5max" value={EA5max} onChange={event => setEA5max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type5 === 'Lognormal' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD5mu" value={DD5mu} onChange={event => setDD5mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD5sigma" value={DD5sigma} onChange={event => setDD5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 === 'Uniform' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD5min" value={DD5min} onChange={event => setDD5min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD5max" value={DD5max} onChange={event => setDD5max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}


{selectedOptions.includes("Speaking") && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Speaking</label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(speaking).toFixed(1)} % </label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type6} onChange={event => setType6(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type6 === 'Lognormal' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA6mu" value={EA6mu} onChange={event => setEA6mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70x', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA6sigma" value={EA6sigma} onChange={event => setEA6sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 === 'Uniform' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA6min" value={EA6min} onChange={event => setEA6min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA6max" value={EA6max} onChange={event => setEA6max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type6 ==='Lognormal' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD6mu" value={DD6mu} onChange={event => setDD6mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD6sigma" value={DD6sigma} onChange={event => setDD6sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 === 'Uniform' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD6min" value={DD6min} onChange={event => setDD6min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD6max" value={DD6max} onChange={event => setDD6max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
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
           Please select least one expiratory activity
           <br/>
        </div>
    )
}

{
    Number(breathing) + Number(whispered) + Number(voiced) + Number(coughing) + Number(whispering) + Number(speaking) < 99.9999 &&  selectedOptions.length !== 0 &&  (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>
          <br/>
           The total percentage does not equal 100%. The remaining percentage will be considered as the "breathing" status.
        </div>
    )}

<br/>

    <button onClick={() => setShowPopup2(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}

</div>

<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center' }}>
<label htmlFor="virusType" style={{ fontSize: '0.9rem'}}>Virus type: </label>
<select value={virusType} onChange={event => {
    const newVirusType = event.target.value;
    setVirusType(newVirusType);
    
    let Cvmu, Cvsigma, Cvmin, Cvmax, Cimin, Cimax;
    switch (newVirusType) {
        case "Adenovirus":
            Cvmu = 3.2; 
            Cvsigma = 0.95;
            Cvmin = 3.2;
            Cvmax = 3.2;
            Cimin = 0.5;
            Cimax = 0.5;
            break;
        case "Coxsackievirus":
          Cvmu = 3.4; 
          Cvsigma = 1.1;
          Cvmin = 3.4;
          Cvmax = 3.4;
          Cimin = 0.025;
          Cimax = 0.025;
          break;
          case "Influenza":
            Cvmu = 6.7; 
            Cvsigma = 0.84;
            Cvmin = 6.7;
            Cvmax = 6.7;
            Cimin = 0.0000071;
            Cimax = 0.0000071;
            break;
            case "Measles":
              Cvmu = 3.5; 
              Cvsigma = 1.6;
              Cvmin = 3.5;
              Cvmax = 3.5;
              Cimin = 1;
              Cimax = 1;
              break;
              case "MERS":
                Cvmu = 6.7; 
                Cvsigma = 1.6;
                Cvmin = 6.7;
                Cvmax = 6.7;
                Cimin = 0.0000023;
                Cimax = 0.0000023;
                break;
                case "Rhinovirus":
                  Cvmu = 3.6; 
                  Cvsigma =0.83;
                  Cvmin = 3.6;
                  Cvmax = 3.6;
                  Cimin = 0.053;
                  Cimax = 0.053;
                  break;
                  case "SARS-CoV-1":
                    Cvmu = 6.1; 
                    Cvsigma = 1.3;
                    Cvmin = 6.1;
                    Cvmax = 6.1;
                    Cimin = 0.0000068;
                    Cimax = 0.0000068;
                    break;
                    case "SARS-CoV-2":
                      Cvmu = 7.0; 
                      Cvsigma = 1.4;
                      Cvmin = 7.0;
                      Cvmax = 7.0;
                      break;
                    case "TB":
                      Cvmu = 5.5; 
                      Cvsigma = 1.3;
                      Cvmin = 5.5;
                      Cvmax = 5.5;
                      Cimin = 0.002;
                      Cimax = 0.002;
                      break;

    }
    
    setCVmu(Cvmu);
    setCVsigma(Cvsigma);
    setCVmin(Cvmin);
    setCVmax(Cvmax);
    setCimin(Cimin);
    setCimax(Cimax);
}}

 style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
 <option value="Adenovirus">Adenovirus</option>
 <option value="Coxsackievirus">Coxsackievirus</option>
  <option value="Influenza">Influenza</option>
  <option value="Measles">Measles</option>
  <option value="MERS">MERS</option>
  <option value="Rhinovirus">Rhinovirus</option>
  <option value="SARS-CoV-1">SARS-CoV-1</option>
  <option value="SARS-CoV-2">SARS-CoV-2</option>
  <option value="TB">TB</option>
</select>
</div>
<br/>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
  <label htmlFor="expiratoryActivity" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex' }}>Expiratory activity</label>
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

{selectedOptions.includes("Whispered counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>Whispered</label>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>counting (%)</label>
    </div>
    <input type="number" id="whispered" value={whispered} onChange={event => setWhispered(event.target.value)} min="0" max={100 - breathing - voiced - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions.includes("Voiced counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>Voiced</label>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>counting (%)</label>
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


{showPopup3 && (
  <div className="popup22">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Breathing rates (m ∙ h⁻¹)</label>
    <br/>


    {selectedOptions2.includes("Resting") && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Resting</label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(resting).toFixed(1)} % </label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type111} onChange={event => setType111(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type111 === 'Lognormal' && (
      <div>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR1mu" value={BR1mu} onChange={event => setBR1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR1sigma" value={BR1sigma} onChange={event => setBR1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type111 === 'Uniform' && (
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
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(standing).toFixed(1)} % </label> &emsp;
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type222} onChange={event => setType222(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type222 === 'Lognormal' && (
      <div>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR2mu" value={BR2mu} onChange={event => setBR2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR2sigma" value={BR2sigma} onChange={event => setBR2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type222 === 'Uniform' && (
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


{selectedOptions2.includes("Light exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>Light</label>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>exercise</label>
    </div> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(light).toFixed(1)} % </label> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type333} onChange={event => setType333(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {type333 === 'Lognormal' && (
            <div>
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR3mu" value={BR3mu} onChange={event => setBR3mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR3sigma" value={BR3sigma} onChange={event => setBR3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type333 === 'Uniform' && (
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


{selectedOptions2.includes("Moderate exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>Moderate</label>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>exercise</label>
    </div> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(moderate).toFixed(1)} % </label> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type444} onChange={event => setType444(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {type444 === 'Lognormal' && (
            <div>
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR4mu" value={BR4mu} onChange={event => setBR4mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR4sigma" value={BR4sigma} onChange={event => setBR4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type444 === 'Uniform' && (
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


{selectedOptions2.includes("Heavy exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>Heavy</label>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>exercise</label>
    </div> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(heavy).toFixed(1)} % </label> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type555} onChange={event => setType555(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {type555 === 'Lognormal' && (
            <div>
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR5mu" value={BR5mu} onChange={event => setBR5mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR5sigma" value={BR5sigma} onChange={event => setBR5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type555 === 'Uniform' && (
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
           Please select least one physical activity
        </div>
    )
}

{
    Number(resting) + Number(standing) + Number(light) + Number(moderate) + Number(heavy) < 99.9999 && selectedOptions2.length !== 0 && (
      
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>

                <br/> 
           The total percentage does not equal 100%. The remaining percentage will be considered as the "resting" status.
        </div>
    )}

<br/>

    <button onClick={() => setShowPopup3(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px', marginTop: '20px'}}>
      <label htmlFor="physicalActivity" style={{ fontSize: '0.9rem',  justifyContent: 'center', display: 'flex' }}>Physical activity</label>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginLeft: '15px' }}>
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

{selectedOptions2.includes("Light exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>Light</label>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>exercise (%)</label>
    </div>
    <input type="number" id="light" value={light} onChange={event => setLight(event.target.value)} min="0" max={100 - resting - standing - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Moderate exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>Moderate</label>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>exercise (%)</label>
    </div>
    <input type="number" id="moderate" value={moderate} onChange={event => setModerate(event.target.value)} min="0" max={100 - resting - standing - light - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Heavy exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>Heavy</label>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>exercise (%)</label>
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
              {showInfector ? 'Infector status and immunity' : 'Infector status and immunity'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInfector && (
  <div>

<div className="graph-choice" style={{ display: 'flex', justifyContent: 'center'}}>

<button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px', color: 'rgb(70, 140, 190)'}}
    onClick={() => setShowPopupResult2(true)}
  >
    {showResultdetail ? 'Calculated result' : 'Calculated result'}
  </button>
</div>

{showPopupResult2 && (
        <div className="popupR">
          <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)', fontFamily: 'Arial' }}>
            Number of infectors
          </label>
<div style={{ display: 'flex', justifyContent: 'center' }}>

          <Plot
  data={[
    {
      y: Infector_calculation(infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases),
      x: 'Number of infectors',
      type: 'box',
      boxpoints: 'outliers',
      orientation: 'v',
      showlegend: false, // Hide the legend
      name: 'Number of infectors', // Set the name to an empty string to remove the "trace 0" label
    },
  ]}
  config={{ displayModeBar: false }}
  layout={{
    width: 300,
    height: 600,
    margin: {
      t: 30,
      l: 30,
      r: 30,
      b: 50,
    },
    fontFamily: 'Arial',
    hovermode: 'x',
    xaxis: {
      zeroline: false, // Remove the line at y=0
      showline: false, // Remove the axis line
      showticklabels: false, // Remove the tick labels
      automargin: true,
    },
    yaxis: {
      title: 'Number of infectors (people)',  // Added this line
      zeroline: false, // Remove the line at x=0
      automargin: true,
      hoverformat: '.1f', // Display the hovered value with one decimal place in the tooltip
      tickformat: '.1f', // Set the format for the x-axis tick labels
    },
    hoverlabel: {
      bgcolor: 'rgba(7,114,185, 0.1)',
      bordercolor: 'transparent', // Set the border color of the hovered value
      font: { size: 14, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
      yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
    },
  }}
/>
</div>

{
    maskInfector > 0 &&  (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>
          <br/>
          The infector is wearing a mask, and it has been applied.
        </div>
    )}
          <button
            onClick={() => setShowPopupResult2(false)}
            className="remove-button"
            style={{
              fontSize: '14px',
              padding: '6px 10px',
              height: '40px',
              display: 'block',
              margin: '0 auto',
              position: 'absolute',
              top: '0px',
              right: '2px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'normal',
            }}
          >
            <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
          </button>
        </div>
      )}


<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

                <label htmlFor="infectorStatus" style={{ fontSize: '0.9rem'}}>Infector status: </label>
                <select
                    id="infectorStatus"
                    value={infectorStatus}
                    onChange={event => setInfectorStatus(event.target.value)}
                    style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}>
                   <option value="Regional prevalence">Regional prevalence</option>
                    <option value="Number of infector">Number of infector</option>                      
                </select>

            </div>


            <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

            {infectorStatus === 'Regional prevalence' && (
                <div>
                    <label htmlFor="casesPerDay" style={{ fontSize: '0.9rem'}}>Cases per 100,000 per day: </label>
                    <input type="number" id="casesPerDay" value={casesPerDay} onChange={event => setCasesPerDay(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>
            )}

            
{infectorStatus === 'Number of infector' && (
                <div>
                    <label htmlFor="infectorNumber" style={{ fontSize: '0.9rem'}}>Infector number: </label>
                    <input type="number" id="infectorNumber" value={infectorNumber} onChange={event => setInfectorNumber(event.target.value)} min="1" max={occupantNumber} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>

            )}


</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{infectorStatus === 'Regional prevalence' && (
                <div>
                    <label htmlFor="infectiousPeriod" style={{ fontSize: '0.9rem'}}>Infectious period (days): </label>
                    <input type="number" id="infectiousPeriod" value={infectiousPeriod} onChange={event => setInfectiousPeriod(event.target.value)} min="1" max="365" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                    <label htmlFor="unreportedCases" style={{ fontSize: '0.9rem'}}>Unreported cases (%): </label>
                    <input type="number" id="unreportedCases" value={unreportedCases} onChange={event => setUnreportedCases(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                </div>
            )}

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="immunityProportion" style={{ fontSize: '0.9rem'}}>Immunity proportion (%): </label>
        <input type="number" id="immunityProportion" value={immunityProportion} onChange={event => setImmunityProportion(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />

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
      {showHVAC ? 'Engineering controls - HVAC' : 'Engineering controls - HVAC'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showHVAC && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
<br/>
<label htmlFor="supplyAir" style={{ fontSize: '0.9rem' }}>Supply air (cfm): </label>
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

<label htmlFor="outdoorAir" style={{ fontSize: '0.9rem' }}>Outdoor air (cfm): </label>
<input
type="number"
id="outdoorAir"
value={outdoorAir}
onChange={event => setOutdoorAir(Number(event.target.value))}
min="0"
max={supplyAir}
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>
</div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>

    <label htmlFor="merv" style={{ fontSize: '0.9rem'}}>Filter rating:</label>
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

<label htmlFor="hvacUV" style={{ fontSize: '0.9rem'}}>UVC inactivation (%): </label>
      <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="hvacTreatment" style={{ fontSize: '0.9rem'}}>Air treatment ECA (cfm): </label>
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
{showInRoom ? 'Engineering controls - in room' : 'Engineering controls - in room'}
</button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInRoom && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomACQ" style={{ fontSize: '0.9rem'}}>Air cleaner</label>&nbsp;&nbsp;

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

<label htmlFor="roomAC" style={{ fontSize: '0.9rem'}}>ECA (cfm): </label>
      <input type="number" id="roomAC" value={roomAC} onChange={event => setRoomAC(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomUVQ" style={{ fontSize: '0.9rem'}}>In-room UV</label>&nbsp;&nbsp;

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

<label htmlFor="roomUV" style={{ fontSize: '0.9rem'}}>ECA (cfm): </label>
      <input type="number" id="roomUV" value={roomUV} onChange={event => setRoomUV(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomTreatmentQ" style={{ fontSize: '0.9rem', marginRight: '5px' }}>
  Air treatment device
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
  ECA (cfm):
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
      {showNonEngineering ? 'Nonengieering controls' : 'Nonengieering controls'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showNonEngineering && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="maskInfector" style={{ fontSize: '0.9rem'}}>
          Mask efficiency
          <br/>
          infector (%): </label>
      <input type="number" id="maskInfector" value={maskInfector} onChange={event => setMaskInfector(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding:  '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />

<label htmlFor="maskSus" style={{ fontSize: '0.9rem'}}>
  Mask efficiency
  <br/>
  susceptible (%): </label>
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
      className="fancy-button5"
      style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
      onClick={() => setShowPercentile(!showPercentile)}
    >
              {showPercentile ? 'Percentile' : 'Percentile'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <br/>

    {showPercentile && (
 <div>

 <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
 
 <label htmlFor="targetType" style={{ fontSize: '0.9rem'}}>Percentile of the result: </label>
 <input 
    type="number" 
    value={percentile} 
    onChange={event => setPercentile(event.target.value)} 
    min="0" 
    max="100" 
    step="1" 
    style={{
      borderRadius: '5px', 
      border: '1px solid #ccc', 
      padding: '3px 10px', 
      fontFamily: 'Arial', 
      fontSize: '0.9rem',
      width: '60px'
    }} 
  />
  <label style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', marginLeft: '5px' }}>%</label>
 
 </div>

 <br/>
 
 </div>

    )}




<button
      className="fancy-button5"
      style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
      onClick={() => setShowDistance(!showDistance)}
    >
      {showDistance ? 'Distance' : 'Distance'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

    <br/>

    {showDistance && (
      <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '15px' }}>
<div style={{ display: 'flex', flexDirection: 'row', width: '70%', alignItems: 'center', justifyContent: 'center'}}>
        <input
          type="range"
          id="distance"
          value={distance}
          onChange={handleInputChange}
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
<br/>
</div>
    )}


<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowBuilding(!showBuilding)}
      >
        {showBuilding ? 'Building and occupancy' : 'Building and occupancy'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>


<br/>

{showBuilding && (
  <div>

<div style={{ display: 'flex', justifyContent: 'center'}}>
  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px'}}
    onClick={() => setShowPopupValue2(true)}
  >
    {showValuedetail ? 'Default values' : 'Default values'}
  </button>
  </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  {showPopupValue2 && (
  <div className="popupS">
    <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Default values</label>
    <br/>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>

        <label style={{ fontSize: '0.8rem' }}>Infiltration Rate, h⁻¹</label>

    </div> &emsp;&emsp;
    <label style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeInfil} onChange={event => setTypeInfil(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px', width: '90px'  }}>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>


{typeInfil === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="infilmin" value={infilmin} onChange={event => setInfilmin(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="infilmax" value={infilmax} onChange={event => setInfilmax(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}

    </div>

</div>
        </div>


        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Deposition Rate, h⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeD" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeD} onChange={event => setTypeD(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px'}}>
        <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        {typeD === 'Lognormal' && (

<div>
<label style={{ fontSize: '0.8rem' }}>µ: </label> 
<input type="number" id="dmu" value={dmu} onChange={event => setDmu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
<label style={{ fontSize: '0.8rem' }}>σ: </label> 
<input type="number" id="dsigma" value={dsigma} onChange={event => setDsigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
</div>

        )}
        
{typeD === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="dmin" value={dmin} onChange={event => setDmin(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="dmax" value={dmax} onChange={event => setDmax(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>

        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Inactivation Rate, h⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeInact" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeInact} onChange={event => setTypeInact(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>
        
        {typeInact === 'Lognormal' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="inactmu" value={inactmu} onChange={event => setInactmu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="inactsigma" value={inactsigma} onChange={event => setInactsigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

{typeInact === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="inactmin" value={inactmin} onChange={event => setInactmin(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="inactmax" value={inactmax} onChange={event => setInactmax(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
  </div>
  )}

        </div>



        <button onClick={() => setShowPopupValue2(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
  <label htmlFor="occupancyCategory" style={{ fontSize: '0.9rem'}}>Occupancy category:</label>
  <select id="occupancyCategory" 
          value={occupancyCategory} 
          onChange={(e) => {
            setOccupancyCategory(e.target.value);
            const newOutdoorAir = (floorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
            setOutdoorAir(newOutdoorAir);
          }}
          style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Correctional">Correctional facilities</option>
  <option value="Commercial">Commercial / retail</option>
  <option value="Educational">Educational facilities</option>
  <option value="Industrial">Industrial</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Public">Public assembly / sports & entertainment</option>
  <option value="Residential">Residential</option>
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
      <label htmlFor="floorArea" style={{ fontSize: '0.9rem' }}>Floor area (sqft): </label>
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
  min="20"
  max="100000"
  step="1"
  style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
/>
        <label htmlFor="height" style={{ fontSize: '0.9rem'}}>Height (ft): </label>
        <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px',}} />
      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="occupantNumber" style={{ fontSize: '0.9rem'}}>Occupant number: </label>
        <input type="number" id="occupantNumber" value={occupantNumber} 
        min="1"
        onChange={event => {
          let newOccupantNumber = event.target.value;
          if (newOccupantNumber < 1) {
            newOccupantNumber = 1;
          }
          setOccupantNumber(newOccupantNumber);
          const newOutdoorAir = Math.round((floorArea * ASHRAE62ft + newOccupantNumber * ASHRAE62p) / 0.75 * 100) / 100;
          setOutdoorAir(newOutdoorAir);
        }}
        style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
        <label htmlFor="occupiedPeriod" style={{ fontSize: '0.9rem'}}>Occupied period (min): </label>
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
        {showQuanta ? 'Quanta emission rate' : 'Quanta emission rate'}
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
      {showValuedetail ? 'Default values' : 'Default values'}
  </button>&emsp;


  <button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px', color: 'rgb(70, 140, 190)'}}
    onClick={() => setShowPopupResult(true)}
  >
    {showResultdetail ? 'Calculated result' : 'Calculated result'}
  </button>
</div>
<span style={{ lineHeight: '0.5' }}>&nbsp;</span>



{(virusType === "SARS-CoV-2") && showPopupValue && (
  <div className="popupS">
    <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Default values</label>
    <br/>
    <label style={{ fontSize: '0.9rem', display: 'block', textAlign: 'center'}}>ER = c<sub>v</sub> ∙ v ∙ <frac>k/K</frac> ∙ BR ∙ V<sub>d</sub></label>
    <br/>


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem' }}>Viral load in sputum</label>
        {typeCv === 'Normal' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>log₁₀(c<sub>v</sub>) , RNA copies ∙ mL⁻¹</label>
        </div>)}
        {typeCv === 'Uniform' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>c<sub>v</sub> , ×10⁶ RNA copies ∙ mL⁻¹</label>
        </div>)}
    </div> &emsp;&emsp;
    <label htmlFor="typeCv" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeCv} onChange={event => setTypeCv(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Normal">Normal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>

    {typeCv === 'Normal' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="CVmu" value={CVmu} onChange={event => setCVmu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="CVsigma" value={CVsigma} onChange={event => setCVsigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}

{typeCv === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="CVmin" value={CVmin} onChange={event => setCVmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="CVmax" value={CVmax} onChange={event => setCVmax(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}

    </div>

</div>
        </div>


        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Viable fraction</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>v , virion ∙ RNA copies⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeV" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeV} onChange={event => setTypeV(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Beta">Beta</option>
        </select>

        {typeV === 'Beta' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="VBmin" value={VBmin} onChange={event => setVBmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="VBmax" value={VBmax} onChange={event => setVBmax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

    <div style={{ display: 'flex', alignItems: 'center' }}>
<label style={{ fontSize: '0.8rem' }}>α: </label> 
<input type="number" id="Valpha" value={Valpha} onChange={event => setValpha(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;&nbsp;&nbsp;&nbsp;
<label style={{ fontSize: '0.8rem' }}>β: </label> 
<input type="number" id="Vbeta" value={Vbeta} onChange={event => setVbeta(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
</div>
</div>
        )}

        </div>

        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Respiratory tract</label>
        <label style={{ fontSize: '0.8rem' }}>absorption fraction</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>k</label>
    </div> &emsp;&emsp;
    <label htmlFor="typek" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typek} onChange={event => setTypeCi(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Uniform">Uniform</option>
        </select>

           
{typeCi === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="kmin" value={kmin} onChange={event => setkmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="kmax" value={kmax} onChange={event => setkmax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>
        

        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Dose constant</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>K , PFU ∙ quanta⁻¹</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>(1 virion = 1 PFU)</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeK" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeK} onChange={event => setTypeK(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Uniform">Uniform</option>
        </select>

        
{typeCi === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="Kmin" value={Kmin} onChange={event => setKmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="Kmax" value={Kmax} onChange={event => setKmax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>

   <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem'}}>Breathing rate</label>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>BR , m³ ∙ h⁻¹</label>
    </div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on physical activity</label>
    </div>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem'}}>Droplet volume concentration</label>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>V<sub>d</sub> , mL ∙ m⁻³</label>
    </div>&emsp;&emsp;&nbsp;&nbsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on expiratory activity</label>
    </div>

    <button onClick={() => setShowPopupValue(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


{(virusType !== "SARS-CoV-2") && showPopupValue && (
  <div className="popupS">
    <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Default values</label>
    <br/>
    <label style={{ fontSize: '0.9rem', display: 'block', textAlign: 'center'}}>ER = c<sub>v</sub> ∙ c<sub>i</sub> ∙ BR ∙ V<sub>d</sub></label>
    <br/>


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem' }}>Viral load in sputum</label>
        {typeCv === 'Normal' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>log₁₀(c<sub>v</sub>) , RNA copies ∙ mL⁻¹</label>
        </div>)}
        {typeCv === 'Uniform' && (
      <div>
        <label htmlFor="typeCv" style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>c<sub>v</sub> , ×10⁶ RNA copies ∙ mL⁻¹</label>
        </div>)}
    </div> &emsp;&emsp;
    <label htmlFor="typeCv" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeCv} onChange={event => setTypeCv(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Normal">Normal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>

    {typeCv === 'Normal' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="CVmu" value={CVmu} onChange={event => setCVmu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="CVsigma" value={CVsigma} onChange={event => setCVsigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}

{typeCv === 'Uniform' && (
      <div>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="CVmin" value={CVmin} onChange={event => setCVmin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="CVmax" value={CVmax} onChange={event => setCVmax(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '65px', marginLeft: '10px' }} />
   </div>
    )}

    </div>

</div>
        </div>


        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label style={{ fontSize: '0.8rem' }}>Ratio of an infectious quantum</label>
        <label style={{ fontSize: '0.8rem' }}>to infectious dose</label>
        <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'  }}>c<sub>i</sub> , quanta ∙ RNA copies⁻¹</label>
    </div> &emsp;&emsp;
    <label htmlFor="typeCi" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={typeCi} onChange={event => setTypeCi(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Uniform">Uniform</option>
        </select>

        
{typeCi === 'Uniform' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="Cimin" value={Cimin} onChange={event => setCimin(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="Cimax" value={Cimax} onChange={event => setCimax(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
    </div>
</div>
        )}

        </div>

   <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem'}}>Breathing rate</label>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>BR , m³ ∙ h⁻¹</label>
    </div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on physical activity</label>
    </div>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <label style={{ fontSize: '0.8rem'}}>Droplet volume concentration</label>
    <label style={{ fontSize: '0.8rem', color: 'rgb(100,100,100)'}}>V<sub>d</sub> , mL ∙ m⁻³</label>
    </div>&emsp;&emsp;&nbsp;&nbsp;
    <label style={{ fontSize: '0.8rem'}}>Determined based on expiratory activity</label>
    </div>

    <button onClick={() => setShowPopupValue(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}

{showPopupResult && (
        <div className="popupR">
          <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)', fontFamily: 'Arial' }}>
            Quanta emission rates / person
          </label>
<div style={{ display: 'flex', justifyContent: 'center' }}>

          <Plot
  data={[
    {
      y: ER_calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
        typeCv, CVmu, CVsigma, CVmin, CVmax,
        type111, type222, type333, type444, type555, 
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max,
        type1, type2, type3, type4, type5, type6, 
        breathing, whispered, voiced, coughing, whispering, speaking, 
        EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
        EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
        EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
        EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
        EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
        EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
        maskInfector),
      x: 'quanta/h',
      type: 'box',
      boxpoints: 'outliers',
      orientation: 'v',
      showlegend: false, // Hide the legend
      name: 'quanta/h', // Set the name to an empty string to remove the "trace 0" label
    },
  ]}
  config={{ displayModeBar: false }}
  layout={{
    width: 300,
    height: 600,
    margin: {
      t: 30,
      l: 30,
      r: 30,
      b: 50,
    },
    fontFamily: 'Arial',
    hovermode: 'x',
    xaxis: {
      zeroline: false, // Remove the line at y=0
      showline: false, // Remove the axis line
      showticklabels: false, // Remove the tick labels
      automargin: true,
    },
    yaxis: {
      title: 'Quanta emission rate (quanta/h)',  // Added this line
      zeroline: false, // Remove the line at x=0
      automargin: true,
      hoverformat: '.1f', // Display the hovered value with one decimal place in the tooltip
      tickformat: '.1f', // Set the format for the x-axis tick labels
    },
    hoverlabel: {
      bgcolor: 'rgba(7,114,185, 0.1)',
      bordercolor: 'transparent', // Set the border color of the hovered value
      font: { size: 14, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
      yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
    },
  }}
/>
</div>

{
    maskInfector > 0 &&  (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>
          <br/>
          The infector is wearing a mask, and it has been applied.
        </div>
    )}
          <button
            onClick={() => setShowPopupResult(false)}
            className="remove-button"
            style={{
              fontSize: '14px',
              padding: '6px 10px',
              height: '40px',
              display: 'block',
              margin: '0 auto',
              position: 'absolute',
              top: '0px',
              right: '2px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'normal',
            }}
          >
            <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
          </button>
        </div>
      )}


<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{showPopup2 && (
  <div className="popup2">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Quanta emission rates</label>
    <br/>


    {selectedOptions.includes("Breathing") && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Breathing</label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(breathing).toFixed(1)} % </label> &emsp;
    <label htmlFor="type1" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type1} onChange={event => setType1(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label> &emsp;
    {type1 === 'Lognormal' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="EA1mu" value={EA1mu} onChange={event => setEA1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="EA1sigma" value={EA1sigma} onChange={event => setEA1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
   </div>
    )}

{type1 === 'Uniform' && (
      <div>
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="EA1min" value={EA1min} onChange={event => setEA1min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="EA1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="EA1max" value={EA1max} onChange={event => setEA1max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
   </div>
    )}
 
    </div>

  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label> &emsp;

    {type1 === 'Lognormal' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="DD1mu" value={DD1mu} onChange={event => setDD1mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="DD1sigma" value={DD1sigma} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
  </div>
  )}

{type1 === 'Uniform' && (
      <div>
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>min: </label> 
    <input type="number" id="DD1min" value={DD1min} onChange={event => setDD1min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="DD1" style={{ fontSize: '0.8rem' }}>max: </label> 
    <input type="number" id="DD1max" value={DD1max} onChange={event => setDD1sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
  </div>
  )}

  </div>
</div>
        </div>

    )}


{selectedOptions.includes("Whispered counting") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>Whispered</label>
        <label htmlFor="type2" style={{ fontSize: '0.8rem' }}>counting</label>
    </div> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(whispered).toFixed(1)} % </label> &emsp;
    <label htmlFor="type2" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type2} onChange={event => setType2(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label> &emsp;
            {type2 === 'Lognormal' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA2mu" value={EA2mu} onChange={event => setEA2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA2sigma" value={EA2sigma} onChange={event => setEA2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 === 'Uniform' && (
            <div>
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA2min" value={EA2min} onChange={event => setEA2min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="EA2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA2max" value={EA2max} onChange={event => setEA2max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label> &emsp;
            {type2 === 'Lognormal' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD2mu" value={DD2mu} onChange={event => setDD2mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD2sigma" value={DD2sigma} onChange={event => setDD2sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type2 === 'Uniform' && (
            <div>
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD2min" value={DD2min} onChange={event => setDD2min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD2" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD2max" value={DD2max} onChange={event => setDD2max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}

 {selectedOptions.includes("Voiced counting") && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>Voiced</label>
        <label htmlFor="type3" style={{ fontSize: '0.8rem' }}>counting</label>
    </div> &emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(voiced).toFixed(1)} % </label>&emsp;
    <label htmlFor="type3" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type3} onChange={event => setType3(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type3 === 'Lognormal' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA3mu" value={EA3mu} onChange={event => setEA3mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA3sigma" value={EA3sigma} onChange={event => setEA3sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 === 'Uniform' && (
            <div>
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA3min" value={EA3min} onChange={event => setEA3min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA3max" value={EA3max} onChange={event => setEA3max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type3 === 'Lognormal' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD3mu" value={DD3mu} onChange={event => setDD3mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD3sigma" value={DD3sigma} onChange={event => setDD3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type3 === 'Uniform' && (
            <div>
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD3min" value={DD3min} onChange={event => setDD3min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD3" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD3max" value={DD3max} onChange={event => setDD3max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
 )}

{selectedOptions.includes("Coughing")&& (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Coughing</label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(coughing).toFixed(1)} % </label>&emsp;
    <label htmlFor="type4" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type4} onChange={event => setType4(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type4 === 'Lognormal' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA4mu" value={EA4mu} onChange={event => setEA4mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA4sigma" value={EA4sigma} onChange={event => setEA4sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 === 'Uniform' && (
            <div>
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA4min" value={EA4min} onChange={event => setEA4min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA4max" value={EA4max} onChange={event => setEA4max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70x', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type4 === 'Lognormal' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD4mu" value={DD4mu} onChange={event => setDD4mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD4sigma" value={DD4sigma} onChange={event => setDD4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type4 === 'Uniform' && (
            <div>
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD4min" value={DD4min} onChange={event => setDD4min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD4" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD4max" value={DD4max} onChange={event => setDD4max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>

)}

{selectedOptions.includes("Whispering")&& (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Whispering</label>&emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(whispering).toFixed(1)} % </label> &emsp;
    <label htmlFor="type5" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type5} onChange={event => setType5(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type5 === 'Lognormal' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA5mu" value={EA5mu} onChange={event => setEA5mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA5sigma" value={EA5sigma} onChange={event => setEA5sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 === 'Uniform' && (
            <div>
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA5min" value={EA5min} onChange={event => setEA5min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA5max" value={EA5max} onChange={event => setEA5max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type5 === 'Lognormal' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD5mu" value={DD5mu} onChange={event => setDD5mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD5sigma" value={DD5sigma} onChange={event => setDD5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type5 === 'Uniform' && (
            <div>
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD5min" value={DD5min} onChange={event => setDD5min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD5" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD5max" value={DD5max} onChange={event => setDD5max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
    </div>
</div>
)}


{selectedOptions.includes("Speaking") && (
<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Speaking</label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(speaking).toFixed(1)} % </label>&emsp;
    <label htmlFor="type6" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type6} onChange={event => setType6(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>Exhaled aerosols (# ∙ cm⁻³)</label>&emsp;
            {type6 === 'Lognormal' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="EA6mu" value={EA6mu} onChange={event => setEA6mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70x', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="EA6sigma" value={EA6sigma} onChange={event => setEA6sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '75px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 === 'Uniform' && (
            <div>
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="EA6min" value={EA6min} onChange={event => setEA6min(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="EA6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="EA6max" value={EA6max} onChange={event => setEA6max(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
        </div>
        <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>Droplet diameter (µm)</label>&emsp;
            {type6 ==='Lognormal' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="DD6mu" value={DD6mu} onChange={event => setDD6mu(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />&emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="DD6sigma" value={DD6sigma} onChange={event => setDD6sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
            </div>
            )}
            {type6 === 'Uniform' && (
            <div>
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>min: </label> 
                <input type="number" id="DD6min" value={DD6min} onChange={event => setDD6min(event.target.value)} min="0" step="0.1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="DD6" style={{ fontSize: '0.8rem' }}>max: </label> 
                <input type="number" id="DD6max" value={DD6max} onChange={event => setDD6max(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} />
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
           Please select least one expiratory activity
           <br/>
        </div>
    )
}

{
    Number(breathing) + Number(whispered) + Number(voiced) + Number(coughing) + Number(whispering) + Number(speaking) < 99.9999 &&  selectedOptions.length !== 0 &&  (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>
          <br/>
           The total percentage does not equal 100%. The remaining percentage will be considered as the "breathing" status.
        </div>
    )}

<br/>

    <button onClick={() => setShowPopup2(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}

</div>


<div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center' }}>
<label htmlFor="virusType" style={{ fontSize: '0.9rem'}}>Virus type: </label>
<select value={virusType} onChange={event => setVirusType(event.target.value)}
 style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
 <option value="Adenovirus">Adenovirus</option>
 <option value="Coxsackievirus">Coxsackievirus</option>
  <option value="Influenza">Influenza</option>
  <option value="Measles">Measles</option>
  <option value="MERS">MERS</option>
  <option value="Rhinovirus">Rhinovirus</option>
  <option value="SARS-CoV-1">SARS-CoV-1</option>
  <option value="SARS-CoV-2">SARS-CoV-2</option>
  <option value="TB">TB</option>
</select>
</div>
<br/>

    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
  <label htmlFor="expiratoryActivity" style={{ fontSize: '0.9rem', justifyContent: 'center', display: 'flex' }}>Expiratory activity</label>
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

{selectedOptions.includes("Whispered counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>Whispered</label>
      <label htmlFor="whispered" style={{ fontSize: '0.9rem' }}>counting (%)</label>
    </div>
    <input type="number" id="whispered" value={whispered} onChange={event => setWhispered(event.target.value)} min="0" max={100 - breathing - voiced - coughing - whispering - speaking} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions.includes("Voiced counting") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>Voiced</label>
      <label htmlFor="voiced" style={{ fontSize: '0.9rem' }}>counting (%)</label>
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


{showPopup3 && (
  <div className="popup22">
    <label htmlFor="quanta" style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)' }}>Breathing rates (m ∙ h⁻¹)</label>
    <br/>


    {selectedOptions2.includes("Resting") && (
    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Resting</label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(resting).toFixed(1)} % </label> &emsp;
    <label htmlFor="type111" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type111} onChange={event => setType111(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type111 === 'Lognormal' && (
      <div>
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR1mu" value={BR1mu} onChange={event => setBR1mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR1" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR1sigma" value={BR1sigma} onChange={event => setBR1sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type111 === 'Uniform' && (
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
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(standing).toFixed(1)} % </label> &emsp;
    <label htmlFor="type222" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
        <select value={type222} onChange={event => setType222(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
          <option value="Lognormal">Lognormal</option>
          <option value="Uniform">Uniform</option>
        </select>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {type222 === 'Lognormal' && (
      <div>
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>µ: </label> 
    <input type="number" id="BR2mu" value={BR2mu} onChange={event => setBR2mu(event.target.value)} min="0" step="0.001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
    <label htmlFor="BR2" style={{ fontSize: '0.8rem' }}>σ: </label> 
    <input type="number" id="BR2sigma" value={BR2sigma} onChange={event => setBR2sigma(event.target.value)} min="0" step="0.0001" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
   </div>
    )}

{type222 === 'Uniform' && (
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


{selectedOptions2.includes("Light exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>Light</label>
        <label htmlFor="type333" style={{ fontSize: '0.8rem' }}>exercise</label>
    </div> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(light).toFixed(1)} % </label> &emsp;
    <label htmlFor="type333" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type333} onChange={event => setType333(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {type333 === 'Lognormal' && (
            <div>
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR3mu" value={BR3mu} onChange={event => setBR3mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR3" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR3sigma" value={BR3sigma} onChange={event => setBR3sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type333 === 'Uniform' && (
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


{selectedOptions2.includes("Moderate exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>Moderate</label>
        <label htmlFor="type444" style={{ fontSize: '0.8rem' }}>exercise</label>
    </div> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(moderate).toFixed(1)} % </label> &emsp;
    <label htmlFor="type444" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type444} onChange={event => setType444(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {type444 === 'Lognormal' && (
            <div>
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR4mu" value={BR4mu} onChange={event => setBR4mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR4" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR4sigma" value={BR4sigma} onChange={event => setBR4sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type444 === 'Uniform' && (
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


{selectedOptions2.includes("Heavy exercise") && (
        <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>Heavy</label>
        <label htmlFor="type555" style={{ fontSize: '0.8rem' }}>exercise</label>
    </div> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px', color: 'rgb(7,114,185)' }}>{Number(heavy).toFixed(1)} % </label> &emsp;
    <label htmlFor="type555" style={{ fontSize: '0.8rem', justifyContent: 'center', display: 'flex', marginLeft: '0px' }}>Type: </label>
    <select value={type555} onChange={event => setType555(event.target.value)} style={{ fontSize: '0.8rem', marginLeft: '5px', marginRight: '20px' }}>
        <option value="Lognormal">Lognormal</option>
        <option value="Uniform">Uniform</option>
    </select>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {type555 === 'Lognormal' && (
            <div>
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>µ: </label> 
                <input type="number" id="BR5mu" value={BR5mu} onChange={event => setBR5mu(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '70px', marginLeft: '10px' }} /> &emsp;
                <label htmlFor="BR5" style={{ fontSize: '0.8rem' }}>σ: </label> 
                <input type="number" id="BR5sigma" value={BR5sigma} onChange={event => setBR5sigma(event.target.value)} min="0" step="0.01" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.8rem', width: '80px', marginLeft: '10px' }} />
            </div>
            )}
            {type555 === 'Uniform' && (
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
           Please select least one physical activity
        </div>
    )
}

{
    Number(resting) + Number(standing) + Number(light) + Number(moderate) + Number(heavy) < 99.9999 && selectedOptions2.length !== 0 && (
      
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>

                <br/> 
           The total percentage does not equal 100%. The remaining percentage will be considered as the "resting" status.
        </div>
    )}

<br/>

    <button onClick={() => setShowPopup3(false)} className="remove-button" style={{ fontSize: '14px', padding: '6px 10px', height: '40px', display: 'block', margin: '0 auto', position: 'absolute', top: '0px', right: '2px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'normal'}}>
  <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
</button>
  </div>
)}


    <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px', marginTop: '20px'}}>
      <label htmlFor="physicalActivity" style={{ fontSize: '0.9rem',  justifyContent: 'center', display: 'flex' }}>Physical activity</label>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginLeft: '15px' }}>
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

{selectedOptions2.includes("Light exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>Light</label>
      <label htmlFor="light" style={{ fontSize: '0.9rem' }}>exercise (%)</label>
    </div>
    <input type="number" id="light" value={light} onChange={event => setLight(event.target.value)} min="0" max={100 - resting - standing - moderate - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Moderate exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>Moderate</label>
      <label htmlFor="moderate" style={{ fontSize: '0.9rem' }}>exercise (%)</label>
    </div>
    <input type="number" id="moderate" value={moderate} onChange={event => setModerate(event.target.value)} min="0" max={100 - resting - standing - light - heavy} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', width: '70px', marginLeft: '10px' }} />
  </div>
)}

{selectedOptions2.includes("Heavy exercise") && (
  <div className="graph-choice" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px' }}>    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '14px' }}>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>Heavy</label>
      <label htmlFor="heavy" style={{ fontSize: '0.9rem' }}>exercise (%)</label>
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
                {showInfector ? 'Infector status and immunity' : 'Infector status and immunity'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInfector && (
  <div>

<div className="graph-choice" style={{ display: 'flex', justifyContent: 'center'}}>

<button
    className="fancy-buttonD"
    style={{ margin: '0', padding: '5px 10px', color: 'rgb(70, 140, 190)'}}
    onClick={() => setShowPopupResult2(true)}
  >
    {showResultdetail ? 'Calculated result' : 'Calculated result'}
  </button>
</div>

{showPopupResult2 && (
        <div className="popupR">
          <label style={{ fontSize: '1rem', display: 'block', textAlign: 'center', color: 'rgb(7,114,185)', fontFamily: 'Arial' }}>
            Number of infectors
          </label>
<div style={{ display: 'flex', justifyContent: 'center' }}>

          <Plot
  data={[
    {
      y: Infector_calculation(infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases),
      x: 'Number of infectors',
      type: 'box',
      boxpoints: 'outliers',
      orientation: 'v',
      showlegend: false, // Hide the legend
      name: 'Number of infectors', // Set the name to an empty string to remove the "trace 0" label
    },
  ]}
  config={{ displayModeBar: false }}
  layout={{
    width: 300,
    height: 600,
    margin: {
      t: 30,
      l: 30,
      r: 30,
      b: 50,
    },
    fontFamily: 'Arial',
    hovermode: 'x',
    xaxis: {
      zeroline: false, // Remove the line at y=0
      showline: false, // Remove the axis line
      showticklabels: false, // Remove the tick labels
      automargin: true,
    },
    yaxis: {
      title: 'Number of infectors (people)',  // Added this line
      zeroline: false, // Remove the line at x=0
      automargin: true,
      hoverformat: '.1f', // Display the hovered value with one decimal place in the tooltip
      tickformat: '.1f', // Set the format for the x-axis tick labels
    },
    hoverlabel: {
      bgcolor: 'rgba(7,114,185, 0.1)',
      bordercolor: 'transparent', // Set the border color of the hovered value
      font: { size: 14, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
      yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
    },
  }}
/>
</div>

{
    maskInfector > 0 &&  (
        <div style={{ 
            display: 'flex', 
            fontSize: '0.8rem',
            color: 'rgb(7,114,185)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px', // Adjust this value according to your need
        }}>
          <br/>
          The infector is wearing a mask, and it has been applied.
        </div>
    )}
          <button
            onClick={() => setShowPopupResult2(false)}
            className="remove-button"
            style={{
              fontSize: '14px',
              padding: '6px 10px',
              height: '40px',
              display: 'block',
              margin: '0 auto',
              position: 'absolute',
              top: '0px',
              right: '2px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'normal',
            }}
          >
            <span style={{ fontSize: '30px', color: '#999', fontWeight: 'normal', lineHeight: '1' }}>×</span>
          </button>
        </div>
      )}


<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

                <label htmlFor="infectorStatus" style={{ fontSize: '0.9rem'}}>Infector status: </label>
                <select
                    id="infectorStatus"
                    value={infectorStatus}
                    onChange={event => setInfectorStatus(event.target.value)}
                    style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}>
                   <option value="Regional prevalence">Regional prevalence</option>
                    <option value="Number of infector">Number of infector</option>                      
                </select>

            </div>


            <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

            {infectorStatus === 'Regional prevalence' && (
                <div>
                    <label htmlFor="casesPerDay" style={{ fontSize: '0.9rem'}}>Cases per 100,000 per day: </label>
                    <input type="number" id="casesPerDay" value={casesPerDay} onChange={event => setCasesPerDay(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>
            )}

            
{infectorStatus === 'Number of infector' && (
                <div>
                    <label htmlFor="infectorNumber" style={{ fontSize: '0.9rem'}}>Infector number: </label>
                    <input type="number" id="infectorNumber" value={infectorNumber} onChange={event => setInfectorNumber(event.target.value)} min="1" max={occupantNumber} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>

            )}


</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{infectorStatus === 'Regional prevalence' && (
                <div>
                    <label htmlFor="infectiousPeriod" style={{ fontSize: '0.9rem'}}>Infectious period (days): </label>
                    <input type="number" id="infectiousPeriod" value={infectiousPeriod} onChange={event => setInfectiousPeriod(event.target.value)} min="1" max="365" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                    <label htmlFor="unreportedCases" style={{ fontSize: '0.9rem'}}>Unreported cases (%): </label>
                    <input type="number" id="unreportedCases" value={unreportedCases} onChange={event => setUnreportedCases(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                </div>
            )}

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="immunityProportion" style={{ fontSize: '0.9rem'}}>Immunity proportion (%): </label>
        <input type="number" id="immunityProportion" value={immunityProportion} onChange={event => setImmunityProportion(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />

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
      {showHVAC ? 'Engineering controls - HVAC' : 'Engineering controls - HVAC'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showHVAC && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
<br/>
<label htmlFor="supplyAir" style={{ fontSize: '0.9rem' }}>Supply air (cfm): </label>
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

<label htmlFor="outdoorAir" style={{ fontSize: '0.9rem' }}>Outdoor air (cfm): </label>
<input
type="number"
id="outdoorAir"
value={outdoorAir}
onChange={event => setOutdoorAir(Number(event.target.value))}
min="0"
max={supplyAir}
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>
</div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>

    <label htmlFor="merv" style={{ fontSize: '0.9rem'}}>Filter rating:</label>
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

<label htmlFor="hvacUV" style={{ fontSize: '0.9rem'}}>UVC inactivation (%): </label>
      <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="hvacTreatment" style={{ fontSize: '0.9rem'}}>Air treatment ECA (cfm): </label>
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
{showInRoom ? 'Engineering controls - in room' : 'Engineering controls - in room'}
</button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInRoom && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomACQ" style={{ fontSize: '0.9rem'}}>Air cleaner</label>&nbsp;&nbsp;

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

<label htmlFor="roomAC" style={{ fontSize: '0.9rem'}}>ECA (cfm): </label>
      <input type="number" id="roomAC" value={roomAC} onChange={event => setRoomAC(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomUVQ" style={{ fontSize: '0.9rem'}}>In-room UV</label>&nbsp;&nbsp;

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

<label htmlFor="roomUV" style={{ fontSize: '0.9rem'}}>ECA (cfm): </label>
      <input type="number" id="roomUV" value={roomUV} onChange={event => setRoomUV(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomTreatmentQ" style={{ fontSize: '0.9rem', marginRight: '5px' }}>
  Air treatment device
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
  ECA (cfm):
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
      {showNonEngineering ? 'Nonengieering controls' : 'Nonengieering controls'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showNonEngineering && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="maskInfector" style={{ fontSize: '0.9rem'}}>
          Mask efficiency
          <br/>
          infector (%): </label>
      <input type="number" id="maskInfector" value={maskInfector} onChange={event => setMaskInfector(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding:  '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />

<label htmlFor="maskSus" style={{ fontSize: '0.9rem'}}>
  Mask efficiency
  <br/>
  susceptible (%): </label>
<input type="number" id="maskSus" value={maskSus} onChange={event => setMaskSus(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />
</div>
</div>
)}

<br/>

</div>
);

let convertedOutdoorAir = outdoorAir;
let convertedSupplyAir = supplyAir;
let convertedHVACUV = hvacUV;
let convertedHVACTreatment = hvacTreatment;
let convertedRoomUV = roomUV * roomUVQ;
let convertedRoomAC = roomAC * roomACQ;
let convertedRoomTreatment = roomTreatment * roomTreatmentQ;

let totalCADR = convertedOutdoorAir + (convertedSupplyAir - convertedOutdoorAir) * filter +
(convertedSupplyAir-convertedOutdoorAir) * (1 - filter) * hvacUV / 100 +
convertedHVACTreatment +
convertedRoomUV + convertedRoomAC + convertedRoomTreatment;

if (selectedTab === "LANCET") {
totalCADR = totalCADR - convertedHVACTreatment - convertedRoomTreatment;
} 


// Check the selected unit choice and perform conversions if necessary

if (unitChoice === "cfm") {
convertedOutdoorAir = outdoorAir.toFixed(0);
convertedSupplyAir = supplyAir.toFixed(0);
convertedHVACTreatment = hvacTreatment;
convertedRoomAC = (roomAC * roomACQ).toFixed(0);
convertedRoomUV = (roomUV * roomUVQ).toFixed(0);
convertedRoomTreatment = (roomTreatment * roomTreatmentQ).toFixed(0);
totalCADR = (totalCADR).toFixed(0);
}

const totalCADRR = (outdoorAir + 
(supplyAir - outdoorAir) * filter + 
(supplyAir - outdoorAir) * (1 - filter) * hvacUV / 100 +
hvacTreatment +
roomUV * roomUVQ + 
roomAC * roomACQ + 
roomTreatment * roomTreatmentQ)/occupantNumber;

const selectedTabText = () => {
  if (selectedTab === "ASHRAES") {
    return "ASHRAE 241 simple";
  } else if (selectedTab === "ASHRAE") {
    return "ASHRAE 241 advanced";
  } else if (selectedTab === "LANCET") {
    return  "LANCET";
  } else if (selectedTab === "Target") {
    return "Target risk" ;
  } else if (selectedTab === "Short") {
    return "Short-range";
  }
}


const isCompliant = totalCADRR >= ASHRAE;

const LANCET_ach = totalCADR/(floorArea * height) * 60;

const getLancetText = (LANCET_ach) => {
  if (LANCET_ach < 4) {
    return 'X';
  } else if (LANCET_ach >= 4 && LANCET_ach < 6) {
    return 'Good';
  } else if (LANCET_ach === 6) {
    return 'Better';
  } else {
    return 'Best';
  }
}

const LANCET_occ = totalCADR/(occupantNumber);

const getLancetText2 = (LANCET_occ) => {
  if (LANCET_occ < 21) {
    return 'X' ;
  } else if (LANCET_occ >= 21 && LANCET_occ < 30) {
    return 'Good';
  } else if (LANCET_occ === 30) {
    return 'Better';
  } else {
    return 'Best';
  }
}

const getLancetText3 = (totalCADR) => {
  if (totalCADR < floorArea * (ASHRAE62ft + 0.75) + occupantNumber * ASHRAE62p) {
    return 'X';
  } else if (totalCADR >= floorArea * (ASHRAE62ft + 0.75) + occupantNumber * ASHRAE62p && totalCADR < floorArea * (ASHRAE62ft + 1) + occupantNumber * ASHRAE62p) {
    return 'Good';
  } else if (totalCADR === floorArea * (ASHRAE62ft + 1) + occupantNumber * ASHRAE62p) {
    return 'Better';
  } else {
    return 'Best';
  }
}

const newF = (occupantNumber - infectorNumber) * (1 - immunityProportion / 100) * secondQuanta * secondBreath * 0.58857777021102 * occupiedPeriod / 60 * (1 - maskInfector / 100) * (1 - maskSus / 100);

const getLancetText4 = (totalCADR) => {
  if (totalCADR < newF) {
    return 'X';
  } else if (totalCADR >= newF && totalCADR < newF) {
    return 'Good';
  } else if (totalCADR === newF) {
    return 'Better';
  } else {
    return 'Best';
  }
}

return (
<div className="hero" id="hero">
<div className="container">
<div className="content">
<div className="card">
<div className="top-navbar">
  <a href="#ASHRAES" className={selectedTab === "ASHRAES" ? 'active' : ''} onClick={() => setSelectedTab("ASHRAES")}>ASHRAE 241 simple</a>
  <a 
  href="#ASHRAE" 
  className={selectedTab === "ASHRAE" ? 'active' : ''} 
  onClick={(event) => {
    setSelectedTab("ASHRAE");
    setVirusType("SARS-CoV-2");  // Set the virusType state here
    event.preventDefault();  // To prevent the default link behavior
  }}
>
  ASHRAE 241 advanced
</a>
</div>

<div className="top-navbar">
  <a href="#LANCET" className={selectedTab === "LANCET" ? 'active' : ''} onClick={() => setSelectedTab("LANCET")}>LANCET</a>
  <a href="#Target" className={selectedTab === "Target" ? 'active' : ''} onClick={() => setSelectedTab("Target")}>Target risk</a>
  <a href="#Short" className={selectedTab === "Short" ? 'active' : ''} onClick={() => setSelectedTab("Short")}>Short-range</a>
</div>
<br/>
  {selectedTab === "ASHRAES" && ASHRAESInputs()}
  {selectedTab === "ASHRAE" && ASHRAEInputs()}
  {selectedTab === "LANCET" && LANCETInputs()}
  {selectedTab === "Target" && TargetInputs()}
  {selectedTab === "Short" && ShortInputs()}
  </div>

  <div className="graph-container">
  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  {selectedTab === "ASHRAES" && (
    <>
    <div className="card2">
      <div className={`result-container ${isCompliant ? 'compliant' : 'noncompliant'}`}>
        {isCompliant ? (
          <>
            <span>✓</span>&nbsp;
            Complies with ASHRAE Standard 241
          </>
        ) : (
          <>
            <span>✗</span>&nbsp;
            Not Complies with ASHRAE Standard 241
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
          fontSize: '0.95rem'
        }}
      >
        Total ECA: {totalCADR} cfm&emsp; ECAi: {ASHRAE} cfm/person&emsp;V<sub>ECAi</sub>: {ASHRAE * occupantNumber} cfm
      </span>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>



      <button
        className={"fancy-button4"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide summary' : 'Show summary'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showSummary && selectedTab === "ASHRAES" && (

<div>

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
         <br/>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;UVC inactivation: {convertedHVACUV}%&emsp;Air treatment: {convertedHVACTreatment} {unitChoice}
       </div>
       [ In room ]&emsp;Air cleaner: {convertedRoomAC} {unitChoice}&emsp;UV: {convertedRoomUV} cfm&emsp;Air treatment: {convertedRoomTreatment} {unitChoice} 

     </div>
   </span>
   </div>
 )}
 </div>
</>
)}


  {selectedTab === "ASHRAE" && (
    <>
    <div className="card2">
      <div className={`result-container ${isCompliant ? 'compliant' : 'noncompliant'}`}>
        {isCompliant ? (
          <>
            <span>✓</span>&nbsp;
            Complies with ASHRAE Standard 241
          </>
        ) : (
          <>
            <span>✗</span>&nbsp;
            Not Complies with ASHRAE Standard 241
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
          fontSize: '0.95rem'
        }}
      >
        Total ECA: {totalCADR} {unitChoice}&emsp; ECAi: {ASHRAE} cfm/person&emsp;V<sub>ECAi</sub>: {ASHRAE * occupantNumber} cfm
        </span>
        <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem'
        }}
      >
        Individual risk: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}%&emsp;Absolute risk: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}%
      </span>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>



      <button
        className={"fancy-button4"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide summary' : 'Show summary'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showSummary && selectedTab === "ASHRAE" && (

<div>

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
         <br/>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;UVC inactivation: {convertedHVACUV}%&emsp;Air treatment: {convertedHVACTreatment} {unitChoice}
       </div>
       [ In room ]&emsp;Air cleaner: {convertedRoomAC} {unitChoice}&emsp;UVC: {convertedRoomUV} cfm&emsp;Air treatment: {convertedRoomTreatment} {unitChoice} 
       <br/>
       [ Nonengineering ]&emsp;{maskInfector === "0" && maskSus === "0" ? "No mask" : "Mask on"}
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
    <span style={{color: '#333333'}}>Compliance with LANCET </span>
    <table>
    <thead>
      <tr>
        <th style={{padding: '10px'}}>Equivalent air change rate</th>
        <th style={{padding: '10px'}}>Number of occupants</th>
        <th style={{padding: '10px'}}>Floor area + min ASHRAE</th>
        <th style={{padding: '10px'}}>Secondary attack rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td style={{padding: '10px', color: getLancetText(LANCET_ach) === 'X' ? '#B22222' : 'green'}}> {getLancetText(LANCET_ach)}</td>
  <td style={{padding: '10px', color: getLancetText2(LANCET_occ) === 'X' ? '#B22222' : 'green'}}> {getLancetText2(LANCET_occ)}</td>
  <td style={{padding: '10px', color: getLancetText3(totalCADR) === 'X' ? '#B22222' : 'green'}}> {getLancetText3(totalCADR)}</td>
  <td style={{padding: '10px', color: getLancetText4(totalCADR) === 'X' ? '#B22222' : 'green'}}> {getLancetText4(totalCADR)}</td>
      </tr>
    </tbody>
  </table>


      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <button
        className={"fancy-button4"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide summary' : 'Show summary'}
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
       Total NADR: {totalCADR} {unitChoice}
       <br/>
       [ Ventilation ]&emsp;OA: {convertedOutdoorAir} {unitChoice}&emsp;RA: {(convertedSupplyAir - convertedOutdoorAir).toFixed(1)} {unitChoice} ({((supplyAir - outdoorAir) / supplyAir * 100).toFixed(1)}%)
       </div>
       [ Filtration ]&emsp;HVAC filter: {filter*100}%&emsp;Portable air cleaner: {convertedRoomAC} {unitChoice}
       <br/>
       [ Disinfection ]&emsp;In-duct GUV: {convertedHVACUV} {unitChoice}&emsp;GUV system: {convertedRoomUV} {unitChoice}
       <br/>
       [ Mask ]&emsp;{maskInfector === "0" && maskSus === "0" ? "No mask" : "Mask on"}
     </div>
   </span>
 )}
 </div>
</>
)}


{selectedTab === "Target" && targetType === "Individual risk (%)" && (
    <>
    <div className="card2">
    <div className={`result-container2 ${risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target ? 'risk-better' : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] <= target2 ? 'risk-warning' : 'risk-danger'}`}>
      {risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target ? "Safer" : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target2 ? "Warning" : "Dangerous"}
    </div>


      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target ? 'risk-danger' : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target2 ? 'risk-warning' : 'risk-better'
        }}
      >
        Total ECA: {totalCADR} {unitChoice}&emsp;Individual risk: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}%&emsp;Absolute risk: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}%
      </span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target ? "Safer" : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target2 ? "Warning" : "Dangerous"
        }}
      >
        Estimated infected people: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}&emsp;Reproduction number: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}
      </span>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>



      <button
        className={"fancy-button4"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide summary' : 'Show summary'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showSummary && selectedTab === "Target" && (

<div>

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
         <br/>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;UVC inactivation: {convertedHVACUV}%&emsp;Air treatment: {convertedHVACTreatment} {unitChoice}
       </div>
       [ In room ]&emsp;Air cleaner: {convertedRoomAC} {unitChoice}&emsp;UV: {convertedRoomUV} cfm&emsp;Air treatment: {convertedRoomTreatment} {unitChoice} 
       <br/>
       [ Nonengineering ]&emsp;{maskInfector === "0" && maskSus === "0" ? "No mask" : "Mask on"}
     </div>
   </span>
   </div>
 )}
 </div>
</>
)}

{selectedTab === "Target" && targetType === "Absolute risk (%)" && (
    <>
    <div className="card2">
    <div className={`result-container2 ${risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target3 ? 'risk-better' : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target4 ? 'risk-warning' : 'risk-danger'}`}>
      {risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target3 ? "Safer" : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target4 ? "Warning" : "Dangerous"}
    </div>


      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target3 ? 'risk-better' : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target4 ? 'risk-warning' : 'risk-danger'
        }}
      >
        Total ECA: {totalCADR} {unitChoice}&emsp;Individual risk: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}%&emsp;Absolute risk: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}%
      </span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target3 ? "Safer" : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target4 ? "Warning" : "Safer"
        }}
      >
        Estimated infected people: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}&emsp;Reproduction number: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}
      </span>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>



      <button
        className={"fancy-button4"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide summary' : 'Show summary'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showSummary && selectedTab === "Target" && (

<div>

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
         <br/>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;UVC inactivation: {convertedHVACUV}%&emsp;Air treatment: {convertedHVACTreatment} {unitChoice}
       </div>
       [ In room ]&emsp;Air cleaner: {convertedRoomAC} {unitChoice}&emsp;UV: {convertedRoomUV} cfm&emsp;Air treatment: {convertedRoomTreatment} {unitChoice} 
       <br/>
       [ Nonengineering ]&emsp;{maskInfector === "0" && maskSus === "0" ? "No mask" : "Mask on"}
     </div>
   </span>
   </div>
 )}
 </div>
</>
)}

{selectedTab === "Target" && targetType === "Estimated infected people" && (
    <>
    <div className="card2">
    <div className={`result-container2 ${risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target5 ? 'risk-better' : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target6 ? 'risk-warning' : 'risk-danger'}`}>
      {risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target5 ? "Safer" : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target6 ? "Warning" : "Dangerous"}
    </div>


      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target5 ? 'risk-better' : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target6 ? 'risk-warning' : 'risk-danger'
        }}
      >
        Total ECA: {totalCADR} {unitChoice}&emsp;Individual risk: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}%&emsp;Absolute risk: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}%
      </span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target5 ? "Safer" : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target6 ? "Warning" : "Dangerous"
        }}
      >
        Estimated infected people: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}&emsp;Reproduction number: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}
      </span>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>



      <button
        className={"fancy-button4"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide summary' : 'Show summary'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showSummary && selectedTab === "Target" && (

<div>

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
         <br/>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;UVC inactivation: {convertedHVACUV}%&emsp;Air treatment: {convertedHVACTreatment} {unitChoice}
       </div>
       [ In room ]&emsp;Air cleaner: {convertedRoomAC} {unitChoice}&emsp;UV: {convertedRoomUV} cfm&emsp;Air treatment: {convertedRoomTreatment} {unitChoice} 
       <br/>
       [ Nonengineering ]&emsp;{maskInfector === "0" && maskSus === "0" ? "No mask" : "Mask on"}
     </div>
   </span>
   </div>
 )}
 </div>
</>
)}

{selectedTab === "Target" && targetType === "Reproduction number" && (
    <>
    <div className="card2">
    <div className={`result-container2 ${risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01)
   * 100)] < target7 ? 'risk-better' : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target8 ? 'risk-warning' : 'risk-danger'}`}>
      {risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target7 ? "Safer" : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target8 ? "Warning" : "Dangerous"}
    </div>


      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target7 ? 'risk-better' : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target8 ? 'risk-warning' : 'risk-safer'
        }}
      >
        Total ECA: {totalCADR} {unitChoice}&emsp;Individual risk: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}%&emsp;Absolute risk: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).AR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}%
      </span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target7 ? "Safer" : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target8 ? "Warning" : "Dangerous"
        }}
      >
        Estimated infected people: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Estimated.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}&emsp;Reproduction number: {parseFloat(risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Reproduction.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)]).toFixed(1)}
      </span>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>



      <button
        className={"fancy-button4"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide summary' : 'Show summary'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showSummary && selectedTab === "Target" && (

<div>

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
         <br/>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;UVC inactivation: {convertedHVACUV}%&emsp;Air treatment: {convertedHVACTreatment} {unitChoice}
       </div>
       [ In room ]&emsp;Air cleaner: {convertedRoomAC} {unitChoice}&emsp;UV: {convertedRoomUV} cfm&emsp;Air treatment: {convertedRoomTreatment} {unitChoice} 
       <br/>
       [ Nonengineering ]&emsp;{maskInfector === "0" && maskSus === "0" ? "No mask" : "Mask on"}
     </div>
   </span>
   </div>
 )}
 </div>
</>
)}


{selectedTab === "Short" && (
    <>
<div className="card2">
    <div className={
        distance < DD ? 'd-short' : 
        distance <= (DD + 3.28) ? 'd-between' : 
        'd-long'
    }>
        {
            distance < DD ? "Short-range zone" : 
            distance >= (DD + 3.28) ? "Long-range zone" : 
            "Between"
        }
    </div>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
        }}
      >
       Distance: {distance} ft&emsp;Exhaled velocity: {parseFloat(ft_m(Velocity_calculation(breathing, whispered, voiced, coughing, whispering, speaking, 
    maskInfector).sort((a, b) => a - b)[Math.floor((percentile-0.1) * 10)])).toFixed(1)} ft/s&emsp;Risk by distance: {parseFloat(distance_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
      typeCv, CVmu, CVsigma, CVmin, CVmax,
      type111, type222, type333, type444, type555, 
      resting, standing, light, moderate, heavy, 
      BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
      BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
      BR5mu, BR5sigma, BR5min, BR5max,
      type1, type2, type3, type4, type5, type6, 
      breathing, whispered, voiced, coughing, whispering, speaking, 
      EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
      EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
      EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
      EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
      EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
      EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
      maskInfector, maskSus,
      infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
      floorArea, height, occupiedPeriod, immunityProportion,
      outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
      typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma)).toFixed(1)}%
      </span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target ? "Safer" : risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
            typeCv, CVmu, CVsigma, CVmin, CVmax,
            type111, type222, type333, type444, type555, 
            resting, standing, light, moderate, heavy, 
            BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
            BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
            BR5mu, BR5sigma, BR5min, BR5max,
            type1, type2, type3, type4, type5, type6, 
            breathing, whispered, voiced, coughing, whispering, speaking, 
            EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
            EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
            EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
            EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
            EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
            EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
            maskInfector, maskSus,
            infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
            floorArea, height, occupiedPeriod, immunityProportion,
            outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
            typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
          ).IR.sort((a, b) => a - b)[Math.floor((percentile-0.01) * 100)] < target2 ? "Warning" : "Dangerous"
        }}
      >

      </span>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>



      <button
        className={"fancy-button4"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide summary' : 'Show summary'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showSummary && selectedTab === "Short" && (

<div>

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
         <br/>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;UVC inactivation: {convertedHVACUV}%&emsp;Air treatment: {convertedHVACTreatment} {unitChoice}
       </div>
       [ In room ]&emsp;Air cleaner: {convertedRoomAC} {unitChoice}&emsp;UV: {convertedRoomUV} cfm&emsp;Air treatment: {convertedRoomTreatment} {unitChoice} 
       <br/>
       [ Nonengineering ]&emsp;{maskInfector === "0" && maskSus === "0" ? "No mask" : "Mask on"}
     </div>
   </span>
   </div>
 )}
 </div>
  
    </>

)}

<br/>

{selectedTab === "Short" && (
<>
    
<div style={{ width: '100%', height: '250px' }}>
<ResponsiveContainer width='100%' height='100%'>
        <AreaChart data={exhale} margin={{ top: 20, right: 70, left: 70, bottom: 20 }}>
             
                <XAxis 
                    dataKey="distance" 
                    ticks={[0, 5, 10, 15, 20]}
                    tick={{ fontSize: '1rem' }}
                    label={{
                        value: "Distance between infector and susceptible (ft)",
                        position: 'bottom',
                        offset: 0,
                        style: { fontSize: '1rem', color: '#222222' }
                    }}
                />
                
                <YAxis 
                    ticks={[0, 1.64, 3.28]}
                    tick={{ fontSize: '1rem' }}
                    tickFormatter={tick => {
                        if (tick === 3.28) return '+1.6 ft';
                        if (tick === 1.64) return 'Exhalation';
                        if (tick === 0) return '-1.6 ft';
                        return tick.toString();
                    }}

                />


            <ReferenceArea x1={0} x2={DD} y1={0} y2={3.28} label={{ value: "Short-range", position: "insideBottom", style: { fontSize: '1rem' } }} fillOpacity={0.15} fill="red" />
            <ReferenceArea x1={DD} x2={DD + 3.28} y1={0} y2={3.28} 
               label={{ position: "insideBottom", style: { fontSize: '1rem' } }} 
               fillOpacity={0.2} 
               fill="darkorange" />
            <ReferenceArea x1={DD + 3.28} x2={20} y1={0} y2={3.28} label={{ value: "Long-range", position: "insideBottom", style: { fontSize: '1rem' } }} fillOpacity={0.2} fill="gold" />

            <Area dataKey="jet" stroke="none"  fillOpacity={0.7} fill="#8884d8" />


            <ReferenceLine x={distance} stroke="grey" strokeDasharray="3 3" strokeOpacity={0.5}
            label={{ value: `${distance} ft`, position: 'top', style: { fontSize: '1rem', color: 'black' } }} />

        </AreaChart>
    </ResponsiveContainer>
  
    </div>

    </>
    )}


{selectedTab === "LANCET" && (

    <div className="graph-choice2">
      <label htmlFor="graphChoice2" style={{fontSize: '0.9rem'}}> Graph: </label>
      <select
        id="graphChoice2"
        value={graphChoice2}
        onChange={(e) => setGraphChoice2(e.target.value)}
        style={{ fontSize: '0.9rem', marginRight: '20px' }}
      >
        <option value="Equivalent air change rate">
          Equivalent air change rate
        </option>
        <option value="Number of occupants">
          Number of occupants
        </option>
        <option value="Floor area + min ASHRAE">
          Floor area + min ASHRAE
        </option>
        <option value="Secondary attack rate">
          Secondary attack rate
        </option>

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
    <option value="Filter efficiency vs. Outdoor air">
      Filter efficiency vs. Outdoor air
    </option>

    <option value="Infection risk analysis">
    Infection risk analysis
    </option>

  </select>

</div>

)}

{selectedTab === "Target" && (

<div className="graph-choice">
  <label htmlFor="graphChoiceT" style={{fontSize: '0.9rem'}}> Graph: </label>
  <select
    id="graphChoiceT"
    value={graphChoiceT}
    onChange={(e) => setGraphChoiceT(e.target.value)}
    style={{ fontSize: '0.9rem', marginRight: '20px' }}
  >
    <option value="Filter efficiency vs. Outdoor air">
      Filter efficiency vs. Outdoor air
    </option>

    <option value="Infection risk analysis">
    Infection risk analysis
    </option>
  </select>

</div>

)}


    <div className="chart">

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {selectedTab === "ASHRAE" && graphChoice === "Filter efficiency vs. Outdoor air" && (
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
        VBmin={VBmin}
        VBmax={VBmax}
        Valpha={Valpha}
        Vbeta={Vbeta}
        kmin={kmin}
        kmax={kmax}
        Kmin={Kmin}
        Kmax={Kmax}
Cimin={Cimin}
Cimax={Cimax}
typeCv={typeCv}
CVmu={CVmu}
CVsigma={CVsigma}
CVmin={CVmin}
CVmax={CVmax}
type111={type111}
type222={type222}
type333={type333}
type444={type444}
type555={type555}
resting={resting}
standing={standing}
light={light}
moderate={moderate}
heavy={heavy}
BR1mu={BR1mu}
BR1sigma={BR1sigma}
BR1min={BR1min}
BR1max={BR1max}
BR2mu={BR2mu}
BR2sigma={BR2sigma}
BR2min={BR2min}
BR2max={BR2max}
BR3mu={BR3mu}
BR3sigma={BR3sigma}
BR3min={BR3min}
BR3max={BR3max}
BR4mu={BR4mu}
BR4sigma={BR4sigma}
BR4min={BR4min}
BR4max={BR4max}
BR5mu={BR5mu}
BR5sigma={BR5sigma}
BR5min={BR5min}
BR5max={BR5max}
type1={type1}
type2={type2}
type3={type3}
type4={type4}
type5={type5}
type6={type6}
breathing={breathing}
whispered={whispered}
voiced={voiced}
coughing={coughing}
whispering={whispering}
speaking={speaking}
EA1mu={EA1mu}
EA1sigma={EA1sigma}
EA1min={EA1min}
EA1max={EA1max}
DD1mu={DD1mu}
DD1sigma={DD1sigma}
DD1min={DD1min}
DD1max={DD1max}
EA2mu={EA2mu}
EA2sigma={EA2sigma}
EA2min={EA2min}
EA2max={EA2max}
DD2mu={DD2mu}
DD2sigma={DD2sigma}
DD2min={DD2min}
DD2max={DD2max}
EA3mu={EA3mu}
EA3sigma={EA3sigma}
EA3min={EA3min}
EA3max={EA3max}
DD3mu={DD3mu}
DD3sigma={DD3sigma}
DD3min={DD3min}
DD3max={DD3max}
EA4mu={EA4mu}
EA4sigma={EA4sigma}
EA4min={EA4min}
EA4max={EA4max}
DD4mu={DD4mu}
DD4sigma={DD4sigma}
DD4min={DD4min}
DD4max={DD4max}
EA5mu={EA5mu}
EA5sigma={EA5sigma}
EA5min={EA5min}
EA5max={EA5max}
DD5mu={DD5mu}
DD5sigma={DD5sigma}
DD5min={DD5min}
DD5max={DD5max}
EA6mu={EA6mu}
EA6sigma={EA6sigma}
EA6min={EA6min}
EA6max={EA6max}
DD6mu={DD6mu}
DD6sigma={DD6sigma}
DD6min={DD6min}
DD6max={DD6max}
typeD={typeD}
typeInact={typeInact}
infilmin={infilmin}
infilmax={infilmax}
dmin={dmin}
dmax={dmax}
dmu={dmu}
dsigma={dsigma}
inactmin={inactmin}
inactmax={inactmax}
inactmu={inactmu}
inactsigma={inactsigma}
percentile={percentile}
        
        />
      )}
      
      {((selectedTab === "ASHRAE" && graphChoice === "Infection risk analysis")) && (
<div>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>

<Plot
data={[
{
y: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).IR,
x: 'Individual risk',
type: 'box',
boxpoints: 'outliers',
orientation: 'v',
showlegend: false, // Hide the legend
name: 'Individual risk', // Set the name to an empty string to remove the "trace 0" label
},
]}
config={{ displayModeBar: false }}
layout={{
width: 250,
height: 400,
margin: {
t: 30,
l: 30,
r: 30,
b: 50,
},
fontFamily: 'Arial',
hovermode: 'x',
xaxis: {
zeroline: false, // Remove the line at y=0
showline: false, // Remove the axis line
showticklabels: false, // Remove the tick labels
automargin: true,
},
yaxis: {
title: 'Individual risk (%)',  // Added this line
zeroline: false, // Remove the line at x=0
automargin: true,
hoverformat: '.2f', // Display the hovered value with one decimal place in the tooltip
tickformat: '.2f', // Set the format for the x-axis tick labels
},
hoverlabel: {
bgcolor: 'rgba(7,114,185, 0.1)',
bordercolor: 'transparent', // Set the border color of the hovered value
font: { size: 12, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
},
}}
/>

<Plot
data={[
{
y: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).AR,
x: 'Absolute risk',
type: 'box',
boxpoints: 'outliers',
orientation: 'v',
showlegend: false, // Hide the legend
name: 'Absolute risk', // Set the name to an empty string to remove the "trace 0" label
},
]}
config={{ displayModeBar: false }}
layout={{
width: 250,
height: 400,
margin: {
t: 30,
l: 30,
r: 30,
b: 50,
},
fontFamily: 'Arial',
hovermode: 'x',
xaxis: {
zeroline: false, // Remove the line at y=0
showline: false, // Remove the axis line
showticklabels: false, // Remove the tick labels
automargin: true,
},
yaxis: {
title: 'Absolute risk (%)',  // Added this line
zeroline: false, // Remove the line at x=0
automargin: true,
hoverformat: '.2f', // Display the hovered value with one decimal place in the tooltip
tickformat: '.2f', // Set the format for the x-axis tick labels
},
hoverlabel: {
bgcolor: 'rgba(7,114,185, 0.1)',
bordercolor: 'transparent', // Set the border color of the hovered value
font: { size: 12, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
},
}}
/>

</div>

</div>
      )}

{((selectedTab === "Target" && graphChoiceT === "Infection risk analysis")) && (
<div>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>

<Plot
data={[
{
y: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).IR,
x: 'Individual risk',
type: 'box',
boxpoints: 'outliers',
orientation: 'v',
showlegend: false, // Hide the legend
name: 'Individual risk', // Set the name to an empty string to remove the "trace 0" label
},
]}
config={{ displayModeBar: false }}
layout={{
width: 250,
height: 400,
margin: {
t: 30,
l: 30,
r: 30,
b: 50,
},
fontFamily: 'Arial',
hovermode: 'x',
xaxis: {
zeroline: false, // Remove the line at y=0
showline: false, // Remove the axis line
showticklabels: false, // Remove the tick labels
automargin: true,
},
yaxis: {
title: 'Individual risk (%)',  // Added this line
zeroline: false, // Remove the line at x=0
automargin: true,
hoverformat: '.2f', // Display the hovered value with one decimal place in the tooltip
tickformat: '.2f', // Set the format for the x-axis tick labels
},
hoverlabel: {
bgcolor: 'rgba(7,114,185, 0.1)',
bordercolor: 'transparent', // Set the border color of the hovered value
font: { size: 12, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
},
}}
/>

<Plot
data={[
{
y: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).AR,
x: 'Absolute risk',
type: 'box',
boxpoints: 'outliers',
orientation: 'v',
showlegend: false, // Hide the legend
name: 'Absolute risk', // Set the name to an empty string to remove the "trace 0" label
},
]}
config={{ displayModeBar: false }}
layout={{
width: 250,
height: 400,
margin: {
t: 30,
l: 30,
r: 30,
b: 50,
},
fontFamily: 'Arial',
hovermode: 'x',
xaxis: {
zeroline: false, // Remove the line at y=0
showline: false, // Remove the axis line
showticklabels: false, // Remove the tick labels
automargin: true,
},
yaxis: {
title: 'Absolute risk (%)',  // Added this line
zeroline: false, // Remove the line at x=0
automargin: true,
hoverformat: '.2f', // Display the hovered value with one decimal place in the tooltip
tickformat: '.2f', // Set the format for the x-axis tick labels
},
hoverlabel: {
bgcolor: 'rgba(7,114,185, 0.1)',
bordercolor: 'transparent', // Set the border color of the hovered value
font: { size: 12, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
},
}}
/>

</div>

<div style={{ display: 'flex', justifyContent: 'center' }}>

<Plot
data={[
{
y: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Estimated,
x: 'Estimated infected people',
type: 'box',
boxpoints: 'outliers',
orientation: 'v',
showlegend: false, // Hide the legend
name: 'Estimated infected people', // Set the name to an empty string to remove the "trace 0" label
},
]}
config={{ displayModeBar: false }}
layout={{
width: 250,
height: 400,
margin: {
t: 30,
l: 30,
r: 30,
b: 50,
},
fontFamily: 'Arial',
hovermode: 'x',
xaxis: {
zeroline: false, // Remove the line at y=0
showline: false, // Remove the axis line
showticklabels: false, // Remove the tick labels
automargin: true,
},
yaxis: {
title: 'Estimated infected people',  // Added this line
zeroline: false, // Remove the line at x=0
automargin: true,
hoverformat: '.1f', // Display the hovered value with one decimal place in the tooltip
tickformat: '.1f', // Set the format for the x-axis tick labels
},
hoverlabel: {
bgcolor: 'rgba(7,114,185, 0.1)',
bordercolor: 'transparent', // Set the border color of the hovered value
font: { size: 12, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
},
}}
/>

<Plot
data={[
{
y: risk_Calculation(VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  maskInfector, maskSus,
  infectorStatus, infectorNumber, occupantNumber, casesPerDay, infectiousPeriod, unreportedCases,
  floorArea, height, occupiedPeriod, immunityProportion,
  outdoorAir, supplyAir, filter, hvacUV, hvacTreatment, roomUV, roomUVQ, roomAC, roomACQ, roomTreatment, roomTreatmentQ,
  typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma
).Reproduction,
x: 'Reproducion number',
type: 'box',
boxpoints: 'outliers',
orientation: 'v',
showlegend: false, // Hide the legend
name: 'Reproduction number', // Set the name to an empty string to remove the "trace 0" label
},
]}
config={{ displayModeBar: false }}
layout={{
width: 250,
height: 400,
margin: {
t: 30,
l: 30,
r: 30,
b: 50,
},
fontFamily: 'Arial',
hovermode: 'x',
xaxis: {
zeroline: false, // Remove the line at y=0
showline: false, // Remove the axis line
showticklabels: false, // Remove the tick labels
automargin: true,
},
yaxis: {
title: 'Reproduction number',  // Added this line
zeroline: false, // Remove the line at x=0
automargin: true,
hoverformat: '.1f', // Display the hovered value with one decimal place in the tooltip
tickformat: '.1f', // Set the format for the x-axis tick labels
},
hoverlabel: {
bgcolor: 'rgba(7,114,185, 0.1)',
bordercolor: 'transparent', // Set the border color of the hovered value
font: { size: 12, color: 'black', family: 'arial' }, // Set the font size, color, and family of the hovered value text
yanchor: 'bottom', // Set the vertical anchor to 'bottom' to align the label below the data point
},
}}
/>

</div>
</div>
      )}


{selectedTab === "ASHRAES"  && (
        <ASHRAESApp selectedSubcategory={selectedSubcategory} 
        floorArea={floorArea} 
        height={height} 
        occupantNumber={occupantNumber} 
        occupiedPeriod={occupiedPeriod} 
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
        ASHRAE={ASHRAE}
        />
      )}
      

      {selectedTab === "LANCET" && graphChoice2 === "Equivalent air change rate"  && (
        <LANCET1cfmApp selectedSubcategory={selectedSubcategory} 
        floorArea={floorArea} 
        height={height} 
        occupantNumber={occupantNumber} 
        occupiedPeriod={occupiedPeriod} 
        supplyAir={supplyAir} 
        outdoorAir={outdoorAir} 
        merv={merv} 
        filter={filter}
        hvacUV={hvacUV} 
        roomUV={roomUV} 
        roomAC={roomAC} 
        roomUVQ={roomUVQ} 
        roomACQ={roomACQ} 
        />
        
      )}

{selectedTab === "LANCET" && graphChoice2 === "Number of occupants" && (
        <LANCET2cfmApp selectedSubcategory={selectedSubcategory} 
        floorArea={floorArea} 
        height={height} 
        occupantNumber={occupantNumber} 
        occupiedPeriod={occupiedPeriod} 
        supplyAir={supplyAir} 
        outdoorAir={outdoorAir} 
        merv={merv} 
        filter={filter}
        hvacUV={hvacUV} 
        roomUV={roomUV} 
        roomAC={roomAC} 
        roomUVQ={roomUVQ} 
        roomACQ={roomACQ} 
        />
      )}

{selectedTab === "LANCET" && graphChoice2 === "Floor area + min ASHRAE" && (
        <LANCET3cfmApp selectedSubcategory={selectedSubcategory} 
        floorArea={floorArea} 
        height={height} 
        occupantNumber={occupantNumber} 
        occupiedPeriod={occupiedPeriod} 
        supplyAir={supplyAir} 
        outdoorAir={outdoorAir} 
        merv={merv} 
        filter={filter}
        hvacUV={hvacUV} 
        roomUV={roomUV} 
        roomAC={roomAC} 
        roomUVQ={roomUVQ} 
        roomACQ={roomACQ} 
        ASHRAE62ft={ASHRAE62ft}
        ASHRAE62p={ASHRAE62p}
/>
      )}

{selectedTab === "LANCET" && graphChoice2 === "Secondary attack rate"&& (
        <LANCET4cfmApp selectedSubcategory={selectedSubcategory} 
        floorArea={floorArea} 
        height={height} 
        occupantNumber={occupantNumber} 
        occupiedPeriod={occupiedPeriod} 
        immunityProportion={immunityProportion} 
        infectorNumber={infectorNumber}
        supplyAir={supplyAir} 
        outdoorAir={outdoorAir} 
        merv={merv} 
        filter={filter}
        hvacUV={hvacUV}         
        roomUV={roomUV} 
        roomAC={roomAC} 
        roomUVQ={roomUVQ} 
        roomACQ={roomACQ} 
        maskInfector={maskInfector} 
        maskSus={maskSus}
        secondQuanta={secondQuanta}
        secondBreath={secondBreath}
        />
      )}

     
{selectedTab === "Target" && graphChoiceT === "Filter efficiency vs. Outdoor air" && unitChoice === "cfm" && (
        <Target1cfmApp selectedSubcategory={selectedSubcategory} 
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
        VBmin={VBmin}
        VBmax={VBmax}
        Valpha={Valpha}
        Vbeta={Vbeta}
        kmin={kmin}
        kmax={kmax}
        Kmin={Kmin}
        Kmax={Kmax}
Cimin={Cimin}
Cimax={Cimax}
typeCv={typeCv}
CVmu={CVmu}
CVsigma={CVsigma}
CVmin={CVmin}
CVmax={CVmax}
type111={type111}
type222={type222}
type333={type333}
type444={type444}
type555={type555}
resting={resting}
standing={standing}
light={light}
moderate={moderate}
heavy={heavy}
BR1mu={BR1mu}
BR1sigma={BR1sigma}
BR1min={BR1min}
BR1max={BR1max}
BR2mu={BR2mu}
BR2sigma={BR2sigma}
BR2min={BR2min}
BR2max={BR2max}
BR3mu={BR3mu}
BR3sigma={BR3sigma}
BR3min={BR3min}
BR3max={BR3max}
BR4mu={BR4mu}
BR4sigma={BR4sigma}
BR4min={BR4min}
BR4max={BR4max}
BR5mu={BR5mu}
BR5sigma={BR5sigma}
BR5min={BR5min}
BR5max={BR5max}
type1={type1}
type2={type2}
type3={type3}
type4={type4}
type5={type5}
type6={type6}
breathing={breathing}
whispered={whispered}
voiced={voiced}
coughing={coughing}
whispering={whispering}
speaking={speaking}
EA1mu={EA1mu}
EA1sigma={EA1sigma}
EA1min={EA1min}
EA1max={EA1max}
DD1mu={DD1mu}
DD1sigma={DD1sigma}
DD1min={DD1min}
DD1max={DD1max}
EA2mu={EA2mu}
EA2sigma={EA2sigma}
EA2min={EA2min}
EA2max={EA2max}
DD2mu={DD2mu}
DD2sigma={DD2sigma}
DD2min={DD2min}
DD2max={DD2max}
EA3mu={EA3mu}
EA3sigma={EA3sigma}
EA3min={EA3min}
EA3max={EA3max}
DD3mu={DD3mu}
DD3sigma={DD3sigma}
DD3min={DD3min}
DD3max={DD3max}
EA4mu={EA4mu}
EA4sigma={EA4sigma}
EA4min={EA4min}
EA4max={EA4max}
DD4mu={DD4mu}
DD4sigma={DD4sigma}
DD4min={DD4min}
DD4max={DD4max}
EA5mu={EA5mu}
EA5sigma={EA5sigma}
EA5min={EA5min}
EA5max={EA5max}
DD5mu={DD5mu}
DD5sigma={DD5sigma}
DD5min={DD5min}
DD5max={DD5max}
EA6mu={EA6mu}
EA6sigma={EA6sigma}
EA6min={EA6min}
EA6max={EA6max}
DD6mu={DD6mu}
DD6sigma={DD6sigma}
DD6min={DD6min}
DD6max={DD6max}
typeD={typeD}
typeInact={typeInact}
infilmin={infilmin}
infilmax={infilmax}
dmin={dmin}
dmax={dmax}
dmu={dmu}
dsigma={dsigma}
inactmin={inactmin}
inactmax={inactmax}
inactmu={inactmu}
inactsigma={inactsigma}
percentile={percentile}
target={target}
target2={target2}
target3={target3}
target4={target4}
target5={target5}
target6={target6}
target7={target7}
target8={target8}
targetType={targetType}
        />
      )}

    </div>
    <br/>
    <br/>
    <br/>
    <button onClick={() => { handleSaveClick(); handleAddSimulation2(); }} className="fancy-button" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>
  Save result to compare
</button>

  </div>
</div>
</div>
</div>
);
};

export default Hero;