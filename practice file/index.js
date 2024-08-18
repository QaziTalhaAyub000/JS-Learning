// VARIABLES:

console.log("I like Pizza")//this prints a statement.
window.alert("I really Love Pizza!")//this prints an alert pop up 

//variable deceleration => (var, let, const)

let age , name = "Talha";//here we introduce a variable(string)
age = "21";//here we asign a valur to a varible(number)
console.log(name," is ",age," Year Old")//stament with vaiables(booleans)
console.log("Fuck YOU Talha!")//a statement
// Variable with DOM  :
document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "You are " + age + " year old ";
document.getElementById("p3").innerHTML = "Fuck You Talha !";


// How to take input:

let username=window.prompt("what is your name:");
console.log(username);

document.getElementById("mybutton").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
}

// Changing DATA TYPE of a Variable:

let age = window.prompt("how old r u");

console.log(typeof age); //data type of age is string
age =Number(age);        // changing data type
console.log(typeof age); //data type of age is number
age +=1;                 // itereation in value
console.log("happy birthday you are ",age,"year old now");


let x;
let y;
let z;

x = Number("3.12"); //it will changee data type from string to number 
y = String("3.21");
z = Boolean("");    // this will print false as predefined 

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);

