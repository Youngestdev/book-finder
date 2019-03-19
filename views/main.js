var html = require('choo/html')

var TITLE = 'book-finder - main'

module.exports = view


function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <section class="fl mw6 w-50-m w-third-l pa3">

        <section class="fl mw6 w-50-m w-third-l pa3">
     

          <p>Title Of Books </p> :  
          

            <!-- TODO: Refactor list here, perhaps it might work..-->
            
                ${state.books.map(book => {
    return `
                    ${book.title}
                  `
  }).join(`/n`)}


           <input class="input-reset" id="books" name="books" type="text" />
          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${handleClick}>
            Emit a click event
          </button>
        </section>

      </main>
    </body>
  `

  function handleClick () {
    emit('books:search', document.getElementById('books').value)
  }
}
