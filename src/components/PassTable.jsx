import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const PassTable = ({ savedPassword }) => {
  if (!savedPassword || savedPassword.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#3f3f46]">
          No Passwords Saved
        </h1>
        <p className="text-[#3f3f46]">Add a password to get started</p>
      </div>
    );
  }
  console.log(savedPassword);
  const content = savedPassword.map((row, index) => {
    return (
      <tr key={index} className="bg-[#d8b4fe]">
        <td className="border px-4 py-2 text-center">{row.url}</td>
        <td className="border px-4 py-2 text-center">{row.username}</td>
        <td className="border px-4 py-2 text-center">{row.password}</td>
        <td className="border px-4 py-2 text-center">
          <div>
            <MdDelete></MdDelete>
            <MdEdit></MdEdit>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="flex  flex-col justify-center items-center gap-1">
      <div className="flex justify-start  items-start w-[75%]">
        <h2 className="font-bold">Your Passwords</h2>
      </div>

      <table className="table-auto w-[75%] border-collapse border border-gray-400 ">
        <thead>
          <tr className="bg-[#c084fc]">
            <th className="px-4 py-2">URL</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Password</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default PassTable;
