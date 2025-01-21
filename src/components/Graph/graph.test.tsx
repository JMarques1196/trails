import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import React from "react";
import Graph from "./graph";

// Random Data
const testData = {
  heartRate: [100, 89, 102],
  altitude: [400, 401, 402],
  id: "id",
};

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => {
  return {
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  };
});

describe("Graph", () => {
  it("renders the component", () => {
    render(<Graph name="altitude" data={testData} />);
    screen.debug();
  });
});
