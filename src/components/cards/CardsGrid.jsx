import {useCards} from '../../store/store';
import Card from './Card';
import {useCallback, useEffect, useState} from "react";
import Pagination from "../nav/Pagination";

const CardsGrid = ({cards}) => {
    const selectedCards = useCards((store) => store.selectedCards)
    const [page, setPage] = useState(1);
    const ROWS_PER_PAGE = 12;
    const getTotalPageCount = Math.ceil(cards.length / ROWS_PER_PAGE);
    const [isActive, setIsActive] = useState(false);
    const [renderCards, setRenderCards] = useState(cards.filter((card, index) => {
        if (index + 1 >= page && index < page * ROWS_PER_PAGE) {
            return card
        }
    }))

    useEffect(() => {
        selectedCards.length > 0 && localStorage.setItem('cards', JSON.stringify(selectedCards));
    }, [selectedCards]);

    useEffect(() => {setPage(1)}, [cards]);
    useEffect(() => window.scrollTo({top: 0, behavior: "smooth"}), [page]);

    useEffect(() => {
        if(!renderCards.length){
            setRenderCards(cards.filter((card, index) => {
                if (index + 1 >= page && index < page * ROWS_PER_PAGE) {
                    setIsActive(true)
                    return card
                }
            }))
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
        }
    },[page, cards])

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
                {renderCards.map((card) => (<Card key={card.id} {...card}/>))}
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
