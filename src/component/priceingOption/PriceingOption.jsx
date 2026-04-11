import React, { use } from 'react';
import PriceingCard from '../priceingCard/PriceingCard';
import Dasypricingcard from '../dasypricingcard/Dasypricingcard';

const PriceingOption = ({ priceingPromise }) => {

    const priceingData = use(priceingPromise)
    console.log(priceingData)


    return (
        <div>
            <h1 className='text-6xl text-red-500'>Get our membership</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* {
                    priceingData.map(priceing =>
                        <PriceingCard
                            key={priceing.id}
                            priceing={priceing}>

                        </PriceingCard>)
                } */}


                {
                    priceingData.map(pricing => <Dasypricingcard
                        key={pricing.id} pricing={pricing}>
                            
                        </Dasypricingcard>)
                }

            </div>
        </div >
    );
};

export default PriceingOption;