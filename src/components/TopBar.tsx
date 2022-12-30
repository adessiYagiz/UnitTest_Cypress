type TTopBar = {
  resetMovies: () => void;
};

export const TopBar = ({ resetMovies }: TTopBar) => {
  return (
    <div className="bg-neutral h-24">
      <div className="flex flex-row justify-between h-full">
        <div className="flex items-center h-24">
          <div className="p-4 text-neutral-content  font-mono text-2xl">
            CYPRESS PLAYGROUND
          </div>
        </div>
        <div className="p-4 flex items-center">
          <button
            className="btn btn-outline btn-accent text-neutral-content  font-mono text-2xl"
            onClick={() => resetMovies()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
