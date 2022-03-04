import React, { useState } from 'react';
import CurrencyCard from './CurrencyCard';

function Header(props) {
    console.log(props);

    return (
        <div className='header'>
            <h3>BTC Volume:</h3>
            <h3>BTC Supply:</h3>
            <h3>ETH Volume:</h3>
            <h3>ETH Supply:</h3>
        </div>
    );
}

export default Header;