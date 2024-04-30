import { StarEmpty } from '../Icons/Star'
import { type Book } from '../types'

export default function LibroCard({ book }) {
  const { title, pages, genre, cover, year, ISBN } = book.book as Book

  const handleClick = (ISBN : number) => {
    
  }

  return (
    <article className='w-64 hover:bg-gray-900 p-4 rounded-lg group'>
      <button
        className='opacity-0 group-hover:opacity-100 absolute bg-gray-900 p-2 m-1'
        onClick={() => handleClick(ISBN)}
      >
        <StarEmpty />
      </button>
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
