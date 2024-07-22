import { Suspense } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import Loading from "pages/Loading";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Navbar } from "widgets";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
