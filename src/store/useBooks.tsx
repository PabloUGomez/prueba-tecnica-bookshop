import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { Book } from '../types'

interface BooksState {
  books: Array<Book>
  favoriteBooks: Array<Book>
  genre: string | undefined
  pages: number | undefined
  setBooks: (books: Array<Book>) => void
  setFavoriteBook: (favoriteBook: Book) => void
  unSetFavoriteBook: (favoriteBook: Book) => void
  setGenre: (genre: string | undefined) => void
  setPages: (pages: number | undefined) => void
  getBooksFiltered: (
    genge: string | undefined,
    pages: number | undefined
  ) => Array<Book>
  getMaxPages: () => number
  getBookByISBN: (ISBN: string) => Book | undefined
}

export const useBooks = create<BooksState>()(
  persist(
    (set, get) => ({
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
      setGenre: (genre: string | undefined) => set({ genre }),
      setPages: (pages: number | undefined) => set({ pages }),
      getBooksFiltered: (
        genre: string | undefined,
        pages: number | undefined
      ) => {
        if (genre != undefined && pages != undefined)
          return get()
            .books.filter((book) => book.genre === genre)
            .filter((book) => book.pages <= pages)
        if (genre != undefined && pages === undefined)
          return get().books.filter((book) => book.genre === genre)
        if (genre === undefined && pages != undefined)
          return get().books.filter((book) => book.pages <= pages)
        return get().books
      },
      getMaxPages: () => {
        // eslint-disable-next-line prefer-spread
        const max = Math.max.apply(
          Math,
          get().books.map((book) => book.pages)
        )
        if (max > 0) return max
        return 1000
      },
      getBookByISBN: (ISBN: string) => {
        const book = get().books.find((book : Book) => book.ISBN === ISBN)
        return book
      },
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
