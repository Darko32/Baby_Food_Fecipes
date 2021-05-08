import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {fatchAllRecipesRequestDinner} from '../../services/rest/CategoryRecipes';
import '../../assets/css/AllRecipes.css';

import {Card} from '../pages/HomePage/HomePage';

export default function AllRecipes() {
  const dispatch = useDispatch()
  const recipes = useSelector(state=>state.AllRecipesReducer.recipes)
	
  useEffect(()=>{
    dispatch(fatchAllRecipesRequestDinner())
  },[])

  return(
    [
        <div className="home_title">
          <div className="page_title_recipes"><h2>Dinner</h2></div>
          <div className="recipes_line"><hr/></div>
        </div>,
        <div className="fresh_new">
                {recipes && recipes.map(recipe => <Card key={recipe._id} data={recipe}/>)}
        </div>
      
    ]
  )
};

