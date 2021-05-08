import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../../services/redux/ducks/auth';
import '../../../assets/css/CreateAccount.css';

export const CreateAccount = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [registrationData, setRegistrationData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
        password: "",
        repeatPassword: ""
    })

    const { firstName, lastName, email, birthday, password, repeatPassword } = registrationData;

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === repeatPassword) {
            register(firstName, lastName, email, birthday, password, repeatPassword)(dispatch)
            props.history.push("/login")
        } else {
            alert('Password and Repeat Password do not match!')
        }


    }
    return (

        [<div className="page_title">
            <div className="page_title_left"><h2>Create Account</h2></div>
            <div className="profile_line"><hr /></div>
        </div>,
        <div className="profile">
            <div className="account_left">
            <span className="title_contenet"><span className="title_span">Create your</span> account</span>
                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
            </div>

            {/* <div className="account_right"> */}
                
            <form className="account_right" onSubmit={handleSubmit}>


                    <div className="form">
                        <label>
                            <span>First Name</span>
                        <input
                            type="text"
                            id='firstName'
                            value={firstName}
                            onChange={(e) => setRegistrationData({ ...registrationData, firstName: e.target.value })}>
                        </input>
                        </label>

                        <label>
                            <span>Email</span>
                        <input
                            type="email"
                            id='email'
                            value={email}
                            onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}>
                        </input>
                        </label>

                        <label>
                            <span>Password</span>
                        <input
                            type="password"
                            id='password'
                            value={password}
                            onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })}>
                        </input>
                        </label>
                        <button className="btn-green" type="submit">Create Account</button>
                    </div>

                    <div className="form">

                        <label>
                            <span>Last Name</span>
                        <input
                            type="text"
                            id='lastName'
                            value={lastName}
                            onChange={(e) => setRegistrationData({ ...registrationData, lastName: e.target.value })}>
                        </input>
                        </label>


                        <label>
                            <span>Birthday</span>
                        <input
                            type="date"
                            id='birthday'
                            placeholder='22-12-1999'
                            value={birthday}
                            onChange={(e) => setRegistrationData({ ...registrationData, birthday: e.target.value })}>
                        </input>
                        </label>

                        <label>
                            <span>Repeat Password</span>
                        <input
                            type="password"
                            id='repeatPassword'
                            value={repeatPassword}
                            onChange={(e) => setRegistrationData({ ...registrationData, repeatPassword: e.target.value })}>
                        </input>
                        </label>
                    </div>
            </form>
            {/* </div> */}
        </div>

        ]

    )
};

export default CreateAccount;