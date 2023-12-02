import {Link} from "react-router-dom";

const SocialLink = ({props}) => {
    const {name, img, path} = props
    return (
        <Link className="social footer__link flex" to={path} target="_blank">
            <img className="social__img" src={img} alt=""/>
            <p className="social__name"> {name}</p>
        </Link>
    )
}
export default SocialLink