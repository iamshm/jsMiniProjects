// book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// Ui constructor
function UI() {}

UI.prototype.addBook = function (book) {
  const list = document.getElementById("book-list");
  // Create tr
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href=# class="delete">X</a></td>
  `;
  list.appendChild(row);
};

UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};
UI.prototype.clearFields = function () {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
};
// show alerts
UI.prototype.showAlert = function (msg, className) {
  // creatediv - alert div
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));

  // get parent i.e container
  const cont = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  // insert alert before form
  cont.insertBefore(div, form);

  // disappear after 2s
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 2000);
};

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  // getting inputs
  const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

  const book = new Book(title, author, isbn);
  const ui = new UI();
  console.log(ui);
  // validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all details", "error");
  } else {
    // add book
    ui.addBook(book);
    ui.showAlert("Book added!", "success");
    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert("Book removed", "success");

  e.preventDefault();
});
