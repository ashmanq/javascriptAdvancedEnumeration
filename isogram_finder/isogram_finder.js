const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {

  const wordLowerCase = this.word.map((letter) => {
    return letter.toLowerCase();
  })

  const result = wordLowerCase.every((letter, i) => {
      return wordLowerCase.indexOf(letter) === i;
  });

  return result;
}

module.exports = IsogramFinder;
