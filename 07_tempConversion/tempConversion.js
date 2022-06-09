const ftoc = function(t) {
  return Math.round(((t - 32) * 0.5556) * 10) / 10;
};

const ctof = function(t) {
  return Math.round(((t * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
