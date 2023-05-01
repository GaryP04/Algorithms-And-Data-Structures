//create a function to take two parameters: array and target
function twoSum(array, target) {

    //declare a constant variable with empty object.
    const hashMap = {} ; 

    //out of curiostiy how to get all possiblities. 
    //create an empty array. Since it is a constant variable it cannot be reassigned.
    const pairs = [];

    //assinging i with a value from array starting at 0 to increasing order to length.
    for (let i=0; i<array.length; i++) {

        //declare a constant variable to currentVal = i
        const currentVal = array[i];

        //declare a constand variable to targetVal = target - currentVal
        const targetVal = target - currentVal;

        //check if targetVal is in object hashMap.
        if (targetVal in hashMap) {
            pairs.push ([targetVal, currentVal])
        }

        //the target is not in hashmap and will continue to check since its also set to true.
        hashMap[currentVal] = true
        }
        return pairs;
    }

console.log(twoSum([1, 3, 5, 9, 2, -1, -4, 2], 4))