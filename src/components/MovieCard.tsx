import { TMovieData } from "../store/store";

type TProps = {
  movie: TMovieData;
  deleteMovie: (movieID: number) => void;
};

export const MovieCard = ({ movie, deleteMovie }: TProps) => {
  return (
    <>
      <div className="flex flex-col bg-neutral w-92 rounded">
        <div className="flex flex-row justify-between">
          <div className="flex items-center">
            <label className="p-2 text-neutral-content font-mono">
              {movie.movieName}
            </label>
          </div>
          <div>
            <button
              data-cy="deleteButton"
              className="btn btn-square btn-outline text-neutral-content"
              onClick={() => deleteMovie(movie.movieID)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="p-2 text-neutral-content font-mono">DESCRIPTION:</div>
          <div className="p-2 text-neutral-content font-mono">
            {movie.description}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="p-2 text-neutral-content font-mono">CATEGORY:</div>
          <div className="p-2 text-neutral-content font-mono">
            {movie.category}
          </div>
        </div>
      </div>
    </>
  );
};
