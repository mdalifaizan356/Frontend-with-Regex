/*
 =========================================Notes================================================
    Function in JAVASCRIPT
        There are three main types of functions in JavaScript:
            1.Named function
            2.Anonymous function
            3.Arrow function

*/

"use strict";

// Function (Takes Nothing Return Nothing)
    // //Named function
    // function BWNamedFunction(){
    //     console.log("Happy BirthDay To You");
    // }
    // BWNamedFunction();                                          //Function Call/Invoke


    // //Anonymous function
    // let BWAnonymousFunction = function(){
    //     console.log("Happy BirthDay To You");
    // };
    // BWAnonymousFunction();

    // //Arrow function
    // let BWArrowFunction = () => console.log("Happy BirthDay To You");
    // BWArrowFunction();



// Function (Takes Somthing Return Nothing)
    //Named function
    function isEvenNamedFxn(Parameter1){
        if(Parameter1%2==0){
            console.log("Yes it is Even");
        }
        else{
            console.log("Not Even");
        }
    };
    isEvenNamedFxn(3);

    //Anonymous function
    const isEvenAnonymousFxn=(Parameter1){
        if(Parameter1%2==0){
            console.log("Yes it is Even");
        }
        else{
            console.log("Not Even");
        }
    };
    isEvenAnonymousFxn(3);
