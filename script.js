"use strict";

let kdoJeNaTahu = "circle";

let polickoElm = document.querySelectorAll(".policko");
const JenNaRade = document.querySelector(".hraje");
/* btn.classList.add("board__field--circle");
btn.classList.add("board__field--cross"); */
/* const hra = document.querySelectorAll(".hra"); */

const hra = (event) => {
  if (kdoJeNaTahu === "circle") {
    event.target.classList.add("board__field--circle");
    event.target.innerHTML = `<img " src="podklady/circle.svg" alt="kolecko">`;
    document.querySelector(".hraje").innerHTML = `<p> HRAJE:</p> <img class="kolecko" src="podklady/circle.svg" alt="circle"></div>`;
    event.target.disabled = true;
    kdoJeNaTahu = "cross";
  } else {
    event.target.classList.add("board__field--cross");
    event.target.innerHTML = `<img  src="podklady/cross.svg" alt="cross">`;
    document.querySelector(".hraje").innerHTML =
      '<p> HRAJE: </p> <img class="krizek" src="podklady/cross.svg" alt="cross">';
    event.target.disabled = true;
    kdoJeNaTahu = "circle";
  }
};

const items = document.querySelectorAll(".policko");

for (let i = 0; i < items.length; i += 1) {
  items[i].addEventListener("click", hra);
}
