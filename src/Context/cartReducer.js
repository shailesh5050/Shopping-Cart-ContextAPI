/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
export function cartReducer(state,action){
    switch(action.type){
        case "ADD_TO_CART" :
            return {...state,cart:[...state.cart,action.payload]}
        case "REMOVE_CART" :
            console.log(action.payload)
            return {...state,cart:[...state.cart.filter(x=>x.id!=action.payload)]}
        default : return state        
    }
}