class Book {
}
let myBook = new Book();
myBook.isbn = "123";
myBook.price = 9.99;
myBook.title = "Programming for beginners";
myBook.releaseDate = new Date(2023, 9, 18);
console.log(myBook);
window.onload = function () {
    let addBookBtn = document.querySelector("#add_book");
    addBookBtn.onclick = processBook;
};
function processBook() {
    alert("ProcessBook was called");
    let userBook = getBook();
    if (userBook != null) {
        addBook(userBook);
    }
}
function getBook() {
    let isbnTextBox = document.querySelector("#isbn");
    let titleTextBox = document.querySelector("#title");
    let priceTextBOx = document.querySelector("#price");
    let releaseDateTextBox = document.querySelector("#release_date");
    let isValidData = true;
    let isbn = isbnTextBox.value;
    if (!isValidIsnb(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBM must be 13 digits only";
    }
}
function isValidIsnb(data) {
    let regex = /^\d){13}$/;
    return regex.test(data);
}
function addBook(b) {
}
