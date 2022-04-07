import { configureStore } from "@reduxjs/toolkit";

/** Reducers */
import ContentReducer from "./ContentReducer";
import SideBarReducer from "./SideBarReducer";

export const store = configureStore({
    reducer: {
        sidebar: SideBarReducer,
        content: ContentReducer,
    },
})