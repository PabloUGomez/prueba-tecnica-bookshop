import { useEffect, useState } from 'react'
import LibroCard from './LibroCard'
import { getBooks } from '../api/books'
import { Book } from '../types'

export default function ListarLibros() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <section className='flex w-full mx-20 my-16'>
      <h2 className='text-2xl font-medium'>Listado de libros</h2>
      <div className='grid grid-cols-3 gap-4'>
        {books.map((book: Book, index) => (
          <LibroCard key={index} book={book} />
        ))}
      </div>
    </section>
  )
}
