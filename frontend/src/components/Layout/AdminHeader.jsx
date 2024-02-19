import React from 'react'
import { GiShop } from "react-icons/gi";
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HiOutlineUserGroup } from "react-icons/hi";

const AdminHeader = () => {
    const {user} = useSelector((state) => state.user);

  return (
         <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img
            src="https://i.postimg.cc/SNm5HtFm/iitj-secondshop-high-resolution-logo-black-transparent-3.png"
            alt=""
            style={{ filter: "brightness(1) invert(0)" }}
            className="mt-4 h-9 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/admin-sellers" className="800px:block hidden">
            <GiShop
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/admin-users" className="800px:block hidden">
            <HiOutlineUserGroup
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/admin-orders" className="800px:block hidden">
            <FiShoppingBag  color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/admin-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/admin-products" className="800px:block hidden">
            <FiPackage
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>


            <img
              src={`${user?.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader