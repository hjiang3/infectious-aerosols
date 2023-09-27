const D0 = 0.02;
const A0 = Math.pow((D0/2),2) * Math.PI
const T0 = 310.15;
const S0 = 1;
const x_co2 = 410 * Math.pow(10,-6);
const p_pa = 101325;
const p_atm = 1;

const p_sat0 = 611.21 * Math.exp((18.678 -(T0 - 273.15)/234.5) * ((T0 - 273.15)/(257.14 + T0 - 273.15)));
const p_v0 = p_sat0 * S0;
const mixing_ratio0 = p_v0 / p_pa;

const M_dry_air = 28.9647 / 1000;
const M_co2 = 44/1000;
const M_h2o = 18/1000;
const density0 = (M_dry_air * (1 - x_co2 - mixing_ratio0) + mixing_ratio0 * M_h2o + x_co2 * M_co2)*p_atm/(T0 * 0.0000821);

const Sback = 0.25;
const gravity = 9.8;

export function Tback (tin) {
 return tin + 273.15;
}

export function mixing_ratio_back(tin) {
return 611.21 * Math.exp((18.678 -tin/234.5) * (tin/(257.14 + tin))) * Sback / p_pa;
}

export function density_back(mixing_ratio_back, tin) {
 return (M_dry_air * (1 - x_co2 - mixing_ratio_back) + mixing_ratio_back * M_h2o + x_co2 * M_co2)*p_atm/(Tback(tin) * 0.0000821);
}

export function Ar0(tin, vel) {
 return gravity * Math.sqrt(A0)/(vel**2) * (density_back(mixing_ratio_back(tin), tin) - density0)/density0;
}

export function u(dis, tin, vel) {
 return 0.0354 * Math.sqrt(A0) * Ar0(tin,vel) * Math.pow((dis/Math.sqrt(A0)),3) * Math.sqrt(T0/Tback(tin)) + 0.114 * dis + 0.5;
 }

export function c(dis, tin, vel) {
 return 0.0354 * Math.sqrt(A0) * Ar0(tin,vel) * Math.pow((dis/Math.sqrt(A0)),3) * Math.sqrt(T0/Tback(tin)) + 0.5;
}
export function l(dis, tin, vel) {
 return 0.0354 * Math.sqrt(A0) * Ar0(tin,vel) * Math.pow((dis/Math.sqrt(A0)),3) * Math.sqrt(T0/Tback(tin)) - 0.114 * dis + 0.5;
}


export function upper(dis, tin, vel) {

    if (l(dis, tin, vel) > 1) {
        return null;
    } else if (u(dis, tin, vel) > 1) {
        return 1;
    } else {
        return u(dis, tin, vel);
    }
    }
   
export function central(dis, tin, vel) {
    if (c(dis, tin, vel) > 1) {
        return null;
    } else {
        return c(dis, tin, vel);
    }
    }

export function lower(dis, tin, vel) {
    if (l(dis, tin, vel) > 1) {
        return null;
    } else {
        return l(dis, tin, vel);
    }
    }




    export function ft_m(x) {
    return x * 0.3048
    }

    export function m_ft(x) {
        return x * 3.2808399
    }