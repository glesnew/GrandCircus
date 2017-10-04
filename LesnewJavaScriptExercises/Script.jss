var Give = "Give me a number"
var inputQuestion = parseInt (prompt(Give));
console.log ("You entered: " + inputQuestion);

var total = 0;
for (num = inputQuestion; num>0; num--){
    total+=num;
}


console.log ("Sum of numbers <= " + inputQuestion + ": " + total);