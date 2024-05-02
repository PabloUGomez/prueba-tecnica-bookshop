import { create } from 'zustand'
import { Book } from '../types'

interface BooksState {
  books: Array<Book>
  favoriteBooks: Array<Book>
  genre: string | undefined
  pages: number | undefined
  setBooks: (books: Array<Book>) => void
  setFavoriteBook: (favoriteBook: Book) => void
  unSetFavoriteBook: (favoriteBook: Book) => void
  setGenre: (genre: string) => void
  setPages: (pages: number) => void
  getBooksByGenre: (genge: string) => Array<Book>
  getBooksByPages: (pages: number) => Array<Book>
}

export const useBooks = create<BooksState>((set, get) => ({
  books: [],
  favoriteBooks: [],
  genre: undefined,
  pages: undefined,
  setBooks: (books: Array<Book>) => set({ books }),
  setFavoriteBook: (favoriteBook: Book) => {
    set((state: { favoriteBooks: Book[] }) => {
      const favoriteBooks = [...state.favoriteBooks, favoriteBook]
      return { favoriteBooks }
    })
  },
  unSetFavoriteBook: (favoriteBook: Book) => {
    set((state: { favoriteBooks: Book[] }) => {
      const favoriteBooks = state.favoriteBooks.filter(
        (book) => book.ISBN !== favoriteBook.ISBN
      )
      return { favoriteBooks }
    })
  },
  setGenre: (genre: string) => set({ genre }),
  setPages: (pages: number) => set({ pages }),
  getBooksByGenre: (genge: string | undefined) => {
    if (genge === undefined) return get().books
    return get().books.filter((book) => book.genre === genge)
  },
  getBooksByPages: (pages: number) => {
    return get().books.filter((book) => book.pages <= pages)
  },
}))
