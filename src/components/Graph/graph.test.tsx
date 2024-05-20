import { render, screen } from "@testing-library/react";
import { describe, it } from "@jest/globals";
import "@testing-library/jest-dom";
import Graph from "./graph";

describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<Graph />);
  });
});
