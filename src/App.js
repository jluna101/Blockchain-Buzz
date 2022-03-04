import BusinessNews from "./Components/BusinessNews";
import CurrencyCard from "./Components/CurrencyCard";
import Header from "./Components/Header";
import React, { useEffect, useState } from 'react';
import './App.css';


  // const apiKey = 'f626ac4896d04b0f8dfb5fca5eaf1549';


function App() {
  /* === Variables === */
  const [cryptoCard, setCryptoCard] = useState([]);
  const [cryptoSearch, setCryptoSearch] = useState('');

  /* === Fetching Data from Coinstat API === */
  useEffect(() => {
    const coinstatUrl = "https://api.coinstats.app/public/v1/coins?skip=0";
    fetch(coinstatUrl)
    .then((res) => res.json())
    .then(data => {
        setCryptoCard(data.coins);
    })
    .catch(console.error);
  }, []);
// .slice(0,10)

  return (
    <>
      <Header />
    
        <h1>Crypto Summary Market</h1>
        <input 
          id='cryptoSearch' 
          type="text" 
          placeholder="Search Crypto" 
          onChange={event => setCryptoSearch(event.target.value)} 
        />
        <div className='cardContainer'>
          {cryptoCard.filter((element) => {
            if (cryptoSearch === ''){
              return element
            } else if (element.name.toLowerCase().includes(cryptoSearch.toLowerCase())){
              return element
            }
          }).slice(0,10).map((element, index) =>{
            return (
              <div key={element.volume}>
                <CurrencyCard
                  key={element.volume}
                  name={element.name}
                  icon={element.icon}
                  price={element.price}
                  priceChangeDay={element.priceChange1d}
                  priceChangeWeek={element.priceChange1w}
                />
              </div>
            )
          })}

        </div>
        <div className='newsContainer'>
        <BusinessNews />
        </div>


    </>
  );
}

export default App;




// return (
//   <>
//     <Header />
  
//       <h1>Crypto Summary Market</h1>
//       <input id='cryptoSearch' type="text" placeholder="Search Crypto" />

//       <div className='cardContainer'>
//         {cryptoCard.map((element, index) =>{
//           return (
//             <div key={element.volume}>
//               <CurrencyCard
//                 key={element.volume}
//                 name={element.name}
//                 icon={element.icon}
//                 price={element.price}
//                 priceChangeDay={element.priceChange1d}
//                 priceChangeWeek={element.priceChange1w}
//               />
//             </div>
//           )
//         })}

//       </div>
//       <div className='newsContainer'>
//       <BusinessNews />
//       </div>


//   </>
// );
// }
// export default App;




