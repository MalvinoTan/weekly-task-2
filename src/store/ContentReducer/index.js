import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contents: [
        {
            title: "Introduction React",
            description: "Tugas Introduction React yaitu membuat project React baru dan membuat tampilan html di dalam file javascript",
            screenshots: [
                "introduction_react-1.JPG",
                "introduction_react-2.jpg",
                "introduction_react-3.jpg",
            ],
            taskLink: "https://github.com/MalvinoTan/tugas-introduction-react.git",
            summaryLink: "https://github.com/MalvinoTan/react_malvino-austin-tanura/blob/master/10_Introduction%20React/summary.md",
            summaryFile: "introduction_react_summary.md",

        },
        {
            title: "React Fundamental",
            description: "Tugas React Fundamental yaitu membuat Todo List sederhana menggunakan ReactJS yang menerapkan komposisi komponen, implementasi list rendering & styling",
            screenshots: [
                "react_fundamental.JPG",
            ],
            taskLink: "https://github.com/MalvinoTan/tugas-react-fundamental.git",
            summaryLink: "https://github.com/MalvinoTan/react_malvino-austin-tanura/blob/master/11_React%20Fundamental/summary.md",
            summaryFile: "react_fundamental_summary.md",
        },
        {
            title: "React Routing",
            description: "Tugas React Routing yaitu melanjutkan hasil assignment dari react Hooks dengan menerapkan React Routing",
            screenshots: [
                "react_routing-1.JPG",
                "react_routing-2.JPG",
                "react_routing-3.JPG",
                "react_routing-4.JPG",
                "react_routing-5.JPG",
            ],
            taskLink: "https://github.com/MalvinoTan/tugas-react-routing.git",
            summaryLink: "https://github.com/MalvinoTan/react_malvino-austin-tanura/blob/master/12_React%20Routing/summary.md",
            summaryFile: "react_routing_summary.md",
        },
        {
            title: "Event Handling",
            description: "Tugas Event Handling yaitu meembuat daftar pekerjaan dengan kriteria yang ditentukan dan menerapkan event handling",
            screenshots: [
                "event_handling.JPG",
            ],
            taskLink: "https://github.com/MalvinoTan/tugas-event-handling.git",
            summaryLink: "https://github.com/MalvinoTan/react_malvino-austin-tanura/blob/master/13_Event%20Handling/summary.md",
            summaryFile: "event_handling_summary.md",
        },
        {
            title: "React Hooks",
            description: "Tugas React Hooks yaitu melanjutkan task event handling dengan mengubah class component menjadi functional component dan menerapkan Hooks",
            screenshots: [
                "react_hooks.JPG",
            ],
            taskLink: "https://github.com/MalvinoTan/tugas-react-hook.git",
            summaryLink: "https://github.com/MalvinoTan/react_malvino-austin-tanura/blob/master/14_React%20Hook/summary.md",
            summaryFile: "react_hooks_summary.md",
        },
        {
            title: "React Form",
            description: "Tugas React Form yaitu membuat formulir yang berjudul \"Pendaftaran Peserta Coding Bootcamp\" dengan ketentuan tertentu",
            screenshots: [
                "react_form.JPG",
            ],
            taskLink: "https://github.com/MalvinoTan/tugas-react-form.git",
            summaryLink: "https://github.com/MalvinoTan/react_malvino-austin-tanura/blob/master/15_React%20Form/summary.md",
            summaryFile: "react_form_summary.md",
        },
        {
            title: "Global State Management and Data Fetching",
            description: "Tugas Global State Management and Data Fetching yaitu menerapkan Redux dan Redux Persist dari task sebelumnya",
            screenshots: [
                "redux.JPG",
            ],
            taskLink: "https://github.com/MalvinoTan/tugas-global-state.git",
            summaryLink: "https://github.com/MalvinoTan/react_malvino-austin-tanura/blob/master/16_Global%20State%20Management%20and%20Data%20Fetching/summary.md",
            summaryFile: "redux_summary.md",
        },
        {
            title: "Testing",
            description: "Tugas Testing yaitu membuat file testing dan membuat skenario testing dari source code yang diberikan",
            screenshots: [
                "testing.JPG",
            ],
            taskLink: "https://github.com/MalvinoTan/tugas-testing.git",
            summaryLink: "https://github.com/MalvinoTan/react_malvino-austin-tanura/blob/master/17_Testing/summary.md",
            summaryFile: "testing_summary.md",
        },
        {
            title: "Deployment",
            description: "Tugas Deployment yaitu mendeploy code create-react-app yang sedikit diubah menggunakan Surge/Netlify",
            screenshots: [
                "deployment.JPG",
            ],
            taskLink: "https://taskdeploy-malvinoaustintanura.surge.sh/",
            summaryLink: "https://github.com/MalvinoTan/react_malvino-austin-tanura/blob/master/18_Deployment/summary.md",
            summaryFile: "deployment_summary.md",
        },
        {
            title: "Introduction Algorithm",
            description: "Tugas Introduction Algorithm yaitu membuat flowchart dan kode program untuk mencari bilangan prima dan kasus lampu mati/menyala",
            screenshots: [
                "introduction_algorithm-1.png",
                "introduction_algorithm-2.png",
                "introduction_algorithm-3.jpg",
                "introduction_algorithm-4.jpg",
            ],
            taskLink: [
                "https://whimsical.com/introduction-to-algorithm-soal-1-EsTcCBwYYQU3ie335oUJp",
                "https://whimsical.com/introduction-to-algorithm-soal-2-V1Zhn7V1kcvpwNfPFA1qRW",
                "https://github.com/MalvinoTan/tugas-introduction-algorithm.git",
            ],
            summaryLink: "https://github.com/MalvinoTan/react_malvino-austin-tanura/blob/master/19_Introduction%20Algorithm/summary.md",
            summaryFile: "introduction_algorithm_summary.md",
        },
    ],
};

export const ContentReducer = createSlice({
    name: "content",
    initialState,
    reducers: {},
});

export default ContentReducer.reducer;