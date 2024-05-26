import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import AboutPageAsync from "./pages/AboutPage/AboutPage";
import MainPageAsync from "./pages/MainPage/MainPage";
import Loading from "./pages/Loading";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme} >TOGGLE THEME</button>
            <Link to={'/'}> Главная </Link>
            <Link to={'/about'}> О сайте </Link>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
