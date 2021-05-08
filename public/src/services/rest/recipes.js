import axios from 'axios';
import { LATEST_RECIPES, RECIPES_BY_CAT, MOST_POPULAR_RECIPES, GET_POP_UP_RECIPE } from './index';


export const getAllRecipes = () => {
    return fetch(
        `${LATEST_RECIPES}`,
        {
            method: "GET"
        }
    ).then(res => {
        return res.json()
    })
};


// export const getRecipesByCat = (cat) => {
//     console.log(cat);
//     return fetch(
//         `${RECIPES_BY_CAT}${cat}`,
//         {
//             method: "GET"
//         }
//     ).then(res => {
//         return res.json();
//     });
// };

export const fatchRecipesSuccess = (recipes) => {
    return {
        type: "FATCH_RECIPES_SUCCESS",
        payload: recipes
    }
};

export const fatchRecipesFail = (error) => {
    return {
        type: "FATCH_RECIPES_FAIL",
        payload: error
    }
};

export const fatchAllRecipesRequest = () => {
    
    return dispatch => {
        
        axios({
            url: '/api/v1/recipes/a',
            method:'GET',
               headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                        
                    }
        })
        .then(res => {dispatch(fatchRecipesSuccess(res.data))})
        .catch(err => {dispatch(fatchRecipesFail(err))})
    }
};

export const fatchRecipesSuccessNew = (recipes) => {
    return {
        type: "FATCH_RECIPES_SUCCESSNew",
        payload: recipes
    }
};

export const fatchRecipesFailNew = (error) => {
    return {
        type: "FATCH_RECIPES_FAILNew",
        payload: error
    }
};

export const fatchRecipesRequestNew = () => {
    
    return dispatch => {
        
        axios({
            url: '/api/v1/recipes/latest',
            method:'GET',
               headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                        
                    }
        })
        .then(res => {dispatch(fatchRecipesSuccessNew(res.data))})
        .catch(err => {dispatch(fatchRecipesFailNew(err))})
    }
};
