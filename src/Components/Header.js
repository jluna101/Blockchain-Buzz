import React from 'react';


function Header({data}) {
    
    
    return (
        <div className='header'>
            <h3>Total BTC Mined: %</h3>
            <h3>BTC Supply: </h3>
            <h3>ETH Volume: {}</h3>
            <h3>ETH Supply: {}</h3>
        </div>
    );
}

export default Header;