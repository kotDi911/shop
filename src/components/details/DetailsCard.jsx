import byBtnA from "../../assets/addToBasketActive.svg";
import byBtn from "../../assets/addToBasket.svg";
import {useCards} from "../../store/store";
import DetailsGrid from "./DetailsGrid";


const DetailsCard = ({card}) => {
    const {name, img, price, description, characteristic} = card;
    const {value, unit} = price;
    const addToBasket = useCards((store) => store.addToBasket)
    const chapter = useCards((store) => store.chapter)

    const basketHandleClick = () => {
        card = {...card, chapter: chapter}
        addToBasket(card);
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
                        <b>Добавить</b> <img className='details__btn-img' src={byBtn} alt=""/>
                    </button>
                </div>
            </div>
            <div className='grid grid__details details__description' style={{backgroundImage: `url(${img})`}}>
                {characteristic.length > 0 && <DetailsGrid characteristic={characteristic}/>}
            </div>
        </div>
    )
}

export default DetailsCard
