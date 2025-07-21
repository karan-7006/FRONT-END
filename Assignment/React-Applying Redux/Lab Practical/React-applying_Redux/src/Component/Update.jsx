import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from '../Slice-Data/userSlice'

function Update() {

    const redirect = useNavigate()
    const { id } = useParams()
    const [updatedata, setupdatadata] = useState([])

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.users)

    useEffect(() => {
        const singleuser = user.filter((data) => data.id === id)
        setupdatadata(singleuser[0])
    }, [])

    const getchange = (e) => {
        setupdatadata({
            ...updatedata,
            [e.target.name]: e.target.value
        })
    }

    const getupdate = (e) => {
        e.preventDefault()
        dispatch(updateuser(updatedata))
        redirect("/")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Update Form</h1>
                <form onSubmit={getupdate} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={updatedata && updatedata.name}
                            onChange={getchange}
                            placeholder="Your name"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={updatedata && updatedata.email}
                            onChange={getchange}
                            placeholder="name@example.com"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={updatedata && updatedata.password}
                            onChange={getchange}
                            placeholder="Your password"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update
