// create a function twoSum and take two parameters array and target.
function twoSum(array, target) {

    //let array i start at 0 and increase to array length but cannot be = to actual length
    //length count starts at 1 but code will read array starting at 0
    for (let i=0; i<array.length; i++) {

        //let second array j start at i+1 and increase to array length
        for (let j=i+1; j<array.length; j++){

            //since array i and j will be adjacent numbers and if the sum = target
            if (array[i] + array[j] === target) {

                //should return array with the numbers that equal the sum.
                return [array[i], array[j]];
            }
        }
    }
    return [];
}

console.log(twoSum([3, 1, -5, -1, 3, 9, 6, 7], 1));
