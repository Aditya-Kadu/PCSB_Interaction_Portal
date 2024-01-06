import React from "react";
import { useState, useEffect } from "react";
import logo from "../images/image.jpeg";

import {
    FaFacebookSquare,
    FaGithubSquare,
    FaDribbbleSquare,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

import { GrMail } from "react-icons/gr";
const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <div className="max-w-full mx-auto py-16 md:px-40 px-6 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#01a9e2]">📍 Address</h1>
                <p className="py-4">
                    Survey No. 27, Near Trimurti Chowk, Bharati Vidyapeeth Campus,
                    Dhankawadi, Pune, Maharashtra, 411043

                </p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <a href="https://www.facebook.com/csipict/" target="_blank">
                        {" "}
                        <FaFacebookSquare
                            size={30}
                            className=" hover:scale-110 hover:text-amber-500"
                        />
                    </a>

                    <a href="https://www.instagram.com/csipict/" target="_blank">
                        {" "}
                        <FaInstagram
                            size={30}
                            className=" hover:scale-110 hover:text-amber-500"
                        />
                    </a>

                    <a href="https://www.linkedin.com/company/pict-csi" target="_blank">
                        <FaLinkedin
                            size={30}
                            className=" hover:scale-110 hover:text-amber-500"
                        />
                    </a>

                    <a href="mailto:pcsb@pict.edu" target="_blank">
                        <GrMail
                            size={30}
                            className=" hover:scale-110 hover:text-amber-500"
                        />
                    </a>
                    <a href="github.com" target="_blank">
                        <FaGithubSquare
                            size={30}
                            className=" hover:scale-110 hover:text-amber-500"
                        />
                    </a>
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                    <ul>
                        <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
                            <a href="/"> Home</a>
                        </li>
                        <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
                            <a href="/about"> About</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <center>
                        <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
                            <a href="../components/Domain.js">Domains</a>
                        </li>
                        <a href="/members">
                            <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
                                Developers
                            </li>
                        </a>
                        </center>
                        
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <div className="flex items-center justify-center py-8 text-gray-400 mx-auto">
                {/* <img
                    src={logo}
                    alt="logo"
                    className="h-12"
                /> */}
                <p className="text-center">
                    &copy; {currentYear}PICT CSI Student Branch. All rights reserved.
                </p>
            </div>
                </div>
                <div>
                    <ul>
                        <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
                            <a href="http://pcsb-registrations.tk/" target="_blank">
                                Register
                            </a>
                        </li>
                        <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
                            <a href="mailto:pcsb@pict.edu">Email</a>
                        </li>

                    </ul>
                </div>
            </div>
            
        </div>
        
    );
};

export default Footer;