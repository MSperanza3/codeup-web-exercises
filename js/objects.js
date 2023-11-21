(function() {
    "use strict";
    const person = {
        firstName: 'Matteo',
        lastName: 'Speranza'
    };
    console.log(person);

    person.sayHello = function() {
        return `Hello from ${this.firstName} ${this.lastName}!`;
    };

    console.log(person.sayHello());

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function printDiscountInfo(shopperArray) {
        shopperArray.forEach(shopper => {
            let discount;
            let totalAfterDiscount;
            if(shopper.amount > 200) {
                discount = shopper.amount * 0.12;
                totalAfterDiscount = shopper.amount * 0.88;
            } else {
                discount = 0;
                totalAfterDiscount = shopper.amount;
            }
            console.log(`${shopper.name}, your total before the discount is $${shopper.amount}. You have received a discount of $${discount}, and your new total is $${totalAfterDiscount}`);
        });
    }

    printDiscountInfo(shoppers);

    const books = [
        createBook("Foundation", "Isaac Asimov"),
        {
            title: "The Dictionary",
            author: {
                firstName: "Poli",
                lastName: "Himself"
            }
        },
        {
            title: "No Kitten Around",
            author: {
                firstName: "Bootsy",
                lastName: "McQueen"
            }
        },
        {
            title: "JavaScript for Dummies",
            author: {
                firstName: "Mr.",
                lastName: "Script"
            }
        },
        {
            title: "There's a Wocket in my Pocket",
            author: {
                firstName: "Dr.",
                lastName: "Seuss"
            }
        }
    ];
    function printBookInfo(books) {
        for (let i = 0; i < books.length; i++) {
            console.log(`Book # ${i + 1}`);

            showBookInfo(books[i]);

            if(books.length - 1 === i) {
                break;
            }
            console.log('---');
        }
    }

    printBookInfo(books);

    function createBook(title, authorName) {
        const name = authorName.split(" ");
        return {
            title,
            author: {
                firstName: name[0],
                lastName: name[1]
            }
        }
    }

    function showBookInfo(book) {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
    }

})();