// library
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// components
import { axiosInstance } from "../../utils/axiosInstance";
import { userState } from "../../global/states";
import { tokenLocal } from "../../global/token";

const ServicesList = () => {
  // variables
  // const { token } = userState();
  const [dataServices, setdataServices] = useState([]);

  // functions
  const handleGetServices = async () => {
    try {
      const response = await axiosInstance.get("/services", {
        headers: {
          Authorization: `Bearer ${tokenLocal}`,
        },
      });
      const { status, data } = response;
      if (status === 200) {
        setdataServices(data.data);
      } else {
        console.log("gagal mengambil data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetServices();
  }, []);
  return (
    <div className="hidden md:flex flex-row md:gap-5 mt-10 justify-between container md:overflow-x-auto">
      {dataServices?.map((item, i) => (
        <Link
          state={{
            service_Code: item.service_code,
            service_price: item.service_tariff,
            service_icon: item.service_icon,
          }}
          to={{
            pathname: "/payment",
          }}
          key={i}
          className=" w-16 stroke-black  flex flex-col min-h-[80px justify-between ]"
        >
          <figure>
            <img
              className=""
              src={item.service_icon}
              alt={item.service_tariff}
            />
          </figure>
          <div className="text-center text-xs">
            <p>{item.service_name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesList;
