import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import React from "react";
import Menu from "./activity-menu";

global.ResizeObserver = vi.fn().mockImplementation(() => {
  return {
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  };
});

describe("Menu", () => {
  it("Menu renders displaying the selection buttons and dropdown", () => {
    render(<Menu />);
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Run" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Mountain Biking" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Choose a date")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument(); // dropdown
    expect(
      screen.getByRole("button", { name: "altitude" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "heart rate" })
    ).toBeInTheDocument();
    screen.debug();
  });
});
