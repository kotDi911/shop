import {useParams} from "react-router";
import DetailsCard from "../components/details/DetailsCard";
import {useEffect, useState} from "react";

const Details = () => {
    const params = useParams()
    const [card, setCard] = useState(JSON.parse(sessionStorage.getItem('details')))

    useEffect(()=>{
        setCard(JSON.parse(sessionStorage.getItem('details')))
    }, [params])

    return (
        <section className="section">
            <DetailsCard card={card}/>
        </section>
    )
}

export default Details
