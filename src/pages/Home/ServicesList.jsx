// library
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axiosInstance";
// components

const ServicesList = () => {
  // variables
  const token = localStorage.getItem("token");
  const [dataServices, setdataServices] = useState([]);

  // functions
  const handleGetServices = async () => {
    try {
      const response = await axiosInstance.get("/services", {
        headers: {
          Authorization: `Bearer ${token}`,
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
        <div key={i} className=" w-16 stroke-black  flex flex-col">
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
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
