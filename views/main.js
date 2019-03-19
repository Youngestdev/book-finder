var html = require('choo/html')

var TITLE = 'Book Finder'

module.exports = view

function renderBooks (books) {
  return html`
    <ul>
        <li>
           <h3> Title </h3>
            ${books.title}
             <li>
             <h4> Description </h4>
              <p>
                ${books.description}
              </p>
            </li>

        </li>
    </ul>
  `
}

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <main>
      <br />
      
            <!-- TODO: Refactor list here, perhaps it might work..
                 TODO: Work on styles, Lol - Install TailWind CSS or Bootstap ?
                 TODO: Create a tag for books section so I can add a loading state.
            -->
    
          <input class="input-reset" id="booksInput" name="books" type="text" />
          <button class="b--black pointer bg-white"
            onclick=${handleClick}>
            Search For A Book
          </button>
          <section id="books">
            ${state.books.map(book => renderBooks(book))}
           </section>
      </main>
    </body>
  `

  function handleClick () {
    emit('books:search', document.getElementById('booksInput').value)
  }
}
