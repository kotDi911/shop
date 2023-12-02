import SocialLink from "../components/footer/SocialLink";

const Contacts = ({props}) => {
    const {phones, social, mail} = props
    console.log(props)
    console.log(social)
    window.scrollTo(0, 0)
    return (
        <section className="section dev">
            <div className="flex container">
                <div className="dev__block">
                    <div className="flex column dev__block-info">
                        <h4 className="footer__title">My phones:</h4>
                        {phones.map((item, index) => <p className="footer__text" key={index}>{item}</p>)}
                    </div>
                    <div className="flex column dev__block-info">
                        <h4 className="footer__title">My email:</h4>
                        {mail.map((item, index) => <p className="footer__text" key={index}>{item}</p>)}
                    </div>
                    <div className="flex column dev__block-info">
                        <h4 className="footer__title">My social:</h4>
                        {social.map((item, index) => <SocialLink key={index} props={item}/>)}
                    </div>
                </div>
                <div className="dev__description">
                    <span>
                        <b>Hello!</b>
                    </span>
                    <p>
                        My name is Nikolay. This my pet project internet shop.
                        On this page you will find my contact information to contact me.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Contacts