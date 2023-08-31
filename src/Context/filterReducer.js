export function filterReducer(state,action){
    switch(action.type){
        case 'ADD_CHECK_FILTER':
            return {...state,checkFilters:[...state.checkFilters,action.payload]}
        case 'REMOVE_CHECK_FILTER':
                return {...state,checkFilters:state.checkFilters.filter(x=>x!=action.payload)}
        case 'ADD_RADIO_FILTER':
                    return {...state,radioFilter:action.payload}            
    }
}