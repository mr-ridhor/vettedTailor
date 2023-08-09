import React, { useState } from "react";
import data from "./data";
import { BiCaretDown, BiDotsVerticalRounded, BiSearch } from "react-icons/bi";

const Table = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showTransactionTypeDropdown, setShowTransactionTypeDropdown] =
    useState(false);
  const [showTransactionIdDropdown, setShowTransactionIdDropdown] =
    useState(false);
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
      setExpandedRows(expandedRows.filter((id) => id !== transactionId));
    } else {
      setExpandedRows([...expandedRows, transactionId]);
    }
  };

  return (
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
                    <span className=" text-xs whitespace-pre">
                      Transaction ID
                    </span>
                    <BiCaretDown
                      className={`text-gray-400 cursor-pointer ${
                        showTransactionIdDropdown ? "transform rotate-180" : ""
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
                    <span className=" text-xs whitespace-pre">
                      Transaction Type
                    </span>
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
                    <span className=" text-xs whitespace-pre text-center">
                      Date
                    </span>
                    <BiCaretDown
                      className={`text-gray-400 cursor-pointer ${
                        showDateDropdown ? "transform rotate-180" : ""
                      }`}
                      onClick={() => {
                        setShowDateDropdown(!showDateDropdown);
                      }}
                    />
                  </div>
                </th>
                <th className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <span className=" text-xs whitespace-pre">Amount</span>
                    <BiCaretDown
                      className={`text-gray-400 cursor-pointer ${
                        showAmountDropdown ? "transform rotate-180" : ""
                      }`}
                      onClick={() => {
                        setShowAmountDropdown(!showAmountDropdown);
                      }}
                    />
                  </div>
                </th>
                <th className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <span className=" text-xs whitespace-pre">Payment</span>
                    <BiCaretDown
                      className={`text-gray-400 cursor-pointer ${
                        showPaymentDropdown ? "transform rotate-180" : ""
                      }`}
                      onClick={() => {
                        setShowPaymentDropdown(!showPaymentDropdown);
                      }}
                    />
                  </div>
                </th>
                <th className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <span className=" text-xs whitespace-pre">Status</span>
                    <BiCaretDown
                      className={`text-gray-400 cursor-pointer ${
                        showStatusDropdown ? "transform rotate-180" : ""
                      }`}
                      onClick={() => {
                        setShowStatusDropdown(!showStatusDropdown);
                      }}
                    />
                  </div>
                </th>
                <th className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 w-full">
              {data.map((transaction) => (
                <React.Fragment>
                  <tr
                    key={transaction.id}
                    className="bg-transparent hover:bg-gray-100"
                  >
                    <td className=" py-2 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(transaction.id)}
                        onChange={() => toggleRowSelection(transaction.id)}
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
                    <td className=" py-2 w-full px- text-sm whitespace-nowrap">
                      <span
                        className={` py-1 px-1 text-xs whitespace-nowrap flex items-center justify-center ${
                          transaction.status === "successful"
                            ? "bg-green-100 rounded-lg"
                            : "bg-red-100 rounded-lg"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="">
                        <BiDotsVerticalRounded
                          className={` text-gray-400 hover:text-gray-600 cursor-pointer z-0 ${
                            expandedRows.includes(transaction.id)
                              ? "transform rotate-180"
                              : ""
                          }`}
                          onClick={() => handleIconClick(transaction.id)}
                        />

                        {expandedRows.includes(transaction.id) && (
                          <tr className="py-2 px-2  w-40 fixed z-50 right-8 bg-white shadow-lg rounded-md">
                             
                             <div className="flex flex-col justify-center gap-2">
                             <span className="text-xs">View More</span>
                             <span className="text-gray-200 text-xs bg-gray-300 text-center py-1 px-2 rounded-md">Download receipt</span>
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
  );
};

export default Table;
