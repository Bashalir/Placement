
let devList = ["Ahmed","Aicha","Alexandre","Alex","Anna Maria","Bachir","Billel","Hafedh","Melanie","Mike","Mourad","Naïma","Laure","Olivier","Rabah","Siham"];


let date = new Date();
let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

let myrng = new Math.seedrandom(day+month+year);

console.log(myrng);

function shuffle(array) {

    let functionArray = [... array];

    var currentIndex = functionArray.length,temporaryValue,randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(myrng() * currentIndex);
        currentIndex-=1;

        temporaryValue = functionArray[currentIndex];
        functionArray[currentIndex] = functionArray[randomIndex];
        functionArray[randomIndex] = temporaryValue;
    }
    return functionArray;

}

let devPlaced = shuffle(devList);

var placeList = document.getElementsByClassName("place");

console.log(placeList);




for (let i = 0; i < placeList.length; ++i) {
    placeList[i].innerText = devPlaced[i]; 
}

/*
console.log(placeList);

console.log(devPlaced);*/