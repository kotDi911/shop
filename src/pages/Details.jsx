import {useParams} from "react-router";
import {useCards} from "../store/store";
import DetailsCard from "../components/details/DetailsCard";
import {useEffect, useState} from "react";

const Details = () => {
    const cards = useCards((store) => store.renderCards)
    const chapter = useCards((store) => store.chapter)
    const params = useParams();
    const [card, setCard] = useState({
        id: '',
        name: '',
        description: '',
        characteristic: [],
        img: '',
        price: {
            value: '',
            unit: ''
        }
    })

    useEffect(() => {
        setCard(cards(chapter).find((card) => card.id === Number(params.id)))
    }, [])

    return (
        <>
            <DetailsCard card={card}/>
        </>
    )
}

export default Details
