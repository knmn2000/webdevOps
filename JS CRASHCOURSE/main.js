/* 

console.log('aejf'); // not preferred as it blocks the script from running. so use the console, as its a developer tool 
// you can directly print to console of the browser too.
//alert('alef'); // MDN has a lot 0f web API's etc , can also look up methods like consoles 

console.error('this is an error'); // stuff from the docs
console.warn('warning');

// VARIABLES

// var, let, const

// var is globally scoped, so not preffered to be used 
// can cause conflicts
// block level scope - let and const 

let age = 30; 
age = 31;
console.log(age); // let allows us to change values 

//const umar = 30;
//umar = 31;
//console.log(umar); // this throws an error because const is supposed to be constant

//always use CONST unless you know youre going to reassign the value
// has many advantages ^

// DATATYPES

// String, Numbers, Boolean, null, undefined, Symbol

const name = 'ramdas'; // dont really need to use semicolons but ok
const agee = 30;
const isThanda = true; 
const rating = 3.5;
const x = null; 
const y = undefined; 
let z; // this is also undefined !

console.log(typeof rating);
console.log('Primitive data types')


//Contcatenation

console.log('name '+ name + ' age ' + agee); //older way

//template string 
console.log(`my name ${name} and i am ${agee} years old`); // back ticks (`) are used for template strings 

const hello = `my name ${name} and i am ${agee} years old`
console.log(hello);

// lenght

const s = 'Hello world';
console.log(s.length) // length is a property so it does not have parenthesis. if something as parenthesis then its called a method
console.log(s.toUpperCase()) 
console.log(s.toLowerCase())
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());

console.log(s.split('')); 

const splitt = 'tech, doosra, teesra, etc';
console.log(splitt.split(','));


// ARRAYS 

const numbers = new Array(1,2,3,4,5,6,7); // This is a constructor
console.log(numbers);

const fruits = ['apples', 'organes', 'grapes', 10, true, undefined]; // freedom of datatype
console.log(fruits);

console.log(fruits[1]);

fruits[7] = 'paoer';
console.log(fruits);

// this works even though array is a const because we are not reintialising it
// to cause an error here, we would need to do fruits = []; and this would cause an error

fruits.push('mango');
console.log(fruits);

fruits.unshift('strawss');
fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits))
console.log(fruits.indexOf('strawss'));

// OBJECT LITERALS 

const person = {
    fname : 'john',
    lname : 'doe',
    age : 30,
    hobbies : ['abc', 'movies', 'sports'],
    address:{
        street : 'gali no 4',
        city : 'sampla',
        state : 'bhadurgad',
    }
}

console.log(person.fname, person.age);
console.log(person.hobbies[1]);
console.log(person.address.city);

// if we want this data as actual variables 
// its called destructure
const {fname, lname , address : {city}} = person;

console.log(fname);
console.log(city);

person.email = 'jhon@gmail.com';

console.log(person); // then an email property will be added automatically


// ARRAY OF OBJECTS 
// OBJECT LITERALS 

const todos = [ 
    {
        id : 1,
        text : 'bald',
        isCompleted : true,
    },
    {
        id : 2,
        text : 'dentist',
        isCompleted : true,
    }
];

console.log(todos);
console.log(todos[1].text);

// JSON is a dataformat which is used a lot in fullstack dev and sending data to here and there and to recieve data too
// very similar to object literals 
// freeformatteer.com json formatter . 
// if we want to convert this object literal thing into json then 

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); // json converted format

// FOR LOOPS 

for (let i = 0; i <= 10; i ++){
    console.log(`strings blahblah ${i}`);
}

// WHILE loops 

let i = 0; 
while (i <= 10 ){
    console.log(`number loop ${i}`);
    i ++ ;
}

for (let i = 0; i < todos.length; i ++){
    console.log(todos[i].text);
}

// another way 

for (let todo of todos){ // its like "for x in array" in python 
    console.log(todo.text);
}


// high order array methods 
// forEach, map, filter 

todos.forEach(function(todo){  // the first parameter used in the function will be what you want to use "for each" item in the array. the function can have multiple parameters
    console.log(todo.text);
});

const todoText = todos.map(function(todo){ // map returns an array at the end
    return todo.text; 
});
console.log(todoText);


/*
const todoCompleted = todos.filter(function(todo){ //filters out the parts that satisfy the condition
    return todo.isCompleted === true;
});
*/

/*
const todoCompleted = todos.filter(function(todo){ //filters out the parts that satisfy the condition
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

// watch more higher order array methods videos ^^^

console.log(todoCompleted);

// CONDITIONALS

const ecks = '10';  // notice that 10 is a string here and not a number
const why = 100;
if (ecks == 10  || why < 100){ // difference between == and === 
    // == matches the value, hence if i use == here then the condition will hold true
    // === also matches with the datatype of what is being compared. so === will return nothing here 
    console.log('x is 10 ');
} 

else if(x > 10 && y < 25) {
    console.log('x > 10');

}

else {
    console.log('x < 10 ');

}

// Turnary operator (?)

const num = 1;

const color = num > 10 ? 'red':'blue'; // true : false 

console.log(color);

switch(color){
    case 'red':
        console.log('col is red');
        break;
    case 'blue':
        console.log('col is blue');
        break;
    default:
        console.log('col doesnt match');

}

// FUNCTIONS 

function addNums(num1 = 1, num2= 10){ // default values, like in python
    return num1 + num2;
    }

console.log(addNums(15, 34));
console.log(addNums());

// arrow function 

const numAdd = (numm1 = 1, numm2 = 2) => {numm1 + numm2 } // no need to use return. and if its just a single line then you dont even need the curly braces
// adding return would actually throw an error
numAdd(5,5);

// if its just a single parameter, then even the brackets arent required

const addFive = num1 => num1 + 5;

console.log(addFive(55));
 
// THIS keyword (READ)

*/

// comments near line 190's


// OOP Concepts in js



// prototype

//constructor function
function Person(fname, lname, dob){
    this.fname = fname;
    this.lname = lname;
    this.dob =new Date(dob); // can use Date for date object
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullname = function(){
        return `${this.fname} ${this.lname}`;
    }
}

// USE of proto??? 
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.fname} ${this.lname}`;
}

//instantiate object
const person1 = new Person('ram', 'das', '1-2-1990'); //just like java
const person2 = new Person('mariya', 'patel', '3-5-1929');
console.log(person1);

console.log(person2.dob.getFullYear()) // date has many properties 

console.log(person1.getBirthYear());
console.log(person2.getFullname())


// CLASSES 

class Personn {   // DOES THE SAME THING AS THE PROTOTYPE THING ABOVE, This is whats called as syntactic sugar. its just prettier way to do things 
    constructor (fname, lname, dob) {
        this.fname = fname;
        this.lname = lname;
        this.dob =new Date(dob);

    }
    getBirthYear = function(){
        return this.dob.getFullYear();
    }
    getFullname = function(){
        return `${this.fname} ${this.lname}`;
    }
}

const person4 = new Personn('ram', 'das', '1-2-1990'); //just like java
const person5 = new Personn('mariyaaaa', 'patel', '3-5-1929');
console.log(person4);

console.log(person5.dob.getFullYear()) // date has many properties 

console.log(person4.getBirthYear());
console.log(person5.getFullname());

