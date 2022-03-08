import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CurrencyCard(props) {
    /* === Variables === */
    const [cryptoSearch, setCryptoSearch] = useState('');
    /* Title Tag */
    document.title = `Blockchain Buzz | Home`;

    return (
        <>

        {/* Search Bar  */}
            <input 
                type="text" 
                placeholder="Search Crypto" 
                onChange={event => setCryptoSearch(event.target.value)}
                className='cryptoSearch' />
            {/* Card Component */}
            <div className='cardContainer'>
                    {props.cryptoCard.filter((element) => {
                    if (cryptoSearch === ''){
                    return element
                    } else if (element.name.toLowerCase().includes(cryptoSearch.toLowerCase())){
                    return element
                    }
                    }).map((element, index) =>{
                    return (
                    <Link id='cardLink' to={`/details/${element.id}`} key={element.volume}>
                        <div className='currencyCard'>
                            <h1 id='cardTitle'>{element.name}</h1>
                            <img src={element.icon} alt={element.name} />
                            <h3>Price ${parseFloat(element.price).toFixed(2)}</h3>
                            <div>
                                <h3>Daily Change:</h3>
                                <h3> {element.priceChange1d < 0 ? <h3 id='negative'>{element.priceChange1d}%</h3> : <h3 id='positive'>{element.priceChange1d}%</h3>}</h3>
                                <h3>Weekly Change:</h3>
                                <h3> {element.priceChange1d < 0 ? <h3 id='negative'>{element.priceChange1w}%</h3> : <h3 id='positive'>{element.priceChange1w}%</h3>}</h3>
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


