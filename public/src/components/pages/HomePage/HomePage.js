import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fatchAllRecipesRequest} from '../../../services/rest/recipes';
import '../../../assets/css/AllRecipes.css';
import Time from '../../../assets/babys/icon_time.svg';
import Plate from '../../../assets/babys/icon_plate.svg';
import Star from '../../../assets/babys/icon_star.svg';
import Arrows from '../../../assets/babys/icon_arrows_white.svg';
import CardNew from './CardNew';
import CardPopup from './CardPopup';

export const Card = ({data}) => {
	const [count, setCount] = useState(data.likes);
	const [showPopup, setShowPopup] = useState(false);
	
	const increment = () => {
		if (data.likes == count) {
			setCount(count + 1);

			let res = fetch(
				`/api/v1/recipes/${data._id}/like`,
				{
					method: 'put',
					body: JSON.stringify(),
					headers: {
						'content-type': 'application/json',
						'Authorization': `Bearer ${localStorage.getItem('jwt')}`
					}
				}
			);
		}
	};

	return (
		<React.Fragment>
			<div className="single_item">
				<div className="single_item_top" >
				    <p className="card-cat"> {data.category} </p>
					<img src={`http://localhost:10002/api/v1/storage/${data.img}`} alt="recipe-photo"/>
				</div>
				<div className="single_item_bottom">
					<div className="title_description">
						<span>{data.recipe_title}</span>
						<p>{data.short_description} </p>
					</div>
					<div className="comments">
						<div className="comments_left">
							<div><img src={Time} alt="time"/></div>
							<div><span>{data.prep_time}</span></div>
							<div><span>min</span></div>
						</div>
						<div className="comments_left">
							<div><img src={Plate} alt="plate"/></div>
							<div><span>{data.no_people}</span></div>
							<div><span>persons</span></div>
						</div>
						<div className="comments_left">
							<div><img src={Star} alt="star" onClick={increment} /></div>
							<div> <span>{count}</span></div>
						</div>
						<div className="comments_right">
							<div className="arrows_white"><img src={Arrows} alt="arrows" onClick={()=>setShowPopup(true)}/></div>
						</div>
					</div>
				</div>
			</div>
			{showPopup && (
				<CardPopup recipe={data} onClose={()=>setShowPopup(false)} />
			)}
		</React.Fragment>
	)
};


export const HomePage = (props) => {
    
    const dispatch = useDispatch()
	const recipes = useSelector(state => state.AllRecipesReducer.recipes)

	// const [count, setCount] = useState();
	// const increment = () => {
	// 	setCount(count + 1);
	// };

	useEffect(() => {
		dispatch(fatchAllRecipesRequest())

	}, [])

	return (
		<React.Fragment>
			<div className="home_title">
				<div className="page_title_recipes"><h2>Fresh & New</h2></div>
				<div className="recipes_line"><hr /></div>
			</div>
			<CardNew/>
			<div className="home_title">
				<div className="page_title_recipes"><h2>Most Popular Recipes</h2></div>
				<div className="recipes_line2"><hr /></div>
			</div>
			<div className="fresh_new">
				{recipes && recipes.map(recipe => <Card key={recipe._id} data={recipe} />)}
			</div>
		</React.Fragment>
	)


}