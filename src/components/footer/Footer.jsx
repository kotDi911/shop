import FooterContacts from "./FooterContacts";
import {Link} from "react-router-dom";
import {data} from "../../data";

const Footer = () => {


    return (
        <footer className="footer">
            <FooterContacts props={data}/>
            <div className="container flex space-between developer">
                <span className="footer__text">
                    2023
                </span>
                <div className="flex developer__info">
                    <span className="footer__title">
                        <b>Developer:</b>
                    </span>
                    <span className="footer__text">
                        Golub Nikolay
                    </span>
                    <Link to="/contacts" className="footer__link">
                        Contacts
                    </Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer