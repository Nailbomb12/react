import React from 'react';

function Prod({url,name, price}) {
    return (
      <div className="test">
        <img src={url} alt="#" width='600'/>
        <h2>{name}</h2>
        <p>Price: {price}$</p>
        <button>buy</button>
      </div>
    );
}

Prod.defaultProps = {
    url: 'https://www.imgonline.com.ua/examples/random-pixels-big.png'
}

export default Prod