import React from 'react'

const styleUSD = {
  style:"currency", currency:"USD"
}

const Coin = ({ name, image, symbol, price, volume, priceChange }) => {
  return (
    <div className='container-coin'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt="crypto" />
          <strong>{name}</strong>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>{price.toLocaleString('es-US', styleUSD)}</p> 
          <p className='coin-volume'>VOL: {volume.toLocaleString('es-US', styleUSD)}</p> 
          <p className={`coin__percent 
            ${priceChange < 0 ? `red` : `green`}`}>
           {priceChange.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin
