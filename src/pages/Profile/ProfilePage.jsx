import React from "react";
import Navbar from "../../components/Navbar";
import { ProfileFoto } from "../../components/Image/Images";
import ListWithLabel from "../../components/List/ListWithLabel";
import OutlineButton from "../../components/Button/OutlineButton";
import { RedButton } from "../../components/Button/RedButton";
import { useNavigate } from "react-router-dom";
import FotoProfile from "./FotoProfile";

const ProfilePage = () => {
  // varibales
  const navigate = useNavigate();
  // functions

  return (
    <div>
      <Navbar />
      <div className=" w-[900px] container justify-center flex flex-col py-6">
        {/* profile img */}
        <FotoProfile />
        {/* input disable */}
        <div className="flex flex-col gap-3 mt-6">
          <ListWithLabel
            Label={"Email"}
            icon={"@"}
            title={"myWallte@gmail.com"}
          />
          <ListWithLabel Label={"Nama Depan"} icon={"@"} title={"Robetson"} />
          <ListWithLabel
            Label={"Nama Belakang"}
            icon={"@"}
            title={"Duminikus"}
          />
          <OutlineButton
            action={() => navigate("/update-profile")}
            label={"Edit Profile"}
          />
          <RedButton label={"Logout"} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
