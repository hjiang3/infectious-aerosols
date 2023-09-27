import { upper } from "../Function/Function";
import { central } from "../Function/Function";
import { lower } from "../Function/Function";
import { ft_m } from "../Function/Function";
import { m_ft } from "../Function/Function";


const feet = Array.from(
{ length: (20 - 0) / 0.01 + 1 },
(value, index) => 0 + index * 0.01
);

const exhale = feet.map(x => ({distance: x, jet: [m_ft(upper(ft_m(x), 20.25, 10)), m_ft(lower(ft_m(x), 20.25, 10))]}));

let D;
for (let i = 0; i < exhale.length; i++) {
  if (lower(ft_m(feet[i] ), 20.25, 10) === null) {
    D = Math.round(feet[i] * 1000) / 1000;  // Use feet[i] instead of i
    break;
  }
}



export { exhale, D };  // Use named exports instead of multiple default exports
