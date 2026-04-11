import React from 'react';
import PricingFeatures from '../PricingFeature/PricingFeatures';

const PriceingCard = ({ priceing }) => {
    const { name, price, features, duration } = priceing;
    return (
        <div className='border bg-amber-300 p-10 rounded-2xl mx-5 flex-1'>
            <h1 className='text-7xl mt-4'>{name}</h1>
            <p className='text-4xl'>${price}</p>

            <div className= 'flex flex-col bg-amber-700 rounded-3xl p-4 my-4'>
                <p className=''>{features}</p>

                {
                    features.map((feature, index) => <PricingFeatures key={index} feature={feature}></PricingFeatures>)
                }
            </div>
            <button className="btn w-full">subscribe</button>
        </div>
    );
};

export default PriceingCard;