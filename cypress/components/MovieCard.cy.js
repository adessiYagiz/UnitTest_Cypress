import { MovieCard } from "../../src/components/MovieCard";

describe("<MovieForm>", () => {
  beforeEach(() => {
    cy.mount(
      <MovieCard
        deleteMovie={cy.stub().as("deleteMovie")}
        movie={{
          movieID: 100,
          movieName: "example",
          description: "example",
          category: "example",
        }}
      />
    );
  });
  it("Check for Correct Deletion", () => {
    var deleteButton = cy.get("[data-cy=deleteButton]");
    deleteButton.click();
    cy.get("@deleteMovie").should("have.been.calledWith", 100);
  });
});
