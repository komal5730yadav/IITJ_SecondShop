import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { CgProfile } from "react-icons/cg";
import DropDown from "../Layout/DropDown";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../Layout/Navbar";
import { BiMenuAltLeft } from "react-icons/bi";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { categoriesData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useSelector } from "react-redux";

const AddHeader = ({activeHeading}) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [active, setActive] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  return (

      <div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10 " : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#61666e] h-[70px]`}
      >
            
 <div
          className={`w-11/12  mx-auto  relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-[#636972] font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={"flex items-center"}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-black w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-black w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>
      </div>
      
    </div>
    
  );
};

export default AddHeader;
