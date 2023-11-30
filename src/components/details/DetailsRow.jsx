const DetailsRow =(item)=>{
    const {name, value, unit} = item;
    return(
        <>
            <p className='grid__details-row'>{name}</p>
            <p className='grid__details-row'>{value} {unit}</p>
        </>
    )
}
export default DetailsRow;
