function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

let myLibrary = [];
showBooks();

const modal = document.getElementById('myModal');
const addBookButton = document.getElementById('add-book-button');
const closeSpan = document.getElementsByClassName('close')[0];
document.getElementById('submit-button').addEventListener('click', checkValidity);

function checkValidity() {
    let form = document.getElementById('add-book-form');
    if (form.reportValidity() == true) {
        addBook();
    }
}

addBookButton.onclick = function() {
    modal.style.display = 'block'
}

closeSpan.onclick = function() {
    modal.style.display = 'none'
    clearFields();
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      clearFields();
    }
}

function bookFromInput() {
    let formTitle = document.getElementById('title').value;
    let formAuthor = document.getElementById('author').value;
    let formPages = parseInt(document.getElementById('pages').value);
    let formReadStatus = document.getElementById('read-status');
    if (formReadStatus.checked == false) {
        formReadStatus = false;
    } else {
        formReadStatus = true;
    }
    return new Book(formTitle, formAuthor, formPages, formReadStatus);
}

function addBook(book) {
    let newBook =  bookFromInput(book);
    myLibrary.push(newBook);
    clearFields();
    resetView();
    showBooks();
    modal.style.display = "none";
}

function renderBook (item, dataIndex) {
    const gridContainer = document.querySelector(".grid-container");
    const bookCard = document.createElement('div');
    const titleAuthorContainer = document.createElement('div');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('h6');
    const stats = document.createElement('div');
    const pages = document.createElement('p');
    const readStatus = document.createElement('p');
    const actions = document.createElement('div');
    const deleteButton = document.createElement('button');
    const toggleReadButton = document.createElement('button')

    gridContainer.appendChild(bookCard);
    bookCard.classList.add('book-card');
    bookCard.setAttribute('data-index', dataIndex)
    bookCard.appendChild(titleAuthorContainer);
    titleAuthorContainer.classList.add('title-author-container');
    titleAuthorContainer.appendChild(bookTitle);
    bookTitle.classList.add('book-title');
    bookTitle.innerHTML = item.title;
    titleAuthorContainer.appendChild(bookAuthor);
    bookAuthor.classList.add('book-author');
    bookAuthor.innerHTML = 'by ' + item.author;
    bookCard.appendChild(stats);
    stats.classList.add('stats');
    stats.appendChild(pages);
    pages.innerHTML = item.pages + ' pages';
    stats.appendChild(readStatus);
    if (item.read == true) {
        readStatus.innerHTML = 'Read';
        toggleReadButton.innerHTML = 'Mark Unread'
    } else {
        readStatus.innerHTML = "Unread";
        toggleReadButton.innerHTML = 'Mark Read'
    };
    bookCard.appendChild(actions);
    actions.classList.add('actions');
    actions.appendChild(deleteButton);
    deleteButton.classList.add('action-btn');
    deleteButton.classList.add('delete');
    deleteButton.type = 'button';
    deleteButton.innerHTML = 'Delete';
    deleteButton.setAttribute('data-index', dataIndex);
    deleteButton.setAttribute('onClick', 'removeBook(this)');
    actions.appendChild(toggleReadButton);
    toggleReadButton.classList.add('action-btn');
    toggleReadButton.classList.add('toggle-read');
    toggleReadButton.type = 'button';
    toggleReadButton.setAttribute('data-index', dataIndex);
    toggleReadButton.setAttribute('onClick', 'toggleReadStatus(this)');
}

function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        let dataIndex = i
        renderBook(book, dataIndex);
    }
}

function clearFields() {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('read-status').checked = false;
}

function resetView() {
    const gridContainer = document.querySelector(".grid-container");
    while (gridContainer.lastChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function removeBook(e) {
    let indexToRemove = e.getAttribute('data-index');
    myLibrary.splice(indexToRemove, 1);
    resetView();
    showBooks();
}

function toggleReadStatus(e) {
    let indexToToggle = e.getAttribute('data-index');
    if (myLibrary[indexToToggle].read == true) {
        myLibrary[indexToToggle].read = false
    } else {
        myLibrary[indexToToggle].read = true
    }
    resetView();
    showBooks();
}