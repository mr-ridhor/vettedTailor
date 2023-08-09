import React,{useState} from "react";
import { BiBell } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import { HiBars3, HiBellAlert, HiOutlineBell } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom" ;
import {MdKeyboardArrowLeft} from 'react-icons/md'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const location =useLocation()
  const pathname=location.pathname.split("/");
  let name = pathname[pathname.length - 1]; // Get the last part of the pathname
  name = name.charAt(0).toUpperCase() + name.slice(1); 
  let displayName = name === "Profile" ? "Profile" : "Vetted Tailor Application";
  return (
    <React.Fragment>
    <div className="w-full h-14 bg-white shadow-lg hidden md:flex items-center justify-between px-6">
      <span className="items-center flex gap-4">
        <FiArrowLeft />
        <span className="text-[12px] text-center md:text-sm lg:text-lg">{displayName}</span>
      </span>
      <div className="hidden md:flex items-center gap-6 ">
        <div className="relative w-10 h-10 items-center justify-center flex">
        <HiBellAlert className="text-[#78849E]" />
        <span
            className="absolute bottom-5 bg-yellow-400 text-white 
        
        rounded-full h-3 w-3 right-5 text-xs flex items-center justify-center p-2"
          >
            3
          </span> 
        </div>
        <div className="flex justify-center  ">
          <div className="bg-blue-800 rounded-full h-10 w-10 flex border-[1.4px] border-[#7FCDFF] p-3 items-center justify-center">
            <span className="text-white text-center">SO</span>
          </div>
        </div>
      </div>
    </div>
    {/* mobile */}
    <nav className="relative md:hidden h-10 bg-white shadow-lg flex items-center justify-between px-3 w-full">
      <div className="items-center flex w-full gap-2">
        {/* <FiArrowLeft /> */}
        {displayName !== 'Profile' && (
          <span className="rounded-full bg-gray-300 p-1">
            <MdKeyboardArrowLeft />
          </span>
        )}
        <div className="mx-auto">
          <span className="text-center text-lg cusrsor-pointer" >{displayName}</span>
        </div>
        <span onClick={toggleNav}>
          <HiBars3/>
        </span>
      </div>
      {isNavOpen && (
        <div className="w-24 bg-white shadow-lg top-10 mt-2 absolute right-5">
          {/* Your navigation links */}
          <Link to="/" className="block text-center text-gray-600 hover:text-gray-800 py-2">Home</Link>
          <Link to="/profile" className="block text-center text-gray-600 hover:text-gray-800 py-2">Profile</Link>
          <Link to="/application" className="block text-center text-gray-600 hover:text-gray-800 py-2">Application</Link>
        </div>
      )}
      </nav>
     
 
    </React.Fragment>
  );
};

export default Nav;
