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
            const {price} = card
            const {value, unit} = price
            priceSum += value
            priceUnit = unit
        })
        setSum(priceSum + ' ' + priceUnit)
    }, [selectedCards])

    const goToHome =()=>{
        navigate('/home');
    }

    return (
        <div className="basket flex column">
            {selectedCards.map((card) =>
                <BasketCard
                    key={card.id}
                    name={card.name}
                    img={card.img}
                    price={card.price}
                    id={card.id}
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
    )
}

export default Basket
