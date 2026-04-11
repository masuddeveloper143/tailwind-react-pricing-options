import React, { use } from 'react';

const PriceingOption = ({ priceingPromise }) => {

    const priceingData = use(priceingPromise)
    console.log(priceingData)


    return (
        <div>

        </div>
    );
};

export default PriceingOption;