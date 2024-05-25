import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
render(_jsx(BrowserRouter, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }), document.getElementById('root'));
