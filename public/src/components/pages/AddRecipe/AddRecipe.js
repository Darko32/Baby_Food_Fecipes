import React, { useState, useEffect } from 'react';
import ROUTES from '../../../constants/routes';
import { getToken } from '../../../services/helpers/StorageFunctions';
import { Link } from 'react-router-dom';
import Back from '../../../assets/babys/icon_back_white.svg';
import '../../../assets/css/CreateRecipe.css';
import image_burger from '../../../assets/img/fast-food.png';

export const ProbaAddRecipe = (props) => {

    const token = getToken();

    const [updateRecipeData, setUpdateRecipeData] = useState({
        id: "",
        recipe_title: "",
        category: "",
        prep_time: "",
        no_people: "",
        short_description: "",
        recipe: "",
        img: ""
    })
    useEffect(() => {
        fetchRecipeForUpdate()
    }, [])


    const fetchRecipeForUpdate = () => {
        fetch(`http://localhost:10004/api/v1/recipes`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            }).then(res =>
                res.json())
            .then(data => {
                setUpdateRecipeData(data)
            }).catch(err => {
                console.log(err)
            })

    }

    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const convertBinaryImage = (e) => {
        if (!e.target.files[0]) return;
        setUpdateRecipeData({ ...updateRecipeData, img: '' })

        setFile(e.target.files[0])
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])

        let bin = null

        reader.onload = function () {
            bin = reader.result
            setImage(bin);
        }
        reader.onerror = function () {
            bin = null
        }
    }



    const uploadImage = (img, token) => {
        return fetch(`http://localhost:10002/api/v1/storage`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: img
        })
            .then(res => {
                return res.json()
            })
    }


    const uploadFile = async () => {
        if (!file) {
            updateRecipe(updateRecipeData)
            return;
        }
        let formData = new FormData();
        formData.append('document', file);

        await uploadImage(formData, token)
            .then(res => {
                updateRecipe({ ...updateRecipeData, img: res.filename });
            })
            .catch(err => {
                console.log(err);
            });
    }


    const updateRecipe = async (updateRecipeData) => {
        fetch(`http://localhost:10004/api/v1/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updateRecipeData)
        }).then(res => {
            if (res) {
                setUpdateRecipeData(updateRecipeData)

            }

        }).catch(err => {
            console.log(err);
        })
    }
    console.log(updateRecipeData)

    const handleUpdateRecipe = (e) => {
        e.preventDefault()
        uploadFile().then(
            props.history.push('/my_recipes'));
        window.location.reload();
    }


    return (
        [<div className="recipe_title">
                <div className="my_recipe_title"><h2>Add Recipe</h2></div>
                <div className="myprofile-line"><hr></hr></div>
                <div className="button-circle"><Link to={ROUTES.MY_RECIPES}><button className="button_recipes"><img src={Back} alt="logo" /></button></Link></div>
            </div>,
            <form className="container_recipe" onSubmit={handleUpdateRecipe} >
                <div className="recipe_left">
                    <span>Recipe Image</span>
                    <div className="recipe_img"><img src={updateRecipeData.img ? `http://localhost:10002/api/v1/storage/${updateRecipeData.img}` : image || image_burger}></img></div>
                    <input type='file' className="btn-border" onChange={(e) => convertBinaryImage(e)}></input>
                </div>
                <div className="recipe_middle">
                    <div className="middle_1">
                        <label>
                            <span>Recipe Title</span>
                            <input type='text' value={updateRecipeData.recipe_title} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, recipe_title: e.target.value })} className='input-recipe-title'></input>
                        </label>
                    </div>
                    <div className='center-middle'>
                        <div className="category_1">
                            <label>
                                <span>Category</span>
                                <select placeholder='Category' value={updateRecipeData.category} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, category: e.target.value })}>

                                    <option value="breakfast">Breakfast</option>
                                    <option value="brunch">Brunch</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                </select>
                            </label>
                        </div>
                        <div className="category_2">
                            <label>
                                <span>Preparation Time</span>
                                <input type='number' value={updateRecipeData.prep_time} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, prep_time: e.target.value })} />
                            </label>
                        </div>
                        <div className="category_3">
                            <label>
                                <span>No. People</span>
                                <input type='number' value={updateRecipeData.no_people} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, no_people: e.target.value })} />
                            </label>
                        </div >
                    </div>
                    <div className="category_4">
                        <label>
                            <span>Short Description</span>
                            <textarea rows="6" cols="50" value={updateRecipeData.short_description} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, short_description: e.target.value })}></textarea>
                        </label>
                    </div>
                    <div><input type="submit" value="Save" className="btn-save" /></div>
                </div>
                <div className='right-recipe'>
                    <label className='label'><span>Recipe</span>
                        <textarea rows="6" cols="50" value={updateRecipeData.recipe} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, recipe: e.target.value })}>

                        </textarea>
                    </label>
                </div>

            </form>
        ]
    )
}

export default ProbaAddRecipe;