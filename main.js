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
var expressionP1 = document.querySelector('#type1');
var expressionOp = document.querySelector('#type2');
var expressionP2 = document.querySelector('#type3');

// Pushing Number's Buttons

var showNumZero = function () {
  var numberZero = Number(numZero.textContent);
  expressionP1.textContent = numberZero;
};

numz.addEventListener('click', showNumZero);


var showNumOne = function () {
  var numberOne = Number(numOne.textContent);
  expressionP1.textContent = numberOne;
};

num1.addEventListener('click', showNumOne);

var showNumTwo = function () {
  var numberTwo = Number(numTwo.textContent);
  expressionP1.textContent = numberTwo;
};

num2.addEventListener('click', showNumTwo);

var showNumThree = function () {
  var numberThree = Number(numThree.textContent);
  expressionP1.textContent = numberThree;
};

num3.addEventListener('click', showNumThree);

var showNumFour = function () {
  var numberFour = Number(numFour.textContent);
  expressionP1.textContent = numberFour;
};

num4.addEventListener('click', showNumFour);

var showNumFive = function () {
  var numberFive = Number(numFive.textContent);
  expressionP1.textContent = numberFive;
};

num5.addEventListener('click', showNumFive);

var showNumSix = function () {
  var numberSix = Number(numSix.textContent);
  expressionP1.textContent = numberSix;
};

num6.addEventListener('click', showNumSix);

var showNumSeven = function () {
  var numberSeven = Number(numSeven.textContent);
  expressionP1.textContent = numberSeven;
};

num7.addEventListener('click', showNumSeven);

var showNumEight = function () {
  var numberEight = Number(numEight.textContent);
  expressionP1.textContent = numberEight;
};

num8.addEventListener('click', showNumEight);

var showNumNine = function () {
  var numberNine = Number(numNine.textContent);
  expressionP1.textContent = numberNine;
};

num9.addEventListener('click', showNumNine);



