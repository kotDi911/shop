import DetailsRow from "./DetailsRow";

const DetailsGrid = ({characteristic}) => {
    return (
        <div className='grid grid__details details__description'>
            <h3 className='grid__details-header'>
                Характеристики
            </h3>
            {characteristic.map((item, index) => <DetailsRow key={index} {...item}/>)}
        </div>
    )
}

export default DetailsGrid;
