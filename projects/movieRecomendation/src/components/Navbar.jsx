import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from "react-router";

function Navbar() {
    return (
        <nav className="navbar flex justify-between p-4 bg-black">

            <div className="navl text-[#736FCE]">
                <h5>Movie App</h5>
            </div>

            <div className="navr flex justify-between w-40 text-[#736FCE]">
                <h5>Home</h5>
                <NavLink
                    to="/favourites"

                >
                    <h5>Favourites</h5>
                </NavLink>

            </div>


        </nav>
    )
}

export default Navbar