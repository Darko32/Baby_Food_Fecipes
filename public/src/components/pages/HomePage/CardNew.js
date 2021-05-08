import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {fatchRecipesRequestNew} from '../../../services/rest/recipes';
import {Card} from './HomePage';

export default function CardNew() {
	const dispatch = useDispatch()
  const recipes = useSelector(state=>state.NewReducer.recipes)
	
  useEffect(()=>{
    dispatch(fatchRecipesRequestNew())
  },[])

  return(
	<div className="fresh_new">
	{recipes && recipes.map(recipe => <Card key={recipe._id} data={recipe}/>)}
    </div>
  )
}