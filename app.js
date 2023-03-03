// ::::::::::::::::::::::::::::
    //Given this function:
// ::::::::::::::::::::::::::::

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

            // ::::::::::::::::::::::::::::
// Refactor it to use the rest operator & an arrow function:
            // ::::::::::::::::::::::::::::

const filterOutOdds = (...nums) => nums.filter(num => num % 2 ===0);

// ::::::::::::::::::::::::::::
            //findMin
// ::::::::::::::::::::::::::::

function findMin(...Numbers){
return Numbers.reduce(function(min,current){
    if(min > current){
        return current
    } else {
        return min
    }

})
}

// ::::::::::::::::::::::::::::
        //mergeObjects
// ::::::::::::::::::::::::::::

const mergeObjects = (obj1,obj2) => ({ ...obj1 , ...obj2});



// ::::::::::::::::::::::::::::
    //doubleAndReturnArgs
// ::::::::::::::::::::::::::::

function doubleAndReturnArgs (arr, ...nums){
    return [...arr, ...nums.map(value => value * 2)]
}


// ::::::::::::::::::::::::::::
        //Slice and Dice!
// ::::::::::::::::::::::::::::

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {

}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1 , ...array2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
return {...obj, [key]: val}
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
let object = {...obj}
delete object[key]
return object;
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return { ...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]: val}

}