import React from "react";
import {  AiOutlineMessage } from "react-icons/ai";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import {
    MdOutlineTrackChanges,
  } from "react-icons/md";
import {  FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";

const UserDashboardHeader = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img
            src="https://i.postimg.cc/SNm5HtFm/iitj-secondshop-high-resolution-logo-black-transparent-3.png"
            alt=""
            style={{ filter: "brightness(1) invert(0)" }}
            className="mt-4 h-8 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/userallorders" className="800px:block hidden">
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/userallrefundorders" className="800px:block hidden">
            <HiOutlineReceiptRefund
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/inbox" className="800px:block hidden">
            <AiOutlineMessage
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/trackorderss" className="800px:block hidden">
            <MdOutlineTrackChanges color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/ChangePassword" className="800px:block hidden">
            <RiLockPasswordLine
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/profile">
            <img
              src={`${user?.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardHeader;
