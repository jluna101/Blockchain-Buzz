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
                <div>
                    <h1>Market Summary</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod tempore dicta enim inventore architecto. Facilis recusandae impedit, ipsam quam ratione itaque ipsum commodi provident adipisci consequuntur voluptas fugiat maiores officiis.</p>
                </div>
            </>
            : null }
        </div>

    );
}

export default Header;

// {parseFloat(element.price).toFixed(2)}<