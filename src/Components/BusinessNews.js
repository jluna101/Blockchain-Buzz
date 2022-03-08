import React, { useState, useEffect } from 'react';


function BusinessNews() {
    /* === Variables === */
    const [cryptoNews, setCryptoNews] = useState([]);
    const apiKey = 'f626ac4896d04b0f8dfb5fca5eaf1549'; 
    /* === Fetching from News API === */
    useEffect(() => {
    const newsApiUrl = 'https://newsapi.org/v2/top-headlines?q=crypto&from=2022-03-04&sortBy=publishedAt&apiKey=' + apiKey;
    fetch(newsApiUrl)
    .then((res) => res.json())
    .then(data => setCryptoNews(data.articles))
    .catch(console.error);
    }, []);

    

    return (
        // News Container
        <div className='newsContainer'>
            <div className='businessNews'>
                <h2 id='mainNewsTitle'>Latest Crypto News </h2>

                {/* Mapping News Card */}
                {cryptoNews.slice(0, 4).map((news, index) => {
                    return (
                        <div className='newsCard' key={news.urlToImage + news.url}>
                            <a id='newsTitle' href={news.url}>
                                <img id='newsImg' src={news.urlToImage} alt={news.title}/>
                                <h2>{news.title}</h2>
                            </a>
                            
            
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default BusinessNews;