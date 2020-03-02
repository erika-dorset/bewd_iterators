let book = {
    title: 'JavaScript',
    'sub-title': 'The good parts',
    author: {
        firstname: 'Douglas',
        surname: 'Crockford'
    },
    print: function(){
        console.log(`The ${this.title} book was written by
         ${this.author.firstname} ${this.author.surname}`);
    }
};

book.print();


