import { useEffect, useState } from 'react'
import LibroCard from './LibroCard'
import { getBooks } from '../api/books'
import { Book } from '../types'
import { useBooks } from '../store/useBooks'

export default function ListarLibros() {
  const {books, setBooks, genre, pages, getBooksByGenre, getBooksByPages } = useBooks(
    (state) => {
      return {
        books: state.books,
        setBooks: state.setBooks,
        genre: state.genre,
        pages: state.genre,
        getBooksByGenre: state.getBooksByGenre,
        getBooksByPages: state.getBooksByPages,
      }
    }
  )
  const [listedBooks, setListedBooks] = useState(books)

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data)
        setListedBooks(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [setBooks])

  useEffect(() => {
    setListedBooks(getBooksByGenre(genre))
  }, [genre, getBooksByGenre])



  return (
    <section className='flex w-full flex-col'>
      <h2 className='text-3xl font-medium mb-8'>Listado de libros</h2>
      <div className='flex flex-wrap gap-2 overflow-x-hidden'>
        {listedBooks.map((book: Book, index) => (
          <LibroCard key={index} book={book} />
        ))}
      </div>
    </section>
  )
}
