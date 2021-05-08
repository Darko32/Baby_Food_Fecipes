import React from 'react';
import Time from '../../../assets/babys/icon_time.svg';
import Plate from '../../../assets/babys/icon_plate.svg';
import Star from '../../../assets/babys/icon_star.svg';
import '../../../assets/css/CardPopup.css';


const CardPopup = ({ recipe, onClose }) => (
    <div className="card_popup">
        <div className="popup_content">
            <div className="popup_title">
                <span>{recipe.recipe_title}</span>
                <div className="icon_back"><button onClick={onClose}>&times;</button></div>
            </div>
            <div className="popup_container">
                <div className="popup_left column">
                    <div className="popup_img"><img src={`http://localhost:10002/api/v1/storage/${recipe.img}`} alt="recipe-photo" /></div>
                    <div className="category">
                        <div><h2>Best Served For</h2></div>
                        <div className="icon_category"><h2>{recipe.category}</h2></div>

                    </div>
                    <p>{recipe.short_description}</p>
                    <div className="comments">
                        <div className="comments_left">
                            <div><img src={Time} alt="time" /></div>
                            <div><span>{recipe.prep_time}</span></div>
                            <div><span>min</span></div>
                        </div>
                        <div className="comments_left">
                            <div><img src={Plate} alt="plate"/></div>
                            <div><span>{recipe.prep_time}</span></div>
                            <div><span>persons</span></div>
                        </div>
                        <div className="comments_left">
                            <div><img src={Star} alt="star"/></div>
                            <div> <span>{recipe.likes}</span></div>
                        </div>

                    </div>
                </div>
                <div className="popup_right column">
                    <h2>RecipeDetails</h2>
                    <p>{recipe.recipe}</p>
                </div>
            </div>
        </div>
    </div>
)

export default CardPopup

