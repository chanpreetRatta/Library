//this file is responsible to open and close the pop up that can add a new book to the book shelf//
const addBook = document.querySelector(".add-card");
const popUp = document.querySelector(".new-book-form");
const closeButton = document.querySelector(".close-button");

addBook.addEventListener("click", () => {
  popUp.classList += " show";
});

closeButton.addEventListener("click", () => {
  popUp.classList.remove("show");
});
