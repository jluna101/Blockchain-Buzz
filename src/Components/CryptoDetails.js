import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function CryptoDetails(props) {
    /* === Variables === */
    const { id } = useParams();
    const [cryptoCard, setCryptoCard] = useState(null);

    /* === Fetching Data from Coinstats API === */
    useEffect(() => {
        fetch(`https://api.coinstats.app/public/v1/coins/${id.toLowerCase()}`)
        .then((res) => res.json())
        .then(data => {
            setCryptoCard(data.coin)
        })
        .catch(console.error);
        }, []);
    /* === Title Tag === */
    {cryptoCard ? document.title = `Blockchain Buzz |  ${cryptoCard.name}`: document.title = `Blockchain Buzz | Details` }

    return (
        <div>
            
            { cryptoCard ? 
            <div className='cardDetailsContainer'>
                <div id='marketSummary'>
                    <h2 id='summaryTitle'>{cryptoCard.name}'s Market Summary</h2>
                    <h3 id='summaryText'>{cryptoCard.name}'s current price is ${parseFloat(cryptoCard.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD, with a 24-hour trading volume of ${(cryptoCard.volume).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD. In the last 24-hours {cryptoCard.name} has seen a price change of {cryptoCard.priceChange1d}%, with a total market cap of ${parseFloat(cryptoCard.marketCap).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.  </h3>
                    <a href={cryptoCard.websiteUrl}>{cryptoCard.name}'s Website</a>
                </div>
                <div className='currencyCardDetails'>
                    <h1 id='cardTitle'>{cryptoCard.name}</h1>
                    <h3>Price ${parseFloat(cryptoCard.price).toFixed(2)}</h3>
                    <img src={cryptoCard.icon} alt={cryptoCard.name} />
                    <h3>Daily Change: {cryptoCard.priceChange1d}%</h3>
                    <h3>Weekly Change: {cryptoCard.priceChange1w}%</h3>
                </div>
            </div>
            : <div><h1>Loading...</h1></div> }

        </div>
    );
}

export default CryptoDetails;