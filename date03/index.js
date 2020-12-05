console.log('hello')
console.log('hello a')
console.log('hello b')
console.log('hello c')

function sayHello(){
    console.log('Hello');
}
sayHello("yall");
console.log("Hi!")

function sayBye(apple){
    console.log('Hello',apple);
}
sayBye("kall");
console.log("hi!");
sayBye("null",15);

function saySay(apple, pie){
    console.log('Hello',apple,"you have", pie, "your age.");
}
saySay("sall",15);



function sayHello(name, age){
    return `hello ${name} you are ${age} yours old`;
}
const greetSunah = sayHello("sunah",26)
console.log(greetSunah)

//console.log(greetsunah)
const calculator={
    plus:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },Multiplication :function (a,b){
        return a*b;
    },Square:function (a,b){
        return a**b;
    }

}
const plus= calculator.plus(5,5)
const minus= calculator.minus(5,1)
const Multiplication= calculator.Multiplication(5,2)
const Square= calculator.Square(5,3)

console.log(plus);
console.log(minus);
console.log(Multiplication);
console.log(Square);



 





