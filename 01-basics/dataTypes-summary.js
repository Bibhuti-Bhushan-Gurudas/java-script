/*
1.. primitive data types and non primitive data types
    how to keep it in memory and how to access that 

    A. Primitive data Types with 7 categories

    String ==> call by value
    Number
    Boolean
    null
    undefined
    Symbol
    BigInt

*********************************************XXXX*****************************************

2.. Reference Type Or Non-primitive data type

    Array
    Objects
    Functions


     Array ==>
        const heroes =["shaktiman","doga"];

     Objects ===>
     let myObj =   {
            name:"Bibhu",
            date:"05/06/1998"
        }

    function ==>
        const myFuction = function(){
            console.log("Hello World")
        }

*************************XXXXXX*********************************************

IMP :: java script is a dynamically types language.
    JavaScript is a dynamic language and not static, 
    which means that variables can hold values of different types 
    during runtime. Unlike languages such as Typescript or Java,
     you don't need to declare the data type of a variable explicitly.

     const score = 100 // java script --> dynamically typed
     const score:number = 100 //typescript -->statically types


     USE OF SYMBOL FOR UNIQUENESS

     const id = Symbol("123");
     const anotherId = Symbol("123");

     thoough we have passed the same value but both are different from each other because we have used Symbol.


     BigInt 

     const bigNumber = 23445678698n;
*/

