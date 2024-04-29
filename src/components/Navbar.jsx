import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-purple-400 flex justify-between items-center h-16 px-5 md:px-40 absolute top-0 right-0 left-0">
      <div className="logo font-bold text-[#ecfeff] ">
        <span className="text-[#075985]">&lt;</span>Pass
        <span className="text-[#075985]">Man/&gt;</span>
      </div>

      <button className="text-[#3f3f46] hover:text-[#71717a] flex justify-center items-center gap-1 outline outline-2 outline-offset-2 rounded-lg font-bold px-2 ">
        <FaGithub className=" fill-[#3f3f46]   hover:fill-[#3f3f46]" />
        <span>Github</span>
      </button>
    </nav>
  );
};

export default Navbar;
