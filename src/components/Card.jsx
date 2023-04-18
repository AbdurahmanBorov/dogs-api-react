import React from 'react'
import Close from '../icons/close.svg'
import Heart from '../icons/heart-unliked.svg'
import Like from '../icons/heart-liked.svg'
import './Card.css'

export const Card = ({ cat, onPlus, removeCat }) => {
    const baseUrl = 'https://cataas.com/cat/'

    const [isAdded, setIsAdded] = React.useState(false)

    const onCLickHeart = () => {
        onPlus({cat});
        setIsAdded(!isAdded)
    }

    return (
        <div className='card'>
            <img src={baseUrl + cat._id} alt="cat" className='card__img' />
            <div className='card__icon'>
                <img src={Close} alt="close" onClick={() => removeCat(cat._id)} className="close" />
                <img  src={isAdded ? Like : Heart} alt="heart" onClick={onCLickHeart} className='heart' />
            </div >
        </div >
    )
}
