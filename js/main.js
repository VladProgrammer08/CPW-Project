class Book {
}
window.onload = function () {
    let addBookBtn = document.querySelector("#add_book");
    addBookBtn.onclick = processBook;
};
function processBook() {
    let userBook = getBook();
    if (userBook != null) {
        addBook(userBook);
    }
}
function getBook() {
    clearAllErrorMessages();
    let isbnTextBox = document.querySelector("#isbn");
    let titleTextBox = document.querySelector("#title");
    let priceTextBox = document.querySelector("#price");
    let releaseDateTextBox = document.querySelector("#release_date");
    let isValidData = true;
    let isbn = isbnTextBox.value;
    if (!isValidIsnb(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBM must be 13 digits only";
    }
    let title = titleTextBox.value;
    if (title.trim() == "") {
        isValidData = false;
        let titleErrorSpan = titleTextBox.nextElementSibling;
        titleErrorSpan.textContent = "You must provide a title";
    }
    let price = parseFloat(priceTextBox.value);
    if (isNaN(price) || price < 0) {
        isValidData = false;
        priceTextBox.nextElementSibling.textContent = "Price must be a positive number";
    }
    let releaseDate = releaseDateTextBox.value;
    let releaseDateCheck = Date.parse(releaseDate);
    if (isNaN(releaseDateCheck)) {
        isValidData = false;
        releaseDateTextBox.nextElementSibling.textContent = "Release date must be a valid date";
    }
    if (isValidData) {
        let addedBook = new Book();
        addedBook.isbn = isbn;
        addedBook.price = price;
        addedBook.title = title;
        addedBook.releaseDate = new Date(releaseDate);
        return addedBook;
    }
    return null;
}
function isValidIsnb(data) {
    let regex = /^\d{13}$/;
    return regex.test(data);
}
function addBook(b) {
    console.log(b);
    let bookDiv = document.createElement("div");
    let titleHeading = document.createElement("h2");
    titleHeading.textContent = b.title + ":" + b.isbn;
    bookDiv.appendChild(titleHeading);
    let bookDescription = document.createElement("p");
    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    let formattedPrice = currencyFormatter.format(b.price);
    bookDescription.textContent = `Book was released on ${b.releaseDate} and costs ${formattedPrice}`;
    bookDiv.appendChild(bookDescription);
    let bookListDisplay = document.querySelector("#book_display");
    bookListDisplay.appendChild(bookDiv);
}
function clearAllErrorMessages() {
    let allSpans = document.querySelectorAll("form span.error_msg");
    for (let i = 0; i < allSpans.length; i++) {
        let currentSpan = allSpans[i];
        currentSpan.textContent = "";
    }
}
