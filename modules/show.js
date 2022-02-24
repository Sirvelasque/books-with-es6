import {booksUL} from "../index.js"
export let show = () => {
  let bookId = 0;
  let Current = localStorage.getItem('books');
  Current = JSON.parse(Current);
  if (Current) {
    booksUL.innerHTML = '';
    Current.forEach((book) => {
      const li = document.createElement('li');
      const liP1 = document.createElement('li');
      const liP2 = document.createElement('li');
      li.className = `${bookId}`;
      const pForTitle = document.createElement('p');
      const pForAuthor = document.createElement('p');
      const ulPContaner = document.createElement('ul');
      ulPContaner.className = 'ulWrapper';
      const pForDelete = document.createElement('button');
      pForDelete.className = 'delete';
      pForTitle.textContent = book.title;
      pForAuthor.textContent = book.author;
      pForDelete.textContent = 'Remove';
      liP2.appendChild(pForTitle);
      liP1.appendChild(pForAuthor);
      ulPContaner.innerHTML = `"${book.title}" by ${book.author}`;
      li.appendChild(ulPContaner);
      li.appendChild(pForDelete);
      booksUL.appendChild(li);
      if (bookId % 2 === 1) {
        li.id = 'bg-color';
      }
      bookId += 1;
    });
  }
}
