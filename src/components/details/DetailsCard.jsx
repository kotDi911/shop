import byBtnA from "../../assets/addToBasketActive.svg";
import byBtn from "../../assets/addToBasket.svg";
import {useCards} from "../../store/store";
import {useEffect, useState} from "react";
import DetailsGrid from "./DetailsGrid";


const DetailsCard = ({card}) => {
    const {name, img, price, description, characteristic, id} = card;
    const {value, unit} = price;
    const addToBasket = useCards((store) => store.addToBasket)
    const delSelectedCards = useCards((store) => store.delSelectedCards)
    const selectedCards = useCards((store) => store.selectedCards)
    const [imgBtn, setImgBtn] = useState(byBtn)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        isActive ? setImgBtn(byBtnA) : setImgBtn(byBtn)
        selectedCards.filter((item) => item.id === card.id).length !== 0 && setIsActive(true)
        console.log(isActive)
    },[isActive])

    const basketHandleClick = () => {
        setIsActive(!isActive)
        if (!isActive) {
            addToBasket(card);
        } else {
            delSelectedCards(id);
        }
    }

    return (
        <div className='container details flex column'>
            <div className='details__main flex'>
                <div className='details__img-cont'>
                    <img className='details__img' src={img} alt=""/>
                </div>
                <div className='details__text flex column'>
                    <h1 className='text__title'>{name}</h1>
                    <p className='details__description'>
                        <b>Описание товара: </b> {description}
                    </p>
                    <p>
                        <b>Стоимость товара: </b> {value} <span>{unit}</span>
                    </p>
                    <button className='details__btn flex' onClick={basketHandleClick}>
                        <b>{!isActive ? 'Добавить' : 'Убрать'}</b> <img className='details__btn-img' src={imgBtn} alt=""/>
                    </button>
                </div>
            </div>
            {characteristic.length > 0 && <DetailsGrid characteristic={characteristic}/>}
        </div>
    )
}

export default DetailsCard
