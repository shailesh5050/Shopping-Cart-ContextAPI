/* eslint-disable react/prop-types */
import { createContext,useReducer } from 'react'
import { cartReducer } from './cartReducer'
import { filterReducer } from './filterReducer'
import getProducts from '../data'
export const Cart = createContext()
export const Context = ({children}) => {
    const products = getProducts();
    const [state,dispatch] = useReducer(cartReducer,{products,cart:[]})
    const [filterState,filterDispatch] = useReducer(filterReducer,{checkFilters:[],radioFilter:''})
  return (
    <Cart.Provider value={{state,dispatch,filterState,filterDispatch}}>
        {children}
    </Cart.Provider>
  )
}

