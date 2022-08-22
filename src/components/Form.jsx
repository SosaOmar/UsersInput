import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ getUserApi, updateInfo, setupdateInfo,closeForm}) => {
    const { register, handleSubmit, reset } = useForm()

    const defaultform = {
        first_name: "",
        last_name: "",
        password:"",
        email: "",
        birthday: "",
    }

    const createUser = data => {
        const URL = `https://users-crud1.herokuapp.com/users/`
        axios.post(URL, data)
            .then(res => {
                getUserApi()
            }
            )
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }

    }, [updateInfo])

    const updateUser = data =>{
        const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
        axios.patch(URL, data)
        .then(res =>{
            getUserApi()
        })
        .catch(err => console.log(err))
    }


    const submit = data => {
        if (updateInfo) {
            updateUser(data)
            setupdateInfo()
        }else{
            createUser(data);
        }
        reset(defaultform)
        closeForm()
    }

    return (
        <form onSubmit={handleSubmit(submit)} action="" className='form'>
            <h2>{updateInfo ? "Update User" : "Create a new user"}</h2>
            <i onClick={closeForm} className="fi fi-rr-cross"></i>
            <label htmlFor="first_name">First Name</label>
            <input  {...register("first_name")} type="text" id='first_name' />
            <br />
            <label htmlFor="last_name">Last Name</label>
            <input  {...register("last_name")} type="text" id='last_name' />
            <br />
            <label htmlFor="email">Email</label>
            <input  {...register("email")} type="text" id='email' />
            <br />
            <label htmlFor="password">Password</label>
            <input  {...register("password")} type="password" id='password' />
            <br />
            <label htmlFor="birthday">Birthday</label>
            <input  {...register("birthday")} type="date" id='birthday' />
            <br />
            <button className='form__button'>{updateInfo ? "Update" : "Create"}</button>
        </form>
    )
}

export default Form