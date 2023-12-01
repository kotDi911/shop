import {Link} from "react-router-dom";
import {useState} from "react";

const Navigation = ({chapters}) => {
    const [isActive, setIsActive] = useState(false)
    const renderName =(name)=>{
        switch (name){
            case 'wash':
                name = 'Стиральные машины'
                break;
            case 'micro':
                name = 'Микроволновые печи'
                break;
            case 'cold':
                name = 'Холодильники'
                break;
            case 'cook':
                name = 'Плиты'
                break;
            case 'oven':
                name = 'Духовые печи'
                break;
            default:
                name = null
                break;
        }
        return name;
    }
    const handleClickBurger = ()=>{setIsActive(!isActive)}

    return (
        <div className="nav">
            <div className="burger" onClick={handleClickBurger}>
                {!isActive ? ">" : "<"}
            </div>
            <nav className={`flex space-between nav__cont ${isActive && 'active'}`}>
                {chapters.map((item) =>
                    <Link
                        className='link'
                        key={item}
                        to={`/home/${item}`}
                        onClick={()=>setIsActive(false)}
                    >
                        {renderName(item)}
                    </Link>)}
            </nav>
        </div>
    )
}

export default Navigation