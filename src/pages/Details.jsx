import {useParams} from "react-router";
import {useCards} from "../store/store";
import DetailsCard from "../components/details/DetailsCard";
import {useEffect, useState} from "react";

const Details = () => {
    const cards = useCards((store) => store.cards)
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
        setCard(cards.find((card) => card.id === Number(params.id)))
    }, [])

    return (
        <>
            <DetailsCard card={card}/>)
        </>
    )
}

export default Details
