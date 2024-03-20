/*
 =========================================Notes================================================
    Data Type in Javascript [Primitive Data Type]
        1. string
        2. number
        3. boolean
        4. undefined
        5. null
        6. bigInt
        7. symbol


    Truthy and Falsy Values
        Falsy Value:    false,  "empty string", null, undifined, 0 zero.
        Truthy Value    baki sab kuch true hota he like true, string, positive/nagetive number


*/

"use strict";
let age = 22;
let firstName = "Faizan";
let condition = true;        // All truthy and falsy value is boolean.
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof condition);


// Convert number to string
//number data type ko empty string k sath add karne pr number string me convert ho jata he  
console.log(typeof(age +" "));

// Convert string to number
//string data type se + ka symbol laga dene se string number me convert ho jata he  
console.log(typeof(+"four"));

let phoneNumber="9887370536";
phoneNumber=Number(phoneNumber);
console.log(typeof phoneNumber);