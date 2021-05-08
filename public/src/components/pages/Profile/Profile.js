import React, { useState, useEffect } from 'react';
import avatar from '../../../assets/img/avatar.png';
import '../../../assets/css/MyProfile.css';
import { getUser, getToken, setUserStorage } from '../../../services/helpers/StorageFunctions';


export const Profile = () => {
    const [user, setUser] = useState(getUser());
    const [token, setToken] = useState('');

    useEffect(() => {
        setUser(getUser());
        setToken(getToken());
    }, [''])


    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);

    const convertBinaryImage = (e) => {
        if (!e.target.files[0]) return;
        setUpdateData({ ...updateData, img: null })
        const file = e.target.files[0]
        setFile(file);
        console.log(file)
        let reader = new FileReader()
        reader.readAsDataURL(file)

        let bin = null

        reader.onload = function () {
            bin = reader.result
            setImage(bin)

        }

        reader.onerror = function () {
            bin = null
        }
    }

    const uploadImage = (img, token) => {

        return fetch(`/api/v1/storage`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: img
        }).then(res => {
            return res.json();
        }).catch(err => {
            console.log(err);
        })
    }


    const uploadFile = async () => {
        if (!file) {
            updateUser(updateData);
            return;
        }

        let formData = new FormData();
        formData.append('document', file);
        console.log(file, token)
        await uploadImage(formData, token)
            .then(res => {
                updateUser({ ...updateData, img: res.filename });
            })
            .catch(err => {
                console.log(err);
            });
    }

    const [updateData, setUpdateData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        birthday: new Date(user.birthday).toLocaleDateString(),
        password: user.password,
        password2: "",
        _id: user._id,
        img: user.img
    })


    const updateUser = async (updateData) => {
        console.log(updateData.img)
        fetch(`http://localhost:10003/api/v1/users/current-user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updateData)
        })
            .then(r => r).then((result) => {
                if (result) {
                    setUser(updateData);
                    setUpdateData(updateData)
                    localStorage.setItem("user", JSON.stringify(updateData));
                }
            })
    }

    const handleUpdateUser = async (e) => {
        e.preventDefault()
        await uploadFile()
    }



    return (

        [<div className="page_title">
            <div className="page_title_profile"><h2>My Profile</h2></div>
            <div className="profile_line"><hr /></div>
        </div>,
        <form className="profile" onSubmit={handleUpdateUser}>
            <div className="profile_picture">
                <div className="picture">
                    <img src={updateData.img ? `http://localhost:10002/api/v1/storage/${updateData.img}` : image || avatar} className='image-avatar' />
                </div>
                <div>
                    <input type='file' className='avatar-btn' onChange={(e) => convertBinaryImage(e)}></input>
                </div>
            </div>
            <div className="form">

                <label>
                    <span>First Name</span>
                <input
                    type="text"
                    id='firstName'
                    value={updateData.first_name}
                    onChange={(e) => setUpdateData({ ...updateData, first_name: e.target.value })}>
                </input>
                </label>
                <label>
                    <span>Email</span>
                <input
                    type="email"
                    id='email'
                    value={updateData.email}
                    onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}>
                </input>
                </label>
                <label>
                    <span>Password</span>
                <input
                    type="password"
                    id='password'
                    value={updateData.password}
                    onChange={(e) => setUpdateData({ ...updateData, password: e.target.value })}>
                </input>
                </label>
                    <input type="submit" value="Save" className="btn-save" />
            </div>
            <div className="form">
                <label>
                    <span>Last Name</span>
                <input
                    type="text"
                    id='lastName'
                    value={updateData.last_name}
                    onChange={(e) => setUpdateData({ ...updateData, last_name: e.target.value })}>
                </input>
                </label>
                <label>
                    <span>Birthday</span>
                <input
                    type="date"
                    id='birthday'
                    value={updateData.birthday}
                    onChange={(e) => setUpdateData({ ...updateData, birthday: e.target.value })}>
                </input>
                </label>
                <label>
                    <span>Repeat Password</span>
                <input
                    type="password"
                    id='repeatPassword'
                    value={updateData.password}
                    onChange={(e) => setUpdateData({ ...updateData, password2: e.target.value })}>
                </input>
                </label>
            </div>
        </form>
        ]

    );
};

export default Profile;