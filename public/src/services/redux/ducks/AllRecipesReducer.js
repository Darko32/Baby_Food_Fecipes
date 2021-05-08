const initState = {
    
    recipes: undefined,
    error: undefined
}

const AllRecipesReducer = (state = initState, action) => {

    switch(action.type){

        case "FATCH_RECIPES_SUCCESS":
            return {
                ...state,
                recipes: action.payload 
                // .slice(-3)
            }

        case "FATCH_RECIPES_FAIL":
            return {
                ...state,
                error: action.payload
            }

        default: return state
    }
};

export default AllRecipesReducer;