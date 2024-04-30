import { type Book } from '../types'

export default function LibroCard({ book }: { book: Book }) {
  const { title, pages, genre, cover, synopsis, year, ISBN, author } = book

  return (
    <div className='libro-card'>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      {author.name && <p>{author.name}</p>}
      <p>{year}</p>
      <p>{pages}</p>
      <p>{genre}</p>
      <p>{ISBN}</p>
      <p>{synopsis}</p>
      {author.otherBooks && <p>{author.otherBooks.join(', ')}</p>}
    </div>
  )
}
