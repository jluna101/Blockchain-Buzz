import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CurrencyCard(props) {
    /* === Variables === */
    const [cryptoSearch, setCryptoSearch] = useState('');
    /* Title Tag */
    document.title = `Blockchain Buzz | Home`;
    // Adds commas to integer
    function integer(num){
        return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    // Adds color to integers (red/green)
    function numColor(num){
        return num > 0 ? <p className="text-success shadow">{num}%</p>:<p className="text-danger shadow">{num}%</p>
    }
    return (
        <>

        {/* Search Bar  */}
            <div className='d-flex justify-content-center'>
                <input 
                type="searcg" 
                placeholder="Search a crypto.." 
                onChange={event => setCryptoSearch(event.target.value)}
                className='form-control w-25'
                id='form1' />
            </div>
            {/* Card Component */}
            <div className='d-flex px-1 justify-content-center flex-wrap w-100 px-3 py-5'>
                    {props.cryptoCard.filter((element) => {
                    if (cryptoSearch === ''){
                    return element
                    } else if (element.name.toLowerCase().includes(cryptoSearch.toLowerCase())){
                    return element
                    } 
                    }).slice(0,12).map((element, index) =>{
                    return (
                    <Link id='link' className='w-25' to={`/details/${element.id}`} key={element.volume}>
                        <div className='d-flex border-end border-warning align-items-center flex-column bg-white py-3 my-3 hover shadow rounded w-100' id='slide'>
                            <h5 className='mx-0 px-0 my-3'>  {element.name}</h5>
                            <img className='' src={element.icon} alt={element.name}/>
                            {element.price > 1? 
                            <p className='my-2 h2'> ${(integer(element.price))}</p>:
                            <p className='my-2 h2'> ${(element.price).toFixed(2)}</p>
                            }
                            <div>
                                <p className='mb-1 pb-1 text-muted'>Daily</p>
                                <> {numColor(element.priceChange1d)}</>
                                <p className='mb-1 pb-1 text-muted'>Weekly</p>
                                <> {numColor(element.priceChange1w)}</>
                            </div>
                        </div>
                    </Link>
                        )
                    })}
            </div>

        </>
    );
}

export default CurrencyCard;


