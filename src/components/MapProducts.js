import React from 'react';
import Product from './Product';
import './MapProducts.css'
const MapProducts = ({data,handleReset}) => {
  return <>
        {
            data.map( (product,index) =>{
                return<div key={product+index}>
                    <Product product={product} handleReset={handleReset} />
                </div>
            })
        }
    </>;
};

export default MapProducts;
