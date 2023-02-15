import React, {useState, useEffect} from 'react' 
import axios from 'axios'
import Coin from './Coin'
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import './App.css'

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    })
    .catch(error => console.log(error))
  })

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <>
    <Header/>
    <div className='coin-app'>
     <div className='coin-search'>
      <h1 className='coin-text'>Filtre por uma Moeda</h1>
      <form>
        <input 
        type='text' 
        placeholder='Filtrar...' 
        className='search-input'
        onChange={handleChange}
        />
      </form>
     </div>
        <div className='table-coins'>
          {filteredCoins.map(coin => {
          return(
            <Coin 
              key={coin.id} 
              name={coin.name} 
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.total_volume}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              />
             )
           })}
        </div>
    </div>
      <Footer />
    </>
  );
}

export default App;
