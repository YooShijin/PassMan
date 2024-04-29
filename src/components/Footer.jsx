import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-400 flex  flex-col justify-between items-center  box-content px-40 absolute bottom-0 right-0 left-0">
      <div className="logo font-bold text-[#ecfeff] ">
        <span className="text-[#075985]">&lt;</span>Pass
        <span className="text-[#075985]">Man/&gt;</span>
      </div>
      <div>
        <span>Created with</span>
        <FaHeart className="text-red-500 inline mx-1" />
        <span>by HueHueHue.</span>
      </div>
    </footer>
  );
};

export default Footer;
