import React, { useState, useEffect } from 'react';


function BusinessNews(props) {
    /* === Variables === */
    const [cryptoNews, setCryptoNews] = useState([]);
    // Converts unix timestamp to date
    function datetime(num){
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'}).format(num)}
    /* === Fetching Data from News Data API === */
    useEffect(() => {
        fetch(`https://finnhub.io/api/v1/news?category=cryptocurrency&token=${process.env.REACT_APP_NEWS_KEY}`)
        .then((res) => res.json())
        .then(data => setCryptoNews(data))
        .catch(err => alert('Opps.. something went wrong. Try again!'))
        }, []);
return (
            // News Container
            <div className='bg-white'>
                <h2 className='py-5'>Latest Crypto News </h2>
                <div className='d-flex flex-wrap w-100 justify-content-center'>
                    {cryptoNews ? <> 
                    {/* Mapping News Card */}
                    {cryptoNews.slice(0,16).map((news, index) => {
                        return (
                            <div className='d-flex  w-25 px-3 py-3 my-3 mx-5 text-muted flex-column align-items-start hoverNews' key={news.headline}>
                                <a className='link d-flex flex-column align-items-start' href={news.url} target='_blank' >
                                <img className="rounded w-100 shadow" src={news.image} alt={news.headline} />
                                <p className='pt-3'>{news.source}</p>
                                <h2 className='text-black w-100 fw-normal fs-6 align-items-center'>{news.headline}</h2>
                                <p>{datetime((news.datetime)+'100')}</p>
                                </a>
                            </div>
                        )
                    })}
                     </> : <div>Loading...</div> }
                </div>
            </div>
        );   
     }
export default BusinessNews;
