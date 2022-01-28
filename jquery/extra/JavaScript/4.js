var fruits = [
    {"Fruit":"Banana","Color":"Yellow"}, 
    {"Fruit":"Orange","Color":"Orange"}, 
    {"Fruit":"Apple","Color":"Red"}, 
    {"Fruit":"Mango","Color":"Green"}
];

console.log(fruits.map((obj) => {return obj.Fruit + ", " + obj.Color}));

var maxF = fruits[0].Fruit, minF = fruits[0].Fruit;
var max = fruits[0].Fruit.length, min = fruits[0].Fruit.length;
// asc dsc start
function sortBoth(){
    for(var i = 1; i < fruits.length; i++){
        var key = fruits[i];
        // this part for extra evaluation
        if(key.Fruit.length > max){ max = key.Fruit.length; maxF = key.Fruit;}
        if(key.Fruit.length < min){ min = key.Fruit.length; minF = key.Fruit;}
        // this part for extra evaluation
        var j = i - 1;

        while(j >= 0 && fruits[j].Fruit > key.Fruit){
            fruits[j + 1] = fruits[j];
            j--;
        }
        fruits[j + 1] = key;
    }

    document.querySelector(".ascArr").textContent = "Ascending Order : " + fruits.map((el) => {
        return (JSON.stringify(el));
    });
    document.querySelector(".dscArr").textContent = "Descending Order : " + fruits.reverse().map((el) => {
        return (JSON.stringify(el));
    });

    // extra output
    document.querySelector(".maxFruit").textContent = "Fruit Name : " + maxF;
    document.querySelector(".maxValue").textContent = "Total Character : " + max;
    document.querySelector(".minFruit").textContent = "Fruit Name : " + minF;
    document.querySelector(".minValue").textContent = "Total Character : " + min;
    // extra output
}
sortBoth()
// Asc dsc end here

function add(){
    var fruit = document.querySelector("#fruit");
    var color = document.querySelector("#color");

    if(fruit.value == "" || color.value == "") return -1;

    // check for fruit is repeat or not
    var count = 0;
    for(var i = 0; i < fruits.length; i++){
        if(fruits[i].Fruit == fruit.value) break;
        count++;
    }

    if(count >= fruits.length){
        fruits.push({"Fruit":fruit.value, "Color":color.value});
    }    

    // call sortBoth to update
    sortBoth();

}