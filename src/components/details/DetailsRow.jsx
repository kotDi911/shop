const DetailsRow =({name, value})=>{
    return(
        <>
            <p className='grid__details-row'>{name}</p>
            <p className='grid__details-row'>{value}</p>
        </>
    )
}
export default DetailsRow;
