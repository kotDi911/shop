import {useParams} from "react-router";
import {useCards} from "../store/store";
import DetailsCard from "../components/details/DetailsCard";
import {useEffect, useState} from "react";
import card from "../components/cards/Card";

const Details = () => {
    const detailsCard = useCards((store) => store.detailsCard)
    const cards = useCards((store) => store.renderCards)
    const chapter = useCards((store) => store.chapter)
    const params = useParams()

    const [card, setCard] = useState(detailsCard)
    console.log(card)
    useEffect(()=>{
        setCard(cards(chapter).find((card) => card.id + card.name === params.name))
    }, [params])
    return (
        <>
            <DetailsCard card={card}/>
        </>
    )
}

export default Details
