import {useCards} from "../store/store";
import BasketCard from "../components/cards/BasketCard";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

const Basket = () => {
    const navigate = useNavigate()
    const selectedCards = useCards((store) => store.selectedCards)
    const clear = useCards((store) => store.clear)
    const [isButton, setIsButton] = useState(false)
    const [sum, setSum] = useState('')

    useEffect(() => {
        let priceSum = 0
        let priceUnit
        selectedCards.length === 0 ? setIsButton(false) : setIsButton(true)
        selectedCards.forEach((card) => {
            const {price, count} = card
            const {value, unit} = price
            priceSum += value * count
            priceUnit = unit
        })
        setSum(priceSum + ' ' + priceUnit)
        localStorage.setItem('cards', JSON.stringify(selectedCards))
    }, [selectedCards])

    const goToHome =()=>{
        navigate('/home');
    }
    const sort = () => {
        [...selectedCards]
            .sort((a, b) => a.id - b.id)
            .map(card => {
                return (
                    <div key={card.id + card.chapter}>
                        <h2>id: {card.id}</h2>
                        <h2>name: {card.name}</h2>
                    </div>
                );
            })
    }

    return (
        <section className="section">
            <div className="basket flex column">
                {[...selectedCards]
                    .sort((a, b) => a.id - b.id).map((card) =>
                    <BasketCard
                        key={card.id + card.chapter}
                        name={card.name}
                        img={card.img}
                        price={card.price}
                        id={card.id}
                        chapter={card.chapter}
                        count={card.count}
                    />
                )}
                {
                    isButton
                        ?
                        (<>
                            <div className='basket__card flex sum'>
                                <p className='sum__title'>Сумма:</p>
                                <p className='sum__price'>{sum}</p>
                            </div>
                            <button className='clear-btn' onClick={clear}>Clear All</button>
                        </>)
                        :
                        (<>
                            <h1 className='message'>Ваша корзина пуста</h1>
                            <span className='basket__link' onClick={goToHome}>вернуться к покупкам</span>
                        </>)
                }
            </div>
        </section>
    )
}

export default Basket
