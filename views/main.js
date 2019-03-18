var html = require('choo/html')

var TITLE = 'book-finder - main'

module.exports = view

let span = document.createElement('span')
let li = document.createElement('li').appendChild(span)
const ul = document.getElementById('books').appendChild(li)

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <section class="fl mw6 w-50-m w-third-l pa3">

        <section class="fl mw6 w-50-m w-third-l pa3">
     

          <p>Title Of Books </p> :  
          
            <ul id="books"></ul>
            <!-- TODO: Refactor list here, perhaps it might work..-->
             ${state.books.map(function (book) {
    span.innerHTML = `${book.title}`
  })}


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
    emit('books:search', document.getElementById('books').textContent)
  }

  // JSON.stringify(state.books[0].title, 0)

  // function displayBooks () {
  //   state.books.map(function (bookInfo) {
  //   // eslint-disable-next-line no-return-assign
  //     return document.getElementById('title').innerText = bookInfo.title
  //   })
  // }
}
