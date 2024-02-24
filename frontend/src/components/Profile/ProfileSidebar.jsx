import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineTrackChanges,
} from "react-icons/md";
import {  FiShoppingBag } from "react-icons/fi";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
const navigate = useNavigate();
 const {user} = useSelector((state) => state.user);
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10" >
      <div className="w-full flex items-center p-4">
       <Link to="/userprofile" className="w-full flex item-center">
        <RxPerson size={30} color={active === 1 ? "#e98a66" : "#555"} />
        <span
          className={`hidden 800px:block pl-2 text-[18px] font-[400]  ${
            active === 1 ? "text-[#e98a66]" : "text-[#555]"
          } 800px:block hidden`}
        >
          Profile
        </span>
        </Link>
        </div>
        <div/>
      <div
        className="w-full flex items-center p-4"
      >
         <Link to="/userallorders" className="w-full flex item-center">
        
        <FiShoppingBag size={30} color={`${active === 2 ? "#e98a66" : "#555"} `}/>
        <h5
          className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
            active === 2 ? "text-[#e98a66]" : "text-[#555]"
          }`}
        >
          Orders
        </h5>
        </Link>
      </div>
      <div
        className="w-full flex items-center p-4"
        onClick={() => setActive(3)}
      >
        <Link to ="/userallrefundorders" className="w-full flex item-center">
        <HiOutlineReceiptRefund size={30} color={active === 3 ? "#e98a66" : "#555"} />
        <span
          className={`hidden 800px:block pl-2 text-[18px] font-[400]  ${
            active === 3 ? "text-[#e98a66]" : "text-[#555]"
          } 800px:block hidden`}
        >
          Refunds
        </span>
        </Link>
      </div>
      <div
        className="w-full flex items-center p-4" onClick={() => setActive(4)}> 
        <Link to="/inbox" className="w-full flex item-center">
      <AiOutlineMessage size={30} color={active === 4 ? "#e98a66" : "#555"} />
        <span
          className={`hidden 800px:block pl-2 text-[18px] font-[400]  ${
            active === 4 ? "text-[#e98a66]" : "text-[#555]"
          } 800px:block hidden`}
        >
          Inbox
        </span>
        </Link>
      </div>
      <div
        className="w-full flex items-center p-4"
        onClick={() => setActive(5)}
      >
        <Link to="/trackorderss" className="w-full flex item-center">
        <MdOutlineTrackChanges size={30} color={active === 5 ? "#e98a66" : "#555"} />
        <span
          className={`hidden 800px:block pl-2 text-[18px] font-[400]  ${
            active === 5 ? "text-[#e98a66]" : "text-[#555]"
          } 800px:block hidden`}
        >
          Track Order
        </span>
        </Link>
      </div>

      <div
        className="w-full flex items-center p-4"
        onClick={() => setActive(6)}
      >
        <Link to="/ChangePassword" className="w-full flex item-center">
        <RiLockPasswordLine size={30} color={active === 6 ? "#e98a66" : "#555"} />
        <span
          className={`hidden 800px:block pl-2 text-[18px] font-[400]  ${
            active === 6 ? "text-[#e98a66]" : "text-[#555]"
          } 800px:block hidden`}
        >
          Change Password
        </span>
        </Link>
      </div>

      <div
        className="w-full flex items-center p-4"

        onClick={() => setActive(7)}
      >
        <Link to="/address" className="w-full flex item-center">
        <TbAddressBook size={30} color={active === 7 ? "#e98a66" : "#555"} />
        <span
          className={`hidden 800px:block pl-2 text-[18px] font-[400]  ${
            active === 7 ? "text-[#e98a66]" : "text-[#555]"
          } 800px:block hidden`}
        >
          Address
        </span>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 cursor-pointer">
      <div
        className="w-full flex items-center"
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={30} color={active === 8 ? "#e98a66" : "#555"} />
        <span
          className={`hidden 800px:block pl-2 text-[18px] font-[400]  ${
            active === 8 ? "text-[#e98a66]" : "text-[#555]"
          } 800px:block hidden`}
        >
          Log Out
        </span>
      </div>
    </div>
    <div className="w-full flex items-center p-4">
      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="w-full flex items-center"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={30}
              color={active === 9 ? "#e98a66" : "#555"}
            />
            <span
              className={`hidden 800px:block pl-2 text-[18px] font-[400]  ${
                active === 9 ? "text-[#e98a66]" : "text-[#555]"
              } 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}
      </div>
    </div>
  );
};

export default ProfileSidebar;
