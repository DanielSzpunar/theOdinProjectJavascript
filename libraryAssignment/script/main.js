class Book {
    constructor(title, author, pageCount, readYet) {
        this.title = title
        this.author = author
        this.pageCount = pageCount
        this.readYet = readYet
    }
}

let myLibrary = [
    { title: 'The Hobbit', author: "J.R.R. Tolkien", pageCount: 264, readYet: "Yes" },
    { title: 'The Fellowship of the Ring', author: "J.R.R. Tolkien", pageCount: 264, readYet: "Yes" },
];

function render() {
    let bookList = document.querySelector("#bookList");
    //create the booklist
    myLibrary.forEach((book, index) => {
        let newBook = document.createElement('div');
        newBook.classList.add("bookEntry");
        let bookDetails = document.createElement('div');
        bookDetails.classList.add("bookDetails");
        bookDetails.innterHTML = `
        <h2>${book.title}</h2>
        Author: ${book.author}<br>
        Page Count: ${book.pageCount}<br>
        Read: ${book.readYet}
        `
    });

}

// Adding a book

function openBookForm() {
    bookFormButton.style.visibility = "hidden";
    let formDiv = document.querySelector('div[id="addBookForm"]');    
    let newBookForm = document.createElement('form');
    newBookForm.id = "bookForm";    
    // Populate form with fields
    let fieldNames = ["Title", "Author", "Page Count", "Read Yet?"]
    fieldNames.forEach(field => {
        if (field === "Read Yet?") {
           buildReadYetRadio(newBookForm, field);            
        } else {
        let newField = document.createElement('input');        
        newField.id = field;       
        newField.type = "text";
        newField.name = field;        
        let newLabel = document.createElement('label');        
        newLabel.for = field;
        newLabel.textContent = field + ": "        
        newBookForm.appendChild(newLabel);
        newBookForm.appendChild(newField);
        }
    })

    let submitButton = document.createElement('button');        
    submitButton.textContent = "Add Book"    
    submitButton.addEventListener("click", validateNewBookForm);

    let cancelButton = document.createElement('button');
    cancelButton.textContent = "Close Form"
    cancelButton.addEventListener("click", function() {closeNewBookForm([newBookForm, submitButton, cancelButton])});
        
    formDiv.appendChild(newBookForm);
    formDiv.appendChild(submitButton);
    formDiv.appendChild(cancelButton);
    
}





// Start program

render(myLibrary)
bookFormButton = document.querySelector('button[id="newBook"]');
bookFormButton.addEventListener('click', openBookForm);

/*
function openBookForm() {
    bookFormButton.style.visibility = "hidden";
    let formDiv = document.querySelector('div[id="addBookForm]');
    let newBookForm = document.createElement('form');
    newBookForm.id = "bookForm";
    //Populate the form with fields for new books:

} 
*/