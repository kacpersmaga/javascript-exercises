const convertToCelsius = function(FahrenheitTemperature) {
  CelciusTemperature = Math.round(((FahrenheitTemperature - 32) * 5 / 9) * 10) / 10
  
  return CelciusTemperature
};

const convertToFahrenheit = function(CelsiusTemperature) {
  FahrenheitTemperature = Math.round((CelsiusTemperature * 9/5 + 32) * 10) / 10

  return FahrenheitTemperature
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
