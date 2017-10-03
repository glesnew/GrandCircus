var name = "What is your name?";
var nameInput = prompt (name);
var helloText = "Hello. My name is " + nameInput;
var inputAgain = "Would you like to print this again?"

var inputText = "Would you like to print your name?";

while (isYesResponse())
{
    alert (helloText);
    helloText+="!";
}

function isYesResponse (){
    var input;
    
    if (helloText.endsWith("!")){
        input = prompt (inputAgain);
    }
    else {
        input = prompt(inputText);
    }
    
    return (input=="yes");
}