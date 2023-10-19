/**
 * Represents a individual book that can be purchased
 */
class Book {
    /**
     * The 13 digits ISBN number
     */
    isbn : string;

    /**
     * This is the title of the book
     */
    title : string;

    /**
     * The retail price of the book
     */
    price : number;

    /**
     * The date the book was first published.
     * This could be the future date, if the book is not yet released.
     */
    releaseDate : Date;

}

// Book jbject test code

let myBook = new Book();
myBook.isbn = "123";
myBook.price = 9.99;
myBook.title = "Programming for beginners";
myBook.releaseDate = new Date(2023, 9, 18); //Months srart at index 0
console.log(myBook);