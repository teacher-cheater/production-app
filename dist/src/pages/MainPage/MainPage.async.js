import { lazy } from "react";
// @ts-ignore
export var MainPageAsync = lazy(function () { return new Promise(function (res) {
    // @ts-ignore
    setTimeout(function () { return res(import('./MainPage')); }, 1500);
}); });
