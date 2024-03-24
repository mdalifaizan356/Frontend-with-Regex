/*
 =========================================Notes================================================
    String Concatenation

    Template String
        Isko apply karne k liye hum use karte he backtiks ``. Puri string ko double or single
        qoutes me na likh kar hum backtiks me likhte he. or varible ki value ko fetch karne k
        liye doller sign($) k sath curly braces and curly braces k undar variable ka name likhte
        he. 

    == vs ===

    
*/

"use strict";
// Conversion
    // Convert number to string
        //number data type ko empty string k sath add karne pr number string me convert ho jata he  
            // console.log(typeof(age +" "));

    // Convert string to number
        //string data type se + ka symbol laga dene se string number me convert ho jata he  
            console.log(typeof(+"four"));
            
            let phoneNumber="9887370536";
            phoneNumber=Number(phoneNumber);
            console.log(typeof phoneNumber);


//String Concatenation
    let str1 = "Faizan";
    let str2 = "Ali";
    let fullName = str1+" "+str2;
    console.log(fullName);

    let str3 = "17";
    let str4 = "10";
    let add = +str3 + +str4;
    console.log(add);
    // console.log(+str3 + +str4);

//Template String
    // Require output: My name is Faizan and my age is 25;
        // Without Template String
            let age = 25;
            let firstName="Faizan";
            let aboutMe = "My name is "+firstName+ " and my age is "+age;
            console.log(aboutMe);

        // With Template String
            aboutMe = `My name is ${firstName} and my age is ${age}`;
            console.log(aboutMe);

// == vs ===
    let num1="7"; //let num1=7; 
    let num2=7;
    console.log(num1==num2);
    console.log(num1===num2);