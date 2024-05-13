import React, {Suspense} from 'react';
import './index.scss';
import {Link, Route, Routes} from "react-router-dom";
import AboutPageAsync from "./pages/AboutPage/AboutPage";
import MainPageAsync from "./pages/MainPage/MainPage";
import Loading from "./pages/Loading";

const App = () => {
    return (
        <div className="app">

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
