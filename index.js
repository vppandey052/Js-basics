//This is my first Javascripty code
console.log('Hello World');

//let
let name = 'Vinay';
console.log(name);
//Cannot be a reserved keyword(if,else const,let)
//Should be meaningful
//Cannot start with a number(1name)
//Are case-sensitive(firstName !== FirstName)

//const
//let interestRate = 0.3;
const interestRate = 0.3;
//interestRate = 1; //constants cannot be re-assigned
//if you want to assign use let keyword.
//Uncaught TypeError: Assignment to constant variable.at index.js:13
console.log(interestRate);//value is 1, value is changed

//Literals
let firstName = 'Jhon';//String Literal
let age = 30; //Number Literal
let isApproved = false;//Boolean Literal
let lastName = undefined;
let selectedColor = null;

//2 types of language
//1) Static language
//2) Dynamic language

//Objects {}
let person = {
    name : 'Panda',
    age : 30
};

//Dot Notation
person.name='Jonny';
console.log(person.name);
//Bracket Notation
let selection = 'name';
person[selection] = 'Marry';
console.log(person.name);

//Arrays []. can store different types in array
//An array is DataStructure used to represt an list of items.
let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
console.log(selectedColors); 
console.log(selectedColors[0]);//red
console.log(selectedColors.length); 

//functions
//Performing a task
function greet(name, lastName){ //parameter
console.log('Hello ' + name +' '+ lastName);
}

//Calculating a value
function square(number){
    return number * number;
}

let number = square(2);
console.log(number);

greet('Jhon','Smith');
