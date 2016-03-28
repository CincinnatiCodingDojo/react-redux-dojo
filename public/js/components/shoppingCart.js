import React, {Component} from 'react';

export default (props) => {

    return (
      <ul>
      {
        props.products.map((product, index) => {return <li onClick={() => props.addToCart(product)}
          key={index}>{product.name}</li>})
      }
      </ul>
    );
}
