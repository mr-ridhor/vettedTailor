import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Input = () => {
  return (
    <div className="bg-red-30 border p-2 w-[80%] rounded-md h-10 relative flex items-center ">
    <input
      type="text"
      className="w-full px-8 outline-none"
      placeholder="serach order..."
    />
    <span className="absolute left-2 items-cente ">
      <BiSearch className="text-gray-300 h-6 w-6" />
    </span>
  </div>
  )
}

export default Input