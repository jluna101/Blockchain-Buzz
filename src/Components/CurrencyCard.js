import React, { useState } from 'react';

function CurrencyCard(props) {
    /* === Variables === */
    const [cryptoSearch, setCryptoSearch] = useState('');

    

    return (
        <>

        {/* Search Bar  */}

            <input 
                type="text" 
                placeholder="Search Crypto" 
                onChange={event => setCryptoSearch(event.target.value)}
                className='cryptoSearch' 
            />

            {/* Card Component */}

            <div className='cardContainer'>
                    {props.cryptoCard.filter((element) => {
                    if (cryptoSearch === ''){
                    return element
                    } else if (element.name.toLowerCase().includes(cryptoSearch.toLowerCase())){
                    return element
                    }
                    }).slice(0,10).map((element, index) =>{
                    return (
                    <div className='currencyCard' key={element.volume}>
                        <h1>{element.name}</h1>
                        <img src={element.icon} alt={element.name} />
                        <h3>Price ${parseFloat(element.price).toFixed(2)}</h3>
                        <h3>Daily Change: {element.priceChange1d}%</h3>
                        <h3>Weekly Change: {element.priceChange1w}%</h3>
                  </div>
                        )
                    })}
            </div>

        </>
    );
}

export default CurrencyCard;





// function CurrencyCard(props) {

//     return (
//         <div className='currencyCard'>
//             <h1> {props.name} </h1>
//             <img src={props.icon} alt="" />
//             <h3>Price ${parseFloat(props.price).toFixed(2)} </h3>
//             <h3>Daily Change {props.priceChangeDay}%</h3>
//             <h3>Weekly Change {props.priceChangeWeek}%</h3>
//         </div>
//     );
// }

// export default CurrencyCard;