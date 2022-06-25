
// Book List ES6 syntax classes
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
	
}

class UI {
	addBookToList(book) {
	  const list = document.getElementById("book-list");
	  const row = document.createElement("tr");

	  row.innerHTML = `
		  <td>${book.title}</td>
		  <td>${book.author}</td>
		  <td>${book.isbn}</td>
		  <td><a href="#" class="delete">X</a></td>
	  `;
	  list.appendChild(row);

	}

	showAlert(message, className) {
		const div = document.createElement("div");
	  div.className = `alert ${className}`;
	  div.appendChild(document.createTextNode(message));
	  const wrapper = document.querySelector(".wrapper");
	  const form = document. querySelector("#book-form");
	  wrapper.insertBefore(div, form);

	  setTimeout(() => document.querySelector(".alert").remove(), 3000);
	}

	deleteBookList(e) {
	  if(e.classList.contains("delete")) {
		  e.parentElement.parentElement.remove();
	  }
	}

	clearFields() {
	  const title = document.querySelector("#title").value = "";
	  const author = document.querySelector("#author").value = "";
	  const isbn = document.querySelector("#isbn").value = "";
	}
}


document.getElementById("book-form").addEventListener("submit", (e) => {

	e.preventDefault();
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const isbn = document.getElementById("isbn").value;

	const book = new Book(title, author, isbn);

	const ui = new UI();

// Validate
	if(title === "" || author === "" || isbn === "") {
		ui.showAlert("Please, show in all fields!", "error");
	} else if(isNaN(isbn)) {
		ui.showAlert("Please, enter a number!", "error");
	} else {
		ui.addBookToList(book);
		ui.showAlert("Book Added!", "success");
		ui.clearFields();
	}

});

// Event Listener For Deleting Book
document.querySelector("#book-list").addEventListener("click", (e) => {
	const ui = new UI();
	ui.deleteBookList(e.target);

	ui.showAlert("Book Removed", "success");

	e.preventDefault();
});