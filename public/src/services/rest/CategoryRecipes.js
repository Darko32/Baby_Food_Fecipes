import axios from 'axios';

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

export const fatchAllRecipesRequestBreakfast = () => {
    
    return dispatch => {
        
        axios({
            url: '/api/v1/recipes/breakfast',
            method:'GET',
               headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                        
                    }
        })
        .then(res => {dispatch(fatchRecipesSuccess(res.data))})
        .catch(err => {dispatch(fatchRecipesFail(err))})
    }
};

export const fatchAllRecipesRequestBrunch = () => {
    
    return dispatch => {
        
        axios({
            url: '/api/v1/recipes/brunch',
            method:'GET',
               headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                        
                    }
        })
        .then(res => {dispatch(fatchRecipesSuccess(res.data))})
        .catch(err => {dispatch(fatchRecipesFail(err))})
    }
};

export const fatchAllRecipesRequestLunch = () => {
    
    return dispatch => {
        
        axios({
            url: '/api/v1/recipes/lunch',
            method:'GET',
               headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                        
                    }
        })
        .then(res => {dispatch(fatchRecipesSuccess(res.data))})
        .catch(err => {dispatch(fatchRecipesFail(err))})
    }
};

export const fatchAllRecipesRequestDinner = () => {
    
    return dispatch => {
        
        axios({
            url: '/api/v1/recipes/dinner',
            method:'GET',
               headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                        
                    }
        })
        .then(res => {dispatch(fatchRecipesSuccess(res.data))})
        .catch(err => {dispatch(fatchRecipesFail(err))})
    }
};
