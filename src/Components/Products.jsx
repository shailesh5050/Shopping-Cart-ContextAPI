import React from 'react'
import { Product } from './Product'
import { Cart } from '../Context/context'
import { useContext,useEffect,useState } from 'react'

const Products = () => {
    const {state} = useContext(Cart)
    const [products,setProducts] =useState(state.products.products)
    const {filterState,filterDispatch } = useContext(Cart)
  useEffect(()=>{
    if(filterState.checkFilters.length==0){
      setProducts(state.products.products)
    }
   
    else if(filterState.checkFilters.length!=0 ){
      setProducts(state.products.products.filter(x=>filterState.checkFilters.some(y=>y==x.category)))
    }
    //radioFilter for ascending descending price
     if(filterState.radioFilter=='ascending'){
        setProducts(products.sort((a,b)=>a.price-b.price))
    }
    else if(filterState.radioFilter=='descending'){
        setProducts(products.sort((a,b)=>b.price-a.price))
    }

  },[filterState])
  return (
    <div >
        <div className="row">
            {products.map((item)=>{
                return (
                    <div key={item.id} className="col-3 mt-2">
                            <Product item={item} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Products