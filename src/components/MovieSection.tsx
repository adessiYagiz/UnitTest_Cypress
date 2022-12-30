import { useStore } from "../store/store";
import { MovieCard } from "./MovieCard";

export const MovieSection = () => {
  const { movieList, deleteMovie } = useStore();
  return (
    <div>
      <div
        data-cy="movie-section"
        className="flex flex-col p-4 w-full outline rounded content-evenly"
      >
        {movieList.map((movie, index) => {
          return (
            <div className="p-4" key={index}>
              <MovieCard movie={movie} deleteMovie={deleteMovie}></MovieCard>
            </div>
          );
        })}
        {movieList.length === 0 && (
          <div className="flex flex-col bg-neutral w-92 rounded">
            <span className="w-92 p-2 text-neutral-content font-mono">
              Please add another movie to view
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
