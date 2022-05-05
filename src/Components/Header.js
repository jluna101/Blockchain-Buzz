import React from 'react';


function Header({btc, eth}) {
    // Adds commas to integers 
    function integer(num){
        return parseInt((num)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    return (
        <div>
        { btc ? 
            <>
                <div className='bg-white py-2 px-auto d-flex justify-content-evenly '>
                    <p className='fs-6'>BTC Mined {parseFloat(btc.availableSupply / btc.totalSupply).toFixed(4)*100}%</p>
                    <p className='fs-6'>BTC Market Cap: ${integer(btc.marketCap)}</p>
                    <p className='fs-6'>ETH Market Cap: ${integer(eth.marketCap)}</p>
                </div>
            </>
            : <div>Loading...</div> }
        </div>

    );
}

export default Header;

