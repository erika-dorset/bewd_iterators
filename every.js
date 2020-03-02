const words = ['speciality', 'sleepy', 'funny'];
const words2 = ['walk', 'misty', 'happy'];

const endsInY = string => console.log(string[string.length - 1] === 'y');

words.every(endsInY); //true
words2.every(endsInY); //false


