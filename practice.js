//Variables 

// Primitive Type
let name = 'Ujjaval'; //String
let age = 20; //Number
let isOnline = true; //Boolean
let address = undefined; //Undefined
let water = null; // Null

// Reference Type
//Object 
const indianGod = {
 avatar1: {
     name: 'Dashama'
 },
 avatar2: {
     name: 'Kalima'
 },
 avatar3: {
    name: 'Laxmima'
},
avatar4: {
    name: 'Digambaraya'
},
religion: 'Hindu',
Author: 'Ujjaval',
age: function totalAge(a) {
    return age + a
}
}
//console.log(indianGod.avatar4.name)
console.log(indianGod.age(5))

//Array
let favFruits = ['apple', 'banana', 'grapes', 'oranges', 4]
favFruits.push('newEntry.')
// console.log(favFruits)

//Function 
function demo1() {
    console.log('This is a function demo!')
}
demo1();