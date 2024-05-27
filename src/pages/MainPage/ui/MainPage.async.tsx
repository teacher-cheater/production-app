import {lazy} from "react";

// @ts-ignore
export const MainPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    setTimeout(()=> res(import('./MainPage')), 1500)
}));
