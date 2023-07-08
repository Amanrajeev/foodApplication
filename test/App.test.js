import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders the correct content", () => {
  render(<App />);

  // Use the `screen` object to query for elements and assert their presence or content
  const textElement = screen.getByText(/Hi Aman Rajeev/i);
  expect(textElement).toBeInTheDocument();
});
