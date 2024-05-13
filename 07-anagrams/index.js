// Check to see if two provided strings are anagrams of eachother. One str is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.

// Examples
// anagrams('rail safety', 'fairy tales') === true
// anagrams('RAIL! SAFETY!', 'fairy tales') === true
// anagrams('Hi there', 'Bye there') === false

// Solution #1
function buildCharMap(str) {
  const charMap = {};

  for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (const key in aCharMap) {
    if (aCharMap[key] !== bCharMap[key]) {
      return false;
    }
  }

  return true;
}

// Solution #2
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));
