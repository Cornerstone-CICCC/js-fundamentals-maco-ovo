/*
Call the emotions() function so that it prints the output you see below, 
but instead of passing the laugh() function as an argument, 
pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/


function emotions(myEmotion, laughFunction) { 
    console.log(`I am ${myEmotion}, ${laughFunction(3)}`);
}


emotions("happy", function(num) {
    let sound = ""
    for (let i = 0; i < num; i++) {
        sound += "ha";
    }
    return sound + "!";
});

