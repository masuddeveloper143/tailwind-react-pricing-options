import React from 'react';

const PriceingCard = ({ priceing }) => {
    console.log(priceing)
    return (
        <div>
            <h1 className='text-4xl mt-4'>{priceing.name}</h1>
            <p>${priceing.price}</p>
        </div>
    );
};

export default PriceingCard;