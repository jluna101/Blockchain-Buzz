import { Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CryptoDetails from './Components/CryptoDetails';
import BusinessNews from "./Components/BusinessNews";
import CurrencyCard from "./Components/CurrencyCard";
import Footer from './Components/Footer';
import Header from "./Components/Header";
import './App.css';

function App() {
  /* === Variables === */
  const [cryptoCard, setCryptoCard] = useState([])
  /* === Fetching Data from Coinstats API === */
  useEffect(() => {
    fetch('https://api.coinstats.app/public/v1/coins')
    .then((res) => res.json())
    .then(data => setCryptoCard(data.coins))
    .catch(console.error);
    }, []);

  return (
    <>
      {/* <Header btc={cryptoCard[0]} eth={cryptoCard[1]} /> */}
      <div className='bg-dark'>
      <h1 className='text-warning pb-5 pt-2 fw-bold px-3 text-start'><Link className='hover' id='link' to='/'>Blockchain Buzz</Link></h1>
        <Routes>
          <Route path='/' element={<CurrencyCard cryptoCard={cryptoCard} />} />
          <Route path='/details/:id' element={<CryptoDetails />} />
        </Routes>
      </div>
      <BusinessNews/>
      <Footer/>
    </>
  );
}

export default App;








