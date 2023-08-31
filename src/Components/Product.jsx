/* eslint-disable react/prop-types */
import React from 'react'
import { Cart } from '../Context/context'
import { useContext } from 'react'
export const Product = ({ item }) => {
  const { state, dispatch } = useContext(Cart)
 
  return (
    
      <div className='card product-card'>
        <img src={item.images[0]} className='card-img-top card-img' alt='...' />
        <div className='card-body'>
          <div className='d-flex justify-content-sm-between'>
          <h5 className='card-title'>{item.title}</h5>
          <h5>₹ {item.price}</h5>
          </div>
          
          {state.cart.some(x =>x.id==item.id)?(<button
            href='#'
            onClick={() => dispatch({ type: 'REMOVE_CART', payload: item.id })}
            className='btn btn-danger'
          >
            Remove From Cart
          </button>):(<button
            href='#'
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
            className='btn btn-primary'
          >
            Add To Cart
          </button>)}
        </div>
      </div>
    
  )
}
