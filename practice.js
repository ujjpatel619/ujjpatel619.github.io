// //Variables 

// // Primitive Type
// let name = 'Ujjaval'; //String
// let age = 20; //Number
// let isOnline = true; //Boolean
// let address = undefined; //Undefined
// let water = null; // Null

// // Reference Type
// //Object 
// const indianGod = {
//  avatar1: {
//      name: 'Dashama'
//  },
//  avatar2: {
//      name: 'Kalima'
//  },
//  avatar3: {
//     name: 'Laxmima'
// },
// avatar4: {
//     name: 'Digambaraya'
// },
// religion: 'Hindu',
// Author: 'Ujjaval',
// age: function totalAge(a) {
//     return age + a
// }
// }
// //console.log(indianGod.avatar4.name)
// console.log(indianGod.age(5))

// //Array
// let favFruits = ['apple', 'banana', 'grapes', 'oranges', 4]
// favFruits.push('newEntry.')
// // console.log(favFruits)

// //Function 
// function demo1() {
//     console.log('This is a function demo!')
// }
// demo1();

//Results

//Result Calculator

// function examResult(input) {
// if(input < 40) {
//     console.log('You have failed.')
// } else if (input >= 40 && input < 50) {
// console.log('just passed! ')
// } else if (input >= 50 && input < 60) {
//     console.log('got a 2:2! ')
// } else if (input >= 60 && input < 70) {
//     console.log('got a 2:1! ')
// } else if (input >= 70 && input <= 100) {
//         console.log('got a 1:1! ')
// } else {console.log('Enter correct digits!')}}

// examResult(34)

// function demoDom() {
//     let al = alert('Hello there' )
// document.getElementById('tst1').innerHTML = al }

// console.log('this is work macbook!');


function pingPong() {
for(number = 0; number < 100; number++){
    if(number % 2) {
        console.log(number + ' IS ODD!')
    }
    else{
        console.log(number + ' IS EVEN!')
    }
    console.log('')
}
}
pingPong()

function oddOrEven() {
    let numberInput = document.getElementById('numInput').value;
    let numOutput = document.getElementById('numOutput')
    if(numberInput % 2){
        numOutput.innerText = numberInput + ' IS ODD NUMBER'
        // console.log(numberInput + ' IS ODD NUMBER')
    }else{
        numOutput.innerText = numberInput + ' IS EVEN NUMBER'
        // console.log(numberInput + ' IS EVEN NUMBER')
    }
}