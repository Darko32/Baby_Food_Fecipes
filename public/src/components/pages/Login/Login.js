import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logIn } from '../../../services/redux/ducks/auth';
import '../../../assets/css/LogIn.css';

export const Login = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',

    });

    const handleLogin = (e) => {
        e.preventDefault()
        logIn(email, password)(dispatch);
    }

    const { email, password } = loginData;

    return (

        [
            <div className="page_title">
                <div className="page_title_login"><h2>Log In</h2></div>
                <div className="login_line"><hr /></div>
            </div>,
            <div className="login_content">
                <div className="login_left">
                    <div>
                        <span className="title_contenet"><span className="title_span">Welcome to</span> Baby's</span>
                    </div>
                    <div>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                </div>
                <div className='login_right'>


                    <form className='inner-column' onSubmit={handleLogin}>

                        <label><span>Email</span>
                        <input
                            type="email"
                            id='email'
                            className='form-control-login'
                            placeholder='user@domain.com'
                            value={email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}>
                        </input>
                        </label>

                        <label className='label'><span>Password</span>
                        <input
                            type="password"
                            id='password'
                            className='form-control-login'
                            
                            value={password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}>
                        </input>
                        </label>
                        <button className="button btn-green" type="submit">Log In</button>
                    </form>
                </div>
            </div>
        ]
    )
}

export default Login;