import {useNavigate} from "react-router";
import byBtn from '../../assets/addToBasket.svg'
import byBtnA from '../../assets/addToBasketActive.svg'
import {useCards} from "../../store/store";

const Card = (card) => {
    const addToBasket = useCards((store) => store.addToBasket)
    const chapter = useCards((store) => store.chapter)
    const {id, name, img, price, description} = card;
    const {value, unit} = price;
    const navigation = useNavigate();

    const goToDescription = () => {
        sessionStorage.setItem('details', JSON.stringify(card))
        navigation(`/details/${id}`)
        window.scrollTo(0, 0)
    }

    const basketHandleClick = () => {
        addToBasket({...card,count: 1, chapter: chapter});
    }

    return (
        <div className='card flex column'>

            <div className='card__cont flex align-i-center space-between' onClick={goToDescription}>
                <div className='card__img-cont'>
                    <img className='card__img' src={img} alt=""/>
                </div>
                <h3 className='card__name'>{name}</h3>
                <p className='card__description'>
                    {description.slice(0, 220)}
                </p>
                <p className='card__price-text'>
                    <b>Цена: </b> {value} <span>{unit}</span>
                </p>
            </div>
            <button className='card__basket-btn flex' onClick={basketHandleClick}>
                <b>Добавить</b>
                <img className='card__basket-img' src={byBtn} alt=""/>
            </button>
        </div>
    )
}

export default Card
