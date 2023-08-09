import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Images from "../../../utils/Images/Images";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegPenToSquare } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = [
    {
      tag: "Transactions History",
      link: "/profile",
    },
    {
      tag: "Billing Address",
    },
    {
      tag: "Account Settings",
    },
  ];
  const normal = ``;
  const active = `border-b-2 border-b-[#B7076B]`;

  return (
    <React.Fragment>
      <div className="hidden md:flex flex-col">
        <div className="w-[98%]">
          <div className="m-10 bg-gray-200 rounded-md h-20 relative w-[90%] ">
            <div className="flex flex-col absolute top-9 mx-auto left-5 right-5 rounded-lg h-full bg-white shadow-lg opacity-100 pl-4">
              <div className="bottom-5 absolute h-[80px] w-[80px] flex items-center justify-center rounded-3xl bg-inherit shadow-xl">
                <img
                  src={Images.profilepics}
                  alt="profilepics"
                  className="h-full p-2 rounded-md w-full"
                />
              </div>

              <div className=" ml-20 flex gap-4  justify-between">
                <div className="flex gap-4">
                  <div className=" my-2 px-3 flex flex-col text-xs  border-r bg w-fit">
                    <span className="font-extrabold">Samuel Oladukun</span>
                    <span className="flex gap-2 w-32 justify-between  items-center ">
                      <p className="">Gender:</p>
                      <p className="w-8">Male</p>
                    </span>
                    <span className="flex gap-2 w-32 justify-between  items-center ">
                      <p className="">Location:</p>
                      <p className="w-8">Lagos</p>
                    </span>
                    <span className="flex gap-2 w-32 justify-between  items-center ">
                      <p className="">Sew Gender:</p>
                      <p className="w-8">Male</p>
                    </span>
                  </div>
                  <div className="my-2 flex gap-6 items-center">
                    <span className=" bg-gray-300 rounded-full h-6 w-6  flex items-center justify-center">
                      <IoCallOutline className="text-gray-400" />
                    </span>
                    <div className="flex flex-col w-26">
                      <span className="text-[#828282]">Phone Number</span>
                      <span className="text-[#828282] text-xs">
                        +2348958484848
                      </span>
                    </div>
                  </div>
                  <div className="my-2 flex gap-6 items-center">
                    <span className=" bg-gray-300 rounded-full h-6 w-6  flex items-center justify-center">
                      <CiMail className="text-gray-400" />
                    </span>
                    <div className="flex flex-col w-26">
                      <span className="text-[#828282]">Email Address</span>
                      <span className="text-[#828282] text-xs">
                        samuelolaleye@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
                <div className="m-2 text-[#333333]">
                  <FaRegPenToSquare className="text-[#333333]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-evenly w-full ">
          {data.map((menu) => {
            return (
              <div
                onClick={() => navigate(menu.link)}
                className={`${
                  location.pathname === menu.link ? active : normal
                }  flex items-center gap-4 mt-4 sm:mt-4 cursor-pointer`}
                key={menu.tag}
              >
                <div className="text-#4F4F4F">{menu.tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    {/*MOBILE */}
      <div className="gap-5 w-full flex flex-col md:hidden items-center h-full my-2  overflow-auto">
        <div className="h-5/6 gap-2 bg-white shadow-lg rounded-lg  w-full flex flex-col items-center" >
          <span className="h-14 w-14 mt-3">
            <img src={Images.profilepics} alt="" />
          </span>
          <div className="flex flex-col gap-4">
            <span className="0 text-sm text-[#3F434A]">Samuel Oladokun</span>
            <span className="flex gap-1">
              <p className="w-14 text-sm text-[#828282]">Gender:</p>
              <p className="text-sm text-[]#4F4F4F">Male</p>
            </span>
            <span className="flex gap-1">
              <p className="w-14 text-sm text-[#828282]">Location:</p>
              <p className="text-sm text-[#4F4F4F]">Lagos, Nigeria</p>
            </span>
          </div>
          <div className="my-2 flex gap-1 items-center">
            <span className=" bg-gray-300 rounded-full h-6 w-6  flex items-center justify-center">
              <IoCallOutline className="text-gray-400" />
            </span>
            <div className="flex items-center gap-1 w-26">
              <span className="text-[#828282] text-sm">Phone Number</span>
              <span className="text-[#828282] text-xs">+2348958484848</span>
            </div>
          </div>
          <div className="my-2 flex gap-1 items-center">
            <span className=" bg-gray-300 rounded-full h-6 w-6  flex items-center justify-center">
              <CiMail className="text-gray-400" />
            </span>
            <div className="flex items-center gap-2 w-26">
              <span className="text-[#828282] text-sm">Email Address</span>
              <span className="text-[#828282] text-[8px]">
                samuelolaleye@gmail.com
              </span>
            </div>
          </div>

          <div className="my-1 pb-2">
            <button
              className="text-white text-xs bg-[#B7076B] p-2 rounded-md focus:outline-none"
              // onClick={handleSubmit}
            >
              Apply to be a Vetted Tailor
            </button>
          </div>
        </div>
        <div className="gap-4 h-5/6 bg-white shadow-lg rounded-lg w-full">
        <div className=" flex items-center justify-evenly w-full ">
          {data.slice(0, 2).map((menu) => {
            return (
              <div
                onClick={() => navigate(menu.link)}
                className={`${
                  location.pathname === menu.link ? active : normal
                }  flex items-center gap-4 mt-4 sm:mt-4 cursor-pointer text-sm`}
                key={menu.tag}
              >
                <div className="text-#4F4F4F">{menu.tag}</div>
              </div>
            );
          })}
         
        </div>
        
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
