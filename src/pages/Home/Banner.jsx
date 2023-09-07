// library
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components
import { axiosInstance } from "../../utils/axiosInstance";
import { userState } from "../../global/states";
import { tokenLocal } from "../../global/token";

function Banner() {
  // variables
  // const { token } = userState();
  const [dataBanner, setdataBanner] = useState(null);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  // functions
  const handleGetBanner = async () => {
    try {
      const response = await axiosInstance.get("/banner", {
        headers: {
          Authorization: `Bearer ${tokenLocal}`,
        },
      });
      const { status, data } = response;

      if (status === 200) {
        setdataBanner(data.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    handleGetBanner();
  }, []);
  return (
    <div className="container mt-10">
      <p className="font-bold">Temukan promo menarik</p>

      <Slider
        className="flex flex-row justify-between  overflow-hidden"
        {...settings}
      >
        {dataBanner !== null ? (
          dataBanner?.map((item, i) => (
            <div key={i} className=" max-w-[350px]  h-52 image-full">
              <figure>
                <img
                  className="w-full"
                  src={item.banner_image}
                  alt={item.banner_name}
                />
              </figure>
            </div>
          ))
        ) : (
          <div>loading</div>
        )}
      </Slider>
    </div>
  );
}

export default Banner;
