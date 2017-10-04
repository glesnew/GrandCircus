var animals = "";
var doYou = "Do you want to play?";
var nameAni = "Name an animal"
var doYouAgain = "Do you want to play again?"
var input = prompt(doYou);

if (input == "yes") {
    animals = prompt(nameAni);

    var inputAgain = input;
    while (inputAgain=="yes")
    {
        inputAgain = prompt(doYouAgain);
        if (inputAgain=="yes") 
        {
            aniInput = prompt (nameAni);

            if(animals.length > 0) {
                animals += " ";
            } 
            animals += aniInput;
        }       
    }
}
console.log ("Animals = '" + animals + "'");