import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="border-b-4 border-green-700 text-center fixed top-0 w-full bg-green-600 font-bold text-lg text-white">
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
                <ul>
                    <li className="inline-block pt-4 pb-4">
                        <Link to="/" className="pl-6 pr-8 text-white">Home</Link>
                    </li>
                    <li className="inline-block pt-4 pb-4">
                        <Link to="/about" className="pl-6 pr-8 text-white">About</Link>
                    </li>
                    <li className="inline-block pt-4 pb-4">
                        <Link to="/articles-list" className="pl-6 pr-8 text-white">Articles</Link>
                    </li>
                </ul>
            </h1>

        </nav>
    )
}

export default NavBar;