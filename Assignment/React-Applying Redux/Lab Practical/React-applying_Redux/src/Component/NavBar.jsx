import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="#" className="text-2xl font-bold tracking-wide">Redux-Crud</a>
                        </div>
                        <div className="flex items-center md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-500 focus:outline-none"
                                onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-6 items-center">
                            <NavLink to="/" className="block hover:bg-indigo-500 rounded py-2">Manage</NavLink>
                            <NavLink to="Add" className="block hover:bg-indigo-500 rounded py-2">Add</NavLink>


                            <form className="flex items-center">
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className="px-3 py-1 rounded-l-md text-black bg-yellow-50 focus:outline-none"
                                />
                                <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-r-md font-semibold">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" className="block hover:bg-indigo-500 rounded px-3 py-2">Manage</NavLink>
                        <NavLink to="Add" className="block hover:bg-indigo-500 rounded px-3 py-2">Add</NavLink>


                        <form className="flex mt-3 px-3">
                            <input
                                type="search"
                                placeholder="Search"
                                className="px-3 py-1 rounded-l-md text-black bg-yellow-50 focus:outline-none"
                            />
                            <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-r-md font-semibold">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
