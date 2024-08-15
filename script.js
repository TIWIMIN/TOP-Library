const myLibrary = []; 

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read;
    this.info = function() {
        if (read) {
            return title + " by " + author + ", " + pages + " pages, read."
        }
        else {
            return title + " by " + author + ", " + pages + " pages, not read yet."
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayAllBooks() {
    const library = document.querySelector(".library"); 

    for (const book of myLibrary) {
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
        read.textContent = "read?"; 

        const read_button = document.createElement("button");
        read_button.classList.add("read-button"); 
        book.read ? read_button.textContent = "x" : read_button.textContent = "";
        read.appendChild(read_button);
        read_button.addEventListener("click", () => {
            book.read = !book.read;
            book.read ? read_button.textContent = "x" : read_button.textContent = ""; 
        });

        const remove = document.createElement("button"); 
        remove.classList.add("remove");
        card.appendChild(remove); 
        remove.textContent = 'x';
        remove.addEventListener("click", () => {
            card.remove();
        });
    }
}

let book1 = new Book("test", "author", "1", true); 
addBookToLibrary(book1);
let book2 = new Book("test2", "author2", "2", false);
addBookToLibrary(book2);  
let book3 = new Book("test3", "author3", "222", false);
addBookToLibrary(book3);

displayAllBooks();