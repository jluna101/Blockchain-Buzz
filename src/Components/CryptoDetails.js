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
        .catch(err => alert('Opps.. something went wrong. Try again!'))
    }, []);
    /* === Title Tag === */
    {cryptoCard ? document.title = `${cryptoCard.name} | Blockchain Buzz`: document.title = `Blockchain Buzz | Details` }
    // Adds commas to integer
    function integer(num){
        return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    // Adds color to integers (red/green)
    function numColor(num){
        return num > 0 ? <p className="text-success">{num}%</p>:<p className="text-danger">{num}%</p>
    }
    return (
        <div>
            
            { cryptoCard ? 
            <div className='cardDetailsContainer'>
                <div id='marketSummary'>
                    <h2 id='summaryTitle'>{cryptoCard.name}'s Market Summary</h2>
                    <h3 id='summaryText'>{cryptoCard.name}'s current price is ${integer(cryptoCard.price)} USD, with a 24-hour trading volume of ${integer(cryptoCard.volume)} USD. In the last 24-hours {cryptoCard.name} has seen a price change of {(cryptoCard.priceChange1d)}%, with a total market cap of ${integer(cryptoCard.marketCap)}.  </h3>
                    <a id='cryptoWebsite' href={cryptoCard.websiteUrl}>{cryptoCard.name}'s Website</a>
                </div>
                <div className='currencyCardDetails'>
                    <h1 id='cardTitle'>{cryptoCard.name}</h1>
                    <h3>Price ${parseFloat(cryptoCard.price).toFixed(2)}</h3>
                    <img src={cryptoCard.icon} alt={cryptoCard.name} />
                    <h3>Daily Change:</h3>
                    <> {numColor(cryptoCard.priceChange1d)}</>
                    <h3>Weekly Change:</h3>
                    <> {numColor(cryptoCard.priceChange11)}</>
                </div>
            </div>
            : <div><h1>Loading...</h1></div> }

        </div>
    );
}

export default CryptoDetails;