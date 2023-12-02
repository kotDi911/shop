import {Link} from "react-router-dom";
import SocialLink from "./SocialLink";

const title = [
    "Инфо:",
    "Телефоны:",
    "Мы в соц сетях:",
    "Напишите нам:"
]

const FooterContacts = ({props}) => {
    const {phones, social, mail} = props

    return (
        <div className="footer__contacts container flex space-between">
            <div className="about flex column">
                <h4 className="footer__title">Инфо:</h4>
                <Link to="/aboutus" className="footer__link">О нас</Link>
                <Link to="/transport" className="footer__link">Доставка</Link>
            </div>
            <div>
                <h4 className="footer__title">Телефоны:</h4>
                {phones.map((number, index) => <p key={index} className="footer__text">{number}</p>)}
            </div>
            <div className="flex column">
                <h4 className="footer__title">Мы в соц сетях:</h4>
                {social.map((item, index) => <SocialLink key={index} props={item}/>)}
            </div>
            <div className="flex column">
                <h4 className="footer__title">Напишите нам:</h4>
                {mail.map((mail, index) => <span key={index} className="footer__text">{mail}</span>)}
            </div>
        </div>
    )
}
export default FooterContacts