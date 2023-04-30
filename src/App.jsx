import React, { useEffect, useState } from 'react'
import Cart from './components/Cart/Cart'
import IconCart from './icons/cart.svg'
import { Card } from './components/Card';
import axios from 'axios'

function App() {
  const [list, setList] = useState(null)
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);



  useEffect(() => {
    axios.get('https://cataas.com/api/cats?tags=cute&skip=0&limit=10').then((response) => setList(response.data))
    axios.get('https://644ec7154e86e9a4d80127b7.mockapi.io/cart').then(res => setCartItems(res.data))
  }, [])

  const removeCat = (id) => {
    setList(list.filter((item) => item._id !== id))
  }
  const removeFavoriteCat = (id) => {
    axios.delete(`https://644ec7154e86e9a4d80127b7.mockapi.io/cart/${id}`)
    setCartItems(cartItems.filter((obj) => obj.cat._id !== id))
  }

  const onAddToCart = (cat) => {
    axios.post('https://644ec7154e86e9a4d80127b7.mockapi.io/cart', cat)
    setCartItems(prev => [...prev, cat])
  }

  return (
    <div className="App">
      {cartOpened ? <Cart removeFavoriteCat={removeFavoriteCat} items={cartItems} onClose={() => setCartOpened(false)} /> : null}
      <img width={100} className='cart-icon' onClick={() => setCartOpened(true)} src={IconCart} alt="cart" />
      <div className='cards'>
        {list ? list.map((item, index) =>
          <Card
            key={index}
            cat={item}
            removeCat={removeCat}
            onPlus={(cat) => onAddToCart(cat)}
          />
        ) : '..Загрузка'}
      </div>
    </div>
  );
}

export default App;
