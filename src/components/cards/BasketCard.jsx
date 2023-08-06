import delImg from '../../assets/trashBasket.svg'
import {useCards} from "../../store/store";

const BasketCard = ({name, img, price, id}) => {
    const {value, unit} = price
    const delSelectedCards = useCards((store) => store.delSelectedCards)

    const handleDelCard = () => {
        delSelectedCards(id);
    }

    return (
        <div className='basket__card flex align-i-center'>
            <div className='basket__card-justify flex align-i-center'>
                <div className='basket__img-box'>
                    <img className='basket__img' src={img} alt=""/>
                </div>
                <p className='basket__title'>{name}</p>
                <p className='basket__price'>{value} <span>{unit}</span></p>
            </div>
            <button className='del-button' onClick={handleDelCard}>
                <img className='del-button-img' src={delImg} alt=""/>
            </button>
        </div>
    )
}

export default BasketCard;
