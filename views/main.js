var html = require('choo/html')

var TITLE = 'Book Finder'

module.exports = view

function renderBooks (books) {
  return html`
    <ul class="sm:list-reset md:list-reset lg:list-reset xl:list-reset">
        <li>
           <h3> Title </h3>
            ${books.title}
             <li>
               <h4> Description </h4>
                 <p class="leading-none sm:leading-tight md:leading-normal lg:leading-loose xl:leading-normal ...">
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
      
            <!-- TODO: Refactor list here, perhaps it might work..
                 TODO: Work on styles, Lol - Install TailWind CSS or Bootstap ?
                 TODO: Create a tag for books section so I can add a loading state.
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
