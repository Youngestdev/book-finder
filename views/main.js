var html = require('choo/html')

var TITLE = 'Book Finder'

module.exports = view

function renderBooks (books) {
  return html`
  <div class="flex">
    <div class="flex-1 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal mx-4 rounded shadow-md">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${books.title}</div>
          <p class="text-grey-darker text-base">
            ${books.description}
          </p>
        </div>
      <div class="px-4 py-4">
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
          ${ books.authors !== undefined ? books.authors.map(author => author) : 'No Author'}
         </span>
      </div>
     </div>
  </div>
  `
}

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <main class="container mx-auto">
      
            <!-- 
                 TODO: Add images, phew! 
                 TODO: Create a tag for books section so I can add a loading state. - 50% done
            -->
    
          <div class="flex items-center border-b border-b-1 border-teal py-2">
            <input class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Abdulazeez" aria-label="Full name" id="booksInput">
            <button class="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded" type="button"
              onclick=${handleClick}>
              Search For A Book
            </button>
          </div>
          
          <section id="books">
           <br />
            ${state.books.map(book => renderBooks(book))}
          </section>
      </main>
    </body>
  `

  function handleClick () {
    emit('books:search', document.getElementById('booksInput').value)
  }
}
