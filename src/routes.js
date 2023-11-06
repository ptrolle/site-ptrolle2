import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;