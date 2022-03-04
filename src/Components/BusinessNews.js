import React, { useState, useEffect } from 'react';


function BusinessNews(props) {
    /* === Variables === */
    const [cryptoNews, setCryptoNews] = useState([]);
     /* === News API === */
    useEffect(() => {
    const newsApiUrl = 'https://newsapi.org/v2/everything?q=markets&from=2022-03-03&sortBy=publishedAt&apiKey=f626ac4896d04b0f8dfb5fca5eaf1549';
    fetch(newsApiUrl)
    .then((res) => res.json())
    .then(data => {
        setCryptoNews(data.articles);
    })
    .catch(console.error);
    }, []);

    

    return (
        <div className='businessNews'>
            <h2>Business News </h2>
            {cryptoNews.map((news, index) => {
                return (
                    <div className='newsCard' key={news.urlToImage + news.url}>
                        <img id='newsImg' src={news.urlToImage} alt={news.title} />
                        <a href={news.url}>{news.title}</a>
                        
                    </div>
                )
            })}
        </div>
    );
}

export default BusinessNews;