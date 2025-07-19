/**
Given a roman numeral, convert it to an integer.

 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //Roman numerals
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let res = 0; 
    let prev = 0; 
    let inverted = s.split('').reverse().join(''); 
    
    for(let car of inverted) {
        let curr = romanValues[car];
        
        if(curr < prev) {
            // e.g.: IV, IX, XL, etc.
            res -= curr;
        } else {
            res += curr;
        }
        prev = curr;
    } 
    return res;
};
