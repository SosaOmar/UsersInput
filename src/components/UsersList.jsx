import axios from 'axios'
import React from 'react'

const UsersList = ({ user, getUserApi,setupdateInfo, openForm }) => {

    const deleteUser = () =>{
        const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
        axios.delete(URL)
        .then(res =>{
            getUserApi()
        })
        .catch()
    }

    const updateClick = () =>{
        setupdateInfo(user)
        openForm()
    }
    //Porfe ¿Usted lee los codigos?

    return (
        <div className='usersList'>
            <p className='usersList_name'>{`${user.first_name} ${user.last_name}`}</p>
            <p className='usersList__information'>Email</p>
            <p>{user.email}</p>
            <p className='usersList__information'>Birth</p>
            <p><i className="fi fi-rr-calendar"></i> {user.birthday}</p>
            <button className='deleteUser' onClick={deleteUser}><i className="fi fi-rr-trash"></i></button>
            <button className='updateClick' onClick={updateClick}><i className="fi fi-rr-pencil"></i></button>
        </div>
    )
}

export default UsersList