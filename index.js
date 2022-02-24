import { Book } from './modules/book.js';
import { show } from './modules/show.js';

const titleValue = document.getElementById('title');
const authorValue = document.getElementById('author');
const booksUL = document.querySelector('.book-list');
const bookArray = [];
const form = document.querySelector('#abbBookForm');

if (localStorage.getItem('books') != null) {
  show();
}
const newBook = new Book();
form.addEventListener('submit', (e) => {
  newBook.creation(titleValue.value, authorValue.value);
  e.preventDefault();
  newBook.addToLocalStorage(bookArray);
  show();
  titleValue.value = '';
  authorValue.value = '';
});

booksUL.addEventListener('click', (e) => {
  e.target.className === 'delete' ? newBook.deleteBook(e.target.parentNode.className) : show();
});

const list = document.querySelector('.asesomeBooks');
const addForm = document.querySelector('.addForm');
const contactInfo = document.querySelector('.contact');
const spans = document.querySelectorAll('span');

spans.forEach((e) => {
  e.addEventListener('click', (e) => {
    if (e.target.classList.contains('spanLiL')) {
      if (list.classList.contains('d-flex')) {
        return;
      }
      list.classList.toggle('d-flex');
      list.classList.toggle('d-none');
      addForm.classList.remove('d-flex');
      addForm.classList.add('d-none');
      contactInfo.classList.remove('d-flex');
      contactInfo.classList.add('d-none');
    }
    if (e.target.classList.contains('spanLiA')) {
      if (addForm.classList.contains('d-flex')) {
        return;
      }
      addForm.classList.toggle('d-flex');
      addForm.classList.toggle('d-none');
      list.classList.remove('d-flex');
      list.classList.add('d-none');
      contactInfo.classList.remove('d-flex');
      contactInfo.classList.add('d-none');
    }
    if (e.target.classList.contains('spanLiC')) {
      if (contactInfo.classList.contains('d-flex')) {
        return;
      }
      contactInfo.classList.toggle('d-flex');
      contactInfo.classList.toggle('d-none');
      list.classList.remove('d-flex');
      list.classList.add('d-none');
      addForm.classList.remove('d-flex');
      addForm.classList.add('d-none');
    }
  });
});
