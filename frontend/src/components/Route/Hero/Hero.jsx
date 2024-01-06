import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative w-full bg-cover bg-center  min-h-[70vh] 800px:min-h-[80vh]   bg-no-repeat ${styles.noramlFlex} `}
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/XqjG00kf/image-1920x600.png)",
      }}

    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[rgb(71,58,58)] font-[600] capitalize`}
        >
          Best Collection for <br /> your Needs
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#050303]">
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
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
