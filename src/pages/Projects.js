import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./../components/Navbar.js";
import Card from "../components/Card.js";
import projects from "../data/projects.js";
import Footer from "../components/Footer.js";
function createCard(project) {
    return <Card key = {project.id} title = {project.title} img={project.img} alt={project.alt} description={project.description} link={project.link} linkDescription={project.linkDescription}/>;
}

export default function Projects() {
    return(
        <div className="h-auto bg-primary-blue ">
            <Navbar/>
            <h1 className="text-center pt-10 text-4xl font-bold pt-[7%] text-a-sky">My Projects</h1>
            <div className="mt-6 container m-auto grid grid-cols-3 pl-[11%] pr-[11%]"> 
                
                {projects.map(createCard)}  
                <p className = "text-footer-text mt-5 mb-5 mr-auto ml-auto">and many more lesser projects...</p>
            </div>
            
            <Footer/>
        </div>
        
)}