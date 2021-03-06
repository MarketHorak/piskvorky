"use strict";

let kdoJeNaTahu = "circle";

let polickoElm = document.querySelectorAll(".policko");
const JenNaRade = document.querySelector(".hraje1");
/* btn.classList.add("board__field--circle");
btn.classList.add("board__field--cross"); */
/* const hra = document.querySelectorAll(".hra"); */

const grid_size = 10
const circle = 0
const cross = 1
const none = -1

const hra = (event) => {

  let idx = getButtonIndex(event.target)
  let row = Math.floor(idx / grid_size)
  let col = idx % grid_size 
  console.log(idx, row, col)



  if (kdoJeNaTahu === "circle") {
    event.target.classList.add("board__field--circle");
    /* event.target.innerHTML = `<img " src="podklady/circle.svg" alt="kolecko">`;  */
    document.querySelector(".hraje1").innerHTML = `<p> HRAJE:</p> <img class="kolecko" src="podklady/circle.svg" alt="circle">`;
    event.target.disabled = true;
    kdoJeNaTahu = "cross";

    if ( checkLastMoveWins(row, col)) {
      console.log("kolecka vyhravaji")
    }


    /* isWinningMove() */
  } else {
    event.target.classList.add("board__field--cross");
   /* event.target.innerHTML = `<img  src="podklady/cross.svg" alt="cross">`; */ 
    document.querySelector(".hraje1").innerHTML = '<p> HRAJE: </p> <img class="krizek" src="podklady/cross.svg" alt="cross">';
    event.target.disabled = true;
    kdoJeNaTahu = "circle";
     /* isWinningMove() */

     if ( checkLastMoveWins(row, col)) {
      console.log("krizky vyhravaji")
    }

  }

};

function getButtonIndex(button) {
  let policka = document.querySelectorAll(".policko")
  for(let i=0; i<policka.length; i+=1) {
    if (policka[i] === button) {
      return i
    }
  }
  return -1
}

function getButtonValue(row, col) {
  let idx = row * grid_size + col
  let button = document.querySelectorAll(".policko")[idx]
  if (button.classList.contains("board__field--cross")) {
    return cross
  }
  else if (button.classList.contains("board__field--circle")) {
    return circle
  }
  else {
    return none
  }
}

function checkLastMoveWins(row, col) {

  const currentPlayer = getButtonValue(row, col)

  let sameValueUp = row
  for(sameValueUp=row; sameValueUp>=0; sameValueUp-=1) {
    if (getButtonValue(sameValueUp, col) != currentPlayer) {
      break
    }
  }

  let sameValueDown = row
  for(sameValueDown=row; sameValueDown<grid_size; sameValueDown+=1) {
    if (getButtonValue(sameValueDown, col) != currentPlayer) {
      break
    }
  }

  const fiveUpDown = (sameValueDown - sameValueUp -1) >= 5
  
  return fiveUpDown
}













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

	let inRow = 1 // Jedni??ka pro pr??v?? vybran?? pol????ko
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
  `.alert (Vyhr??l:${getSymbol})`;
}