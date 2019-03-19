var html = require('choo/html')

var TITLE = 'book-finder - main'

module.exports = view

function renderBooks (books) {
  return html`
    <ul>
        ${books.map(book => `<li>${book.title}</li>`).join(' ')}
    </ul>
    `
}

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
          <p>Title Of Books </p> :  

            <!-- TODO: Refactor list here, perhaps it might work..-->
               ${renderBooks(state.books)}
    
           <input class="input-reset" id="books" name="books" type="text" />
          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${handleClick}>
            Search For A Book
          </button>
      </main>
    </body>
  `

  function handleClick () {
    emit('books:search', document.getElementById('books').value)
  }
}
