// library
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail, MdPerson } from "react-icons/md";
import { IoPencilOutline } from "react-icons/io5";
// components
import Navbar from "../../components/Navbar";
import { ProfileFoto } from "../../components/Image/Images";
import ListWithLabel from "../../components/List/ListWithLabel";
import OutlineButton from "../../components/Button/OutlineButton";
import { RedButton } from "../../components/Button/RedButton";
import { axiosInstance } from "../../utils/axiosInstance";

const ProfilePage = () => {
  // varibales
  const token = localStorage.getItem("token");
  const [dataProfile, setdataProfile] = useState([]);
  const navigate = useNavigate();
  // functions
  const handleGetProfile = async () => {
    try {
      const response = await axiosInstance.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, data } = response;
      console.log(data);
      if (status === 200) {
        setdataProfile(data.data);
      } else {
        console.log("failed request");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogOut = async () => {
    await localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    handleGetProfile();
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" w-[900px] container justify-center flex flex-col py-6">
        {/* profile img */}
        <div className=" flex flex-col justify-center items-center w-full">
          <button className="relative" type="button">
            <img
              className="min-w-[120px]"
              src={
                dataProfile?.profile_image !==
                "https://minio.nutech-integrasi.app/take-home-test/null"
                  ? dataProfile.profile_image
                  : ProfileFoto
              }
              alt="Profile Foto"
            />
            <span className="absolute bottom-0 right-0 border rounded-full p-1">
              <IoPencilOutline size={12} />
            </span>
          </button>
          <div className="font-bold text-2xl flex flex-row gap-2">
            <span>{dataProfile?.first_name} </span>
            <span> {dataProfile?.last_name} </span>
          </div>
        </div>
        {/* input disable */}
        <div className="flex flex-col gap-6  ">
          <ListWithLabel
            Label={"Email"}
            icon={<MdOutlineAlternateEmail size={18} />}
            title={dataProfile?.email}
          />
          <ListWithLabel
            Label={"Nama Depan"}
            icon={<MdPerson size={18} />}
            title={dataProfile?.first_name}
          />
          <ListWithLabel
            Label={"Nama Belakang"}
            icon={<MdPerson size={18} />}
            title={dataProfile?.last_name}
          />
          <OutlineButton
            action={() =>
              navigate("/update-profile", {
                state: {
                  email: dataProfile?.email,
                  firstName: dataProfile?.first_name,
                  lastName: dataProfile?.last_name,
                  profile_image: dataProfile?.profile_image,
                },
              })
            }
            label={"Edit Profile"}
          />
          <RedButton onClick={handleLogOut} label={"Logout"} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
