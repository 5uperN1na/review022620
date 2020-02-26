//Default Parameter Values Review

//Life before

function greet(name) {
    if (name === undefined) {
        name = 'World';
    }
    alert(`Hello ${name}!`);
}
greet('James'); // Hello James!
greet(); // Hello World!

//A default parameter value looks like an assignment statement in the parameter list

function greet(name = 'World') {
    alert(`Hello ${name}!`);
}
greet('James'); // Hello James!
greet(); // Hello World!


//Mixing Defaults and Non-Defaults

//Although having your default parameters first is not technically an error, it is a poor practice

function product(a = 1, b) {
    console.log(a * b);
}
product(2, 3); // 6
product(2); // NaN

//Better way to 
//By making sure your default parameter values are at the end of the parameter list, you will have the option of leavingarguments out when you call the function
//In this example, this function behaves as an identity function if you pass just a single value in

function product(a, b = 1) {
    console.log(a * b);
}
product(2, 3); // 6
product(2); // 2

//Arrow Function
//An arrow function, or arrow function expression, is a more concise representation of a function expression

let add = (a, b) => {
    alert(a + b);
};
add(5, 4);

// shorthand

//When an arrow function has a single parameter, you may discard the parenthesis around the parameter list
//Note that when you have no parameters, or more than one parameter, you must have parenthesis

let greet1 = name => {
    alert(name);
};
greet1('Joy');

// equivalent to:
let hey = (name) => {
    alert(name);
};
hey('Jane');


