import React, { useState, useEffect, useRef } from 'react'; 
import * as d3 from 'd3';
import './FancyButton.css';
import * as simpleStats from 'simple-statistics';

const Target1cfm = ({ selectedSubcategory, floorArea, 
  height, occupantNumber, occupiedPeriod, expiratoryActivity, physicalActivity,
  virusType, immunityProportion, infectorStatus, casesPerDay, infectiousPeriod, unreportedCases, infectorNumber,
  supplyAir, outdoorAir, merv, filter, hvacUV, hvacTreatment,
  roomTreatment, roomUV, roomAC, roomTreatmentQ, roomUVQ, roomACQ, maskInfector, maskSus, ASHRAE, ASHRAE2,
  VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
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
    typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma, percentile,
    target, target2, target3, target4, target5, target6, target7, target8, targetType}) => {

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


function lognormal(muInput, sigmaInput) {

  const mu = Math.log(muInput ** 2 / Math.sqrt(muInput ** 2 + sigmaInput ** 2));
  const sigma = Math.sqrt(Math.log(sigmaInput ** 2 / muInput ** 2 + 1));

 return Math.exp(NORMINV(Math.random(), mu, sigma));

}

function uniform(min, max) {

 return Number(min) + (Number(max) - Number(min)) * Math.random();

}

function Cv_normal(Cvmu, Cvsigma) {
  
 return  Math.pow(10, NORMINV(Math.random(), Cvmu, Cvsigma));
}


 function beta(min, max, alpha, beta) {

  return betaInv(Math.random(), alpha, beta) * (max - min) + min;
}


 function Cv_calculation(typeCv, Cvmu, Cvsigma, Cvmin, Cvmax) {

  if (typeCv == "Uniform") {

    return uniform(Cvmin, Cvmax);

  } else {

    return Cv_normal(Cvmu, Cvsigma);

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
    const nat = natural_calculation(typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma) + 
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
       EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max);

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
       EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max);

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

      // Store Infector and Final_Susceptible in the results array
      results.push(Final_Susceptible);
}

return quickSelect(results, Math.floor(percentile-0.1));
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

return quickSelect(br_ps, Math.floor(percentile-0.1));
})

const infector = createCachedFunction(() => {
    let results = [];
    
    const simulations = 1000;
    
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
           EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max);
    
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
    
    
          // Store Infector and Final_Susceptible in the results array
          results.push(Infector);
    }
    
    return quickSelect(results, Math.floor(percentile-0.1));
    })


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
        natural_calculation(typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma);
  
  
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
           EA6mu, EA6sigma, EA6min, EA6max, DD6mu, DD6sigma, DD6min, DD6max);
  
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
  
      results.IR.push(iRisk);
      results.AR.push(aRisk);
      results.Estimated.push(infected);
      results.Reproduction.push(reproduction);
    }
  
    return results;
  };



  const totalCADRR = outdoorAir + 
    (supplyAir - outdoorAir) * filter + 
    (supplyAir - outdoorAir) * (1 - filter) * hvacUV / 100 +
    hvacTreatment + 
    roomUV * roomUVQ + 
    roomAC * roomACQ + 
    roomTreatment * roomTreatmentQ;


  const standard = ASHRAE;

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
    const nadrValue = nadr().sort((a, b) => a - b)[Math.floor((percentile-0.1) * 10)];
    const emissionValue = emission().sort((a, b) => a - b)[Math.floor((percentile-0.1) * 10 )];
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
  const nadrValue = nadr().sort((a, b) => a - b)[Math.floor((percentile-0.1) * 10)];
  const emissionValue = emission().sort((a, b) => a - b)[Math.floor((percentile-0.1) * 10)];
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

const Estimated = () => {
    const nadrValue = nadr().sort((a, b) => a - b)[Math.floor((percentile-0.1) * 10)];
    const emissionValue = emission().sort((a, b) => a - b)[Math.floor((percentile-0.1) * 10)];
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
        const infected = iRisk / 100 * final_susValue;
  
        return infected; // Return the selectedNadrValue for each iteration
      });
    });
  };

  const Reproduction = () => {
    const nadrValue = nadr().sort((a, b) => a - b)[Math.floor((percentile-0.1) * 10)];
    const emissionValue = emission().sort((a, b) => a - b)[Math.floor((percentile-0.1) * 10)];
    const br_pValue = br_p();
    const final_susValue = final_sus();
    const infectorValue = infector();
  
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
        const infected = iRisk / 100 * final_susValue;
        const reproduction = infected / infectorValue
  
        return reproduction; // Return the selectedNadrValue for each iteration
      });
    });
  };

const defaultOA = outdoorAir;
const defaultFilter = filter * 100;
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
const [hoveredEstimated, setHoveredEstimated] = useState(Estimated()[0][0].toFixed(1));
const [hoveredReproduction, setHoveredReproduction] = useState(Reproduction()[0][0].toFixed(1));

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
      VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
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
    typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma, percentile,
    target, target2, target3, target4, target5, target6, target7, target8, targetType

    );
    
    if (d3Container.current) {
      d3.select(d3Container.current).selectAll('*').remove();
      const svg = d3.select(d3Container.current).append('svg').attr('width', 550).attr('height', 550);



      const colorFunction = (x, y) => {

        const newF1 = targetType === "Individual risk (%)" ? target : 
        targetType === "Absolute risk (%)" ? target3 : 
        targetType === "Estimated infected people" ? target5 : 
        target7;  // optional: you can set a default value if neither condition matches

        const newF2 = targetType === "Individual risk (%)" ? target2 : 
        targetType === "Absolute risk (%)" ? target4: 
        targetType === "Estimated infected people" ? target6 : 
        target8;  // optional: you can set a default value if neither condition matches

        const baseValue = targetType === "Individual risk (%)" ? IR()[y][x] : 
        targetType === "Absolute risk (%)" ? AR()[y][x] : 
        targetType === "Estimated infected people" ? Estimated()[y][x] : 
        Reproduction()[y][x];  // optional: you can set a default value if neither condition matches
    

        if (baseValue < newF1) {
          if (x == (Math.round(outdoorAirValue / max)) &&
          y == (Math.round(filterValue * 100 / 5))) {

          return 'lightgray'


        } else {
   
          return 'rgba(20, 86, 139, 0.8)';         
        }

        } else if (baseValue >= newF1 && baseValue < newF2) {
            if (x == (Math.round(outdoorAirValue / max)) &&
            y == (Math.round(filterValue * 100 / 5))) {

                return 'gray'

        } else {

          
          return 'rgba(255, 215, 0, 0.7)';         
        }

      } else if (baseValue >= newF2) {
        if (x == (Math.round(outdoorAirValue / max)) &&
        y == (Math.round(filterValue * 100 / 5))) {

            return 'gray'

    } else {

      return 'rgba(242, 99, 91, 0.9)';         
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
        .text('Outdoor airflow rate (cfm)');

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
        .text('Filter efficiency (%)');

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
          const value4 = Estimated()[y][x].toFixed(1);
          const value5 = Reproduction()[y][x].toFixed(1);
          d3.select(this).style('opacity', 0.5);
      
          setHoveredNADR(value);
          setHoveredOA(xValue);
          setHoveredFilter(yValue);
          setHoveredIR(value2);
          setHoveredAR(value3);
          setHoveredEstimated(value4);
          setHoveredReproduction(value5);
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
    roomTreatment, roomUV, roomAC, roomTreatmentQ, roomUVQ, roomACQ, maskInfector, maskSus,
    VBmin, VBmax, Valpha, Vbeta, kmin, kmax, Kmin, Kmax, Cimin, Cimax,
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
    typeD, typeInact, infilmin, infilmax, dmin, dmax, dmu, dsigma, inactmin, inactmax, inactmu, inactsigma, percentile,
   target, target2, target3, target4, target5, target6, target7, target8, targetType ]);

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
                Total ECA {hoveredNADR} cfm&emsp;Individual risk: {hoveredIR}%&emsp;Absolute risk: {hoveredAR}%
                <br/> Estimated infected people: {hoveredEstimated}&emsp;Reproduction number: {hoveredReproduction}
                <br/> OA: {hoveredOA} cfm&emsp;RA: {(supplyAir-hoveredOA).toFixed(1)} cfm ({((supplyAir - hoveredOA) / supplyAir * 100).toFixed(1)}%)&emsp;Filter: {hoveredFilter}%
        </span>
        <br/>
        

    </>
  )}
</div>
<span style={{ lineHeight: '0.3' }}>&nbsp;</span>
    <div ref={d3Container}></div>
  </div>
);
};

export default Target1cfm;