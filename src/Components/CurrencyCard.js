import React from 'react';

function CurrencyCard(props) {

    return (
        <div className='currencyCard'>
            <h1> {props.name} </h1>
            <img src={props.icon} alt="" />
            <h3>Price ${parseFloat(props.price).toFixed(2)} </h3>
            <h3>Daily Change {props.priceChangeDay}%</h3>
            <h3>Weekly Change {props.priceChangeWeek}%</h3>
        </div>
    );
}

export default CurrencyCard;