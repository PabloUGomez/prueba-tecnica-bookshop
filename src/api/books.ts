export function getBooks() {
  return fetch('src/data/books.json')
    .then((response) => response.json())
    .then((data) => {
      return data.library
    })

}
