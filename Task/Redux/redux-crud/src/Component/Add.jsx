import NavBar from './NavBar'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createuser } from '../Slice-Data/userSlice'

function Add() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        // console.log(form)
    }

    const dispatch = useDispatch()

    const getsubmit = (e) => {
        e.preventDefault();
        dispatch(createuser(form))
        redirect("/")
        setform({
            id: "",
            name: "",
            email: "",
            password: ""
        })
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />

            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                <h1 className='text-center text-blue-800 text-3xl font-bold my-4'><u>Add New Users</u></h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">User Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={form.name} onChange={getchange} name='name'
                        />
                        <p className="text-sm text-gray-500 mt-1">Please provide us your good name.</p>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={form.email} onChange={getchange} name='email'
                        />
                        <p className="text-sm text-gray-500 mt-1">We'll never share your email with anyone else.</p>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={form.password} onChange={getchange} name='password'
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="check"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="check" className="ml-2 text-gray-700">Check me out</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
                        onClick={getsubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Add
