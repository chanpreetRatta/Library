let myLibrary = [];

class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pages = 0,
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let book1 = new Book("In the search of Lost Time", "Marcel Proust", 150, false);
let book2 = new Book("Ulysses", "James Joyce", 250, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
