///define a function 'firstUniquie' that takes a string 's' as its parameters
var firstUnique = function(s) {
    ///a for loop is used to iterate over every other index of the string 's'.
    ///loop counter 'i' is initialized to 0, and on each iteration, 'i' is incremented by 2
    for (let i=0; i<s.length; i+=2) {
        ///within the loop, the character at index 'i' is stored in the variable 'ch'
        let ch = s [i];
        ///a boolean variable 'isUnique' is declared and initialized to 'true'
        let isUnique = true;
        ///a nested 'for' loop, starting from 'j=1+i' iterating over every index of the string 's'
        for (let j=i+1; j<s.length; j++) {
            ///within the nested loop, the character at index 'j' is stored in the variable 'pa'
            let pa = s[j];
            ///the 'if' function checks if data and variable is equal for varialbes 'ch' and 'pa'
            if (ch===pa) {
                /// the 'isUnique' variable is set to 'false', and the loop is terminated using the 'break' statement.
                isUnique = false;
                break;
             }
          }
          ///if 'isUniquie' remains 'true', the current index 'i' is returned as the index of the first non-repeating character.
          if (isUnique) {
                return i;
            }
        }
    return -1;
};
const s = 'aabbccde';

console.log(firstUnique(s));