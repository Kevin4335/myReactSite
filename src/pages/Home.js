import React from "react";
import ReactDOM from "react-dom";

import { IoSadOutline   } from "react-icons/io5";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Home() {
return(
    <div className="h-auto bg-primary-blue  ">
        <Navbar/>
        
        <h1 className="text-center pt-10 text-4xl font-bold pt-[7%] text-a-sky">About Me</h1>
        <div className="mt-[3%] text-a-sky">
            <main className="container m-auto grid grid-cols-3 pl-[14%] pr-[14%] text-lg text-justify">
                <p className=" col-span-2 m-[3%] p-[3%] rounded-3xl border-solid border-4 border-footer bg-gradient-to-r from-a-nav to-primary-blue">
                    Hello and welcome to my website. I'm Kevin Chang, currently in my third year studying Computer Science at the University of Michigan, with a minor in User Experience Design. 
                    I'm proficient in a range of programming languages including C++, C, Python, JavaScript, HTML, CSS, and Verilog.
                    In addition to my studies, I'm deeply passionate about programming. It's not just a skill set for me; it's a genuine interest. I enjoy tackling complex problems and finding elegant solutions through code.
                    Outside of coding, I love going to the gym, hiking, and woodworking.
                </p>
                <p className="m-[6%] p-[6%] row-span-2 rounded-3xl border-solid border-4 border-footer bg-gradient-to-br from-a-nav to-primary-blue">
                    <img className= "rounded-3xl" src="https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </p>
                <p className="m-[6%] p-[6%] row-span-2 rounded-3xl border-solid border-4 border-footer bg-gradient-to-br from-a-nav to-primary-blue">
                    <img className= "rounded-3xl" src = "https://i.pinimg.com/736x/e2/7d/2c/e27d2ca0d8af85b751f91efb680fb56c.jpg"/>
                </p>
                <p className="m-[6%] p-[4%] rounded-3xl border-solid border-4 border-footer text-left bg-gradient-to-r from-a-nav to-primary-blue">
                    <b>Currently Taking Fall 2024:</b>
                    <ul className="pl-[2%] py-[4%] text-sm ">
                        <li><em className="text-a-cream">EECS 485</em>: Web Systems</li>
                        <li><em className="text-a-cream">EECS 376</em >: Foundations of Computer Sci.</li>
                        <li><em className="text-a-cream">EECS 201</em>: Computer Science Pragmatics</li>
                        <li><em className="text-a-cream">SI 110</em>: Intro to Info Studies</li>
                    </ul>
                </p>
                
                <p className="m-[6%] p-[4%] rounded-3xl border-solid border-4 border-footer text-left bg-gradient-to-r from-a-nav to-primary-blue">
                    <b>Already Taken:</b>
                    <ul className="pl-[2%] py-[4%] text-sm ">
                        <li><em className="text-a-cream">EECS 281</em>: Data Structures and Algorithms</li>
                        <li><em className="text-a-cream">EECS 388</em >: Intro to Computer Security</li>
                        <li><em className="text-a-cream">EECS 370</em>: Intro to Computer Organization</li>
                        <li><em className="text-a-cream">SI 339</em>: Web Design, Dev., and Accesibility</li>
                        <li><em className="text-a-cream">SI 206</em>: Data Oriented Programming</li>
                        <li><em className="text-a-cream">TCHNCLCM 300</em>: Technical Communication</li>
                    </ul>
                </p>
                <p className="m-[6%] p-[4%] rounded-3xl border-solid border-4 border-footer text-justify bg-gradient-to-r from-a-nav to-primary-blue">
                    <b>Current Work:</b>
                    <ul className="pl-[2%] pt-[12%]  text-sm ">
                        <li className = "pb-[8%]" >I am currently interning at Up Cancer as a Software Development Intern. I work with React and TailwindCSS on frontend.</li>
                        <img className="w-[24%] ml-[38%] mr-[38%] pointer-events-none select-none" src="https://www.upcancer.org/x/cdn/?https://storage.googleapis.com/wzukusers/user-28366453/images/5cacd50adc3c37Zurfki/Up-Cancer-new-logo_d200.png"/>
                    </ul>
                </p>
                
            </main>

        </div>
        <Footer/>
    </div>

)}