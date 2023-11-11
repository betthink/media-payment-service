// library
import React, { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// components
import { ProfileFoto } from "./Image/Images";
import { axiosInstance } from "../utils/axiosInstance";
import { tokenLocal } from "../global/token";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../app/features/balance/balance-slice";
import { getBalance } from "../app/features/balance/getBalance";
import { getUserData } from "../app/features/user/getUserData";
import { setDataUser } from "../app/features/user/user-slice";
const Saldo = () => {
  // variables
  const [dataProfile, setdataProfile] = useState([]);
  const [dataBalance, setdataBalance] = useState(0);
  const [isRender, setisRender] = useState(false);
  const [isGet, setisGet] = useState(false);
  const [isVisible, setisVisible] = useState(true);
  const dispatch = useDispatch();
  // persist

  const user = (state) => state.user.value;
  const { balance, isSuccess } = useSelector((store) => store.balance);
  const { firstName, lastName } = useSelector((store) => store.user);
  // functions
  const handleGetProfile = async () => {
    try {
      const response = await axiosInstance.get("/profile", {
        headers: {
          Authorization: `Bearer ${tokenLocal}`,
        },
      });
      const { status, data } = response;
      if (status === 200) {
        setdataProfile(data.data);
        setisGet(true);
      } else {
        console.log("failed request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleVisibleBalance = () => {
    setisVisible((prev) => !prev);
  };
  // globals state

  useEffect(() => {
    handleGetProfile();
    getUserData().then((v) => {
      dispatch(
        setDataUser({
          firstName: v.first_name,
          lastName: v.last_name,
        })
      );
    });
    // menjalankan function get balance
    getBalance().then((initialBalance) => {
      dispatch(setBalance({ balance: initialBalance, isSuccess: true }));
    });
    console.log({ isSuccess });
    console.log({ firstName });
    console.log({ lastName });
  }, [balance]);
  return (
    <section className="flex flex-row items-center mt-10 justify-between container w-full">
      <div className="w-1/2 flex flex-col gap-2 ">
        <img
          src={
            dataProfile?.profile_image !==
            "https://minio.nutech-integrasi.app/take-home-test/null"
              ? dataProfile.profile_image
              : ProfileFoto
          }
          className=" w-[100px] h-[100px]  rounded-full"
          alt="Profile Image"
        />
        <div>
          <p className="text-xl">Selamat Datang,</p>
          <div className="font-bold text-3xl flex flex-row gap-2">
            <span>{dataProfile?.first_name} </span>
            <span> {dataProfile?.last_name} </span>
          </div>
        </div>
      </div>
      <div className={` w-1/2 bg-redDominan text-white rounded-2xl`}>
        <div className="card-body text-2xl  bg-saldoImg  bg-no-repeat bg-center ">
          <h2 className="text-lg">Saldo anda</h2>
          {!isVisible ? (
            <p>
              Rp.
              {dataBalance ? "*".repeat(dataBalance.toString().length) : ""}
            </p>
          ) : (
            <p>Rp. {balance}</p>
          )}

          <div className="card-actions justify-start">
            <button
              type="button"
              onClick={handleVisibleBalance}
              className="text-sm py-3 pr-20 bg-[#F13B2F] "
            >
              {isVisible ? (
                <span className="flex flex-row items-center gap-2">
                  <p>Sembunyikan saldo</p>
                  <AiOutlineEye size={18} />
                </span>
              ) : (
                <span className="flex flex-row items-center gap-2">
                  <p>Tampilkan saldo</p>
                  <AiOutlineEyeInvisible size={18} />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Saldo;
