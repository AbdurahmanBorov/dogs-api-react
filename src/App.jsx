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
    axios.get('https://cataas.com/api/cats?tags=cute&skip=0&limit=10')
      .then((response) => setList(response.data))
  }, [])

  const removeCat = (id) => {
    setList(list.filter((item) => item._id !== id))
  }
  const removeFavoriteCat = (id) => {
    setCartItems(cartItems.filter((obj) => obj.cat._id !== id))
  }

  const onAddToCart = (cat) => {
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
