import create from "zustand";
import initialMovieList from "../json/movieList.json";

export type TMovieData = {
  movieID: number;
  movieName: string;
  description: string;
  category: string;
};

export type TState = {
  movieList: TMovieData[];
  addMovie: (movie: TMovieData) => void;
  deleteMovie: (movieID: number) => void;
  resetMovies: () => void;
};

export const useStore = create<TState>((set) => ({
  movieList: initialMovieList,
  addMovie: (movie: TMovieData) =>
    set((state: TState) => ({ movieList: [...state.movieList, movie] })),
  deleteMovie: (movieID: number) =>
    set((state: TState) => ({
      movieList: [
        ...state.movieList.filter(
          (movie: TMovieData) => movie.movieID !== movieID
        ),
      ],
    })),
  resetMovies: () =>
    set(() => ({
      movieList: initialMovieList,
    })),
}));
