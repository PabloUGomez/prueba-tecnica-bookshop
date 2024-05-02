import { ChangeEvent } from 'react'
import { useBooks } from '../store/useBooks'

export default function Filtros() {
  const { books, setGenre, pages, setPages, getMaxPages } = useBooks((state) => {
    return {
      books: state.books,
      setGenre: state.setGenre,
      pages: state.pages,
      setPages: state.setPages,
      getMaxPages: state.getMaxPages,
    }
  })
  const bookGenresNoRepeat = books.map((book) => book.genre)
  const bookGenres = [...new Set(bookGenresNoRepeat)]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const value = e.target as HTMLAnchorElement
    if (value.innerHTML === 'All') return setGenre(undefined)
    setGenre(value.innerHTML)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPages(Number(value))
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
      <span className='flex items-center justify-center gap-x-2'>
        <span>0</span>
        <div className='flex flex-col w-64 justify-center items-center'>
          <span className='absolute top-48'>{pages}</span>
          <input
            type='range'
            min='0'
            max={getMaxPages()}
            defaultValue={getMaxPages()}
            onChange={(e) => handleChange(e)}
            className='range'
          />
        </div>
        <samp>1000</samp>
      </span>
    </nav>
  )
}
