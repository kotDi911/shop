import DetailsRow from "./DetailsRow";

const DetailsGrid = ({characteristic}) => {
    return (
        <>
            <h3 className='grid__details-header'>
                Характеристики
            </h3>
            {characteristic.map((item, index) => <DetailsRow key={index} {...item}/>)}
        </>
    )
}

export default DetailsGrid;
