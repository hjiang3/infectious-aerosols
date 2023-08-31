import React, { useState, useEffect, useRef } from 'react'; 
import * as d3 from 'd3';
import './FancyButton4.css';
import * as simpleStats from 'simple-statistics';

const LANCET3cfm = ({ selectedSubcategory, floorArea, 
  height, occupantNumber, occupiedPeriod, expiratoryActivity, physicalActivity,
  virusType, immunityProportion, infectorStatus, casesPerDay, infectiousPeriod, unreportedCases, infectorNumber,
  supplyAir, outdoorAir, merv, filter, hvacUV, hvacTreatment,
  roomTreatment, roomUV, roomAC, roomTreatmentQ, roomUVQ, roomACQ, maskInfector, maskSus, ASHRAE, ASHRAE2, ASHRAE62ft, ASHRAE62p,
  typeCi, CiBmin, CiBmax, Cialpha, Cibeta, Cimin, Cimax,
  typeCv, CVmu, CVsigma, CVmin, CVmax,
  type111, type222, type333, type444, type555, 
  resting, standing, light, moderate, heavy, 
  BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
  BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
  BR5mu, BR5sigma, BR5min, BR5max,
  ACM, type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
  EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
  EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
  EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
  EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
  EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
  EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
  EA1_1, EA1_2, EA1_3, EA1_4, EA2_1, EA2_2, EA2_3, EA2_4,
  EA3_1, EA3_2, EA3_3, EA3_4, EA4_1, EA4_2, EA4_3, EA4_4,
  EA5_1, EA5_2, EA5_3, EA5_4, EA6_1, EA6_2, EA6_3, EA6_4,
  typeInact, infilmin, infilmax, dmin, dmax, inactmin, inactmax, inactmu, inactsigma, percentile}) => {

 const [showControl, setShowControl] = useState(false);
 const d3Container = useRef(null);

 const [ac, setAc] = useState(false);
 const [uvc, setUvc] = useState(false);
 const [air, setAir] = useState(false);


 useEffect(() => {
  setAc(roomACQ !== 0);
  setUvc(roomUVQ !== 0);
  setAir(roomTreatmentQ !== 0);
}, [roomACQ, roomUVQ, roomTreatmentQ]);

    

  const max = (supplyAir / 20);

  const xLabels = [...Array(21).keys()].map((i) => (i * max).toFixed(0));
  const yLabels = [...Array(21).keys()].map((i) => (i * 5).toFixed(0));

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


function Vd_lognormal(EAmuInput, EAsigmaInput, DDmuInput, DDsigmaInput) {

  const EAmu = Math.log(Number(EAmuInput) ** 2 / Math.sqrt(Number(EAmuInput) ** 2 + Number(EAsigmaInput) ** 2));
  const EAsigma = Math.sqrt(Math.log(Number(EAsigmaInput) ** 2 / Number(EAmuInput) ** 2 + 1));
  const DDmu = Math.log(Number(DDmuInput) ** 2 / Math.sqrt(Number(DDmuInput) ** 2 + Number(DDsigmaInput) ** 2));
  const DDsigma = Math.sqrt(Math.log(Number(DDsigmaInput) ** 2 / Number(DDmuInput) ** 2 + 1));

  const EA = Math.exp(NORMINV(Math.random(), EAmu, EAsigma))
  const DD = Math.exp(NORMINV(Math.random(), DDmu, DDsigma))

 return EA * Math.pow((DD * Math.pow(10, -6)), 3) * Math.PI / 6 * Math.pow(10, 6) / Math.pow(0.01, 3);

}

function Vd_uniform(EAmin, EAmax, DDmin, DDmax) {
  return (Number(EAmin) + (Number(EAmax) - Number(EAmin)) * Math.random()) * 
         (Math.pow((Number(DDmin) + (Number(DDmax) - Number(DDmin)) * Math.random()) * Math.pow(10, -6), 3)) * 
         Math.PI / 6 * Math.pow(10, 6) / Math.pow(0.01, 3);
}

function Vd_constant(EA_1, EA_2, EA_3, EA_4) {
  return EA_1 * (Math.pow(0.8 * Math.pow(10, -6), 3)) * Math.PI / 6 * Math.pow(10, 6) / Math.pow(0.01, 3) +
  EA_2 * (Math.pow(1.8 * Math.pow(10, -6), 3)) * Math.PI / 6 * Math.pow(10, 6) / Math.pow(0.01, 3) +
  EA_3 * (Math.pow(3.5 * Math.pow(10, -6), 3)) * Math.PI / 6 * Math.pow(10, 6) / Math.pow(0.01, 3) +
  EA_4 * (Math.pow(5.5 * Math.pow(10, -6), 3)) * Math.PI / 6 * Math.pow(10, 6) / Math.pow(0.01, 3);
}

function BR_lognormal(BRmuInput, BRsigmaInput) {

  const BRmu = Math.log(BRmuInput ** 2 / Math.sqrt(BRmuInput ** 2 + BRsigmaInput ** 2));
  const BRsigma = Math.sqrt(Math.log(BRsigmaInput ** 2 / BRmuInput ** 2 + 1));

 return Math.exp(NORMINV(Math.random(), BRmu, BRsigma));

}

function BR_uniform(BRmin, BRmax) {

 return Number(BRmin) + (Number(BRmax) - Number(BRmin)) * Math.random();

}

function Cv_normal(Cvmu, Cvsigma) {
  
 return  Math.pow(10, NORMINV(Math.random(), Cvmu, Cvsigma));
}


 function Cv_uniform(Cvmin, Cvmax) {

  return (Number(Cvmin) + (Number(Cvmax) - Number(Cvmin)) * Math.random()) * Math.pow(10, 6);
 
 }

 function Ci_beta(CiminInput, CimaxInput, CialphaInput, CibetaInput) {

  return betaInv(Math.random(), CialphaInput, CibetaInput) * (CimaxInput - CiminInput) + CiminInput;
}

 function Ci_uniform(Cimin, Cimax) {

  return Number(Cimin) + (Number(Cimax) - Number(Cimin)) * Math.random();
 
 }


 function Cv_calculation(typeCv, Cvmu, Cvsigma, Cvmin, Cvmax) {

  if (typeCv == "Uniform") {

    return Cv_uniform(Cvmin, Cvmax);

  } else {

    return Cv_normal(Cvmu, Cvsigma);

  }
 }

 function Ci_calculation(typeCi,  CiBmin, CiBmax, Cialpha, Cibeta, Cimin, Cimax) {

  if (typeCi == "Uniform") {

    return Ci_uniform(Cimin, Cimax);

  } else {

    return Ci_beta(CiBmin, CiBmax, Cialpha, Cibeta);

  }
 }


 function Vd_calculation(ACM, type1, type2, type3, type4, type5, type6, 
  breathing, whispered, voiced, coughing, whispering, speaking, 
   EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
   EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
   EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
   EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
   EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
   EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
   EA1_1, EA1_2, EA1_3, EA1_4, EA2_1, EA2_2, EA2_3, EA2_4,
   EA3_1, EA3_2, EA3_3, EA3_4, EA4_1, EA4_2, EA4_3, EA4_4,
   EA5_1, EA5_2, EA5_3, EA5_4, EA6_1, EA6_2, EA6_3, EA6_4) {
 
 
  let Vd1, Vd2, Vd3, Vd4, Vd5, Vd6; // Declare the variables
 
 if (ACM == "Continuous Distribution" && type1 == "Uniform") {
   Vd1 = Vd_uniform(EA1min, EA1max, DD1min, DD1max)
 } else if (ACM == "Continuous Distribution" && type1 == "Lognormal")  {
   Vd1 = Vd_lognormal(EA1mu, EA1sigma, DD1mu, DD1sigma)
 } else {
   Vd1 = Vd_constant(EA1_1, EA1_2, EA1_3, EA1_4)
 }
 
 if (ACM == "Continuous Distribution" && type2 == "Uniform") {
   Vd2 = Vd_uniform(EA2min, EA2max, DD2min, DD2max)
 } else if (ACM == "Continuous Distribution" && type2 == "Lognormal")  {
   Vd2 = Vd_lognormal(EA2mu, EA2sigma, DD2mu, DD2sigma)
 } else {
   Vd2 = Vd_constant(EA2_1, EA2_2, EA2_3, EA2_4)
 }
 
 if (ACM == "Continuous Distribution" && type3 == "Uniform") {
   Vd3 = Vd_uniform(EA3min, EA3max, DD3min, DD3max);
 } else if (ACM == "Continuous Distribution" && type3 == "Lognormal") {
   Vd3 = Vd_lognormal(EA3mu, EA3sigma, DD3mu, DD3sigma);
 } else {
   Vd3 = Vd_constant(EA3_1, EA3_2, EA3_3, EA3_4);
 }
 
 if (ACM == "Continuous Distribution" && type4 == "Uniform") {
   Vd4 = Vd_uniform(EA4min, EA4max, DD4min, DD4max);
 } else if (ACM == "Continuous Distribution" && type4 == "Lognormal") {
   Vd4 = Vd_lognormal(EA4mu, EA4sigma, DD4mu, DD4sigma);
 } else {
   Vd4 = Vd_constant(EA4_1, EA4_2, EA4_3, EA4_4);
 }
 
 if (ACM == "Continuous Distribution" && type5 == "Uniform") {
   Vd5 = Vd_uniform(EA5min, EA5max, DD5min, DD5max);
 } else if (ACM == "Continuous Distribution" && type5 == "Lognormal") {
   Vd5 = Vd_lognormal(EA5mu, EA5sigma, DD5mu, DD5sigma);
 } else {
   Vd5 = Vd_constant(EA5_1, EA5_2, EA5_3, EA5_4);
 }
 
 if (ACM == "Continuous Distribution" && type6 == "Uniform") {
   Vd6 = Vd_uniform(EA6min, EA6max, DD6min, DD6max);
 } else if (ACM == "Continuous Distribution" && type6 == "Lognormal") {
   Vd6 = Vd_lognormal(EA6mu, EA6sigma, DD6mu, DD6sigma);
 } else {
   Vd6 = Vd_constant(EA6_1, EA6_2, EA6_3, EA6_4);
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
 
 if (type111 == "Uniform") {
   BR1 = BR_uniform(BR1min, BR1max)
 } else {
   BR1 = BR_lognormal(BR1mu, BR1sigma)
 }
 
 if (type222 == "Uniform") {
   BR2 = BR_uniform(BR2min, BR2max)
 } else {
   BR2 = BR_lognormal(BR2mu, BR2sigma)
 }
 
 
 if (type333 == "Uniform") {
   BR3 = BR_uniform(BR3min, BR3max)
 } else {
   BR3 = BR_lognormal(BR3mu, BR3sigma)
 }
 
 
 if (type444 == "Uniform") {
   BR4 = BR_uniform(BR4min, BR4max)
 } else {
   BR4 = BR_lognormal(BR4mu, BR4sigma)
 }
 
 if (type555 == "Uniform") {
   BR5 = BR_uniform(BR5min, BR5max)
 } else {
   BR5 = BR_lognormal(BR5mu, BR5sigma)
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
 
  
 function Infil_uniform(infilmin, infilmax) {

  return Number(infilmin) + (Number(infilmax) - Number(infilmin)) * Math.random();
 
 }

 function D_uniform(dmin, dmax) {

  return Number(dmin) + (Number(dmax) - Number(dmin)) * Math.random();
 
 }

 function Inact_uniform(inactmin, inactmax) {

  return Number(inactmin) + (Number(inactmax) - Number(inactmin)) * Math.random();
 
 }

function Inact_lognormal(inactmuInput, inactsigmaInput) {

  const inactmu = Math.log(inactmuInput ** 2 / Math.sqrt(inactmuInput ** 2 + inactsigmaInput ** 2));
  const inactsigma = Math.sqrt(Math.log(inactsigmaInput ** 2 / inactmuInput ** 2 + 1));

 return Math.exp(NORMINV(Math.random(), inactmu, inactsigma));

}


function natural_calculation(typeInact, infilmin, infilmax, dmin, dmax, inactmin, inactmax, inactmu, inactsigma) {

  if (typeInact == "Uniform") {

    return Inact_uniform(inactmin, inactmax) + D_uniform(dmin, dmax) + Infil_uniform(infilmin, infilmax);

  } else {

    return Inact_lognormal(inactmu, inactsigma) + D_uniform(dmin, dmax) + Infil_uniform(infilmin, infilmax);

  }


 }
  

  // QuickSelect algorithm
function quickSelect(nums, k, left = 0, right = nums.length - 1) {
  if (left === right) return nums[left];

  const pivotIndex = Math.floor(Math.random() * (right - left)) + left;

  const pivot = partition(nums, left, right, pivotIndex);

  if (k === pivot) {
      return nums[k];
  } else if (k < pivot) {
      return quickSelect(nums, k, left, pivot - 1);
  } else {
      return quickSelect(nums, k, pivot + 1, right);
  }
}

function partition(nums, left, right, pivotIndex) {
  const pivotValue = nums[pivotIndex];
  let storeIndex = left;

  [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

  for (let i = left; i < right; i++) {
      if (nums[i] < pivotValue) {
          [nums[storeIndex], nums[i]] = [nums[i], nums[storeIndex]];
          storeIndex++;
      }
  }

  [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];

  return storeIndex;
}


const createCachedFunction = (fn) => {
  let cached;
  return () => {
      if (cached === undefined) {
          cached = fn();
      }
      return cached;
  };
};


const nadr = createCachedFunction(() => {
  let naturals = [];
  const simulations = 1000;

  for (let i = 0; i < simulations; i++) {
    const nat = natural_calculation(typeInact, infilmin, infilmax, dmin, dmax, inactmin, inactmax, inactmu, inactsigma) +
    hvacTreatment + 
    roomUV * roomUVQ + 
    roomAC * roomACQ + 
    roomTreatment * roomTreatmentQ;
    naturals.push(nat);
  }

  return naturals; // Return the array of simulations directly.
});

const emission = createCachedFunction(() => {
let emissions = [];

const simulations = 1000;
 
for (let i = 0; i < simulations; i++) {
  
    let Ci, Cv, BR, Vd; // Declare the variables

    Ci = Ci_calculation(typeCi,  CiBmin, CiBmax, Cialpha, Cibeta, Cimin, Cimax);
    Cv = Cv_calculation(typeCv, CVmu, CVsigma, CVmin, CVmax);
    BR = BR_calculation(type111, type222, type333, type444, type555,  
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max);
    Vd = Vd_calculation(ACM, type1, type2, type3, type4, type5, type6, 
      breathing, whispered, voiced, coughing, whispering, speaking, 
       EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
       EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
       EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
       EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
       EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
       EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
       EA1_1, EA1_2, EA1_3, EA1_4, EA2_1, EA2_2, EA2_3, EA2_4,
       EA3_1, EA3_2, EA3_3, EA3_4, EA4_1, EA4_2, EA4_3, EA4_4,
       EA5_1, EA5_2, EA5_3, EA5_4, EA6_1, EA6_2, EA6_3, EA6_4);

    let Infector = 0;

    if (infectorStatus === "Number of Infector") {
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

    const Total_Emission = Ci * Cv * BR * Vd * (1 - maskInfector / 100) * Infector;

    // Store this emission in the array
    emissions.push(Total_Emission);
}

return emissions;
})


const final_sus = createCachedFunction(() => {
let results = [];

const simulations = 1000;

for (let i = 0; i < simulations; i++) {
  
    let Ci, Cv, BR, Vd; // Declare the variables

    Ci = Ci_calculation(typeCi,  CiBmin, CiBmax, Cialpha, Cibeta, Cimin, Cimax);
    Cv = Cv_calculation(typeCv, CVmu, CVsigma, CVmin, CVmax);
    BR = BR_calculation(type111, type222, type333, type444, type555,  
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max);
    Vd = Vd_calculation(ACM, type1, type2, type3, type4, type5, type6, 
      breathing, whispered, voiced, coughing, whispering, speaking, 
       EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
       EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
       EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
       EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
       EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
       EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
       EA1_1, EA1_2, EA1_3, EA1_4, EA2_1, EA2_2, EA2_3, EA2_4,
       EA3_1, EA3_2, EA3_3, EA3_4, EA4_1, EA4_2, EA4_3, EA4_4,
       EA5_1, EA5_2, EA5_3, EA5_4, EA6_1, EA6_2, EA6_3, EA6_4
       );

    let Infector = 0;

    if (infectorStatus === "Number of Infector") {
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

      // Store Infector and Final_Susceptible in the results array
      results.push(Final_Susceptible);
}

return quickSelect(results, Math.floor(percentile));
})

const br_p = createCachedFunction(() => {
let br_ps = [];

const simulations = 1000;

for (let i = 0; i < simulations; i++) {
  
    let BR; // Declare the variables

    BR = BR_calculation(type111, type222, type333, type444, type555,  
        resting, standing, light, moderate, heavy, 
        BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
        BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
        BR5mu, BR5sigma, BR5min, BR5max);

    // Store this emission in the array
    br_ps.push(BR);
}

return quickSelect(br_ps, Math.floor(percentile));
})

  const totalCADRR = outdoorAir + 
    (supplyAir - outdoorAir) * filter + 
    (supplyAir - outdoorAir) * (1 - filter) * hvacUV / 100 +
    hvacTreatment + 
    roomUV * roomUVQ + 
    roomAC * roomACQ + 
    roomTreatment * roomTreatmentQ;

    const standard = ASHRAE
    
  const isCompliant = totalCADRR >= standard;

  const data = () =>
  new Array(yLabels.length).fill(0).map((_, y) =>
    new Array(xLabels.length).fill(0).map((_, x) => {
      const xValue = x  ;
      const yValue = y ;
      return xValue * 100 + yValue;
    })
  );

  const data2 = () =>
  new Array(yLabels.length).fill(0).map((_, y) =>
    new Array(xLabels.length).fill(0).map((_, x) => {
      const xValue = x * max ;
      const yValue = y * 5 ;
      const baseNADR = xValue + 
        (supplyAir - xValue) * yValue / 100 + 
        (supplyAir - xValue) * (1 - yValue / 100) * hvacUV / 100 +
        hvacTreatment +
        roomUV * roomUVQ + 
    roomAC * roomACQ + 
    roomTreatment * roomTreatmentQ ;

      return baseNADR;
    })
  );

     const IR = () => {
    const nadrValue = nadr().sort((a, b) => a - b)[Math.floor(percentile * 10)];
    const emissionValue = emission().sort((a, b) => a - b)[Math.floor(percentile * 10 )];
    const br_pValue = br_p();
    const final_susValue = final_sus();

    // Constants
    const volume = floorArea * height * 0.02831685;

    return new Array(yLabels.length).fill(0).map((_, y) => {
      return new Array(xLabels.length).fill(0).map((_, x) => {
        const xValue = x * max;
        const yValue = y * 5;
        const filterY = yValue / 100;
  
        const IVRR = nadrValue + (xValue + 
          (supplyAir - xValue) * filterY + 
          (supplyAir - xValue) * (1 - filterY) * hvacUV / 100) * 1.69901082 / volume;
  
        const IntQuanta = emissionValue / (IVRR * volume) * (occupiedPeriod / 60 + (Math.exp(-1 * IVRR * occupiedPeriod / 60) - 1) / IVRR);
        const iRisk = (1 - Math.exp(-1 * br_pValue * IntQuanta * (1 - maskSus / 100))) * 100;
        const aRisk = (1 - (1 - iRisk / 100) ** final_susValue) * 100;
  
        return iRisk; // Return the selectedNadrValue for each iteration
      });
    });
};
  

const AR = () => {
  const nadrValue = nadr().sort((a, b) => a - b)[Math.floor(percentile * 10)];
  const emissionValue = emission().sort((a, b) => a - b)[Math.floor(percentile * 10)];
  const br_pValue = br_p();
  const final_susValue = final_sus();

  // Constants
  const volume = floorArea * height * 0.02831685;

  return new Array(yLabels.length).fill(0).map((_, y) => {
    return new Array(xLabels.length).fill(0).map((_, x) => {
      const xValue = x * max;
      const yValue = y * 5;
      const filterY = yValue / 100;

      const IVRR = nadrValue + (xValue + 
        (supplyAir - xValue) * filterY + 
        (supplyAir - xValue) * (1 - filterY) * hvacUV / 100) * 1.69901082 / volume;

      const IntQuanta = emissionValue / (IVRR * volume) * (occupiedPeriod / 60 + (Math.exp(-1 * IVRR * occupiedPeriod / 60) - 1) / IVRR);
      const iRisk = (1 - Math.exp(-1 * br_pValue * IntQuanta * (1 - maskSus / 100))) * 100;
      const aRisk = (1 - (1 - iRisk / 100) ** final_susValue) * 100;

      return aRisk; // Return the selectedNadrValue for each iteration
    });
  });
};

const defaultOA = outdoorAir;
const defaultFilter = filter * 100;
const thresholdValue = standard * occupantNumber;
const outdoorAirValue = outdoorAir;
const filterValue = filter;
const defaultNADR = outdoorAir + 
(supplyAir - outdoorAir) * filter / 100 + 
(supplyAir - outdoorAir) * (1 - filter / 100) * hvacUV / 100 +
hvacTreatment +
roomUV * roomUVQ + 
roomAC * roomACQ + 
roomTreatment * roomTreatmentQ;
        
const [hoveredNADR, setHoveredNADR] = useState(defaultNADR.toFixed(1));
const [hoveredOA, setHoveredOA] = useState(defaultOA.toFixed(1));
const [hoveredFilter, setHoveredFilter] = useState(defaultFilter);
const [hoveredIR, setHoveredIR] = useState(IR()[0][0].toFixed(1));
const [hoveredAR, setHoveredAR] = useState(AR()[0][0].toFixed(1));

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
      maskSus,
      ASHRAE,
      ASHRAE2,
      ASHRAE62ft,
      ASHRAE62p,
      typeCi, CiBmin, CiBmax, Cialpha, Cibeta, Cimin, Cimax,
    typeCv, CVmu, CVsigma, CVmin, CVmax,
    type111, type222, type333, type444, type555, 
    resting, standing, light, moderate, heavy, 
    BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
    BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
    BR5mu, BR5sigma, BR5min, BR5max,
    ACM, type1, type2, type3, type4, type5, type6, 
    breathing, whispered, voiced, coughing, whispering, speaking, 
    EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
    EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
    EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
    EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
    EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
    EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
    EA1_1, EA1_2, EA1_3, EA1_4, EA2_1, EA2_2, EA2_3, EA2_4,
    EA3_1, EA3_2, EA3_3, EA3_4, EA4_1, EA4_2, EA4_3, EA4_4,
    EA5_1, EA5_2, EA5_3, EA5_4, EA6_1, EA6_2, EA6_3, EA6_4,
    typeInact, infilmin, infilmax, dmin, dmax, inactmin, inactmax, inactmu, inactsigma, percentile
    );
    
    if (d3Container.current) {
      d3.select(d3Container.current).selectAll('*').remove();
      const svg = d3.select(d3Container.current).append('svg').attr('width', 550).attr('height', 550);

      const maxValue = Math.max(...data2().flat());

      const newF1 = floorArea * (ASHRAE62ft + 0.75) + occupantNumber * ASHRAE62p;
      const newF2 = floorArea * (ASHRAE62ft + 1) + occupantNumber * ASHRAE62p;


      const colorFunction = (x, y) => {
        const baseValue = data2()[y][x];
    
        const greyColor = '#C8C8C8';

        if (baseValue < newF1) {
          if (x == (Math.round(outdoorAirValue / max)) &&
          y == (Math.round(filterValue * 100 / 5))) {

            if (totalCADRR >= newF1) {
              return 'rgba(255, 215, 0, 0.7)'
            }
            else {
          return '#B22222'
            };

        } else {
   
          return greyColor;         
        }

        } else if (baseValue >= newF1 && baseValue < newF2) {
            if (x == (Math.round(outdoorAirValue / max)) &&
            y == (Math.round(filterValue * 100 / 5))) {
              if (totalCADRR >= newF1) {

                return '#006400'
              }
              else {
            return 'rgba(255, 215, 0, 0.7)'
              };

        } else {

          
          return 'rgba(100, 150, 190)';         
        }
        } else if (baseValue == newF2) {
          if (x == (Math.round(outdoorAirValue / max)) &&
          y == (Math.round(filterValue * 100 / 5))) {
            if (totalCADRR >= newF2) {

              return '#006400'
            }
            else {
          return 'rgba(255, 215, 0, 0.7)'
            };

      } else {

        
        return 'rgba(60, 115, 175)';         
      }
      } else if (baseValue > newF2) {
        if (x == (Math.round(outdoorAirValue / max)) &&
        y == (Math.round(filterValue * 100 / 5))) {
          if (totalCADRR >= newF1) {

            return '#006400'
          }
          else {
        return 'rgba(255, 215, 0, 0.7)'
          };

    } else {

      
      return 'rgba(60, 115, 175)';         
    }
    }
    };


      const xScale = d3.scaleBand().domain(xLabels).range([50, 500]);
      const yScale = d3.scaleBand().domain(yLabels).range([500, 50]);

      const xAxis = d3.axisBottom(xScale)
        .tickValues(xLabels.filter((d, i) => i % 5 === 0))
        .tickFormat(d => d)
        .tickSizeOuter(0)
        .tickPadding(10); // Add tick padding

      const yAxis = d3.axisLeft(yScale)
        .tickValues(yLabels.filter((d, i) => i % 2 === 0))
        .tickFormat(d => d)
        .tickSizeOuter(0)
        .tickPadding(10); // Add tick padding

      svg
      .append('g')
      .attr('transform', 'translate(0, 500)')
      .call(xAxis)
      .selectAll("text")
        .style("font-size", "0.8rem") // Set tick label font size to 0.8rem
        .style("font-family", "Arial") // Set font family to Arial
        .attr("dy", "0.1rem"); // Move tick labels closer to the axis

        svg
        .append("text")
        .attr('x', 275) // Adjust x position
        .attr('y', 535)
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .style('font-family', 'Arial') // Set font family to Arial
        .style('font-size', '0.9rem') // Set font size to 0.9rem
        .text('Outdoor Airflow Rate (cfm)');

      svg
        .append('g')
        .attr('transform', 'translate(50, 0)')
        .call(yAxis)
        .selectAll("text")
          .style("font-size", "0.8rem") // Set tick label font size to 0.8rem
          .style("font-family", "Arial") // Set font family to Arial
          .attr("dx", "0.3rem"); // Move tick labels closer to the axis

      svg
        .append("text")
        .attr('x', -250) // Adjust x position
        .attr('y', 15) // Adjust y position
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .style('font-family', 'Arial') // Set font family to Arial
        .style('font-size', '0.9rem') // Set font size to 0.9rem
        .attr('transform', 'rotate(-90)')
        .text('Filter Efficiency (%)');

        svg
        .selectAll('.cell')
        .data(data().flat())
        .join('rect')
        .attr('class', 'cell')
        .attr('x', (d, i) => xScale(xLabels[i % xLabels.length]))
        .attr('y', (d, i) => yScale(yLabels[Math.floor(i / xLabels.length)]))
        .attr('width', xScale.bandwidth())
        .attr('height', yScale.bandwidth())
        .attr('fill', (d, i) => colorFunction(i % xLabels.length, Math.floor(i / xLabels.length)))
      
        .on('mouseover', function (event, d) {
          const i = data().flat().indexOf(d);
          const x = i % xLabels.length;
          const y = Math.floor(i / xLabels.length);
          const value = data2()[y][x].toFixed(0);
          const xValue = xLabels[x];
          const yValue = yLabels[y];
          const value2 = IR()[y][x].toFixed(1);
          const value3 = AR()[y][x].toFixed(1);
          d3.select(this).style('opacity', 0.5);
      
          setHoveredNADR(value);
          setHoveredOA(xValue);
          setHoveredFilter(yValue);
          setHoveredIR(value2);
          setHoveredAR(value3);
        })

        .on('mouseout', (event, d) => {
          d3.select(event.currentTarget).style('opacity', 1);
          tooltip.style('opacity', 0);  
        });

        const tooltip = d3
        .select(d3Container.current)
        .append('div')
        .attr('class', 'tooltip')
        .style('position', 'absolute')
        .style('background-color', 'white')
        .style('border', 'solid')
        .style('border-width', '1px')
        .style('padding', '5px')
        .style('opacity', 0)
        .style('z-index', '1000')
        .style('pointer-events', 'none')
        .style("font-family", "Arial") // Set font family to Arial
        .style("font-size", "0.9rem"); // Set font size to 0.9rem
    }
  }, [d3Container.current, selectedSubcategory, floorArea,
    height, occupantNumber, occupiedPeriod, expiratoryActivity, physicalActivity,
    virusType, immunityProportion, infectorStatus, casesPerDay, infectiousPeriod, unreportedCases, infectorNumber,
    supplyAir, outdoorAir, merv, filter, hvacUV, hvacTreatment,
    roomTreatment, roomUV, roomAC, roomTreatmentQ, roomUVQ, roomACQ, maskInfector, maskSus, ASHRAE, ASHRAE2, ASHRAE62ft, ASHRAE62p,
    typeCi, CiBmin, CiBmax, Cialpha, Cibeta, Cimin, Cimax,
    typeCv, CVmu, CVsigma, CVmin, CVmax,
    type111, type222, type333, type444, type555, 
    resting, standing, light, moderate, heavy, 
    BR1mu, BR1sigma, BR1min, BR1max, BR2mu, BR2sigma, BR2min, BR2max, 
    BR3mu, BR3sigma, BR3min, BR3max, BR4mu, BR4sigma, BR4min, BR4max,  
    BR5mu, BR5sigma, BR5min, BR5max,
    ACM, type1, type2, type3, type4, type5, type6, 
    breathing, whispered, voiced, coughing, whispering, speaking, 
    EA1mu, EA1sigma, EA1min, EA1max, DD1mu, DD1sigma, DD1min, DD1max,
    EA2mu, EA2sigma, EA2min, EA2max, DD2mu, DD2sigma, DD2min, DD2max,
    EA3mu, EA3sigma, EA3min, EA3max, DD3mu, DD3sigma, DD3min, DD3max,
    EA4mu, EA4sigma, EA4min, EA4max, DD4mu, DD4sigma, DD4min, DD4max,
    EA5mu, EA5sigma, EA5min, EA5max, DD5mu, DD5sigma, DD5min, DD5max,
    EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max,
    EA1_1, EA1_2, EA1_3, EA1_4, EA2_1, EA2_2, EA2_3, EA2_4,
    EA3_1, EA3_2, EA3_3, EA3_4, EA4_1, EA4_2, EA4_3, EA4_4,
    EA5_1, EA5_2, EA5_3, EA5_4, EA6_1, EA6_2, EA6_3, EA6_4,
    typeInact, infilmin, infilmax, dmin, dmax, inactmin, inactmax, inactmu, inactsigma, percentile ]);

  return (

    <div style={{ textAlign: 'center', position: 'relative', marginBottom: '-60px' }}>
      
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '-20px',
        }}
      >

  </div>
  <br />
    <div style={{ marginTop: '-20px', marginBottom: '-50px' }}>
    {hoveredNADR && (
    <>
      <span
        style={{
          marginLeft: '20px',
          fontFamily: 'Arial',
          fontSize: '0.9rem',
        }}
      >
 Total NADR {hoveredNADR} cfm&emsp;Individual Risk: {hoveredIR}%&emsp;Absolute Risk: {hoveredAR}%<br/> OA: {hoveredOA} cfm&emsp;RA: {supplyAir-hoveredOA} cfm ({((supplyAir - hoveredOA) / supplyAir * 100).toFixed(1)}%)&emsp;Filter: {hoveredFilter}%
        </span>
        <br/>
        
{/*

        <button
        className='fancy-button4'
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowControl(!showControl)}
      >
        {showControl ? 'Hide Controller' : 'Show Controller'}
      </button>


      {showControl && ( 
        <div>
      <span
      style={{
        marginLeft: '20px',
        fontFamily: 'Arial',
        fontSize: '0.9rem',
      }}
    >
        [ HVAC ]&emsp;UVC Inactivation: {hvacUV}%&emsp;Air Treatment: {hvacTreatment} cfm
        <br/>
        <span style={{ lineHeight: '1.7' }}>&nbsp;</span>
         <label style={{ fontFamily: 'Arial', fontSize: '0.9rem', marginRight: '10px' }}>
        [ In Room ]&emsp;Air Cleaner
      </label>
      <input
        type="checkbox"
        checked={ac}
        onChange={(e) => setAc(e.target.checked)}
      />
&emsp;
      <label style={{ fontFamily: 'Arial', fontSize: '0.9rem', marginRight: '10px' }}>
        UVC
      </label>
      <input
        type="checkbox"
        checked={uvc}
        onChange={(e) => setUvc(e.target.checked)}
      />
&emsp;
      <label style={{ fontFamily: 'Arial', fontSize: '0.9rem', marginRight: '10px' }}>
        Air Treatent
      </label>
      <input
        type="checkbox"
        checked={air}
        onChange={(e) => setAir(e.target.checked)}
      />
      </span>
      </div>
      )}
      */}

    </>
  )}
</div>
<span style={{ lineHeight: '0.3' }}>&nbsp;</span>
    <div ref={d3Container}></div>
  </div>
);
};

export default LANCET3cfm;