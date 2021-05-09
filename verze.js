"use strict";

let kdoJeNaTahu = "circle";

let polickoElm = document.querySelectorAll(".policko");
const JenNaRade = document.querySelector(".hraje1");
/* btn.classList.add("board__field--circle");
btn.classList.add("board__field--cross"); */
/* const hra = document.querySelectorAll(".hra"); */

const hra = (event) => {
  if (kdoJeNaTahu === "circle") {
    event.target.classList.add("board__field--circle");
    /* event.target.innerHTML = `<img " src="podklady/circle.svg" alt="kolecko">`;  */
    document.querySelector(".hraje1").innerHTML = `<p> HRAJE:</p> <img class="kolecko" src="podklady/circle.svg" alt="circle">`;
    event.target.disabled = true;
    kdoJeNaTahu = "cross";
    /* isWinningMove() */
  } else {
    event.target.classList.add("board__field--cross");
   /* event.target.innerHTML = `<img  src="podklady/cross.svg" alt="cross">`; */ 
    document.querySelector(".hraje1").innerHTML = '<p> HRAJE: </p> <img class="krizek" src="podklady/cross.svg" alt="cross">';
    event.target.disabled = true;
    kdoJeNaTahu = "circle";
     /* isWinningMove() */
  }
};
 const items = document.querySelectorAll(".policko"); 
for (let i = 0; i < items.length; i += 1) {
  items[i].addEventListener("click", hra);
}


/* -------------------------------
 */

const getSymbol = (field) => {
	//
	if (field.classList.contains('board__field--cross')) {
		return 'cross'
	} else if (field.classList.contains('board__field--circle')) {
		return 'circle'
	}
}

const boardSize = 10 // 10x10
const fields = document.querySelectorAll('.policko') 

const getField = (row, column) => fields[row * boardSize + column]

const getPosition = (polickoElm) => {
	let fieldIndex = 0
	while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
		fieldIndex++
	};

	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	}
};

const symbolsToWin = 5
const isWinningMove = (field) => {
	const origin = getPosition(field)
	const symbol = getSymbol(field)

	let i

	let inRow = 1 // Jednička pro právě vybrané políčko
	// Koukni doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Koukni doprava
	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Koukni dolu
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
}
if (isWinningMove === true) {
  `.alert (Vyhrál:${getSymbol})`;
}