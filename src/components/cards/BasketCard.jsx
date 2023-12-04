import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import delImg from '../../assets/delete.svg'
import {useCards} from "../../store/store";

const BasketCard = ({name, img, price, id, chapter, count}) => {
    const {value, unit} = price
    const delSelectedCards = useCards((store) => store.delSelectedCards)
    const minusSelectedCards = useCards((store) => store.minusSelectedCards)
    const addToBasket = useCards((store) => store.addToBasket)

    const handleDelCard = () => {
        delSelectedCards(id, chapter);
    }
    const increment = () => {
        addToBasket({name: name})
    }
    const decrement = () => {
        minusSelectedCards({name: name, count: count})
    }

    return (
        <div className='basket__card flex align-i-center'>
            <div className='basket__card-justify flex align-i-center'>
                <div className='basket__img-box'>
                    <img className='basket__img' src={img} alt=""/>
                </div>
                <p className='basket__title'>{name}</p>
                <div className="flex align-i-center">
                    <button className="count_btn" onClick={decrement}>
                        <img src={minus} alt="minus" className="count_btn_img"/>
                    </button>
                    <span className="count">{count}</span>
                    <button className="count_btn" onClick={increment}>
                        <img src={plus} alt="plus" className="count_btn_img"/>
                    </button>
                    <span className="price"> X {value}</span>
                    <p className='basket__sum'> = {count*value} {unit}</p>
                </div>

            </div>
            <button className='del-button' onClick={handleDelCard}>
                <img className='del-button-img' src={delImg} alt=""/>
            </button>
        </div>
    )
}

export default BasketCard;
