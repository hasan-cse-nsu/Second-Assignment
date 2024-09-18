// -----------------Task - 01-------------------
// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.


function calculateDifference(numb1, numb2) {
    
    let difference = Math.abs(numb1 - numb2);
    
    return difference;
    
}

console.log(calculateDifference(45,89));


// -----------------Task - 02-------------------
// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.


function isOdd(numb) {

    if(numb % 2 != 0) {
        return true;
    }else {
        return false;
    }
}

console.log(isOdd(55));


// -----------------Task - 03-------------------
//3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.


function findMin(arr) {

    let smallestNumb = arr[0];
    for(let i=1 ; i<arr.length ; i++) {
        if(arr[i] < smallestNumb) {
            smallestNumb = arr[i];
        }
    }

    return smallestNumb;

    // 2nd method of find the smallest number.

    // return Math.min.apply(null, arr);
}

let minArr = [6, 2, 9, 4, 1, 7, 3];
console.log(findMin(minArr));


// -----------------Task - 04-------------------
//4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.


function filterEvenNumbers(arr) {

    let eveArr = [];

    let i=0, j=0;
    while(i<arr.length) {
        if(arr[i] % 2 == 0) {
            eveArr[j] = arr[i];
            j++
        }
        i++
    }

    return eveArr;
}

let numbArr1 = [25, 68, 57, 6, 21, 3, 69, 20, 89, 92];
console.log(filterEvenNumbers(numbArr1));

// -----------------Task - 05-------------------
// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.


function sortArrayDescending(arr) {
    let desSort = arr.toSorted(function(a,b) {return b-a});

    return desSort;
}

let numbArr2 = [21, 3, 54, 63, 5, 48, 13, 96, 6];
console.log(sortArrayDescending(numbArr2));







