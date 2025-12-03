/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const x = 5;
const y = 10;
if (x > y) {
  console.log("il numero più grande è: " + x);
} else if (y > x) {
  console.log("il numero più grande è: " + y);
}

/*
 ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (y !== 5) {
  console.log("not equal");
} else if (y === 5) {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
if (x % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const a = 7;
const b = 1;
if (a === 8 || b === 8 || a + b === 8 || a - b === 8 || b - a === 8) {
  console.log("it's 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 49.99;
let shipping = 10;

if (totalShoppingCart > 50) {
  shipping = 0;
}

let total = totalShoppingCart + shipping;
console.log(total);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2 = 100;
let discountedTotal = totalShoppingCart2 * 0.8;

let shippingCost2 = 10;
if (discountedTotal > 50) {
  shippingCost2 = 0;
}

let finalBlackFridayTotal = discountedTotal + shippingCost2;
console.log(finalBlackFridayTotal);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let c = 15;
let d = 4;
let e = 20;

let result;

// caso 1: c è il più grande
if (c > d && c > e) {
  if (d > e) {
    result = [c, d, e];
  } else {
    result = [c, e, d];
  }

  // caso 2: d è il più grande
} else if (d > c && d > e) {
  if (c > e) {
    result = [d, c, e];
  } else {
    result = [d, e, c];
  }

  // caso 3: e è il più grande
} else {
  if (c > d) {
    result = [e, c, d];
  } else {
    result = [e, d, c];
  }
}

console.log(result);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let value = "word";

if (typeof value === "number") {
  console.log("È un numero");
} else {
  console.log("Non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = prompt("Inserisci un numero");

if (numero % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/

let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let initial = { initialArray: [] };
console.log(initial);

initial.initialArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(initial);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

initial.initialArray[9] = 100;
console.log(initial);
