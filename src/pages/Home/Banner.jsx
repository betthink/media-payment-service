// library
import axios from "axios";
import React, { useEffect, useState } from "react";
// components
import { axiosInstance } from "../../utils/axiosInstance";

function Banner() {
  // variables
  const token = localStorage.getItem("token");
  const [dataBanner, setdataBanner] = useState([]);
  // const dataBanner = [
  //   {
  //     title: "this is title",
  //     img: "",
  //     bgColor: "salmon",
  //   },
  //   {
  //     title: "this is title",
  //     img: "",
  //     bgColor: "red",
  //   },
  //   {
  //     title: "this is title",
  //     img: "",
  //     bgColor: "grey",
  //   },
  //   {
  //     title: "this is title",
  //     img: "",
  //     bgColor: "green",
  //   },
  //   {
  //     title: "this is title",
  //     img: "",
  //     bgColor: "pink",
  //   },
  // ];
  // functions
  const handleGetBanner = async () => {
    try {
      const response = await axiosInstance.get("/banner", {
        headers: {
          Authorization: `Bearer ${token}`,
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
      <div className="flex flex-row justify-between gap-4 overflow-x-auto ">
        {dataBanner?.map((item, i) => (
          <div key={i} className=" min-w-[350px]  h-52 image-full">
            <figure>
              <img
                className="w-full"
                src={item.banner_image}
                alt={item.banner_name}
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
