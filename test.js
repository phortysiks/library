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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
const harryPotter1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true)
const harryPotter2 = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 251, true)

// console.log(theHobbit.title)
// console.log(harryPotter1.info())
// console.log(harryPotter2.info())

let myLibrary = [theHobbit, harryPotter1, harryPotter2];

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
}


