import {useCards} from "../../store/store";
import {Link} from "react-router-dom";

const Navigation = ({chapters}) => {
    const renderName =(name)=>{
        switch (name){
            case 'wash':
                name = 'Washing machine'
                break;
            case 'micro':
                name = 'Microwave'
                break;
            case 'cold':
                name = 'Refrigerators'
                break;
            case 'cook':
                name = 'Cooker'
                break;
            case 'oven':
                name = 'Ovens'
                break;
            default:
                break;
        }
        return name;
    }

    return (
        <nav className='nav'>
            <ul className='flex space-between nav'>
                {chapters.map((item) => <li key={item}><Link className='link' to={`/home/${item}`}>{renderName(item)}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Navigation