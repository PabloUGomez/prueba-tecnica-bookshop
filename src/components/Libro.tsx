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
        <div className="flex flex-col items-center">
          <img src={book.cover} alt={book.title} className="w-64 h-64" />
          <h1 className="text-2xl font-bold mt-4">{book.title}</h1>
          <p className="text-lg mt-2">{book.year}</p>
          <p className="text-lg">{book.pages}</p>
          <p className="text-lg">{book.genre}</p>
        </div>
      )
    }
  }
}
