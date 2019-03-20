module.exports = store

store.storeName = 'books'

function store (state, emitter) {
  state.books = []

  emitter.on('DOMContentLoaded', function () {
    emitter.on('books:search', function (input) {
      // When emitted, clear state.
      state.books = []
      // Also, clear the input value.

      document.getElementById('booksInput').value = ''
      const url = `https://www.googleapis.com/books/v1/volumes?q="${input}"&key=AIzaSyBC8ywD3UfclvP38goB_vg4Tz9XMVU4IKM&maxResults=15`

      // Yup. An async-await could've been nicer, phew.

      window.fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          let books = data.items
          books.map((bookInfo) => state.books.push(bookInfo.volumeInfo))
          emitter.emit(state.events.RENDER)
        })
        .catch(function (error) {
          console.log(error)
        })
    })
    emitter.emit('render')
  })
}
