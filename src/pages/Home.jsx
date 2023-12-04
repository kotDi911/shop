import Navigation from "../components/nav/Navigation";
import {useEffect} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useCards} from "../store/store";
import ScrollToTop from "../components/nav/ScrollToTop";

const Home = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate()

    const chapters = useCards((store) => store.chapters)
    const setChapter = useCards((store) => store.setChapter)
    useEffect(() => {
        if (pathname === "/shop" || pathname === "/home") {
            navigate(`/home/${chapters[0]}`)
        } else {
            navigate(pathname)
            const names = pathname.split('/')
            const name = names[names.length - 1]
            setChapter(name)
        }
        window.scrollTo(0,0)
    }, [pathname]);

    return (
        <section className='section'>
            <div className='flex column container'>
                <Navigation chapters={chapters}/>
                <Outlet/>
                <ScrollToTop/>
            </div>
        </section>
    )
}

export default Home