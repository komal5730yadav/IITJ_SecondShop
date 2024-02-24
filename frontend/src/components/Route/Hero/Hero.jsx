import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { CgProfile } from "react-icons/cg";
import DropDown from "../../Layout/DropDown";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Navbar from "../../Layout/Navbar";
import { BiMenuAltLeft } from "react-icons/bi";
import Cart from "../../cart/Cart";
import Wishlist from "../../Wishlist/Wishlist";
import { categoriesData, productData } from "../../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useSelector } from "react-redux";

const Hero = ({activeHeading}) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [active, setActive] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  return (
    <div
      className={`relative w-full bg-cover bg-center min-h-[70vh] 800px:min-h-[80vh]   bg-no-repeat ${styles.noramlFlex} `}
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/XqjG00kf/image-1920x600.png)",
      }}

    >
      <div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10 " : null
        } transition hidden 800px:flex items-center justify-between w-full  h-[70px]`}
      >
            
 <div
          className={`w-11/12  mx-auto absolute top-1  ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)} >
            
            <div className="relative ml-5 h-[60px] mt-[10px] w-[250px] hidden 800px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-gray-700 bg-opacity-60 font-sans text-lg font-[500] select-none rounded-t-md`}
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
          <div className={"flex items-center pt-[20px] 800px:mt-[2px]"}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex pt-[20px] 800px:mt-[2px]">
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
      <div className={`mx-auto w-[90%] 800px:w-[50%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#E2DFD2] font-[600] capitalize`}
        >
          Best Collection for <br /> your Needs
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#FFFFF0]">
        At IITSwapShop, we believe in the power of community and
              sustainability. Our platform is designed to bring together the
              vibrant and dynamic community of IIT Jodhpur, fostering a culture
              of sharing, reusing, and helping one another.{" "}
          <br /> Buy and sell pre-loved items within the IITJ community, whether
              you're looking for textbooks, electronics, furniture etc. 
              Join us in building a more eco-conscious campus while
              benefiting from the treasures within our own community.
        </p>
        <Link to="/products" className="inline-block">
            <div className={"w-[150px]   bg-[#61666e] hover:bg-[#5a626b]  h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer mt-5"}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Hero;
