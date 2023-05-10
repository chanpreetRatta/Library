const library = [];
const bookShelf = document.querySelector(".book-shelf");

function Books(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  library.push(book);
}

function renderBook() {
  for (let item in library) {
    const book = document.createElement("div");
    book.classList = "card";

    const close = document.createElement("div");

    const title = document.createElement("div");
    title.appendChild(document.createTextNode(library[item].title));

    const author = document.createElement("div");
    author.appendChild(document.createTextNode("by " + library[item].author));

    const pages = document.createElement("div");
    pages.appendChild(document.createTextNode("Pages: " + library[item].pages));

    const isRead = document.createElement("div");
    isRead.appendChild(document.createTextNode(library[item].isRead));

    const footer = document.createElement("div");
    footer.append(pages, isRead);

    book.append(close, title, author, footer);
    bookShelf.appendChild(book);
  }
}

let book1 = new Books("Meri Kitab", "Chanpreet", 250, true);
let book2 = new Books("Teri Kitab", "Chanpreet", 250, true);
let book3 = new Books("Teesri Kitab", "Chanpreet", 250, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

renderBook();
console.log(library);
