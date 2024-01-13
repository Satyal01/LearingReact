import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App"
import Carousle from './pages/ImageCarousel';
import FaQ from "./pages/FaQ"
import Quote from "./pages/Quote"
import ShopList from "./pages/shopList";



function AppRoute(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/image-carousle" element={<Carousle />}/>
                <Route path="/faq" element={<FaQ />} />
                <Route path="/quote" element={<Quote/>} />
                <Route path="/shoping" element={<ShopList />} />
                <Route path="/*" element = {<h1 className="text-center">Page not found</h1>} />
            </Routes>
        </Router>
    );
}


export default AppRoute;