// Welcome to the Chalkboard Printer!
const input = require('prompt-sync')({sigint: true})

let name = input("Enter your name: ")
let surname = input("Enter surname: ")
let message = input("Enter message: ")
let repeat = Number(input("Enter number of repeats: "))


// Log the message to the console 5 times.
    for(let i = 0; i < repeat; i++) {
        console.log(`This is ${name} ${surname} and ${message}`);
    }
    


