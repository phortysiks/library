function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    if (read == false) {
        read = "not read yet"
    } else {
        read = "has been read"
    }
}

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)


let myLibrary = [];

function createBook (item) {
    const gridContainer = document.querySelector(".grid-container")
    const bookCard = document.createElement('div');
    const titleAuthorContainer = document.createElement('div')
    const bookTitle = document.createElement('h3')
    const bookAuthor = document.createElement('h6')
    const pages = document.createElement('p')
    const readStatus = document.createElement('p')

    gridContainer.appendChild(bookCard)
    bookCard.classList.add('book-card')
    bookCard.appendChild(titleAuthorContainer)
    titleAuthorContainer.classList.add('title-author-container')
    titleAuthorContainer.appendChild(bookTitle)
    bookTitle.classList.add('book-title')
    bookTitle.innerHTML = item.title
    titleAuthorContainer.appendChild(bookAuthor)
    bookAuthor.classList.add('book-author')
    bookAuthor.innerHTML = 'by ' + item.author
    bookCard.appendChild(pages)
    bookTitle.classList.add('pages')
    pages.innerHTML = item.pages + ' pages'
    bookCard.appendChild(readStatus)
    bookTitle.classList.add('read-status')
    if (item.readStatus == true) {
        readStatus.innerHTML = 'Has been read'
    } else {
        readStatus.innerHTML = "Hasn't been read"
    }
}

const modal = document.getElementById('myModal')
const addBookButton = document.getElementById('add-book-button')
const closeSpan = document.getElementsByClassName('close')[0];
const addBookFormButton = document.getElementById('submit-button')
const addBookForm = document.getElementById('add-book-form')

let formTitle = document.getElementById('title').value
let formAuthor = document.getElementById('author').value
let formPages = document.getElementById('pages').vaue
let formReadStatus = document.getElementById('read-status').value

addBookButton.onclick = function() {
    modal.style.display = 'block'
}

closeSpan.onclick = function() {
    modal.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

addBookFormButton.onclick = function() {
    let newBook = new Book(formTitle, formAuthor, formPages, formReadStatus)
    myLibrary.push(newBook);
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        createBook(book);
    }
    modal.style.display = "none";
}

for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    createBook(book);
}