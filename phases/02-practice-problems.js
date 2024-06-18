function anagrams(str1, str2) {
  // Your code here
  let letters = {};
  for (const c of str1) {
    letters[c] = letters[c] ? letters[c] + 1 : 1;
  }

  for (const c of str2) {
    if (letters[c] === undefined) return false;
    letters[c] -= 1;
    if (letters[c] < 0) return false;
  }
  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  const set1 = new Set(arr1);
  let rv = [];
  for (const el of arr2) {
    if (set1.has(el))
      rv.push(el);
  }
  return rv;
}


function duplicate(arr) {
  // Your code here
  const set = new Set();
  for (const el of arr){
    if (set.has(el)) return el;
    set.add(el);
  }

}


function twoSum(nums, target) {
  // Your code here
  const set = new Set(nums);
  for (const el of nums) {
    if (target / 2 === el) continue;
    if (set.has(target - el)) return true;
  }
  return false;

}


function wordPattern(pattern, strings) {
  // Your code here
  const obj = {};
  const set = new Set();
  for (let i = 0; i < pattern.length; i++) {
    if (set.has(strings[i]) && obj[pattern[i]] !== strings[i]) return false;
    if (obj[pattern[i]]) {
      if (obj[pattern[i]] !== strings[i]) return false;
    } else {
      obj[pattern[i]] = strings[i];
      set.add(strings[i]);
    }
  }
  return true;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
