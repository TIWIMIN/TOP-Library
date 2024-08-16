const myLibrary = []; 
const library = document.querySelector(".library"); 
const new_book = document.querySelector(".new-book");
const dialog = document.querySelector("dialog"); 
const submit_book = document.querySelector(".submit-book");

const title_input = document.querySelector("#title-input");
const author_input = document.querySelector("#author-input");
const pages_input = document.querySelector("#pages-input");
const read_input = document.querySelector("#read-input");

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = (read === "true") ? true : false;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook(book) {
    const card = document.createElement("div"); 
    card.classList.add("card"); 
    library.appendChild(card); 

    const title = document.createElement("div"); 
    title.classList.add("title"); 
    card.appendChild(title); 
    title.textContent = book.title; 
    
    const author = document.createElement("div"); 
    author.classList.add("author"); 
    card.appendChild(author); 
    author.textContent = "by " + book.author; 

    const pages = document.createElement("div"); 
    pages.classList.add("pages"); 
    card.appendChild(pages); 
    pages.textContent = book.pages + " pages"; 

    const read = document.createElement("div"); 
    read.classList.add("read"); 
    card.appendChild(read); 

    const read_button = document.createElement("button");
    read_button.classList.add("read-button"); 
    book.read ? read_button.textContent = "x" : read_button.textContent = "";
    read.appendChild(read_button);
    read_button.addEventListener("click", () => {
        book.read = !book.read;
        book.read ? read_button.textContent = "x" : read_button.textContent = ""; 
    });

    const read_text = document.createElement("span"); 
    read_text.classList.add("read-text"); 
    read.appendChild(read_text); 
    read_text.textContent = "read?"; 

    const remove = document.createElement("button"); 
    remove.classList.add("remove");
    card.appendChild(remove); 
    remove.textContent = 'x';
    remove.addEventListener("click", () => {
        card.remove();
        myLibrary.splice(myLibrary.indexOf(book), 1);
        console.log(myLibrary);
    });
}

function displayAllBooks() {
    for (const book of myLibrary) {
        displayBook(book);
    }
}

new_book.addEventListener("click", () => {
    dialog.showModal();
});

submit_book.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close([title_input.value, author_input.value, pages_input.value, read_input.checked]);
});

dialog.addEventListener("close", () => {
    if (dialog.returnValue === "default") {
        console.log("not working as intended"); 
        return; 
    }

    console.log(...dialog.returnValue.split(','));
    let book_input = new Book(...dialog.returnValue.split(",")); 
    addBookToLibrary(book_input);
    displayBook(book_input);
});

let book1 = new Book("test", "author", "1", "true"); 
addBookToLibrary(book1);
let book2 = new Book("test2", "author2", "2", false);
addBookToLibrary(book2);  
let book3 = new Book("test3", "author3", "222", false);
addBookToLibrary(book3);

displayAllBooks();