import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function CryptoDetails(props) {
    /* === Variables === */
    const { name } = useParams();
    const [cryptoCard, setCryptoCard] = useState(null);

    /* === Fetching Data from Coinstats API === */
    useEffect(() => {
        fetch(`https://api.coinstats.app/public/v1/coins/${name.toLowerCase()}`)
        .then((res) => res.json())
        .then(data => {
            setCryptoCard(data.coin)
        })
        .catch(console.error);
        }, []);

    return (
        <div>
            
            { cryptoCard ? 
            <>
                <div>
                    <h2>Market Summary</h2>
                    <h3>{cryptoCard.name}'s current price is ${cryptoCard.price} USD, with a 24-hour trading volume of ${cryptoCard.volume} USD. In the last 24-hours {cryptoCard.name} has seen a price change of {cryptoCard.priceChange1d}%, with a market cap of ${cryptoCard.marketCap}.  </h3>
                    <a href={cryptoCard.websiteUrl}>{cryptoCard.name}'s Website</a>
                </div>
                <div className='currencyCardDetails'>
                    <h1>{cryptoCard.name}</h1>
                    <h3>Price ${parseFloat(cryptoCard.price).toFixed(2)}</h3>
                    <img src={cryptoCard.icon} alt={cryptoCard.name} />
                    <h3>Daily Change: {cryptoCard.priceChange1d}%</h3>
                    <h3>Weekly Change: {cryptoCard.priceChange1w}%</h3>
                </div>
            </>
            : null }

        </div>
    );
}

export default CryptoDetails;