import basket from '../../assets/basket.svg'
import basketA from '../../assets/basketActive.svg'
import back from "../../assets/back.svg"
import {useCards} from "../../store/store";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";

const HeaderBasket = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const updCounter = useCards((store) => store.updHeaderBasketCount)
    const selectedCards = useCards((store) => store.selectedCards)
    const count = useCards((store) => store.headerBasketCount)
    const [img, setImg] = useState(basket)
    useEffect(() => {
        updCounter();
        if(pathname !== "/basket"){
            selectedCards.length > 0 ? setImg(basketA) : setImg(basket)
        }else {
            setImg(back)
        }
        console.log(selectedCards.length)
        // selectedCards.length === 0 && localStorage.removeItem("cards")
    }, [selectedCards.length, pathname])

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
