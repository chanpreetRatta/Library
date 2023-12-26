let myLibrary = [];
let bookShelf = document.querySelector(".main");
let form = document.querySelector(".form"); // this variable contains the div that has a form child. Its class name is form.
let bookForm = document.querySelector(".book-form"); // this variable will only select the form DOM.
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

function createCard(bookTitle, bookAuthor, bookPages, bookIsRead) {
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
  title.appendChild(document.createTextNode(bookTitle));
  author.appendChild(document.createTextNode("by " + bookAuthor));
  pages.appendChild(document.createTextNode("Pages " + bookPages));
  isRead.appendChild(
    document.createTextNode(bookIsRead ? "Has Read" : "Has Not Read")
  );
  remove.appendChild(document.createTextNode("Remove"));
  card.append(title, author, pages, isRead, remove);

  return card;
}

function submitForm(event) {
  event.preventDefault();
  let title = event.target.title.value;
  let author = event.target.author.value;
  let pages = event.target.pages.value;
  let isRead = event.target.isRead.value === "on" ? true : false;
  console.log(isRead);

  let book = new Book(title, author, pages, isRead);
  addBookToLibrary(book);
  updateDom();
  bookForm.reset();
}

function updateDom() {
  let addNewBookCard = bookShelf.children[0];
  bookShelf.innerHTML = "";
  bookShelf.appendChild(addNewBookCard);

  myLibrary.forEach((book) => {
    bookShelf.appendChild(
      createCard(book.title, book.author, book.pages, book.isRead)
    );
  });
}

//this function toggle the visibility of the form to add new books
function popUpForm(event) {
  if (event.target === this) {
    form.classList.toggle("visibility-hidden");
  }
}

function removeCard(event) {
  if (event.target.className !== "remove") return;
  let newArray = myLibrary.filter(
    (book) => book.title !== event.target.parentNode.firstChild.innerHTML
  );

  myLibrary = [...newArray];
  updateDom();
}

form.addEventListener("click", popUpForm);
bookForm.addEventListener("submit", submitForm);
addButton.addEventListener("click", popUpForm);
//event listeners for all the cards that are present in the bookShelf(.main div)
bookShelf.addEventListener("click", removeCard);
