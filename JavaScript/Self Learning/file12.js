/*
 =========================================Notes================================================
    Object iterate
        2 tarke se iterate kar sakte he
            1.for in loop
            2.object.keys
        
        key and value pair print karane k liye hum template string use karte he.

*/

"use strict";

// //Iterate using for in loop
//     const person ={
//         Name: "Faizan",
//         Age: 26,
//         "Person hobby":["Coding", "Sleeping", "Music"]
//     };

//     for(let key in person){
//         // console.log(key);                      //Print all key
//         // console.log(person["key"]);           //undefined
//         // console.log(person[key]);            //Print values
//         // console.log(key, "=", person[key]);  //Print key values pair
//         console.log(`${key}=${person[key]}`);  //Print key values pair usin template string
//     }


//Iterate using object.keys
    const person ={
        Name: "Faizan",
        Age: 26,
        "Person hobby":["Coding", "Sleeping", "Music"]
    };

    console.log(Object.keys(person));
    console.log(typeof(Object.keys(person)));
    const val=Array.isArray(Object.keys(person));
    console.log(val);

    for(let key of Object.keys(person)){
        console.log(person[key]);
    }
    

