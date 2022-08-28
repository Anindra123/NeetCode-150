//659 · Encode and Decode Strings
//Design an algorithm to encode a list of strings to a string. The encoded string is
// then sent over the network and is decoded back to the original list of strings.

//A clever solution is in finding out what delimeter to use to encode the string
//so it can be seperated easily is to use the string length and a # at the begining
// of the string , the during decoding take the first # and before it will be the
//character count , iterate through the next character after the # based on the count

/**
 * @param {string[]} strs
 * @return {string}
 */
function encode(strs) {
  return strs
    .map((s) => {
      return `${s.length}#${s}`;
    })
    .join("");
}

/**
 * @param {string} str
 * @return {string[]}
 */
function decode(str) {
  const out = [];
  let s = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      s = "";
      let c = parseInt(str[i - 1]);
      let count = 0;
      while (count !== c) {
        i++;
        s += str[i];
        count++;
      }

      out.push(s);
    }
  }
  return out;
}

const strs = ["we", "say", ":", "yes"];
console.log(encode(strs));
console.log(decode(encode(strs)));
