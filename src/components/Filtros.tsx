import { useBooks } from '../store/useBooks'

export default function Filtros() {
  const { books } = useBooks((state) => {
    return { books: state.books }
  })
  const bookGenresNoRepeat = books.map((book) => book.genre)
  const bookGenres = [...new Set(bookGenresNoRepeat)]
  console.log(bookGenres)

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
          {bookGenres.map((genre, index) => (
            <li key={index}>
              <a>{genre}</a>
            </li>
          ))}
        </ul>
      </div>
      <input type='range' min={0} max='100' value='40' className='range w-64' />
    </nav>
  )
}
