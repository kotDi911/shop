import basket from '../../assets/basket.svg'
import basketA from '../../assets/basketActive.svg'
import {useCards} from "../../store/store";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";

const HeaderBasket = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const updCounter = useCards((store) => store.updCounter)
    const selectedCards = useCards((store) => store.selectedCards)
    const count = useCards((store) => store.count)
    const [img, setImg] = useState(basket)

    useEffect(() => {
        updCounter();
        selectedCards.length > 0 ? setImg(basketA) : setImg(basket)
    }, [selectedCards.length])

    const toggle =()=>{
        pathname === '/basket' ? navigate(-1) : navigate('/basket')
    }

    return (
        <button className='header__basket-btn' onClick={toggle}>
            <img className='header__basket-img' src={img} alt='basket'/>
            <span className='header__basket-counter align-i-center'>{count}</span>
        </button>
    )
}

export default HeaderBasket
