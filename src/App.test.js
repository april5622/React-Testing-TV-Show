import React from "react";
import Dropdown from "./App";

import { render, fireEvent, waitforElement, wait, screen } from "@testing-library/react";
//import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

//jest.mock("./api/fetchShow");

test("renders App without crashing", () => {
    render(<App />);
  });

test("show list of seasons when clicked on", () => {
    const testSeason = 'test Season'
    render(<Dropdown>{testSeason}</Dropdown>)

    expect(screen.queryByText(testSeason)).toBeNull()

    fireEvent.click(screen.getAllByText(/Select a season/i))

    expect(screen.getByText(testSeason)).toBeInTheDocument()
})