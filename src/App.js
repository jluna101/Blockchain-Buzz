import BusinessNews from "./Components/BusinessNews";
import CurrencyCard from "./Components/CurrencyCard";
import CryptoNews from "./Components/CryptoNews";
import React from "react";
import { useEffect, useState } from 'react';
import './App.css';

// const newsAPI = 'https://newsapi.org/v2/everything?q=tesla&from=2022-02-03&sortBy=publishedAt&apiKey=f626ac4896d04b0f8dfb5fca5eaf1549';
  // const apiKey = 'f626ac4896d04b0f8dfb5fca5eaf1549';


function App() {
  const [cryptoCard, setCryptoCard] = useState([]);

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
        <img src="" alt="" />
        <h3>Market Stat #1</h3>
        <h3>Market Stat #2</h3>
        <h3>Market Stat #3</h3>


      </header>

      

        <BusinessNews />
        <CryptoNews />
        
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
