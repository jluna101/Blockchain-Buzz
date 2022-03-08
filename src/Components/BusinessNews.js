import React, { useState, useEffect } from 'react';


function BusinessNews(props) {
    /* === Variables === */
    const [cryptoNews, setCryptoNews] = useState([]);
    /* === Fetching Data from News Data API === */
    useEffect(() => {
        const url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_KEY}&q=cryptocurrency&country=us&language=en&category=business`;
        fetch(url)
        .then((res) => res.json())
        .then(data => setCryptoNews(data.results))
        .catch(err => alert('Opps.. something went wrong. Try again!'))
        }, []);

return (
            // News Container
            <div className='newsContainer'>
                <div className='businessNews'>
                    <h2 id='mainNewsTitle'>Latest Crypto News </h2>
                    {cryptoNews ? <> 
                    {/* Mapping News Card */}
                    {cryptoNews.slice(0,10).map((news, index) => {
                        return (
                            <div className='newsCard' key={news.pubDate + news.url}>
                                <a id='newsTitle' href={news.link}>
                                    {news.image_url !== null ? <img id='newsImg' src={news.image_url} alt={news.title}/>: <></>}
                                    <h2 id='actualNewsTitle'> {news.title}</h2>
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
