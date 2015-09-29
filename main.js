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
var expressionP1 = document.querySelector('#type1');

// Pushing Number's Buttons - Select a Number

var showNumZero = function () {
  var numberZero = Number(numZero.textContent);
  expressionP1.textContent = numberZero;
};

 var showNumOne = function () {
  var numberOne = Number(numOne.textContent);
  expressionP1.textContent = numberOne;
};

var showNumTwo = function () {
  var numberTwo = Number(numTwo.textContent);
  expressionP1.textContent = numberTwo;
};

var showNumThree = function () {
  var numberThree = Number(numThree.textContent);
  console.log(numberThree);
  expressionP1.textContent = numberThree;
};

var showNumFour = function () {
  var numberFour = Number(numFour.textContent);
  expressionP1.textContent = numberFour;
};

var showNumFive = function () {
  var numberFive = Number(numFive.textContent);
  expressionP1.textContent = numberFive;
};

var showNumSix = function () {
  var numberSix = Number(numSix.textContent);
  expressionP1.textContent = numberSix;
};

var showNumSeven = function () {
  var numberSeven = Number(numSeven.textContent);
  expressionP1.textContent = numberSeven;
};

var showNumEight = function () {
  var numberEight = Number(numEight.textContent);
  expressionP1.textContent = numberEight;
};

var showNumNine = function () {
  var numberNine = Number(numNine.textContent);
  expressionP1.textContent = numberNine;
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
  expressionP1.textContent = multiplop;
};

mult.addEventListener('click', showMultiplication);







