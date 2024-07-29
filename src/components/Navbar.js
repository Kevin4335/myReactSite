import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

import { IoSadOutline   } from "react-icons/io5";


export default function Navbar() {
    return(
        <div className="navbar bg-a-nav z-50 w-4/5 shadow-xl rounded-b-3xl fixed border-solid border-2 border-footer ml-[10%] pl-[13%] bg-gradient-to-br from-second-blue to-footer">

            
            <div className="flex-1">
                <Link to="/" ><a className="btn btn-ghost text-xl text-a-sky">📕About</a></Link>
            </div>
            <div className="flex-1">
                <Link to="/Projects" ><a className="btn btn-ghost text-xl text-a-sky">💾Projects</a></Link>
            </div>
            <div className="flex-1">
                <Link to="/Contact" ><a className="btn btn-ghost text-xl text-a-sky">📄Info</a></Link>
            </div>
        </div>

    )


}