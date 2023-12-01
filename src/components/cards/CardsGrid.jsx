import {useCards} from '../../store/store';
import Card from './Card';
import {useCallback, useEffect, useState} from "react";
import Pagination from "../nav/Pagination";

const CardsGrid = ({cards}) => {
    const selectedCards = useCards((store) => store.selectedCards)
    // const setRenderCards = useCards((store) => store.setRenderCards)
    // const renderCards = useCards((store) => store.renderCards)

    const [page, setPage] = useState(1);

    const [isActive, setIsActive] = useState(true);
    const ROWS_PER_PAGE = 4;
    const [renderCards, setRenderCards] = useState(cards.filter((card, index) => {
        if (index + 1 >= page && index < page * ROWS_PER_PAGE) {
            return card
        }
    }))
    const getTotalPageCount = Math.ceil(cards.length / ROWS_PER_PAGE);

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(selectedCards));
    }, [selectedCards]);

    useEffect(() => {
        setPage(1)
    }, [cards]);

    useEffect(() => {
        if(!renderCards.length){
            setRenderCards(cards.filter((card, index) => {
                if (index + 1 >= page && index < page * ROWS_PER_PAGE) {
                    setIsActive(true)
                    return card
                }
            }))
            console.log("if", page)
        }else {
            setRenderCards(cards.filter((card, index) => {
                if (index >= (page-1) * ROWS_PER_PAGE&& index < page * ROWS_PER_PAGE) {
                    return card
                }
            }))
            if(cards.length > 0) {
                setIsActive(true)
            }else {
                setIsActive(false)
            }
            console.log("else", page)
        }
        console.log(cards)
        console.log(page)
    },[page, cards])

    const filter = (card) => {
        let active = false;
        selectedCards.find((item) => item.id === card.id ? active = true : active = false)
        return active;
    }

    const handleNextPageClick = useCallback(() => {
        const current = page;
        const next = current + 1;
        const total = cards ? getTotalPageCount : current;

        setPage(next <= total ? next : current);
        setRenderCards(cards.filter((card, index) => {
            if (index >= current * ROWS_PER_PAGE && index < next * ROWS_PER_PAGE) {
                return card
            }
        }))
    }, [page, cards]);

    const handlePrevPageClick = useCallback(() => {
        const current = page;
        const prev = current - 1;

        setPage(prev > 0 ? prev : current);
        setRenderCards(cards.filter((card, index) => {
            if (index >= (prev - 1) * ROWS_PER_PAGE && index < (current - 1) * ROWS_PER_PAGE) {
                return card
            }
        }))
    }, [page]);

    return (
        <>
            <div className='grid grid__cards'>
                {renderCards.map((card) => (<Card key={card.id} {...card} active={filter(card)}/>))}
            </div>
            {isActive ?
                <Pagination
                    active={isActive}
                    onNextPageClick={handleNextPageClick}
                    onPrevPageClick={handlePrevPageClick}
                    disable={{
                        left: page === 1,
                        right: page === getTotalPageCount,
                    }}
                    nav={{current: page, total: getTotalPageCount}}
                />
                :
                <span>Товары отсутствуют, или страница еще в разработке.</span>
            }
        </>
    )
}

export default CardsGrid
