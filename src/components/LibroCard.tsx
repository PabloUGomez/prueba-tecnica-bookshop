import { type Book } from '../types'

export default function LibroCard({ book }) {
  const { title, pages, genre, cover, year } = book.book as Book
  return (
    <article className='w-64 hover:bg-gray-900 p-4 rounded-lg'>
      <img src={cover} alt={title} />
      <samp>
        <h3>{title}</h3>
        <p>Año: {year}</p>
        <p>Paginas :{pages}</p>
        <p>Genero: {genre}</p>
      </samp>
    </article>
  )
}
