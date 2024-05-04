import { StarEmpty, StarFull } from '../Icons/Star'
import { type Book } from '../types'
import { useBooks } from '../store/useBooks'
import { Link } from 'react-router-dom'

export default function LibroCard({ book }: { book: Book }) {
  const { title, pages, genre, cover, year, ISBN } = book as Book
  const { setFavoriteBook, favoriteBooks, books, unSetFavoriteBook } = useBooks((state) => {
    return {
      setFavoriteBook: state.setFavoriteBook,
      favoriteBooks: state.favoriteBooks,
      books: state.books,
      unSetFavoriteBook: state.unSetFavoriteBook
    }
  })

  const handleClick = (ISBN: string) => {
    const book = books.find((book: Book) => book.ISBN === ISBN)
    if (book) {
      if (favoriteBooks.some((favoriteBook) => favoriteBook.ISBN === book.ISBN)){
        unSetFavoriteBook(book)
      } else {
        setFavoriteBook(book)
      }
    }
  }

  return (
    <Link to={`/libro?ISBN=${ISBN}`} className='w-64 hover:bg-gray-900 p-4 rounded-lg group'>
      <button
        className={`opacity-0 group-hover:opacity-100 ${favoriteBooks.includes(book) && 'opacity-100'} absolute bg-gray-900 p-2 m-1 rounded-md`}
        onClick={() => handleClick(ISBN)}
      >
        {favoriteBooks.includes(book) ? <StarFull /> : <StarEmpty />}
      </button>
      <img src={cover} alt={title} />

      <samp>
        <h3>{title}</h3>
        <p>Año: {year}</p>
        <p>Paginas :{pages}</p>
        <p>Genero: {genre}</p>
      </samp>
    </Link>
  )
}
