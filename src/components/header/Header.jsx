import logo from '../../assets/logo.svg'
import HeaderBasket from './HeaderBasket';
import {useNavigate} from "react-router";

const Header = () => {
    const navigation = useNavigate();

    const goHomePage = () => {
        navigation('/home');
    }

    return (
        <div className='header flex space-between'>
            <header className='header__cont flex align-i-center' onClick={goHomePage}>
                <div className='header__img'>
                    <img src={logo} className='logo' alt='logo'/>
                </div>
                <span className='logo-text'>
                    Internet Shop
                </span>
            </header>
            <HeaderBasket/>
        </div>
    )
}

export default Header
