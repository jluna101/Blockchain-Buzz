import BusinessNews from "./Components/BusinessNews";
import CurrencyCard from "./Components/CurrencyCard";
import Header from "./Components/Header";
import React, { useEffect, useState } from 'react';
import './App.css';


  

function App() {
  /* === Variables === */
  

  /* === Fetching Data from Coinstat API === */
  


  return (
    <>
      <Header />
      <h1>Crypto Summary Market</h1>    
      <CurrencyCard />

      <div className='newsContainer'>
      <BusinessNews />
      </div>


    </>
  );
}

export default App;








// function App() {
//   /* === Variables === */
//   const [cryptoCard, setCryptoCard] = useState([]);
//   const [cryptoSearch, setCryptoSearch] = useState('');

//   /* === Fetching Data from Coinstat API === */
//   useEffect(() => {
//     const coinstatUrl = "https://api.coinstats.app/public/v1/coins?skip=0";
//     fetch(coinstatUrl)
//     .then((res) => res.json())
//     .then(data => {
//         setCryptoCard(data.coins);
//         console.log();
//     })
//     .catch(console.error);
//   }, []);


//   return (
//     <>
//       <Header />
    
//         <h1>Crypto Summary Market</h1>
//           <input 
//           type="text" 
//           placeholder="Search Crypto" 
//           onChange={event => setCryptoSearch(event.target.value)}
//           className='cryptoSearch' 
//         />
//         <div className='cardContainer'>
//           {cryptoCard.filter((element) => {
//             if (cryptoSearch === ''){
//               return element
//             } else if (element.name.toLowerCase().includes(cryptoSearch.toLowerCase())){
//               return element
//             }
//           }).slice(0,10).map((element, index) =>{
//             return (
//               <div key={element.volume}>
//                 <CurrencyCard
//                   name={element.name}
//                   icon={element.icon}
//                   price={element.price}
//                   priceChangeDay={element.priceChange1d}
//                   priceChangeWeek={element.priceChange1w}
//                 />
//               </div>
//             )
//           })}

//         </div>
//         <div className='newsContainer'>
//         <BusinessNews />
//         </div>


//     </>
//   );
// }

// export default App;
