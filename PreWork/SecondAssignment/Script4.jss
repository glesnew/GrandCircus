var mealFood = [
    ["breakfast","eggs and toast"],
    ["lunch", "a salad"],
    ["dinner", "chicken and rice"]
];
var timeMeal = [
    ["morning", mealFood[0]],
    ["noon", mealFood[1]],
    ["evening", mealFood[2]]
];

var time = "What time of day is it?";
var ask = prompt(time);
var mealFoodEntry;

for (output=0;output<timeMeal.length; output++)
{
    if (ask == timeMeal [output][0]){
        mealFoodEntry = timeMeal [output][1];
        var answer = "Since it is " + ask+", you should be eating "+mealFoodEntry[0]+ ". We suggest "+mealFoodEntry[1]+".";
        alert (answer);
        break;
    }

}

if(mealFoodEntry==null) {
    alert("We have no suggested meal at this time.");
}
