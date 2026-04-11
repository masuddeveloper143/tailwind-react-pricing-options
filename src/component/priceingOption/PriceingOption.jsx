import React, { use } from 'react';
import PriceingCard from '../priceingCard/PriceingCard';

const PriceingOption = ({ priceingPromise }) => {

    const priceingData = use(priceingPromise)
    console.log(priceingData)


    return (
        <div>
            <h1 className='text-6xl text-red-500'>Get our membership</h1>

            <div>
                {
                    priceingData.map(priceing =>
                        <PriceingCard
                            key={priceing.id}
                            priceing={priceing}>

                        </PriceingCard>)
                }
            </div>
        </div>
    );
};

export default PriceingOption;