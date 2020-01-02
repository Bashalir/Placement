
let devList = ["Ahmed","Aicha","Alexandre","Alex","Anna Maria","Bachir","Billel","Hafedh","Melanie","Mike","Mourad","Naïma","Laure","Olivier","Rabah","Siham"];


function shuffle(array) {

    let functionArray = [... array];

    var currentIndex = functionArray.length,temporaryValue,randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex-=1;

        temporaryValue = functionArray[currentIndex];
        functionArray[currentIndex] = functionArray[randomIndex];
        functionArray[randomIndex] = temporaryValue;
    }
    return functionArray;

}


console.log(shuffle(devList));

