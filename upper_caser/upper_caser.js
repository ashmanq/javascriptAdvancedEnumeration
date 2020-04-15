const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
 const upperCasedWords = this.words.map( (word) => {
   return word.toUpperCase();
 })
 return upperCasedWords;
}

module.exports = UpperCaser;
