import CardsGrid from "../components/cards/CardsGrid";
import Navigation from "../components/nav/Navigation";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";
import {useCards} from "../store/store";

const Home = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate()

    const data = useCards((store) => store.data)
    const chapter = useCards((store) => store.chapter)
    const setChapter = useCards((store) => store.setChapter)
    const chapters = Object.keys(data);

    const cards = (chapter) =>{
        let cardM = []
        for(let name in data){
            if(name === chapter){
                cardM = data[name]
            }
        }
        return cardM;
    }

    useEffect(() => {
        if (chapter === null) {
            setChapter(Object.keys(data)[0])
        }

        if (pathname === "/shop" || pathname === "/home") {
            navigate(`/home/${chapter}`)
            setChapter(chapter)
        } else {
            navigate(pathname)
            const names = pathname.split('/')
            const name = names[names.length - 1]
            setChapter(name)
        }
    }, [pathname]);

    return (
        <section className='container'>
            <div className='flex column'>
                <Navigation chapters={chapters}/>
                <CardsGrid cards={cards(chapter)}/>
            </div>
        </section>
    )
}

export default Home