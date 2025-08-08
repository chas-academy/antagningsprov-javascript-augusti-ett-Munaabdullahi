

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
var people = [
    { name: "Adam", age: 19 },
    { name: "Stefan", age: 32 },
    { name: "Abdi", age: 40 },
    { name: "Maryan", age: 31 },
    { name: "Salah", age: 35 }
];
function printOver30(arr) {
  for (var i = 0; i < arr.length; i++) {
        if (arr[i].age > 30) {
            console.log(arr[i].name);
        }
    }
}
  printOver30(people);
}

module.exports = { uppg8 };
