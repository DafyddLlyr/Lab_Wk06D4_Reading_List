document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const title = document.querySelector('#title')
  const author = document.querySelector('#author')
  const category = document.querySelector('#category')

  const formSubmit = document.querySelector('#new-item-form')
  formSubmit.addEventListener('submit', handleFormSubmit)

  const deleteAll = document.querySelector('#delete-all')
  deleteAll.addEventListener('submit', handleDeleteAll)

})

const handleFormSubmit = function() {
  event.preventDefault();

  const outputTitle = document.createElement('h2');
  outputTitle.classList.add('title')
  outputTitle.textContent = this.title.value;

  const outputAuthor = document.createElement('h3');
  outputAuthor.classList.add('author')
  outputAuthor.textContent = this.author.value;

  const outputCategory = document.createElement('h4');
  outputCategory.classList.add('category')
  outputCategory.textContent = this.category.value;

  const newBook = document.createElement('div');
  newBook.classList.add('book')
  newBook.appendChild(outputTitle)
  newBook.appendChild(outputAuthor)
  newBook.appendChild(outputCategory)

  const readingList = document.querySelector('#reading-list')
  readingList.appendChild(newBook);

  this.reset();
}

const handleDeleteAll = function() {
  event.preventDefault();

  const readingList = document.querySelector('#reading-list')

  while (readingList.hasChildNodes()) {
    readingList.removeChild(readingList.firstChild);
  }
}
