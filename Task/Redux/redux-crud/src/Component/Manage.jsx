import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser, showuser } from '../Slice-Data/userSlice'
import { Link } from 'react-router-dom'

function Manage() {

    const users = useSelector((state) => state.users.user)

    console.log(users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showuser())
    }, [])

    return (
        <div>
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="overflow-x-auto rounded-lg shadow-md">
                    <table className="min-w-full divide-y divide-gray-200 bg-white">
                        <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider text-center">#ID</th>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider text-center">Name</th>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider text-center">Email</th>
                                <th className="px-6 py-3 text-sm font-semibold tracking-wider text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {
                                users && users.map((data, index) => {
                                    return (
                                        <tr key={index} className="hover:bg-gray-50 text-center">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{data.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{data.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{data.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                                <button className="px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded text-sm">View</button>
                                                <Link to={`/edit/${data.id}`} className='btn btn-success' style={{backgroundColor: "green", padding: "8px 15px", color: "white", fontSize: "15px", borderRadius: "5px", marginTop: "20px"}}>Edit</Link>
                                                <button className="px-3 py-2 text-white bg-red-500 hover:bg-red-600 rounded text-sm" onClick={() => dispatch(deleteuser(data.id))}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Manage
