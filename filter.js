const dictionary = ['outrageous', 'crazy', 'absurd', 'flabbergasted'];

const isLongWord = string => string.length > 6;

const longWords = dictionary.filter(isLongWord);

console.log(longWords);
