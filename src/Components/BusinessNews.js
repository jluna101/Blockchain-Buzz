import React, { useState, useEffect } from 'react';



function BusinessNews(props) {
    const apiKey = 'pub_5276c6da652d71ae26db2a247701f9642927';
    const url='https://newsdata.io/api/1/news?apikey=' + apiKey + '&q=cryptocurrency&country=us&language=en&category=business' ;

    const [cryptoNews, setCryptoNews] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then(data => {
            setCryptoNews(data.results)
            console.log(data.results)
        })
        .catch(console.error);
        }, []);

return (
            // News Container
            <div className='newsContainer'>
                <div className='businessNews'>
                    <h2 id='mainNewsTitle'>Latest Crypto News </h2>
                    {cryptoNews ? <> 
                    {/* Mapping News Card */}
                    {cryptoNews.map((news, index) => {
                        return (
                            <div className='newsCard' key={news.pubDate + news.url}>
                                <a id='newsTitle' href={news.link}>
                                    <img id='newsImg' src={news.image_url} alt={news.title}/>
                                    <h2>{news.title}</h2>
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










// function BusinessNews() {
//     // const apiKey = 'pub_5276c6da652d71ae26db2a247701f9642927';
//     /* === Variables === */
//     const [cryptoNews, setCryptoNews] = useState([]);
//     // const apiKey = 'f626ac4896d04b0f8dfb5fca5eaf1549'; 
//     /* === Fetching from News API === */
//     useEffect(() => {
//     const newsApiUrl = 'https://newsapi.org/v2/top-headlines?q=crypto&from=2022-03-04&sortBy=publishedAt&apiKey=f626ac4896d04b0f8dfb5fca5eaf1549';
//     fetch(newsApiUrl)
//     .then((res) => res.json())
//     .then(data => setCryptoNews(data.articles))
//     .catch(console.error);
//     }, []);

    

//     return (
//         // News Container
//         <div className='newsContainer'>
//             <div className='businessNews'>
//                 <h2 id='mainNewsTitle'>Latest Crypto News </h2>
//                 {cryptoNews ? <> 
//                 {/* Mapping News Card */}
//                 {cryptoNews.map((news, index) => {
//                     return (
//                         <div className='newsCard' key={news.urlToImage + news.url}>
//                             <a id='newsTitle' href={news.url}>
//                                 <img id='newsImg' src={news.urlToImage} alt={news.title}/>
//                                 <h2>{news.title}</h2>
//                             </a>
                            
            
//                         </div>
//                     )
//                 })}
//                  </> : <div>Loading...</div> }
//             </div>
//         </div>
//     );
// }

// export default BusinessNews;