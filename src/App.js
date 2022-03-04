import BusinessNews from "./Components/BusinessNews";
import CurrencyCard from "./Components/CurrencyCard";
import CryptoNews from "./Components/CryptoNews";
import React, { useEffect, useState } from 'react';
import './App.css';


  // const apiKey = 'f626ac4896d04b0f8dfb5fca5eaf1549';


function App() {
  /* === Variables === */
  const [cryptoCard, setCryptoCard] = useState([]);
  const [cryptoNews, SetCryptoNews] = useState([]);

  /* === News API === */
  useEffect(() => {
    const newsApiUrl = 'https://newsapi.org/v2/everything?q=cryptocurrency&from=2022-03-03&sortBy=publishedAt&apiKey=f626ac4896d04b0f8dfb5fca5eaf1549';
    fetch(newsApiUrl)
    .then((res) => res.json())
    .then(data => {
        console.log(data.articles);
        SetCryptoNews(data.articles);
    })
    .catch(console.error);
  }, []);


  /* === Coinstate API === */
  useEffect(() => {
    const coinstatUrl = "https://api.coinstats.app/public/v1/coins?skip=0&limit=10";
    fetch(coinstatUrl)
    .then((res) => res.json())
    .then(data => {
        // console.log(data);
        setCryptoCard(data.coins);
    })
    .catch(console.error);
  }, []);


  return (
    <>

      <header>
        <h3 id='logo'>Blockchain Buzz</h3>
        <h3>Market Stat #1</h3>
        <h3>Market Stat #2</h3>
        <h3>Market Stat #3</h3>
      </header>

      
      <div className='newsContainer'>
        <BusinessNews />
        <CryptoNews />
      </div>
        
        <h1>Crypto Summary Market</h1>
        <input type="text" placeholder="Search Crypto" />



        <div className='cardContainer'>
          {cryptoCard.map((element, index) =>{
            return (
              <>
                <CurrencyCard
                  name={element.name}
                  icon={element.icon}
                  price={element.price}
                  priceChangeDay={element.priceChange1d}
                  priceChangeWeek={element.priceChange1w}
                />
              </>
            )
          })}
        </div>




      

      

    </>
  );
}

export default App;
