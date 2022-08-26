//242. Valid Anagram
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a 
different word or phrase, 
typically using all the original letters exactly once.
*/

//For less space complexity a smart solution is to sort the
//characters of the string and match the string
var isAnagram = function (s, t) {
  const s1 = t.split("").sort().join("");
  const s2 = s.split("").sort().join("");
  return s1 === s2;
};

//Better solution use of hashmap
//Key is the character and number of occurance is the value
//Have high space complexity but low time complexity
// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false;
//     let smap = {};
//     let tmap = {};
//     for(let i=0;i<s.length;i++){
//         if(smap.hasOwnProperty(s[i])){
//             smap[s[i]]++;
//         }
//         else{
//             smap[s[i]] = 1;
//         }
//         if(tmap.hasOwnProperty(t[i])){
//             tmap[t[i]]++;
//         }
//         else{
//             tmap[t[i]] = 1
//         }
//     }

//     for(let k in smap){
//         if(smap[k] !== tmap[k]) return false;
//     }
//     return true;

// };

//My solution 10 sec runtime horrible
//Probably due to the regex check
// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false;
//     let cns = 0;
//     let cnt = 0;
//     for(const c of s){
//         let rs = new RegExp(c,'g');
//         cns = s.match(rs)?.length;
//         cnt = t.match(rs)?.length;
//         if(cns !== cnt) return false;

//     }
//     return true;

// };
