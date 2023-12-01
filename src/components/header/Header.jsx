import logo from '../../assets/logo.svg'
import HeaderBasket from './HeaderBasket';
import {useNavigate} from "react-router";

const Header = () => {
    const navigation = useNavigate();

    const goHomePage = () => {
        navigation('/home');
    }

    return (
        <header className='header'>
            <div className='container header__cont flex space-between'>
                <div className='logo__cont flex align-i-center' onClick={goHomePage}>
                    <div className='logo__img'>
                        <img src={logo} className='logo' alt='logo'/>
                    </div>
                    <span className='logo__text'>
                    Internet Shop
                </span>
                </div>
                <HeaderBasket/>
            </div>
        </header>
    )
}

export default Header
