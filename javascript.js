let myLibrary=[];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(title,author,pages,read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  showBooksInLibrary();
}

function showLibraryInfo() {
  const totalBooks = document.querySelector('#books_count');
  const booksRead = document.querySelector('#read_b_count');
  const booksUnread = document.querySelector('#not_read_b_count');
  let readCounter = 0;
  let unreadCounter = 0;
  booksRead.textContent = 0;
  booksUnread.textContent = 0;
  for (let i = 0; i < myLibrary.length; i ++) {
    if (myLibrary[i].status === true) {
      readCounter += 1;
      booksRead.textContent = readCounter;
    } else if (myLibrary[i].status === false) {
      unreadCounter += 1;
      booksUnread.textContent = unreadCounter;
    }
  }
  totalBooks.textContent = myLibrary.length;
}

function showBooksInLibrary(){
  //do stuff here
}

function deleteAll(){
  //delete all books from library
  myLibrary=[]
  showLibraryInfo()
}



addBookToLibrary('Le Pere Goriot','H. de Balzac',500,true)
addBookToLibrary('Le vieil homme et la mer','E. Hemingway',220,true)
showLibraryInfo()
console.log(myLibrary)




