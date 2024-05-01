import { create } from "zustand"; 
import { Book } from "../types";

interface BooksState {
    books: Array<Book>;
    favoriteBooks: Array<Book>;
    setBooks: (books: Array<Book>) => void;
    setFavoriteBook: (favoriteBook: Book) => void;
    unSetFavoriteBook: (favoriteBook: Book) => void;
}

export const useBooks = create<BooksState>((set) => ({
    books: [],
    favoriteBooks: [],
    setBooks: (books : Array<Book>) => set({ books }),
    setFavoriteBook: (favoriteBook : Book) => {
        set((state: { favoriteBooks: Book[] }) => {
            const favoriteBooks = [...state.favoriteBooks, favoriteBook];
            return { favoriteBooks };
        });
    },
    unSetFavoriteBook: (favoriteBook : Book) => {
        set((state: { favoriteBooks: Book[] }) => {
            const favoriteBooks = state.favoriteBooks.filter((book) => book.ISBN !== favoriteBook.ISBN);
            return { favoriteBooks };
        });
    }
}));
