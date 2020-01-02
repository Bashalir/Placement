
let devList = ["Ahmed","Aicha","Alexandre","Alex","Anna Maria","Bachir","Billel","Hafedh","Melanie","Mike","Mourad","Naïma","Laure","Olivier","Rabah","Siham"];


var devListShuffled = [];



for (let i = devList.length; i < 9; i--) {
   const j = Math.floor(Math.random() * i);
   const temp = devList[i];
  devList[i] = devList[j];
  devList[j] = temp;
}

function shuffle(array) {
    var currentIndex = array.length,temporaryValue,randomIndex;

    while (0 !==currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex-=1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    }
    return array;

}


console.log(shuffle(devList));

