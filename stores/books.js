module.exports = store

store.storeName = 'books'

function store (state, emitter) {
  state.books = []

  emitter.on('DOMContentLoaded', function () {
    emitter.on('books:search', function (input) {
      const url = `https://www.googleapis.com/books/v1/volumes?q="${input}"&key=AIzaSyBC8ywD3UfclvP38goB_vg4Tz9XMVU4IKM`
      const ul = document.getElementById('books')

      // Yup. An async-await could've been nicer, phew.
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          let books = data.items
          books.map((bookInfo) => state.books.push(bookInfo.volumeInfo))
        })
        .catch(function (error) {
          console.log(error)
        })
      emitter.emit(state.events.RENDER)
    })
  })
}
