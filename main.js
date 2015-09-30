// Operators

var multiplication = function () {

};

var division = function () {

};

var addition = function () {

};

var subtraction = function () {

};

// Variables

var clear = document.querySelector('#c');
var numZero = document.querySelector('#numz');
var numOne = document.querySelector('#num1');
var numTwo = document.querySelector('#num2');
var numThree = document.querySelector('#num3');
var numFour = document.querySelector('#num4');
var numFive = document.querySelector('#num5');
var numSix = document.querySelector('#num6');
var numSeven = document.querySelector('#num7');
var numEight = document.querySelector('#num8');
var numNine = document.querySelector('#num9');
var divide = document.querySelector('#div');
var addit = document.querySelector('#add');
var subtr = document.querySelector('#sub');
var multipl = document.querySelector('#mult');
var equals = document.querySelector('#eq');
var typeBox = document.querySelector('#type1');

var firstInput, secondInput;

// Pushing Number's Buttons - Select a Number

var showNumZero = function () {
  var numberZero = Number(numZero.textContent);
  typeBox.textContent = numberZero;
};

 var showNumOne = function () {
  var numberOne = Number(numOne.textContent);
  typeBox.textContent = numberOne;
};

var showNumTwo = function () {
  var numberTwo = Number(numTwo.textContent);
  typeBox.textContent = numberTwo;
};

var showNumThree = function () {
  var numberThree = Number(numThree.textContent);
  console.log(numberThree);
  typeBox.textContent = numberThree;
};

var showNumFour = function () {
  var numberFour = Number(numFour.textContent);
  typeBox.textContent = numberFour;
};

var showNumFive = function () {
  var numberFive = Number(numFive.textContent);
  typeBox.textContent = numberFive;
};

var showNumSix = function () {
  var numberSix = Number(numSix.textContent);
  typeBox.textContent = numberSix;
};

var showNumSeven = function () {
  var numberSeven = Number(numSeven.textContent);
  typeBox.textContent = numberSeven;
};

var showNumEight = function () {
  var numberEight = Number(numEight.textContent);
  typeBox.textContent = numberEight;
};

var showNumNine = function () {
  var numberNine = Number(numNine.textContent);
  typeBox.textContent = numberNine;
};


numz.addEventListener('click', showNumZero);
num1.addEventListener('click', showNumOne);
num2.addEventListener('click', showNumTwo);
num3.addEventListener('click', showNumThree);
num4.addEventListener('click', showNumFour);
num5.addEventListener('click', showNumFive);
num6.addEventListener('click', showNumSix);
num7.addEventListener('click', showNumSeven);
num8.addEventListener('click', showNumEight);
num9.addEventListener('click', showNumNine);

// Show operator selected

var showMultiplication = function () {
  var multiplop = multipl.textContent;
  typeBox.textContent = multiplop;
};

var showDivision = function () {
  var divop = divide.textContent;
  typeBox.textContent = divop;
};

var showAddition = function () {
  var addop = addit.textContent;
  typeBox.textContent = addop;
};

var showSubtraction = function () {
  var subop = subtr.textContent;
  typeBox.textContent = subop;
};

mult.addEventListener('click', showMultiplication);
div.addEventListener('click', showDivision);
add.addEventListener('click', showAddition);
sub.addEventListener('click', showSubtraction);

// Clear Button

var clearAll = function () {
  typeBox.textContent = null;
};

c.addEventListener('click', clearAll);

// Evaluate the Statement (hopefully)

// eq.addEventListener('click', function() {
//   secondInput = typeBox.textContent;
//   var calculate = Number(firstInput.value) + operatorSelector + Number(secondInput.value);
//   typeBox.textContent = calculate;
// };);



