class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBook(book) {
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
  }
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
  showAlert(msg, className) {
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
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function (book) {
      const ui = new UI();
      ui.addBook(book);
    });
  }
  static addBookLS(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBookLS(isbn) {
    console.log(isbn);
    const books = Store.getBooks();
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
// event listener for reload
document.addEventListener("DOMContentLoaded", Store.displayBooks);
// Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  // getting inputs
  const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

  const book = new Book(title, author, isbn);
  const ui = new UI();
  // validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all details", "error");
  } else {
    // add bo
    ui.addBook(book);
    Store.addBookLS(book);
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
  Store.removeBookLS(e.target.parentElement.previousElementSibling.textContent);
  ui.showAlert("Book removed", "success");

  e.preventDefault();
});
