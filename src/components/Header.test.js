import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const menuElement = screen.getByText(/item1/i);

  expect(menuElement).toBeInTheDocument();
});
