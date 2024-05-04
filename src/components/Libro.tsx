import { useSearchParams } from 'react-router-dom'
import { useBooks } from '../store/useBooks'

export default function Libro() {
  const [queryParameters] = useSearchParams()
  const ISBN = queryParameters.get('ISBN')
  console.log(ISBN);

  const { getBookByISBN } = useBooks((state) => {
    return { getBookByISBN: state.getBookByISBN }
  })

  if (ISBN) {
    const book = getBookByISBN(ISBN)
    if (book) {
      return (
        <div>
          <img src={book.cover} alt={book.title} />
          <h1>{book.title}</h1>
          <p>{book.year}</p>
          <p>{book.pages}</p>
          <p>{book.genre}</p>
        </div>
      )
    }
  }
}
