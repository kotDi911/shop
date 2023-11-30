import {Link} from "react-router-dom";

const Navigation = ({chapters}) => {
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

    return (
        <nav className='flex space-between nav'>
                {chapters.map((item) => <Link className='link' key={item} to={`/home/${item}`}>{renderName(item)}</Link>)}
        </nav>
    )
}

export default Navigation