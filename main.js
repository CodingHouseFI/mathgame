'use strict';

let numOne, numTwo;

document.addEventListener('DOMContentLoaded', init);

function init() {
  numOne = document.querySelectorAll('.one')[0];
  numTwo = document.querySelectorAll('.two')[0];

  let buttons = document.querySelectorAll('.numButton');

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', numButtonClicked);
  }

  document.querySelectorAll('.clear')[0]
          .addEventListener('click', clearAnswer);

  document.querySelectorAll('.submit')[0]
          .addEventListener('click', submitAnswer);

  createNewProblem()
}

function submitAnswer() {
  // determine correct answer
  // get their answer
  // compare, and check if correct
  // display results

  // then, delay and create new problem

  let answerDiv = document.querySelectorAll('.answer')[0];

  let correctAnswer = parseInt(numOne.textContent) + parseInt(numTwo.textContent);
  let theirAnswer = parseInt(answerDiv.textContent);

  if(correctAnswer === theirAnswer) {
    alert('correct!')
  } else {
    alert('wrong!')
  }

  setTimeout(function() {
    createNewProblem()
  }, 2000);
}

function clearAnswer() {
  let answerDiv = document.querySelectorAll('.answer')[0];
  answerDiv.textContent = '';
}

function createNewProblem() {
  //  clear the answer
  //  get two random nums, and put them on the dom;
  clearAnswer();
  numOne.textContent = getRandomNum()
  numTwo.textContent = getRandomNum()
}

function getRandomNum() {
  return Math.floor(Math.random() * 100);
}

function numButtonClicked(event) {
  let numClicked = this.textContent;
  let answerDiv = document.querySelectorAll('.answer')[0];
  answerDiv.textContent += numClicked;
}
