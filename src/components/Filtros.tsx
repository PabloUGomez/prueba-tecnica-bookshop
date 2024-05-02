import { useBooks } from '../store/useBooks'

export default function Filtros() {
  const { books, setGenre } = useBooks((state) => {
    return { books: state.books, setGenre: state.setGenre }
  })
  const bookGenresNoRepeat = books.map((book) => book.genre)
  const bookGenres = [...new Set(bookGenresNoRepeat)]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const value = e.target as HTMLAnchorElement
    if (value.innerHTML === 'All') return setGenre(undefined)
    setGenre(value.innerHTML)
  }

  return (
    <nav className='w-full flex gap-x-6 mb-6 items-center'>
      <div className='dropdown '>
        <div tabIndex={0} role='button' className='btn m-1'>
          Genero
        </div>
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li>
            <a onClick={(e) => handleClick(e)}>All</a>
          </li>
          {bookGenres.map((genre, index) => (
            <li key={index}>
              <a onClick={(e) => handleClick(e)}>{genre}</a>
            </li>
          ))}
        </ul>
      </div>
      <input type='range' min={0} max='100' value='40' className='range w-64' />
    </nav>
  )
}
