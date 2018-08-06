var gallon = prompt("Enter gallon value");

var liter = function(gallon) {
  return (gallon / 0.26417);
}

alert(liter(gallon) + " liters");


var teaspoon = prompt("Enter teaspoon value");

var mL = function(teaspoon) {
  return (teaspoon * 5);
}

alert(mL(teaspoon) + " mL");


var quart = prompt("Enter quart value");

var literQuart = function(quart) {
  return (quart * 0.946352946);
};

alert(literQuart(quart) + " liters");


var tablespoon = prompt("Enter tablespoon value");

var mlTbsp = function(tablespoon) {
  return(tablespoon * 15);
}

alert(mlTbsp(tablespoon) + " mL");
