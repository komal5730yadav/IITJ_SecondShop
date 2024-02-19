import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Categories = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      { 
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const navigate = useNavigate();
  return (
    <>
          <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>


      <div
        className={"w-11/10 mx-auto bg-white pt-2 p-1 rounded-lg mb-2 "}
        id="categories"
      >
        <div>
          <Slider {...settings}>
            {categoriesData &&
              categoriesData.map((i) => {
                const handleSubmit = () => {
                  navigate(`/products?category=${i.title}`);
                };
                return (
                  <div
                    className="w-full h-25 flex flex-col items-center text-center justify-between cursor-pointer overflow-hidden"
                    key={i.id}
                    onClick={handleSubmit}
                  >
                    <h3 className={"text-[16px] md:text-base leading-[1.2] flex-grow pr-20"}>{i.title}</h3>
                    <div className="w-2/3 h-1/2">
                      <img
                        src={i.image_Url}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Categories;
