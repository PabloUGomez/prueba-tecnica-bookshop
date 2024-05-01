import { useBooks } from "../store/useBooks"
import { Book } from "../types"
import LibroCard from "./LibroCard"

export default function Favorites() {
    const { favoriteBooks } = useBooks((state) => {
        return { favoriteBooks: state.favoriteBooks }
    })
    return (
        <section className='flex w-full mx-20 my-16 flex-col'>
        <h2 className='text-3xl font-medium mb-8'>Favoritos</h2>
        <div className='flex flex-wrap gap-2 overflow-x-hidden'>
            {favoriteBooks.map((book: Book, index : number) => (
            <LibroCard key={index} book={book} />
            ))}
        </div>
        </section>
    )
    }