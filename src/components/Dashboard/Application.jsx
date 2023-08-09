import React, { useEffect, useState } from "react";
import DashboardMain from "./DashboardMain";
import Images from "../../../utils/Images/Images";
import { PiBankBold, PiDotsNineBold } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import Auth from "../../../utils/baseUrl";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import data from "../../../utils/helpers/data";
import axios from "axios";

let endpoint =
  "https://fitted-portal-api.herokuapp.com/api/v1/bank/resolveAccount";
const Application = () => {
  const [bankName, setBankName] = useState([]);
  const [acct, setAcct] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [txt, setTxt] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState(null);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    try {
      let res = await Auth.get("/banks");
      setBankName(res.data.data);
      setIsModalOpen(true);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const selectedbk = bankName.find((bank) => bank.code === selectedBank);
    console.log(selectedbk);
    if (!selectedbk) {
      console.error("Selected bank not found.");
      return;
    }
    let payload = {
      bankCode: selectedBank,
      accountNo: acct,
    };
    if (selectedbk.code) {
      try {
        const response = await axios.post(endpoint, payload);
        // alert("NO error")
        setTxt(response.data.content.message);
        setResult(response.data);

        // console.log(response.data.content.message)
      } catch (error) {
        console.error("Error posting data:", error);
        setTxt("Opps, Account details not found");
        setResult(null);
      }
    } else {
      alert("error");
    }
  };
  return (
    <div className=" h-full">
      <DashboardMain>
        <div className="">
          {txt === "Account number resolved" ? (
            <div className=" mt-10 hidden md:flex justify-center items-center h-full">
              <div className="hidden md:flex flex-col w-full xl:w-3/4 h-full rounded-md  bg-white shadow-lg p-3">
             

                <div className="flex items-center justify-center flex-col my-5 h-full">
                  <div className="mt-5">
                    <img src={Images.success} alt="" />
                  </div>
                  <div className="">
                    <div className="flex flex-col items-center justify-cente">
                    <span className="font-bold text-lg">  Yay!!! 🎉 </span>
                     <small className="w-[55%] text-[#333333]">
                    Your application to become a vetted tailor has
                      been sent, a Fitted Agent will get in touch with you
                      regard the next steps. Goodluck!
                      
                    </small> 
                    </div>
                  </div>
                  <div className="mt-3">
                      <button
                        className="text-sm text-white bg-[#B7076B] p-1 px-2 rounded-md focus:outline-none"
                        onClick={handleSubmit}
                      >
                        Return to Dashboard
                      </button>
                    </div>
                </div>
              </div>
            </div>
          ) : (
            
            <div className=" mt-10 hidden md:flex justify-center items-center ">
              <div className="hidden md:flex flex-col w-full xl:w-3/4 h3/5 rounded-md  bg-white shadow-lg p-3">
                <div className="flex-col flex items-center justify-center">
                  <span className="text-sm font-bold">
                    Vetted Tailor Application
                  </span>
                  <span className="text-sm w-3/5 text-center text-[#4F4F4F]">
                    One step closer to the goal! please provide us with your
                    Bank details with which you will be recieving payment.
                  </span>
                </div>
                <div className="h-full w-full flex justify-between gap-3">
                  <div className="flex flex-col w-2/6 h-full ">
                    <span className="bg-white shadow-lg rounded-2xl p-2 w-20">
                      <img src={Images.profilepics} className="h-16 w-16" />
                    </span>
                    <div className="mt-5  gap-3 flex  flex-col">
                      <div className="gap-2 justify-between flex ">
                        <span className="text-sm text-[#828282]">Name:</span>
                        <span className="text-sm text-[#3F434A] w-36">
                          Samuel Oladokun
                        </span>
                      </div>
                      <div className="gap-2 justify-between flex ">
                        <span className="text-sm text-[#828282]">Gender:</span>
                        <span className="text-sm text-[#3F434A] w-36">
                          Male
                        </span>
                      </div>
                      <div className="gap-2 justify-between flex ">
                        <span className="text-sm text-[#828282]">
                          Sew Gender:
                        </span>
                        <span className="text-sm text-[#3F434A] w-36">
                          Both
                        </span>
                      </div>
                      <div className="gap-2 justify-between flex ">
                        <span className="text-sm text-[#828282]">Phone:</span>
                        <span className="text-sm text-[#3F434A] w-36">
                          08137901372
                        </span>
                      </div>
                      <div className="gap-2 justify-between flex ">
                        <span className="text-sm text-[#828282]">
                          Email Address
                        </span>
                        <span className="text-sm text-[#3F434A] w-36">
                          biola@fitted.ng
                        </span>
                      </div>
                      <div className="gap-2 justify-between flex ">
                        <span className="text-sm text-[#828282]">
                          Store Name:
                        </span>
                        <span className="text-sm text-[#3F434A] w-36">
                          Skibi Fashion House
                        </span>
                      </div>
                      <div className="gap-2 justify-between flex ">
                        <span className="text-sm text-[#828282]">
                          Location:
                        </span>
                        <span className="text-sm text-[#3F434A] w-36">
                          Lagos, Nigeria
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 h-full flex mr-5 mt-3 flex-col gap-2">
                    <div className="flex justify-between gap-4">
                      <span className="flex flex-col  gap-1">
                        <span className="text-sm">Gender you sew for?</span>
                        <span className="border rounded-md  py-1 w-32">
                          <select
                            name=""
                            id=""
                            className="text-[#828282] text-sm"
                          >
                            <option value="">Please select </option>
                            <option value="male"> Male</option>
                            <option value="female"> Female</option>
                          </select>
                        </span>
                      </span>
                      <span className="flex flex-col  gap-1">
                        <span className="text-sm">Style you sew?</span>
                        <span className="border rounded-md w-32 py-1">
                          <select
                            name=""
                            id=""
                            className="text-[#828282] text-sm"
                          >
                            <option value="">Please select </option>

                            <option value="male"> Native</option>
                            <option value="female"> America </option>
                          </select>
                        </span>
                      </span>
                    </div>
                    <div className="w-full ">
                      <span className="text-sm text-[#5E5E5E]">Bank Name</span>
                      <div className="w-full relative border py-2 rounded-md px-3 flex items-center">
                        <select
                          name=""
                          id=""
                          className="text-[#828282] text-sm w-full   ml-5 outline-none"
                          value={selectedBank}
                          onChange={(e) => setSelectedBank(e.target.value)}
                        >
                          <option value="">Please select </option>
                          {bankName.map((bank) => (
                            <option key={bank.id} value={bank.code}>
                              {bank.name}
                            </option>
                          ))}
                        </select>
                        <span className="absolute left-0 px-3 text-[#BDBDBD]">
                          <PiBankBold />
                        </span>
                      </div>
                    </div>
                    <div className="w-full ">
                      <span className="text-sm text-[#5E5E5E]">
                        Account Number
                      </span>
                      <div className="w-full relative border py-2 rounded-md px-3 flex items-center">
                        <input
                          value={acct}
                          onChange={(e) => setAcct(e.target.value)}
                          type="text"
                          className="focus:outline-none ml-5 w-72 placeholder:text-sm"
                          placeholder="Please input your account number"
                        />
                        <span className="absolute left-0 px-3 text-[#BDBDBD]">
                          <PiDotsNineBold />
                        </span>
                      </div>
                    </div>
                    <div className="w-full ">
                      <span className="text-sm text-[#5E5E5E]">
                        Account Name
                      </span>
                      <div className="w-full relative border py-2 rounded-md px-3 flex items-center">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="focus:outline-none ml-5 w-72 placeholder:text-sm"
                        />
                        <span className="absolute left-0 px-3 text-[#BDBDBD]">
                          <CiUser />
                        </span>
                      </div>
                    </div>

                    <div className="mt-1">
                      <button
                        className="text-white bg-[#B7076B] p-1 rounded-md focus:outline-none"
                        onClick={handleSubmit}
                      >
                        Submit Application
                      </button>
                    </div>

                    <p className="text-sm text-[#D90000]">{txt}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Mobile */}
        {/*MOBILE */}
        <div className="gap-5 w-full flex flex-col md:hidden items-center h-full my-2  overflow-auto">
          {txt === "Account number resolved" ? (
            <div className="mt-4">
                <div className="h-full gap-2 bg-white shadow-lg rounded-xl  w-full flex flex-col ites-center">

              <div className="flex items-center justify-center flex-col my-5 h-full">
                  <div className="mt-5">
                    <img src={Images.success} alt="" />
                  </div>
                  <div className="">
                    <div className="flex flex-col items-center justify-cente">
                    <span className="font-bold text-lg">  Yay!!! 🎉 </span>
                     <small className="w-[55%] text-[#333333]">
                    Your application to become a vetted tailor has
                      been sent, a Fitted Agent will get in touch with you
                      regard the next steps. Goodluck!
                      
                    </small> 
                    </div>
                  </div>
                  <div className="mt-3">
                      <button
                        className="text-sm text-white bg-[#B7076B] p-1 px-2 rounded-md focus:outline-none"
                        onClick={handleSubmit}
                      >
                        Return to Dashboard
                      </button>
                    </div>
              </div>

              </div>
            </div>
          ) : (
            <div className="gap-5 w-full flex flex-col md:hidden items-center h-full my-2  overflow-auto">
              <div className="h-5/6 gap-2 bg-white shadow-lg rounded-xl  w-full flex flex-col ites-center">
                <span className="h-20 w-20 mt-3 mx-auto">
                  <img src={Images.profilepics} alt="" />
                </span>
                <div className="flex flex-col gap-4 mx-5 my-4">
                  <span className="flex gap-5">
                    <p className="w-24 text-sm font-semibold text-[#828282]">
                      Name:
                    </p>
                    <p className="text-sm text-[#4F4F4F]">Samuel Oladokun</p>
                  </span>
                  <span className="flex gap-5">
                    <p className="w-24 text-sm font-semibold text-[#828282]">
                      Gender:
                    </p>
                    <p className="text-sm text-[#4F4F4F]">Male</p>
                  </span>
                  <span className="flex gap-5">
                    <p className="w-24 text-sm font-semibold text-[#828282]">
                      Sew Gender:
                    </p>
                    <p className="text-sm text-[#4F4F4F]">Both</p>
                  </span>
                  <span className="flex gap-5">
                    <p className="w-24 text-sm font-semibold text-[#828282]">
                      Phone Number:
                    </p>
                    <p className="text-sm text-[#4F4F4F]">08137901372</p>
                  </span>
                  <span className="flex gap-5">
                    <p className="w-24 text-sm font-semibold text-[#828282]">
                      Email Address:
                    </p>
                    <p className="text-sm text-[#4F4F4F]">biola@fitted.ng</p>
                  </span>
                  <span className="flex gap-5">
                    <p className="w-24 text-sm font-semibold text-[#828282]">
                      {" "}
                      Store Name:
                    </p>
                    <p className="text-sm text-[#4F4F4F]">
                      Skibi Fashion House
                    </p>
                  </span>

                  <span className="flex gap-5">
                    <p className="w-24 text-sm font-semibold text-[#828282]">
                      Store Location:
                    </p>
                    <p className="text-sm text-[#4F4F4F]">Lagos, Nigeria</p>
                  </span>
                </div>
              </div>
              <div className="gap-4 h-5/6 bg-white shadow-lg rounded-xl w-full">
                <div className=" flex flex-col my-3 px-4 gap-4 items-center justify-evenly w-full ">
                  <div className="flex-col flex items-center justify-center">
                    <span className="text-sm  text-center text-[#4F4F4F]">
                      One step closer to the goal! please provide us with your
                      Bank details with which you will be recieving payment.
                    </span>
                  </div>
                  <div className="w-full flex flex-col gap-3 ">
                    <span className="text-sm text-[#5E5E5E]">Bank Name</span>
                    <div className="w-full relative border py-2 rounded-md px-3 flex items-center">
                      <select
                        name=""
                        id=""
                        className="text-[#828282] text-sm w-full   ml-5 outline-none"
                        value={selectedBank}
                        onChange={(e) => {
                          alert(e.target.value);
                          setSelectedBank(e.target.value);
                        }}
                      >
                        <option value="">Please select </option>
                        {bankName.map((bank) => (
                          <option key={bank.code} value={bank.code}>
                            {bank.name}
                          </option>
                        ))}
                      </select>
                      <span className="absolute left-0 px-3 text-[#BDBDBD]">
                        <PiBankBold />
                      </span>
                    </div>
                    <div className="w-full ">
                      <span className="text-sm text-[#5E5E5E]">
                        Account Number
                      </span>
                      <div className="w-full relative border py-2 rounded-md px-3 flex items-center">
                        <input
                          value={acct}
                          onChange={(e) => {
                            setAcct(e.target.value);
                          }}
                          type="text"
                          className="focus:outline-none ml-5 w-72 placeholder:text-sm"
                          placeholder="Please input your account number"
                        />
                        <span className="absolute left-0 px-3 text-[#BDBDBD]">
                          <PiDotsNineBold />
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 flex justify-center">
                      <button
                        className="text-white bg-[#B7076B] p-1 rounded-md focus:outline-none"
                        onClick={handleSubmit}
                      >
                        Submit Application
                      </button>
                    </div>

                    <p className="text-sm text-[#D90000]">{txt}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </DashboardMain>
    </div>
  );
};

export default Application;
