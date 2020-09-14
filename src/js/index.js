import moment from "moment";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");
const firstName = "Pauli";
const age = 32;

console.log(
  `Witaj Drogi Odwiedzający. Nazywam się ${firstName} i mam ${age} lata.`
);

const emptyParagraph = document.querySelector(".week-summary__description--js");

emptyParagraph.innerHTML = `Uzupełniam treść javascriptem`;

function greet(firstName, age) {
  console.log(`Witaj, nazywam się ${firstName} i mam ${age} lata.`);
}

greet(firstName, age);
greet("Ania", 22);

const greetNew = (firstName, age) => {
  console.log(`Witaj, nazywam się ${firstName} i mam ${age} lata.`);
};
greetNew(firstName, age);

const button = document.querySelector(".action--js");

const myClick = () => {
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = `Witaj Drogi Odwiedzający. Nazywam się ${firstName} i mam ${age} lata.`;
};

button.addEventListener("click", myClick);

const startOfDay = moment().startOf("day").fromNow();

const timePlaceholder = document.querySelector(".time--js");
timePlaceholder.innerHTML = startOfDay;

fetch("https://api.github.com/users/paulina-studniak/repos")
  .then(resp => resp.json())
  .then(resp => {
    for (let repo of resp) {
      const { name, html_url } = repo;
      const repositoryList = document.querySelector('.list--js');
      const myTemplate = `<li> ${name} <a href="${html_url}" title="link do repozytorium ${name}">link do githuba </a> </li>`;
;
    repositoryList.innerHTML += myTemplate;}
  })
  .catch((error) => {
    console.log("nie udało się pobrać");
  });
