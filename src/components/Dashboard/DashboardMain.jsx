import React from "react";
import LeftPane from "./LeftPane";
import Nav from "./Nav/Nav";
import Images from "../../../utils/Images/Images";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegPenToSquare } from "react-icons/fa6";
import Profile from "../Profiles/Profile";
import { Outlet } from "react-router-dom";

const DashboardMain = ({children}) => {
  return (
    <div className="h-screen w-screen bg-[#F9F9F9] flex flex-row overflow-hidden">
       <div className="hidden md:flex absolute  right-0 -top-5">
          <img src={Images.top} alt=""  />

          </div>
      <div className=" md:w-56">
        <LeftPane />
      </div>
    
      <div className="w-full relative md:w-[calc(100vw-224px)]  h-full overflow-hidden">
        <div className="w-full z-10">
          <Nav />
          <main className=" mx-10 gap-4 flex flex-col h-[calc(100vh-56px)]">
            {children}
    
          </main>
        </div>
      <div className="hidden md:flex absolute  bottom-0 top right-0">
          <img src={Images.down} alt=""  />

          </div>
         
      </div>
    </div>
  );
};

export default DashboardMain;
