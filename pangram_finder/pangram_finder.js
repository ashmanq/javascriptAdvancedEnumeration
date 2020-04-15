const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.split('');
}

PangramFinder.prototype.isPangram = function () {
  // const stringArray =
  const phraseSpacesFilteredOut = this.phrase.filter((letter) => {
    return letter != ' ';
  })

  const phraseToCompare = phraseSpacesFilteredOut.map((letter) => {
    return letter.toLowerCase();
  })

  const result_array = this.alphabet.map((letter) => {
    return phraseToCompare.indexOf(letter);
    });

    const isItPangram = result_array.every((result) => {
      return result !== -1;
    })

 return isItPangram;
}

module.exports = PangramFinder;
