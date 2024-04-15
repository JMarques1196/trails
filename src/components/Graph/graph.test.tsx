import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Graph from "./graph";

describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<Graph />);
  });
});
