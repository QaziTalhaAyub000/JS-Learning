const prompt = require("prompt-sync")({ sigint: true });
//  probably the necessary library installatio in vs code .... npm install prompt-sync
// code to tell if user entered number is primary number or not 

// var x = prompt("Enter any Number: ");
// let count = 0;
// for (let i = 1; i < x; i++) {
//     if (x % i == 0) {
//         count += 1;
//     }
// }
// if (count < 2) {
//     console.log("Prime number");
// }
// else {
//     console.log("Not prime number");
// }


// code which prints all the Prime Numbers before the number user enterd

let x = Number(prompt("Enter any number: "));

for (let num = 2; num < x; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
