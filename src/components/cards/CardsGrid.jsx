import {useCards} from '../../store/store';
import Card from './Card';
import {useEffect} from "react";

const CardsGrid = () => {
    const cards = useCards((store) => store.cards)
    const selectedCards = useCards((store) => store.selectedCards)

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(selectedCards));
    }, [selectedCards]);

    const filter = (card) => {
        let active = false;
        selectedCards.find((item) => item.id === card.id ? active = true : active = false)
        return active;
    }

    return (
        <div className='grid grid__cards'>
            {cards.map((card) => (<Card key={card.id} {...card} active={filter(card)}/>))}
        </div>
    )
}

export default CardsGrid
