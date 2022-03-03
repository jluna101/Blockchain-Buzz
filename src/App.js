import BusinessNews from "./Components/BusinessNews";
import CryptoInfo from "./Components/CryptoInfo";
import CryptoNews from "./Components/CryptoNews";
import React from "react";
import { useEffect, useState } from 'react';

// const newsAPI = 'https://newsapi.org/v2/everything?q=tesla&from=2022-02-03&sortBy=publishedAt&apiKey=f626ac4896d04b0f8dfb5fca5eaf1549';
  // const apiKey = 'f626ac4896d04b0f8dfb5fca5eaf1549';


function App() {
  const [cryptoCard, setCryptoCard] = useState([]);


  useEffect(() => {
    const coinstatUrl = "https://api.coinstats.app/public/v1/coins?skip=0";
    fetch(coinstatUrl)
    .then((res) => res.json())
    .then(data => {
        console.log(data.coins);
        setCryptoCard(data.coins);
    })
    .catch(console.error);
  }, []);


  return (
    <>

      <header>
        <h3>Logo</h3>
        <h3>Market Stat #1</h3>
        <h3>Market Stat #2</h3>
        <h3>Market Stat #3</h3>


      </header>

      <BusinessNews />
      <CryptoNews />
      
      <h1>Crypto Summary Market</h1>
      <input type="text" placeholder="Search Crypto" />
      {}

      <CryptoInfo />

    </>

  );
}

export default App;
