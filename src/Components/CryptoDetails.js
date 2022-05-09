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
    console.log(cryptoCard)
    /* === Title Tag === */
    {cryptoCard ? document.title = `${cryptoCard.name} | Blockchain Buzz`: document.title = `Blockchain Buzz | Details` }
    // Adds commas to integer
    function integer(num){
        return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    // Adds color to integers (red/green)
    function numColor(num){
        return num > 0 ? <p className="text-success shadow rounded fs-3">{num}%</p>:<p className="text-danger shadow rounded fs-4">{num}%</p>
    }
    return (
        <div className=''>
            
            { cryptoCard ? 
            <div className='w-100 bg-dark pb-5 justify-content-center'>
                <div className='w-100 px-5 text-white'>
                    <h2 className='text-warning'>{cryptoCard.name}'s Market Summary</h2>
                    <h3 id='summaryText'>{cryptoCard.name} is ranked #{cryptoCard.rank}. With a 24-hour trading volume of ${integer(cryptoCard.volume)} and total market cap of ${integer(cryptoCard.marketCap)}.  </h3>
                    <h3 className='fs-5'>For {cryptoCard.name}'s website click&nbsp;
                    <a className='hover text-warning link' href={cryptoCard.websiteUrl} target='_blank'>here </a>
                    and Twitter click&nbsp;
                    <a className='hover text-warning link' href={cryptoCard.twitterUrl} target='_blank'>here</a>
                    .</h3>
                </div>
                <div className='mx-auto mt-5 py-4 bg-white w-50 rounded text-black'>
                    <img className='' src={cryptoCard.icon} alt={cryptoCard.name}/>
                    <h3 className='h1 py-3'>${(cryptoCard.price).toFixed(2)}</h3>
                    <div className='w-25 mx-auto'>
                        <p className='mb-1 pb-1 text-muted'>Daily</p>
                        <> {numColor(cryptoCard.priceChange1d)}</>
                        <p className='mb-1 pb-1 text-muted'>Weekly</p>
                        <> {numColor(cryptoCard.priceChange1w)}</>
                    </div>
                </div>
            </div>
            : <div><h1>Loading...</h1></div> }

        </div>
    );
}

export default CryptoDetails;