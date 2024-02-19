import React, { useState } from "react";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import AddHeader from "../components/Layout/AddHeader";
const AboutUsPage = () => {
  return (
    <div>
        <Header />
        <AddHeader/>
      <About />
      <Footer />
      
    </div>
  );
};

const About = () => {

      return (
        <div className="2xl:container 2xl:mx-auto lg:py-12 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="w-full mt-[-150px] lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
            At IITJSecondShop, we believe in the power of community and
              sustainability. Our platform is designed to bring together the
              vibrant and dynamic community of IIT Jodhpur, fostering a culture
              of sharing, reusing, and helping one another.
              <br/>
              Buy and sell pre-loved items within the IITJ community, whether
              you're looking for textbooks, electronics, furniture, or anything
              else. Join us in building a more eco-conscious campus while
              benefiting from the treasures within our own community.
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <img
              className="w-full h-[70%]  "
              src="https://i.ibb.co/DMPcRWr/IMG-20240125-233638.jpg"
              alt="IIT Jodhpur"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-8  mt-[-150px] pt-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center ">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
            Discover a greener way to trade within the IITJ community! Our website simplifies buying and selling, whether it's textbooks, electronics, or more. Join us in creating a sustainable campus and benefit from treasures within our community. Let's make trades easier and build a conscious and connected IITJ community!
            </p>
          </div>
          <div className="w-full lg:w-1/4 lg:pt-8">
            <div className="grid shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/MPK4L06/my-pic.png"
                  alt="Komal Priya"
                />
                {/* <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Komal Yadav
                </p> */}
              </div>



            </div>
          </div>
        </div>
      </div>
      
      );
    
    
};

export default AboutUsPage;
