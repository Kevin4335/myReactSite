import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";



export default function Card(props) {
    
    return(
        <div className="card card-compact bg-base-100 w-80 shadow-xl bg-second-blue mt-5 mb-5 mr-auto ml-auto border-solid border-4 border-footer bg-gradient-to-b from-second-blue to-footer">
            <figure className="h-[50%]">
                <img className="w-3/5 pointer-events-none select-none "
                src={props.img}
                alt={props.alt}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                
                {props.link == "none"? <p ><div className="italic text-footer-text float-right">{props.linkDescription}</div></p>: <a href= {props.link} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary"><FaGithub/>{props.linkDescription}</button></a>}
                </div>
            </div>
        </div>

    )
}