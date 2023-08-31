import { upper } from "../Function/Function";
import { central } from "../Function/Function";
import { lower } from "../Function/Function";

const meters = [0,5,10,15,20]

const exhale = meters.map(x => ({distance: x, upper: upper(x), central: central(x), lower: lower(x)}));

export default exhale