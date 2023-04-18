import React from 'react'
import './Cart.scss'
import Remove from '../../icons/remove.svg'


export const Cart = ({ onClose, removeFavoriteCat, items = [] }) => {
    const baseUrl = 'https://cataas.com/cat/'

    return (
        <div className="overlay">
            <div className="cart">
                <h2 className="cart__title">Корзина<img onClick={onClose} src={Remove} alt="remove-btn" /></h2>
                <div className="cart__items">
                    {items.map((obj) => (
                        <div className="cart__item">
                            <img className='cart__item-img' width={70} height={70} src={baseUrl + obj.cat._id} alt="cat" />
                            <img className='cart__item-btn' onClick={() => {
                                removeFavoriteCat(obj.cat._id)
                                }} src={Remove} alt="remove-btn" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cart
