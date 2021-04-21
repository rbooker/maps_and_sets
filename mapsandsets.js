//Quick Question 1

//What does the following code return?
//new Set([1,1,2,2,3,4])

//Answer
//{1,2,3,4}

//Quick Question 2

//What does the following code return?
//[...new Set("referee")].join("")

//Answer
//"ref"

//Quick Question 3

//What does the Map m look like after running the following code?
/*let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
*/
//0: {Array(3) => true}
//1: {Array(3) => false}

//Write a function called hasDuplicate which accepts an array 
//and returns true or false if that array contains a duplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length

//Write a function called vowelCount which accepts a string and 
//returns a map where the keys are numbers and the values are the 
//count of the vowels in the string.

function vowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCase = char.toLowerCase()
      if(vowel(lowerCase)){
        if(vowelMap.has(lowerCase)){
          vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1);
        } else {
          vowelMap.set(lowerCase, 1);
        }
      }
    }
    return vowelMap;
  }
