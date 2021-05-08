import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import NavBar from '../ui/NavBar/NavBar';
import ROUTES from '../../constants/routes';
import Login from '../pages/Login/Login';
import CreateAccount from '../pages/CreateAccount/CreateAccount';
import Profile from '../pages/Profile/Profile';
import MyRecipes from '../pages/MyRecipes/MyRecipes';
import UpdateRecipe from '../pages/UpdateRecipe/UpdateRecipe';
import AddRecipe from '../pages/AddRecipe/AddRecipe';
import Footer from '../ui/Footer/Footer';
import RecipesBreakfast from './RecipesBreakfast';
import RecipesBrunch from './RecipesBrunch';
import RecipesLunch from './RecipesLunch';
import RecipesDinner from './RecipesDinner';
// import PrivateRoute from '../ui/PrivateRoute';
import '../../assets/css/main.css';


const App = () => {

    return (
        <div >
            <div className="app">
                <NavBar />
                <Switch>
                    <Route exact path={ROUTES.ALL} component={HomePage} />
                    <Route path={ROUTES.LOGIN} component={Login} />
                    <Route path={ROUTES.CREATE_ACC} component={CreateAccount} />
                    <Route path={ROUTES.MY_PROFILE} component={Profile} />
                    <Route  path={ROUTES.MY_RECIPES} component={MyRecipes} />
                    <Route path={ROUTES.UPDATE_RECIPE} component={UpdateRecipe} />
                    <Route path={ROUTES.ADD_RECIPE} component={AddRecipe} />
                    <Route path="/breakfast" exact component={RecipesBreakfast} />
                    <Route path="/brunch" exact component={RecipesBrunch} />
                    <Route path="/lunch" exact component={RecipesLunch} />
                    <Route path="/dinner" exact component={RecipesDinner} />
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default App