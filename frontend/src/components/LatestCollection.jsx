import React, { useContext, useState } from 'react' // eslint-disable-line
import { ShopContext } from '../context/ShopContext'
import Title from './Title.jsx'
import { useEffect } from 'react';
import ProductItem from './ProductItem.jsx';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => { 
        setLatestProducts(products.slice(0,10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                     Discover the latest products in our store. We&#39;re constantly adding new items to our collection, so be sure to check back often!
                </p>
            </div>
            
            {/* Rendering Product */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'> 
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={ index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>


        </div>
    )
}

export default LatestCollection
