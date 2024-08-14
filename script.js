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

function addBookToLibrary() {

}