import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

import { IoSadOutline   } from "react-icons/io5";

import "../output.css"

export default function Navbar() {
    return(
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to="/" ><a className="btn btn-ghost text-xl">Home</a></Link>
        </div>
        <div className="flex-1">
            <Link to="/test" ><a className="btn btn-ghost text-xl">Test</a></Link>
        </div>
        <div className="flex-none">
            <button className="btn btn-square btn-ghost">
                <IoSadOutline />

            </button>
        </div>
        </div>

    )


}