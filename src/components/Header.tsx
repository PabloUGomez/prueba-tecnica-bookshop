import { StarFull } from '../Icons/Star'
import { Link } from 'react-router-dom'
import { useBooks } from '../store/useBooks'
export default function Header() {

  const { favoriteBooks } = useBooks((state) => state)

  const handleClick = () => {
    console.log(favoriteBooks)
  }

  return (
    <header className='flex w-full justify-center items-center'>
      <h1 className='text-6xl font-semibold'>Don Quijote</h1>
      <Link
        to='/favorites'
        className='flex justify-center items-center absolute right-12 gap-x-2 hover:text-yellow-400'
        onClick={() => handleClick()}
      >
        <h3>Favorites</h3>
        <StarFull />
      </Link>
    </header>
  )
}
