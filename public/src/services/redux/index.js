import { combineReducers,createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {recipesReducer} from './ducks/recipes';
import AllRecipesReducer from './ducks/AllRecipesReducer';
import NewReducer from './ducks/NewReducer';

import reducer from './ducks/auth'

let reducers = combineReducers({
    recipes: recipesReducer,
    auth: reducer,
    AllRecipesReducer,
    NewReducer,
    
});

let middlewares = applyMiddleware(
    thunk
);

export const store = createStore(reducers,middlewares);