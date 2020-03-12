import React from "react";
import {render, wait } from "@testing-library/react";
import Episodes from "./Episodes";
//import { queryAllByText } from "@testing-library/react";

const episodes = [
    {
        "id":553946,
        "url":"http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        "name":"Chapter One: The Vanishing of Will Byers",
        "season":1,
        "number":1,
        "airdate":"2016-07-15",
        "airtime":"",
        "airstamp":"2016-07-15T12:00:00+00:00",
        "runtime":60,
    },
    
    {
        "id":578663,
        "url":"http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        "name":"Chapter Two: The Weirdo on Maple Street",
        "season":1,
        "number":2,
        "airdate":"2016-07-15",
        "airtime":"",
        "airstamp":"2016-07-15T12:00:00+00:00",
        "runtime":60,
    },
]

// test("renders episodes without crashing", () => {
//     render(<Episodes />)
// });


test("Episodes renders correctly", async() => {
    const { queryAllByText } = render(
        <Episodes episodes={episodes} />
    );

    expect(queryAllByText(/episode/i)).toHaveLength(2);
});