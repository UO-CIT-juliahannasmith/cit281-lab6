class Book {
  constructor(given_title, author, pubDate, isbn) {
    this.title = given_title;
    this.author = author;
    this.pubDate = pubDate;
    this.isbn = isbn;
  }
}

class Library {
  constructor(name) {
    this._name = name;
    this._books = [];
  }

  get books() {
    // Return copy of books
    return JSON.parse(JSON.stringify(this._books));
  }

  get count() {
    return this._books.length;
  }

  addBook(book = {}) {
    const { title = "", author = "", pubDate = "", isbn = "" } = book;
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate, isbn };
      this._books.push(newBook);
    }
  }

  listBooks() {
    for (const book of this._books) {
      const { title, author, pubDate, isbn } = book;
      console.log(
        `Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`
      );
    }
  }

  deleteBook(ibsn) {
    let indexOfBookToRemove = null;
    for (let index = 0; index < this._books.length; index++) {
      let currentBook = this._books[index];
      if (currentBook.ibsn == ibsn) {
        indexOfBookToRemove = index;
        break;
      }
    }

    this._books.splice(indexOfBookToRemove, 1);
  }
}

const uoLibrary = new Library("Knight");

const atomicHabits = new Book(
  "Atomic Habits",
  "James Clear",
  "10/16/2018",
  "1234567890"
);
const book2 = new Book(
  "The Joy of Programmind",
  "Unknown",
  "2020",
  "0987654321"
);

uoLibrary.addBook(atomicHabits);
uoLibrary.addBook(book2);

uoLibrary.listBooks();
uoLibrary.deleteBook("0987654321");
console.log("Deleted a book! All books now in library are:");
uoLibrary.listBooks();
