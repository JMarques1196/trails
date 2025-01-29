import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import React from "react";
import Menu from "./activity-menu";
import { collection, getDocs } from "firebase/firestore";

// Mocks
// ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => {
  return {
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  };
});
// Firebase
vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  getDocs: vi.fn(),
  QuerySnapshot: vi.fn(),
}));

vi.mock('src/firebase.js', () => ({
  db: vi.fn(),
}));


describe("Menu", () => {
  // Mock Data
  interface MockData {
    id: string;
    heartRate: number[];
    altitude: number[];
  }

  const mockRunData: MockData[] = [
    {
      id: "2024-01-01",
      heartRate: [70, 75, 80],
      altitude: [100, 150, 200],
    },
    {
      id: "2024-01-02",
      heartRate: [72, 77, 82],
      altitude: [110, 160, 210],
    },
  ];

  /*   const mockBikingData: MockData[] = [
    {
      id: '2024-01-03',
      heartRate: [75, 80, 85],
      altitude: [200, 250, 300],
    },
  ]; */

  beforeEach(() => {
    vi.clearAllMocks();
    // Setup default mock implementation for getDocs
    (getDocs as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        docs: mockRunData.map((data) => ({
          data: () => ({ heartRate: data.heartRate, altitude: data.altitude }),
          id: data.id,
        })),
      })
    );
  });

  it("Renders the inital state correctly", () => {
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
  // Test Functions
  // Add mocks for functions
});
