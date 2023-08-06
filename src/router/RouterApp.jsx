import {Navigate, Routes, useLocation, useNavigate} from "react-router";
import {Route} from "react-router-dom";
import {useEffect} from "react";
import Home from "../pages/Home";
import Header from "../components/header/Header";
import {useCards} from "../store/store";
import Details from "../pages/Details";
import Basket from "../pages/Basket";

const RouterApp = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate()
    const updSelectedCards = useCards((store) => store.updSelectedCards)
    const showBasket = useCards((store) => store.showBasket)

    useEffect(() => {
        updSelectedCards()
        if (pathname === "/") {
            navigate("/home")
        } else {
            navigate(pathname)
        }
    }, [])

    return (
        <>
            <Header/>
            {showBasket && <Basket/>}
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/details/:id' element={<Details/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    );
}

export default RouterApp;
