import { MovieForm } from "./components/MovieForm";
import { MovieSection } from "./components/MovieSection";
import { TopBar } from "./components/TopBar";
import { TMovieData, useStore } from "./store/store";
function App() {
  const { movieList, addMovie, resetMovies } = useStore();

  const onSubmit = (
    data: Pick<TMovieData, "movieName" | "description" | "category">,
    event: any
  ) => {
    event?.preventDefault();
    const correctData = { movieID: movieList.length, ...data };
    addMovie(correctData);
  };

  return (
    <div className="flex flex-col">
      <TopBar resetMovies={resetMovies} />
      <div className="flex flex-row">
        <div className="flex w-1/2 content-center p-8">
          <MovieForm onSubmit={onSubmit} />
        </div>
        <div className="flex w-1/2 items-center p-16">
          <MovieSection />
        </div>
      </div>
    </div>
  );
}

export default App;
