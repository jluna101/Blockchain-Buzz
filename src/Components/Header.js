import React from 'react';


function Header({btc, eth}) {

    return (
        <div>
        { btc ? 
            <>
                <div className='header'>
                    <h3>BTC Mined {parseFloat(btc.availableSupply / btc.totalSupply).toFixed(4)*100}%</h3>
                    <h3>BTC Market Cap: ${parseFloat(btc.marketCap).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                    <h3>ETH Market Cap: ${parseFloat(eth.marketCap).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                </div>
            </>
            : null }
        </div>

    );
}

export default Header;

