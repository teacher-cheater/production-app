var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from 'react';
import './styles/index.scss';
import { Link, Route, Routes } from "react-router-dom";
import AboutPageAsync from "./pages/AboutPage/AboutPage";
import MainPageAsync from "./pages/MainPage/MainPage";
import Loading from "./pages/Loading";
import { useTheme } from "./theme/useTheme";
var App = function () {
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (_jsxs("div", __assign({ className: "app ".concat(theme) }, { children: [_jsx("button", __assign({ onClick: toggleTheme }, { children: "TOGGLE" })), _jsx(Link, __assign({ to: '/' }, { children: " \u0413\u043B\u0430\u0432\u043D\u0430\u044F " })), _jsx(Link, __assign({ to: '/about' }, { children: " \u041E \u0441\u0430\u0439\u0442\u0435 " })), _jsx(Suspense, __assign({ fallback: _jsx(Loading, {}) }, { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/about', element: _jsx(AboutPageAsync, {}) }), _jsx(Route, { path: '/', element: _jsx(MainPageAsync, {}) })] }) }))] })));
};
export default App;
