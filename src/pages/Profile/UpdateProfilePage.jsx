import React from "react";
import Navbar from "../../components/Navbar";
import { ProfileFoto } from "../../components/Image/Images";
import OutlineButton from "../../components/Button/OutlineButton";
import { RedButton } from "../../components/Button/RedButton";
import ListWithLabel from "../../components/List/ListWithLabel";
import FotoProfile from "./FotoProfile";

const UpdateProfilePage = () => {
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
          <RedButton label={"Simpan"} />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
