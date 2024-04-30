import { StarFull } from '../Icons/Star'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='flex w-full justify-center items-center'>
      <h1 className='text-6xl font-semibold'>Don Quijote</h1>
      <Link
        to='/favorites'
        className='flex justify-center items-center absolute right-12 gap-x-2 hover:text-yellow-400'
      >
        <h3>Favorites</h3>
        <StarFull />
      </Link>
    </header>
  )
}
