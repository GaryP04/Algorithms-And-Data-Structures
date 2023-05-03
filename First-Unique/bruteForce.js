var firstUnique = function(s) {
    for (let i=0; i<s.length; i++) {
        let ch = s [i]
        if (s.indexOf(ch) === s.indexOf(ch)) {
            return i;
        } 
    }
    return -1
}

const s = 'leetcode';

console.log(firstUnique(s));