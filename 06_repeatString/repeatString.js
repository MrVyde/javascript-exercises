const repeatsString = function(string, hey) {
 return string.repeat(hey);
};
const repeattext = function(text, hello) {
    return text.repeat(hello);
};
const repeattxt = function(txt, hi) {
    return txt.repeat(hi);
};
const repeatword = function(word, bye) {
    return word.repeat(bye);
};

const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};


// Do not edit below this line
module.exports = repeatString;
