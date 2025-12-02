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
  const numberCard = document.querySelector('h1')
  const suitCard = document.querySelectorAll('span')
  const timerElement = document.querySelector('#timer')
  const buttonChangeCard = document.querySelector('#buttonCard')
  const buttonSizeCard = document.querySelector('.buttonSizeCard')
  const formSizeCard = document.querySelector('#sizeCard')

  let suitsCardRandom = Math.floor(Math.random()*4) + 1;
  let numberCardRandom = Math.floor(Math.random()*14);
  
  
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
    let value = numberCardRandom;
    switch (numberCardRandom) {
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
    numberCard.innerText = value;
  }

  function timer (seconds) {
    let second = seconds;
    setInterval(() => {
      timerElement.innerText = second;

      if (second === 0) {
        second = seconds;
        timerElement.innerText = second;
        suitsCardRandom = Math.floor(Math.random()*4) + 1;
        numberCardRandom = Math.floor(Math.random()*14);
        changeSuitsClass();
        generateCardContent();
        assingIconSuits();
      }
      second--;

    }, 1000);

  }

  function changeSize(height,width) {
    
    cardElement.style.height = `${height}px`;
    cardElement.style.width = `${width}px`;
    const sizeNumber = height/4;
    numberCard.style.fontSize = `${sizeNumber}px`;

    suitCard.forEach(span => {
      const size = height/5;
      span.style.fontSize = `${size}px`;
    });

    console.log("Altura:", height);
    console.log("Ancho:", width);
  }

  buttonChangeCard.addEventListener('click', () => {
    suitsCardRandom = Math.floor(Math.random()*4) + 1;
    numberCardRandom = Math.floor(Math.random()*14);
    changeSuitsClass();
    generateCardContent();
    assingIconSuits();
  })

  buttonSizeCard.addEventListener('click', () => {
    formSizeCard.classList.toggle('no-show');
  })

  formSizeCard.addEventListener("submit", (event) => {
    event.preventDefault();
    const height = formSizeCard.height.value;
    const width = formSizeCard.width.value;
    changeSize(height,width)
    formSizeCard.classList.toggle('no-show');
    
});

  changeSuitsClass();
  generateCardContent();
  assingIconSuits();
  timer(10);
};
