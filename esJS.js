//Esercizio n1
function verificaParentesi(stringa) {
  let contatore = 0;

  for (let i = 0; i < stringa.length; i++) {
    if (stringa[i] == "(") {
      contatore++;
    } else if (stringa[i] == ")") {
      contatore--;

      if (contatore < 0) {
        return false;
      }
    }
  }

  return contatore == 0;
}

//Test
console.log(verificaParentesi("()()"));
console.log(verificaParentesi("(()("));
console.log(verificaParentesi("()"));
console.log(verificaParentesi("()(("));
console.log(verificaParentesi(")()"));

//Esercizio n2
function sommaPariDispari(array) {
  let sommaPari = 0;
  let sommaDispari = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sommaPari += array[i];
    } else {
      sommaDispari += array[i];
    }
  }

  return { pari: sommaPari, dispari: sommaDispari };
}

// Test
console.log(sommaPariDispari([1, 2, 3, 4, 5, 6]));

console.log(sommaPariDispari([10, 15, 20, 25]));

console.log(sommaPariDispari([7, 9, 11]));
