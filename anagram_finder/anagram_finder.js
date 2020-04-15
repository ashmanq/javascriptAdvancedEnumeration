require('../pangram_finder/pangram_finder.js')
const AnagramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

AnagramFinder.prototype.checkAgainstWord = function (word) {
  // We first check that the word and check word sizes are equal


  if ((word.length === this.word.length)){

    // let wordsEqualCheck = [];
    //  word.forEach((letter, index) => {
    //    if (letter === this.word[index]){
    //      wordsEqualCheck.push(letter)
    //    }
    //  });

     if (word.join('') === this.word.join('')) {
       return false;
     }

    const result_array = word.map((letter) => {
      return this.word.indexOf(letter);
      });

    const doesItMatch = result_array.every((result) => {
      return result !== -1;
    })
    return doesItMatch;
  }
    return false;
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  // We split each word out into arrays of characters
  const splitWord = word => word.split('');

  const matchingResults = otherWords.filter((word) => {
      return this.checkAgainstWord (splitWord(word.toLowerCase()));
  })



  return matchingResults;
}

module.exports = AnagramFinder;
