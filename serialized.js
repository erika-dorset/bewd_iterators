let book = {
    title: 'JavaScript',
    'sub-title': 'The good parts',
    author: {
        firstname: 'Douglas',
        surname: 'Crockford'
    }
};

//Produces a string version of the object
let s = JSON.stringify(book);

// Converts the string to an object
let sObj = JSON.parse(s);

console.log(s);
console.log(sObj);

