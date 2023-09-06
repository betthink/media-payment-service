// library
import React, { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// components
import { ProfileFoto } from "./Image/Images";
import { axiosInstance } from "../utils/axiosInstance";
const Saldo = () => {
  // variables
  const token = localStorage.getItem("token");
  const [dataProfile, setdataProfile] = useState([]);
  const [dataBalance, setdataBalance] = useState(0);
  const [isVisible, setisVisible] = useState(false);

  // functions
  const handleGetProfile = async () => {
    try {
      const response = await axiosInstance.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, data } = response;
      if (status === 200) {
        setdataProfile(data.data);
      } else {
        console.log("failed request");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetBalance = async () => {
    try {
      const response = await axiosInstance.get("/balance", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, data } = response;
      if (status === 200) {
        setdataBalance(data.data);
      } else {
        console.log("failed request");
      }
    } catch (error) {}
  };
  const handleVisibleBalance = () => {
    setisVisible((prev) => !prev);
  };
  useEffect(() => {
    handleGetBalance();
    handleGetProfile();
  }, []);
  return (
    <section className="flex flex-row items-center mt-10 justify-between container w-full">
      <div className="w-1/2 ">
        <img
          src={
            dataProfile?.profile_image !==
            "https://minio.nutech-integrasi.app/take-home-test/null"
              ? dataProfile.profile_image
              : ProfileFoto
          }
          className="mb-6"
          alt="Profile Image"
        />
        <p>Selamat Datang,</p>
        <div className="font-bold text-2xl flex flex-row gap-2">
          <span>{dataProfile?.first_name} </span>
          <span> {dataProfile?.last_name} </span>
        </div>
      </div>
      <div
        className={`card bg-saldoImg w-1/2 bg-no-repeat bg-center text-white rounded-2xl`}
      >
        <div className="card-body">
          <h2 className="card-title">Saldo Anda</h2>
          {!isVisible ? (
            <p>
              Rp.{" "}
              {dataBalance
                ? "*".repeat(dataBalance.balance.toString().length)
                : ""}
            </p>
          ) : (
            <p>Rp. {dataBalance?.balance}</p>
          )}

          <div className="card-actions justify-start">
            <button
              type="button"
              onClick={handleVisibleBalance}
              className="py-3 pr-20 bg-[#F13B2F] "
            >
              {isVisible ? (
                <AiOutlineEye size={18} />
              ) : (
                <AiOutlineEyeInvisible size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Saldo;
