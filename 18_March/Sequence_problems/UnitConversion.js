// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches = ${feet.toFixed(2)} feet`);
let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log(`Rectangular Plot: ${lengthFeet}ft x ${widthFeet}ft = ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);
let areaMeters = lengthMeters * widthMeters;
let totalAreaMeters = areaMeters * 25;
let totalAreaAcres = totalAreaMeters * 0.000247105;
console.log(`Total area of 25 plots in acres: ${totalAreaAcres.toFixed(4)} acres`);
