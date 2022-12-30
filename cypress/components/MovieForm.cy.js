import { MovieForm } from "../../src/components/MovieForm";

describe("<MovieForm>", () => {
  beforeEach(() => {
    cy.mount(<MovieForm onSubmit={cy.stub().as("submit")} />);
  });
  it("Check for Required Values", () => {
    var button = cy.get("[data-cy=submit]");
    button.click();
    var movieError = cy.get("[data-cy=movieError]");
    var descriptionError = cy.get("[data-cy=descriptionError]");
    var categoryError = cy.get("[data-cy=categoryError]");
    movieError.should("contain", "This field is required");
    descriptionError.should("contain", "This field is required");
    categoryError.should("contain", "This field is required");
  });
  it("Check for Correct Submission", () => {
    var movieName = cy.get("[data-cy=Movie-Name]");
    var description = cy.get("[data-cy=Description]");
    var category = cy.get("[data-cy=Category]");
    movieName.type("example");
    description.type("example");
    category.type("example");
    cy.get("form").submit();
    cy.get("@submit").should("have.been.calledWith", {
      movieName: "example",
      description: "example",
      category: "example",
    });
  });
});
