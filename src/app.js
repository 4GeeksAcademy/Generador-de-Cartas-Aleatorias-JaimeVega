import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 
  const suitsIcons = {
  1: "♥",
  2: "♣",
  3: "♠",
  4: "♦"
  };

  const cardElement = document.querySelector('#card')
  const valueCard = document.querySelector('h1')
  const suitCard = document.querySelectorAll('span')
  const timerElement = document.querySelector('#timer')
  const button = document.querySelector('button')

  let suitsCardRandom = Math.floor(Math.random()*4) + 1;
  let valuesCardRandom = Math.floor(Math.random()*14);
  
  
  function changeSuitsClass() {
  if (suitsCardRandom === 1 || suitsCardRandom === 4) {
    return cardElement.className = "red";
  } 
  return cardElement.className = "black";
  }

  function assingIconSuits() {
    suitCard.forEach(spanElement => {
      spanElement.innerText = suitsIcons[suitsCardRandom];
      console.log(suitsIcons[suitsCardRandom]);
      
    });
  }

  function generateCardContent() {
    let value = valuesCardRandom;
    switch (valuesCardRandom) {
      case 0:
        value = "A";
        break;
      case 11:
        value = "J";
        break;
      case 12:
        value = "Q";
        break;
      case 13:
        value = "K";
        break;
    }
    valueCard.innerText = value;
  }

  function timer (seconds) {
    let second = seconds;
    setInterval(() => {
      console.log(second);
      timerElement.innerText = second;

      if (second === 0) {
        second = seconds;
        timerElement.innerText = second;
        suitsCardRandom = Math.floor(Math.random()*4) + 1;
        valuesCardRandom = Math.floor(Math.random()*14);
        changeSuitsClass();
        generateCardContent();
        assingIconSuits();
      }
      second--;

    }, 1000);

  }

  button.addEventListener('click', () => {
    suitsCardRandom = Math.floor(Math.random()*4) + 1;
    valuesCardRandom = Math.floor(Math.random()*14);
    changeSuitsClass();
    generateCardContent();
    assingIconSuits();
  })

  changeSuitsClass();
  generateCardContent();
  assingIconSuits();
  timer(10);
};
