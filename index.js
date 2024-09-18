// -----------------Task - 01-------------------
// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.


function calculateDifference(numb1, numb2) {
    
    let difference = numb1 - numb2;
    
    return difference;
    
}

console.log("The difference between the first and second argument : " + calculateDifference(45,89));


// -----------------Task - 02-------------------
// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.


function isOdd(numb) {

    return numb % 2 !== 0;
}

console.log("Is the number is odd ? : " + isOdd(55));


// -----------------Task - 03-------------------
// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.


function findMin(arr) {

    if (arr.length === 0) {
        return undefined;
    }
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
console.log("The smallest number : " + findMin(minArr));


// -----------------Task - 04-------------------
// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.


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

    // 2nd method of find the Even numbers.

    // let filterNumbers = arr.filter(eveArr)

    // function eveArr(curValue) {
    //     return curValue % 2 === 0;
    // }

    // return filterNumbers;
}

let numbArr1 = [25, 68, 57, 6, 21, 3, 69, 20, 89, 92];
console.log("The even numbers are : " + filterEvenNumbers(numbArr1));

// -----------------Task - 05-------------------
// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.


function sortArrayDescending(arr) {
    let desSort = arr.toSorted((a, b) => b-a);

    return desSort;
}

let numbArr2 = [21, 3, 54, 63, 5, 48, 13, 96, 6];
console.log("New array sorted in descending order : " + sortArrayDescending(numbArr2));


// -----------------Task - 06-------------------
// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
    let arr = str.split("");
    let temp = arr[0].toLowerCase();

    arr[0] = temp;

    return arr.join("");


    // 2nd method of the first letter lowercased.

    // return str.charAt(0).toLowerCase() + str.slice(1);


}

console.log("The first letter lowercased string : " + lowercaseFirstLetter("BAnGLaDEsH"));


// -----------------Task - 07-------------------
// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. 
// It should filter vowels from the string.


function countVowels(str) {
    let arr = str.split("");

    let i=0, j=0;
    let filVowels = [];
    while(i<arr.length) {
        if(arr[i]=="a" || arr[i]=="e" || arr[i]=="i" || arr[i]=="o" || arr[i]=="u" || arr[i]=="A" || arr[i]=="E" || arr[i]=="I" || arr[i]=="O" || arr[i]=="U") {
            filVowels[j] = arr[i];
            j++
        }
        i++

    }

    return filVowels.length + " and The vowels are " + filVowels;


    // 2nd method of the the number of vowels and filter vowels from the string.

    // let vowels = "aeiouAEIOU";

    // let arr = Array.from(str)
    // let newArr = arr.filter(char => vowels.includes(char));

    // return newArr.length + " and The vowels are " + newArr;



}

console.log("The number of vowels : " +  countVowels("LexIcoGraphicAlly"));


// -----------------Task - 08-------------------
// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.


function findAverage(arr) {

    let total = arr.reduce(add, 0)

    function add(sum, curValue) {
        return sum + curValue;
    }

    let average = total / arr.length;

    return average.toFixed(2);
}

let numbArr3 = [21, 3, 54, 63, 5, 48, 13, 96, 6];
console.log("The average of all elements : " + findAverage(numbArr3));

