import { render, screen } from "@testing-library/react";
import App from "./App";

describe("The App Component", () => {
  test("it renders", async () => {
    render(<App />);
    const headerElement = await screen.findByText(/do/i);
    expect(headerElement).toBeInTheDocument();
  });
});
