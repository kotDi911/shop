import {useParams} from "react-router";
import DetailsCard from "../components/details/DetailsCard";
import {useEffect, useState} from "react";
import {useCards} from "../store/store";

const Details = () => {
    const params = useParams()
    const [card, setCard] = useState(JSON.parse(sessionStorage.getItem('details')))
    const selectedCards = useCards((store) => store.selectedCards)

    useEffect(()=>{
        setCard(JSON.parse(sessionStorage.getItem('details')))
    }, [params])

    useEffect(() => {
        selectedCards.length > 0 && localStorage.setItem('cards', JSON.stringify(selectedCards));
    }, [selectedCards]);

    return (
        <section className="section">
            <DetailsCard card={card}/>
        </section>
    )
}

export default Details
