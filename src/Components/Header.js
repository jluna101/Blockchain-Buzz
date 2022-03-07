import React from 'react';


function Header({btc, eth}) {
    
    return (
        <div className='header'>
        { btc ? 
            <div>
                <h3>BTC Mined {btc.availableSupply / btc.totalSupply}%</h3>
                <h3>Btc Volume: {btc.volume}</h3>
                <h3>Eth Volume: {eth.volume}</h3>
                <h3></h3>
            </div>
            : null }
        </div>

    );
}

export default Header;

