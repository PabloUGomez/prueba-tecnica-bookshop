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
    <section className='flex w-full mx-20 my-16 flex-col'>
      <h2 className='text-3xl font-medium mb-8'>Listado de libros</h2>
      <div className='flex flex-wrap gap-2 overflow-x-hidden'>
        {books.map((book) => (
          <LibroCard key={book.ISBN} book={book} />
        ))}
      </div>
    </section>
  )
}
