let myLibrary = [];
let bookShelf = document.querySelector(".main");
let form = document.querySelector(".form");
let addButton = document.querySelector(".add-button");

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

function renderBooks(booksArray = []) {
  booksArray.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("div");
    title.classList.add("title");
    let author = document.createElement("div");
    author.classList.add("author");
    let pages = document.createElement("div");
    pages.classList.add("pages");
    let isRead = document.createElement("div");
    isRead.classList.add("isRead");
    let remove = document.createElement("div");
    remove.classList.add("remove");

    title.appendChild(document.createTextNode(book["title"]));
    author.appendChild(document.createTextNode(book["author"]));
    pages.appendChild(document.createTextNode(book["pages"]));
    isRead.appendChild(document.createTextNode(book["isRead"]));
    remove.appendChild(document.createTextNode("Remove"));

    card.append(title, author, pages, isRead, remove);
    bookShelf.append(card);
  });
}

function submitForm(event) {
  event.preventDefault();
  console.log(event);
}

//this function toggle the visibility of the form to add new books
function popUpForm(event) {
  if (event.target === this) {
    form.classList.toggle("visibility-hidden");
  }
}

let book1 = new Book("In the search of Lost Time", "Marcel Proust", 150, false);
let book2 = new Book("Ulysses", "James Joyce", 250, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
renderBooks(myLibrary);

form.addEventListener("click", popUpForm);
form.addEventListener("submit", submitForm);
addButton.addEventListener("click", popUpForm);
