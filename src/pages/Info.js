import React from "react";
import ReactDOM from "react-dom";
import Footer from "../components/Footer.js";

import Navbar from "../components/Navbar.js";
import { BiCopy } from "react-icons/bi";
import { BiDownload } from "react-icons/bi";
import Banff from "../data/img2.jpg"


const links = document.querySelectorAll('a[download]');
links.forEach(link => {
  const url = new URL(link.href);
  url.protocol = 'https';
  url.host = 'localhost';
  link.href = url.href;
});

function copyMainEmail(){
    navigator.clipboard.writeText( "kvchang21@gmail.com" );
    document.getElementById("mainEmail").style.fill = "green"
    document.getElementById("schoolEmail").style.fill = "white"
    document.getElementById("phoneNumber").style.fill = "white"
    document.getElementById("linkedin").style.fill = "white"
}
function copySchoolEmail(){
    navigator.clipboard.writeText( "kvchang@umich.edu" );
    document.getElementById("mainEmail").style.fill = "white"
    document.getElementById("schoolEmail").style.fill = "green"
    document.getElementById("phoneNumber").style.fill = "white"
    document.getElementById("linkedin").style.fill = "white"
}
function copyPhoneNumber(){
    navigator.clipboard.writeText( "248-635-9366" );
    document.getElementById("mainEmail").style.fill = "white"
    document.getElementById("schoolEmail").style.fill = "white"
    document.getElementById("phoneNumber").style.fill = "green"
    document.getElementById("linkedin").style.fill = "white"
}

function copyLinkedin(){
    navigator.clipboard.writeText( "https://www.linkedin.com/in/kevin-chang-1961a8250/" );
    document.getElementById("mainEmail").style.fill = "white"
    document.getElementById("schoolEmail").style.fill = "white"
    document.getElementById("phoneNumber").style.fill = "white"
    document.getElementById("linkedin").style.fill = "green"
}


export default function Contact() {
    return(
        <div className="h-auto bg-primary-blue ">
            <Navbar/>
            <h1 className="text-center pt-10 text-4xl font-bold pt-[7%] text-a-sky">More Information</h1>
            <div className="mt-[3%] text-a-sky">
                <main className="container m-auto grid grid-cols-3 pl-[14%] pr-[14%] text-lg text-justify">
                    <p className=" col-span-2 m-[3%] p-[3%] rounded-3xl border-solid border-4 border-footer bg-gradient-to-r from-a-nav to-primary-blue">
                        <h2 className="text-2xl font-bold">Contact Info</h2>
                        <hr className="mb-[5%]"></hr>
                        <p className="text-lg ml-[2%] mr-[2%] mt-[8%] mb-[6%]">Main Email: <span className="text-a-cream">kvchang21@gmail.com </span> <button onClick={copyMainEmail}class="btn float-right bg-primary-blue border-none hover:bg-footer-text"><BiCopy id="mainEmail" className="fill-white" /></button></p>
                        <p className="text-lg ml-[2%] mr-[2%] mt-[4%] mb-[6%]">School Email: <span className="text-a-cream">kvchang@umich.edu </span><button  onClick={copySchoolEmail}class="btn float-right bg-primary-blue border-none hover:bg-footer-text"><BiCopy id="schoolEmail" className="fill-white"/></button></p>
                        <p className="text-lg ml-[2%] mr-[2%] mt-[4%] mb-[6%]">Phone: <span className="text-a-cream">248-635-9366 </span ><button onClick={copyPhoneNumber}class="btn float-right bg-primary-blue border-none hover:bg-footer-text"><BiCopy  id="phoneNumber" className="fill-white" /></button></p>
                        <p className="text-lg ml-[2%] mr-[2%] mt-[4%]">LinkedIn: <span className="text-a-cream"><a className = "underline"href = "https://www.linkedin.com/in/kevin-chang-1961a8250/" target="_blank" rel="noopener noreferrer">Link</a></span ><button onClick={copyLinkedin}class="btn float-right bg-primary-blue border-none hover:bg-footer-text"><BiCopy  id="linkedin" className="fill-white" /></button></p>
                    </p>
                    <p className="m-[6%] p-[6%]  rounded-3xl border-solid border-4 border-footer bg-gradient-to-br from-a-nav to-primary-blue">
                        <img className= "rounded-3xl" alt = "Banff National Park" src={Banff} />
                    </p>
                    <p className=" col-span-2 m-[3%] pt-[3%] pl-[3%] pr-[3%] pb-[8%] rounded-3xl border-solid border-4 border-footer bg-gradient-to-r from-a-nav to-primary-blue">
                        <h2 className="text-2xl font-bold">Resume</h2>
                        <hr className="mb-[11%]"></hr>

                        <object className = "rounded-3xl border-solid border-2 ml-[3%] " 
                                data="https://drive.google.com/file/d/1BENqJTaIyYPIdSLcLnGGfpFmjiDv0YSJ/preview"
                                width="94%"
                                height="700">
                        </object>
                    </p>
                </main>
            </div>
            <Footer/>
        </div>
    
)}