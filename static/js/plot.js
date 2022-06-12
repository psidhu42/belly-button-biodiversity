// Sort Cities by Growth

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

// Slice Top 5 Cities

var topFiveCities = sortedCities.slice(0,5);

// Create Arrays of City Names and Growth Figures

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// Create the Bar Chart

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);


// Top 7 Cities by Population

var sortedCitiesPop = cityGrowths.sort((a,b) => a.population - b.population).reverse();
var topSevenCities = sortedCitiesPop.slice(0,7);

var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.population));

var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Populated Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population"}
  };
  Plotly.newPlot("bar-plot2", data, layout);


// 