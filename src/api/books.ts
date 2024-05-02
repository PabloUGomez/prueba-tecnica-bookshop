import { type Book } from '../types'

export function getBooks() {
  return fetch('src/data/books.json')
    .then((response) => response.json())
    .then((data) => {      
      return data.library.flatMap((book : {book : Book}) => book.book)
    })

}
