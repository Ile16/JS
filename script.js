// 1 Crea una funzione che controlli due numeri interi. Ritorna "true" se uno dei due è 50 o se la somma 
//dei due è 50

let a = 30;
let b = 20;

function numInter() {
    if (a === 50 || b === 50){
        return true;
    } else if (a + b == 50) {
        return true;
    } else {
        return false
    }
} 
console.log(numInter())



// 2 Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la 
//stringa e la posizione come parametri e ritorna la stringa modificata

//sintassi: nomeVariabileStringa.slice(start, end);
//start is the first position ---> DA
//end it means up to, but not including -----> A 


let lettere = "you only live once"; 
let index = 6;


//funzione dove stringa e indice sono parametri
function indexCheck(lettere, index) {

    //con l'if capisco se l'indice sia valido, ovvero, capisco se è minore di 0 e maggiore uguale alla lunghezza della stringa stessa 
    if (index < 0 || index > lettere.length){
        console.error("Indice non valido"); // stampo scritta in caso di invalidità dell'indice
        return lettere; //ritorna la stringa non modificata
    }
    let removeWord = lettere.slice(0, index) + lettere.slice(index + 1); //all'interno della funzione effettuiamo la modifica nella stringa
    return removeWord; //ritorna la stringa modificata
}

let result = indexCheck(lettere, index);
console.log(result);



// 3 Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100.
//ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false"

let c = 10;
let d = 5;

function numbers() {
    if (c >= 40 && c <= 60) {
        return true;
    } else if (d >= 40 && d <= 60) {
        return true;
    } else if (c >= 70 && c <= 100) {
        return true;
    } else if (d>= 70 && d <= 100) {
        return true;
    } else {
        return false
    }
}

console.log(numbers())

// 4 crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con
// "los" o "new", altrimenti ritorni "false"
//dichiaro una variabile
let cityName = "San Franciso";
let lowerName = cityName.toLowerCase(); //inserimento lowerCase 

function nameC(cityName){
    if(lowerName.includes("los") || lowerName.includes("new")) {
        return cityName;
    } else {
        return false;
    }
}
console.log(nameC(cityName))


// 5 crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. l'array deve essere passato come paramtro
//dichiaro un array
let elenco = [3, 59, 20, 49, 72, 1];
//variabile di inizializzazione per la somma 
let somma = 0; 

//ciclo FOR
for (i = 0; i < elenco.length; i++){ //iterazione
   somma += elenco[i]; //far sommare tutti i valori 
}

console.log(somma);


// 6 Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene,
//ritorna "true", altrimenti "false"

let numbe = [9, 30, 84, 109, 33, 201, 183];
let arrayLenght = numbe.length;
let checkNumber = 1;
let checkNum = 3;

//funzione con il for per iterare il tutto 
//la condizione chce ci da due risultati in un caso o nell'altro  nell'altro

function inside(checkNumber, checkNum, numbe){
    for(i = 0; i < arrayLenght; i++){ //iterazione degli elementi nell'array
    if(checkNumber == numbe[i] || checkNum == numbe[i]){ //condizione
        return false;  //risultato se soddisfa la condizione
    } 
} 
return true; //se non la soddisfa 
}
console.log(inside(checkNumber, checkNum, numbe));
    

// 7 Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
//Angolo acuto: meno di 90 -> ritorna acuto 
// angolo ottuso: tra i 90 e i 180 gradi -> ritorna ottuso
// angolo retto: 90 -> ritorna retto
// angolo piatto: 180 -> ritorna piatto

//dichiaro la variabile

let gradi = 90;

function angolo(gradi){ //funzione con la variabile come parametro
if (gradi < 90){  //condizioni
    return "acuto"; //se vengono soddisfatte 
} else if (gradi > 90 && gradi < 180) {
    return "ottuso";
} else if (gradi === 90) {
    return "retto";
} else if (gradi === 180) {
    return "piatto";
}
}

console.log("L'angolo è: ".concat(angolo(gradi))); //stampa risultato con concatenazione stringa


// 8 Crea una funzione che crei un acronimo a partire da una frase. Esempio "fabbrica italiana 
// automobili torino"  deve ritornare FIAT.

//dichiarazione variabile

let nomeAzienda = "fabbrica italiana automobili torino"

function acronimo(nomeAzienda){
   // if(i < 0 || i > nomeAzienda.length) { //controllo lunghezza stringa 
        //console.error("non valido")
       // return invalid
       // }
    let createAcronym = nomeAzienda.charAt(0) + nomeAzienda.charAt(9) + nomeAzienda.charAt(18) + nomeAzienda.charAt(29); //selezioni i caratteri da stampare
    createAcronym = createAcronym.toUpperCase(); //prendo la variabile già esistente con le modifiche già presenti e la rendo uppercase
    return createAcronym; //dopo le modifiche definite sopra deve restituire il valore modificato
}

let result1 = acronimo(nomeAzienda);
console.log(result1);



//ESERCIZI EXTRA 
