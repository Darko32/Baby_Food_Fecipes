const initialState = {
    recipes: undefined,
    error: undefined
    
}



const NewReducer = (state = initialState, action) => {

    switch(action.type){

        case "FATCH_RECIPES_SUCCESSNew":
            return {
                ...state,
                recipes: action.payload 
                
            }

        case "FATCH_RECIPES_FAILNew":
            return {
                ...state,
                error: action.payload
            }

        default: return state
    }
}

export default  NewReducer;