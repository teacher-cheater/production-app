import { lazy } from "react";
// @ts-ignore
export var AboutPageAsync = lazy(function () { return new Promise(function (res) {
    // @ts-ignore
    setTimeout(function () { return res(import('./AboutPage')); }, 1500);
}); });
