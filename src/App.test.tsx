import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Dashboard component", () => {
  render(<App />);
  expect(screen.getByText(/Social Media Analytics/i)).toBeInTheDocument();
});

