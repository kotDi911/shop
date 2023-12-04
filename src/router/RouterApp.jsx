import {Navigate, Routes} from "react-router";
import {Route} from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/header/Header";
import {useCards} from "../store/store";
import Details from "../pages/Details";
import Basket from "../pages/Basket";
import CardsGrid from "../components/cards/CardsGrid";
import Footer from "../components/footer/Footer";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Transport from "../pages/Transport";
import {developerData} from "../data";
import {useEffect} from "react";

const RouterApp = () => {

    const cards = useCards((store) => store.cards)
    const chapters = useCards((store) => store.chapters)
    const updSelectedCards = useCards((store) => store.updSelectedCards)

    useEffect(()=>{
        updSelectedCards()
    },[])

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/home' element={<Home/>}>
                    {chapters.map((chapter,index)=> (
                        <Route key={index} path={chapter} element={<CardsGrid cards={cards(chapter)}/>}/>
                    ))}
                </Route>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/details/:name' element={<Details/>}/>
                <Route path='/contacts' element={<Contacts props={developerData}/>}/>
                <Route path='/aboutus' element={<About/>}/>
                <Route path='/transport' element={<Transport/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default RouterApp;
