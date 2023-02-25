// used random.org integer set generator
const array = [15, 38, 18, 9, 33, 42, 12, 26, 46, 35, 19, 36, 10, 3, 16, 49];

function findBiggestNumber(){

    var biggestNumber = array[0];

    for(let i = 1; i < array.length; i++){
        if(array[i] > biggestNumber)
            biggestNumber = array[i];
    }

    return biggestNumber;

}

console.log(findBiggestNumber());