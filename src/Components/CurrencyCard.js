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
        return num > 0 ? <p className="text-success shadow rounded">{num}%</p>:<p className="text-danger shadow rounded">{num}%</p>
    }
    return (
        <div className='bg-dark'>

        {/* Search Bar  */}
            <div className='d-flex justify-content-center'>
                <input 
                type="search" 
                placeholder="Search a crypto.." 
                onChange={event => setCryptoSearch(event.target.value)}
                className='form-control w-50 fs-6 text-center'
                id='form1' />
            </div>
            {/* Card Component */}
            <div className='d-flex justify-content-center flex-wrap w-100 px-3 py-5'>
                    {props.cryptoCard.filter((element) => {
                    if (cryptoSearch === ''){
                    return element
                    } else if (element.name.toLowerCase().includes(cryptoSearch.toLowerCase())){
                    return element
                    } 
                    }).slice(0,12).map((element, index) =>{
                    return (
                    <Link id='link' className='w-25' to={`/details/${element.id}`} key={element.volume}>
                        <div className='d-flex border-end border-warning align-items-center flex-column bg-white py-3 my-3 hover shadow rounded w-100 pb-5' id='slide'>
                            <h5 className='mx-0 px-0 my-3'>  {element.name}</h5>
                            <img className='w-50' src={element.icon} alt={element.name}/>
                            {element.price > 1? 
                            <p className='my-2 h2'> ${(integer(element.price))}</p>:
                            <p className='my-2 h2'> ${(element.price).toFixed(2)}</p>
                            }
                            <div>
                                <p className='mb-1 pb-1 text-muted'>Hourly</p>
                                <> {numColor(element.priceChange1h)}</>
                                <p className='mb-1 pb-1 text-muted'>Daily</p>
                                <> {numColor(element.priceChange1d)}</>
                            </div>
                        </div>
                    </Link>
                        )
                    })}
            </div>

        </div>
    );
}

export default CurrencyCard;


