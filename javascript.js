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
    if (myLibrary[i].read === true) {
      readCounter += 1;
      booksRead.textContent = readCounter;
    } else if (myLibrary[i].read === false) {
      unreadCounter += 1;
      booksUnread.textContent = unreadCounter;
    }
  }
  totalBooks.textContent = myLibrary.length;
}

function showBooksInLibrary(){
  showLibraryInfo();
  const bookList = document.querySelector('#table-body');
  bookList.textContent = ''
  for (i=0; i<myLibrary.length;i++){
    const bookRow=document.createElement('tr');
    bookRow.classList.add('book-info');
    bookList.appendChild(bookRow);
    // BOOK TITLE
    const bookTitle=document.createElement('td');
    bookTitle.textContent=myLibrary[i].title;
    bookRow.appendChild(bookTitle);
    //BOOK AUTHOR
    const bookAuthor=document.createElement('td');
    bookAuthor.textContent=myLibrary[i].author;
    bookRow.appendChild(bookAuthor);
    //BOOK PAGES
    const bookPages=document.createElement('td');
    bookPages.textContent=myLibrary[i].pages;
    bookRow.appendChild(bookPages);
    //BOOK READ
    const bookRead=document.createElement('td');
    const statusSymbol = document.createElement('button');
    statusSymbol.classList.add('readBtn') 
    if (myLibrary[i].read === false) {
      statusSymbol.textContent = 'Not read';
      statusSymbol.style.border='1px solid #e04f63';
    } else {
      statusSymbol.textContent = 'Read';
      statusSymbol.style.backgroundColor = '#63da63'
      statusSymbol.style.border='1px solid #63da63'
    }
    bookRead.appendChild(statusSymbol);
    bookRow.appendChild(bookRead);
    // BOOK REMOVAL BUTTON
    const bookDelete = document.createElement('td');
    const deleteSymbol = document.createElement('button');
    deleteSymbol.classList.add('removeBtn')
    deleteSymbol.textContent='Remove'
    bookDelete.appendChild(deleteSymbol);
    bookRow.appendChild(bookDelete);
  }
}

function deleteAll(){
  //delete all books from library
  myLibrary=[]
  showLibraryInfo()
}



addBookToLibrary('Le Pere Goriot','H. de Balzac',500,true)
addBookToLibrary('Le vieil homme et la mer','E. Hemingway',220,true)
addBookToLibrary('Pour qui sonne le glas','E. Hemingway',420,false)
showBooksInLibrary()
console.log(myLibrary)




