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


window.onload = function() {
    //set up a button click for add a book form
    let addBookBtn = document.querySelector("#add_book") as HTMLButtonElement;
    addBookBtn.onclick = processBook;
}

function processBook(){
    alert("ProcessBook was called")

    let userBook = getBook();
    if (userBook != null) {
        addBook(userBook);
    }
}
/**
 * This function will retrieve all the book data 
 * from the HTML page. If al data is valid a Book 
 * object will be returned. If any data is invalid, 
 * null wil be returned ana error messages will be 
 * shown on the web page
 * 
 */
function getBook():Book {
    // gett all inputs
    let isbnTextBox = document.querySelector("#isbn") as HTMLInputElement;
    let titleTextBox = document.querySelector("#title") as HTMLInputElement;
    let priceTextBOx = document.querySelector("#price") as HTMLInputElement;
    let releaseDateTextBox = document.querySelector("#release_date") as HTMLInputElement;

    //Validate data
    let isValidData:boolean = true;

    // Validate the ISBN
    let isbn:string = isbnTextBox.value;
    if(!isValidIsnb(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBM must be 13 digits only";
    }
    
}

function isValidIsnb(data:string) {
    let regex = /^\d){13}$/;
    return regex.test(data);
}

/**
 * Adds a Book object to web storage. 
 * Assumes all data is valid
 * @param b The Book containing valid data to be added
 */
function addBook(b:Book):void {

}