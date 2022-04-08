import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: [
        {
            title: "10_Introduction React",
            path: "/introduction-react",
        },
        {
            title: "11_React Fundamental",
            path: "/react-fundamental",
        },
        {
            title: "12_React Routing",
            path: "/react-routing",
        },
        {
            title: "13_Event Handling",
            path: "/event-handling",
        },
        {
            title: "14_React Hooks",
            path: "/react-hooks",
        },
        {
            title: "15_React Form",
            path: "/react-form",
        },
        {
            title: "16_Global State Management and Data Fetching",
            path: "/redux",
        },
        {
            title: "17_Testing",
            path: "/testing",
        },
        {
            title: "18_Deployment",
            path: "/deployment",
        },
        {
            title: "19_Introduction Algorithm",
            path: "/introduction-algorithm",
        },
    ],
};

export const SideBarReducer = createSlice({
    name: "sidebar",
    initialState,
    reducers: {},
});

export default SideBarReducer.reducer;