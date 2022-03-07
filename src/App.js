import { Routes, Route, Link, Navigate } from 'react-router-dom';
import BusinessNews from "./Components/BusinessNews";
import CurrencyCard from "./Components/CurrencyCard";
import CryptoDetails from './Components/CryptoDetails';
import Header from "./Components/Header";
import React, { useEffect, useState } from 'react';
import './App.css';

/* === Title Tag === */
document.title = `Blockchain Buzz`;

function App() {
  /* === Variables === */
  const [cryptoCard, setCryptoCard] = useState([])

  /* === Fetching Data from Coinstats API === */
  useEffect(() => {
    fetch('https://api.coinstats.app/public/v1/coins?skip=0')
    .then((res) => res.json())
    .then(data => setCryptoCard(data.coins))
    .catch(console.error);
    }, []);

  return (
    <>
      <Header btc={cryptoCard[0]} eth={cryptoCard[1]} />
      <h1 id='logo'>
        <Link to='/'>Blockchain Buzz</Link>
      </h1>
      
        <Routes>
          {/* <Route path='/' element={<BusinessNews />} /> */}
          <Route path='/' element={<CurrencyCard cryptoCard={cryptoCard} />} />
          <Route path='/details/:name' element={<CryptoDetails />} />
        </Routes>
      <BusinessNews />
    </>
  );
}

export default App;









// function App() {
//   /* === Variables === */
//   const [cryptoCard, setCryptoCard] = useState([])

//   /* === Fetching Data from Coinstats API === */
//   useEffect(() => {
//     fetch('https://api.coinstats.app/public/v1/coins?skip=0')
//     .then((res) => res.json())
//     .then(data => setCryptoCard(data.coins))
//     .catch(console.error);
//     }, []);

//   return (
//     <>
//     <div></div>
//       <Header btc={cryptoCard[0]} eth={cryptoCard[1]} />  
//       <CurrencyCard cryptoCard={cryptoCard}/>
//       <BusinessNews />
//     </>
//   );
// }

// export default App;