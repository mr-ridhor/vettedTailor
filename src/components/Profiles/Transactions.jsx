import React, { useState } from "react";
import { BiCaretDown, BiDotsVerticalRounded, BiSearch } from "react-icons/bi";

const Transactions = () => {
  const data = [
    {
      id: 1,
      transactionId: "#790841",
      transactionType: "Receive token",
      date: "12-Jun- 2021",
      amount: "5 tokens",
      payment: "Total wallet",
      status: "successful",
    },
    {
      id: 2,
      transactionId: "#790941",
      transactionType: "Receive token",
      date: "12-Jun- 2021",
      amount: "20 tokens",
      payment: "Total wallet",
      status: "successful",
    },
    {
      id: 3,
      transactionId: "#793941",
      transactionType: "Not reacieive token",
      date: "12-Jun- 2021",
      amount: "#30,000",
      payment: "Card payment",
      status: "successful",
    },
    {
      id: 4,
      transactionId: "#790943",
      transactionType: "Not reacieive token",
      date: "12-Jun- 2021",
      amount: "10 tokens",
      payment: "Total wallet",
      status: "failed",
    },
  ];
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showTransactionTypeDropdown, setShowTransactionTypeDropdown] = useState(false);
  const [showTransactionIdDropdown, setShowTransactionIdDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showAmountDropdown, setShowAmountDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);
// const [showStatus, setShowStatus]=useState(false)
const [expandedRows, setExpandedRows] = useState([]);

  // Define similar state variables for other columns
  
  const toggleRowSelection = (transactionId) => {
    if (selectedRows.includes(transactionId)) {
      setSelectedRows(selectedRows.filter((id) => id !== transactionId));
    } else {
      setSelectedRows([...selectedRows, transactionId]);
    }
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const allTransactionIds = transactions.map(
        (transaction) => transaction.id
      );
      setSelectedRows(allTransactionIds);
    }
    setSelectAll(!selectAll);
  };
//   const handleIconClick = (transactionId) => {
//    setShowStatus((prevState)=>!prevState)
//     // alert(transactionId);
//     console.log(`Icon clicked for transaction ID: ${transactionId}`);
//   };
const handleIconClick = (transactionId) => {
    if (expandedRows.includes(transactionId)) {
      setExpandedRows(expandedRows.filter(id => id !== transactionId));
    } else {
      setExpandedRows([...expandedRows, transactionId]);
    }
  };
  

  return (
    <div className=" hidden w-full md:flex items-center justify-evenly">
      <div className="bg-white shadow-lg w-[70%] rounded-md p-3 mt-5">
        <div className="w-full flex  justify-between items-center">
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
          <div className="h-10 w-[15%] border rounded-md flex items-center">
            <select name="" id="" className="w-full   outline-none ">
              <option value="Action">Action</option>
              <option value="Action">Reciveved</option>
            </select>
          </div>
        </div>
        <div className="mt-4 w-full">
          <div className="flex flex-col w-full">
            <div className="-my-2">
              <div className="py-2 align-middle inline-block min-w-full">
                
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="">
                      <tr>
                        <th className=" py-3">
                          <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={toggleSelectAll}
                            className="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"
                          />
                        </th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex items-center">
                            <span className=" text-xs whitespace-pre">Transaction ID</span>
                            <BiCaretDown
                              className={`text-gray-400 cursor-pointer ${
                                showTransactionIdDropdown
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                              onClick={() => {
                                setShowTransactionIdDropdown(
                                  !showTransactionIdDropdown
                                );
                              }}
                            />
                          </div>
                        </th>
                        <th className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                            <span className=" text-xs whitespace-pre">Transaction Type</span>
                            <BiCaretDown
                              className={`text-gray-400 cursor-pointer ${
                                showTransactionTypeDropdown
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                              onClick={() => {
                                setShowTransactionTypeDropdown(
                                  !showTransactionTypeDropdown
                                );
                              }}
                            />
                          </div>
                        </th>
                        <th className=" pt-4 flex justify-center items-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                            <span className=" text-xs whitespace-pre text-center">Date</span>
                            <BiCaretDown
                              className={`text-gray-400 cursor-pointer ${
                                showDateDropdown
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                              onClick={() => {
                                setShowDateDropdown(
                                  !showDateDropdown
                                );
                              }}
                            />
                          </div>
                        </th>
                        <th className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                            <span className=" text-xs whitespace-pre">Amount</span>
                            <BiCaretDown
                              className={`text-gray-400 cursor-pointer ${
                                showAmountDropdown
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                              onClick={() => {
                                setShowAmountDropdown(
                                  !showAmountDropdown
                                );
                              }}
                            />
                          </div>
                        </th>
                        <th className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                            <span className=" text-xs whitespace-pre">Payment</span>
                            <BiCaretDown
                              className={`text-gray-400 cursor-pointer ${
                                showPaymentDropdown
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                              onClick={() => {
                                setShowPaymentDropdown(
                                  !showPaymentDropdown
                                );
                              }}
                            />
                          </div>
                        </th>
                        <th className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                            <span className=" text-xs whitespace-pre">Status</span>
                            <BiCaretDown
                              className={`text-gray-400 cursor-pointer ${
                                showStatusDropdown
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                              onClick={() => {
                                setShowStatusDropdown(
                                  !showStatusDropdown
                                );
                              }}
                            />
                          </div>
                        </th>
                        <th className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 w-full">
                      {data.map((transaction) => (
                       < React.Fragment>
                            <tr
                          key={transaction.id}
                         
                          className="bg-transparent hover:bg-gray-100"
                        >
                          <td className=" py-2 whitespace-nowrap">
                            <input
                              type="checkbox"
                              checked={selectedRows.includes(transaction.id)}
                              onChange={() =>
                                toggleRowSelection(transaction.id)
                              }
                              className="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"
                            />
                          </td>
                          <td className=" py-2 w-full px-2  text-sm whitespace-nowrap">
                            {transaction.transactionId}
                          </td>
                          <td className=" py-2 w-full px-2 text-sm whitespace-nowrap">
                            {transaction.transactionType}
                          </td>
                          <td className=" py-2 w-full px-2 text-sm whitespace-nowrap">
                            {transaction.date}
                          </td>
                          <td className=" py-2 w-full px-2 text-sm whitespace-nowrap ">
                            {transaction.amount}
                          </td>
                          <td className=" py-2 w-full px-2 text-sm whitespace-nowrap">
                            {transaction.payment}
                          </td>
                          <td 
                          className=" py-2 w-full px- text-sm whitespace-nowrap"
                         
                          >
                            <span  className={` py-1 px-1 text-xs whitespace-nowrap flex items-center justify-center ${
                            transaction.status === 'successful' ? 'bg-green-100 rounded-lg' : 'bg-red-100 rounded-lg' 
                          }`}>

                            {transaction.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="relative">
                            <BiDotsVerticalRounded
                               className={` text-gray-400 hover:text-gray-600 cursor-pointer ${
                                expandedRows.includes(transaction.id) ? 'transform rotate-180' : ''
                              }`}
                              onClick={() => handleIconClick(transaction.id)}
                            />

                         {expandedRows.includes(transaction.id) && (
                            <tr className="h-20 w-40 fixed z-50  bg-white shadow-lg rounded-md">
         
                            <div className="flex flex-col px-3  gap-3 my-2">
                              <span className="text-sm">View</span>
                              <span className="text-gray-500 bg-gray-200 px-1 rounded-md">Download receipt</span>
                            </div>
                           
                      
                            </tr>
                          )}
                            </div>
                          </td>
                        </tr>
                       </React.Fragment>
                      ))}
                    </tbody>
                  </table>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
