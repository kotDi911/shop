import {useNavigate} from "react-router";
import byBtn from '../../assets/addToBasket.svg'
import byBtnA from '../../assets/addToBasketActive.svg'
import {useCards} from "../../store/store";
import {useEffect, useState} from "react";

const Card = (card) => {
    const addToBasket = useCards((store) => store.addToBasket)
    const delSelectedCards = useCards((store) => store.delSelectedCards)
    const selectedCards = useCards((store) => store.selectedCards)
    const {id, name, img, price, active} = card;
    const {value, unit} = price;
    const navigation = useNavigate();
    const [imgBtn, setImgBtn] = useState('')
    const [isActive, setIsActive] = useState(active)

    useEffect(() => {
        isActive ? setImgBtn(byBtnA) : setImgBtn(byBtn)
    }, [])

    useEffect(() => {
        isActive ? setImgBtn(byBtnA) : setImgBtn(byBtn)
    }, [selectedCards])

    const goToDescription = () => {
        navigation(`/details/${id}`)
    }

    const basketHandleClick = () => {
        setIsActive(!isActive)
        if (!isActive) {
            addToBasket(card);
            setImgBtn(byBtnA)
        } else {
            delSelectedCards(id);
            setImgBtn(byBtn)
        }
    }

    return (
        <div className='card flex column'>
            <div className='card__img-cont' onClick={goToDescription}>
                <img className='card__img' src={img} alt=""/>
            </div>
            <h3 className='card__name'>{name}</h3>
            <div className='flex align-i-center space-between'>
                <p>
                    <b>Цена: </b> {value} <span>{unit}</span>
                </p>
                <button className='card__basket-btn' onClick={basketHandleClick}>
                    <img className='card__basket-img' src={imgBtn} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default Card
