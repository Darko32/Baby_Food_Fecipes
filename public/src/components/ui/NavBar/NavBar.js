import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ROUTES from '../../../constants/routes';
import { getToken, removeUserStorage } from '../../../services/helpers/StorageFunctions';
import { logOut } from '../../../services/redux/ducks/auth';
import '../../../assets/css/Navigation.css';
import Logo from '../../../assets/babys/logo_color.svg'

const NavBar = () => {
    const [count, setCount] = useState(0)
    const history = useHistory();
    const dispatch = useDispatch();
    const logingOut = () => {
        logOut()(dispatch)
        setCount(count => count + 1)

    };
    return (
        <header>
            <div className="column column-1">
                <Link to={ROUTES.ALL}><span className="logo"><img src={Logo} alt="logo" /></span></Link>
            </div>
            <div className="column column-2">
                <nav>
                    <Link to='/breakfast'><span>Breakfast</span></Link>
                    <Link to='/brunch'><span>Brunch</span></Link>
                    <Link to='/lunch'><span>Lunch</span></Link>
                    <Link to='/dinner'><span>Dinner</span></Link>
                </nav>
            </div>

            {!getToken() ?
                <div className="column column-3">
                    <Link className="button btn_border" to={ROUTES.LOGIN}>Log In</Link> <span>or</span>
                    <Link className="button btn-green" to={ROUTES.CREATE_ACC}>Create Acount</Link>
                </div> :
                <div className="my_profile">
                    <div className="nav_bar"><Link to={ROUTES.MY_RECIPES}><span>My Recipes</span></Link></div>
                    <div className="circle"></div>
                    <div className="nav_bar"><Link to={ROUTES.MY_PROFILE}><span>My Profile</span></Link></div>
                    <div className="circle"></div>
                    <div className="nav_bar"><Link to={ROUTES.LOGIN} ><span onClick={logingOut}>Log Out</span></Link></div>
                </div>}
        </header>
    )
}

export default NavBar