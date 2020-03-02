const words = ['speciality', 'sleepy', 'funny'];
const words2 = ['walk', 'misty', 'happy'];

// store the function in a variable
const endsInY = string => string[string.length - 1] === 'y';

// pass in the arrow function 
// use the function to check on every element
words.some(endsInY); //true
words2.some(endsInY); //true
