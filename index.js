const myLibrary = [
  {
    title: "Meri Kitab",
    author: "Chanpreet",
    totalPages: 250,
    isRead: true,
  },
];

class Books {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

myLibrary.forEach((item) => {
  const bookShelf = document.querySelector(".book-shelf");
  const book = document.createElement("div");
  book.classList += "card";

  const content = document.createElement("div");
  content.classList += "content";

  const bookTitle = document.createElement("div");
  bookTitle.classList += "book-name";

  const authorName = document.createElement("div");
  authorName.classList += "author-name";

  const totalPages = document.createElement("div");
  totalPages.classList += "total-pages";

  const isRead = document.createElement("input");
  isRead.name = "is-read";
  isRead.type = "checkbox";
  isRead.id = "is-read";
  bookTitle.append(document.createTextNode(item.title));
  authorName.append(document.createTextNode("by " + item.author));
  totalPages.append(document.createTextNode("Pages: " + item.totalPages));

  item.isRead ? (isRead.checked = true) : (isRead.checked = false);

  content.append(authorName, totalPages, isRead);
  book.append(bookTitle, content);
  bookShelf.append(book);
});
