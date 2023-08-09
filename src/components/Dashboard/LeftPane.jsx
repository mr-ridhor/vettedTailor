import React from "react";
import Images from "../../../utils/Images/Images";
import { FaPen } from "react-icons/fa6";
import {BiChevronDown, BiLink} from 'react-icons/bi'
import Tape from "../../../utils/helpers/Tape";
import {VscSignOut} from 'react-icons/vsc'
import User from '../../../utils/helpers/User'
import Customer from '../../../utils/helpers/Customer'
import Shirt from '../../../utils/helpers/Shirt'
import Bag from '../../../utils/helpers/Bag'
import { useLocation, useNavigate } from "react-router-dom";

const LeftPane = () => {
  const location=useLocation()
  const navigate=useNavigate()
const active=`bg-[#E0E0E0] rounded-r-full py- px-3`
const normal=`py- px-3`
  const menus=[
    {tag:"Measurements",link:"", icon:<Tape/>},
    {tag:"Orders",link:"",icon:<Bag/>},
    {tag:"Products",link:"",icon:<Shirt />},
    {tag:"Customers",link:"",icon:<Customer/>},
    {tag:"My Profile",link:"/profile",icon:<User />},
    {tag:"Logout",link:"",icon:<VscSignOut className="text-white h-6 w-6"/>}
  ]
  const handleApp=()=>{
    navigate('/application')
  }
  return (

  <div
    className={`hidden md:flex flex-col fixed h-full w-56 bg-gradient-to-b py-2 pt-4  from-[#00F0FF]  to-[#000CB6CC]  via-[#5376FF] bg-opacity-`}
  >
    
    <div className="px-2 h-10 w-10 mt-4">
      <img src={Images.fitted} alt="fitted" />
    </div>
   
    <div className=" flex flex-col items-center">
      <div className="flex justify-center  ">
        <div className="bg-blue-800 rounded-full h-14 w-14 flex border-[1.4px] border-white p-3 items-center justify-center">
          <span className="text-white text-center">SA</span>
        </div>
        <div className="flex justify-end">
          <div className="bg-white rounded-full  self-end h-6 w-6 flex items-center justify-center">
            <span className="bg-[#F4F4F4] h-5 w-5 rounded-full flex items-center justify-center">
              <FaPen className=" text-[#B7076B] h-2 w-2 text" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-white items-center">
        <span className="text-white font-semibold">Sikiru Agbaje</span>
        <span className="text-xs flex items-center gap-2">
          www.tailors.fitted.ng/sikiru
          <span className="rounded-full font-extrabold bg-blue-400 w-4 h-4 items-center flex justify-center opacity-80">
            <BiLink className=""/>
          </span>
        </span>
          <span className="text-[10px] font-light">Get measurements from any customer via this link</span>
          <span className="cursor-pointer flex items-center justify-center text-sm border boder-white rounded-md p-1 mt-2 gap-1" 
          onClick={handleApp}>Non-Vetted Tailor <BiChevronDown/>
          </span>          

      </div>
    </div>
    {
      menus.map((menu)=>{
        return(
          <div 
          className={`${
            location.pathname === menu.link ? active : normal
          }  w-full flex items-center gap-4 mt-4 sm:mt-4 cursor-pointer h-fit`}
          key={menu.tag}
         onClick={()=>navigate(`${menu.link}`)}
          >
            <div className="">{menu.icon}</div>

            <div className="text-white">{menu.tag}</div>
          </div>
           
        )
      })
    }
    
    <span className="absolute bottom-0 left-0 mb- ml-"> 
      <img src={Images.leftconer} alt="leftconer"  />
    </span>
  </div>
  )
}
  


export default LeftPane;
