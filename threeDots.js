const ages = [12, 14, 17, 19];
const ages2 = [15, 14, 18];
const ages3 = [21, 22, 24];
const allAges = ages.concat(ages2).concat([5]) .concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges2);
const business = 650;
const minister = 450;
const shochib = 250;
const takaPoisha = [650, 450, 250,850];
const maximum = Math.max(...takaPoisha);
console.log(maximum);
