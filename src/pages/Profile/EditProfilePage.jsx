import React from "react";
import { ProfileFoto } from "../../components/Image/Images";

const EditProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className=" w-[900px] container justify-center flex flex-col py-6">
        {/* profile img */}
        <div>
          <span>
            <img src={ProfileFoto} alt="Profile Foto" />
          </span>
          <div className="text-2xl ">Robetson</div>
        </div>
        {/* input disable */}
        {/* <div className="flex flex-col gap-3 mt-6">
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
          <OutlineButton label={"Edit Profile"} />
          <RedButton label={"Logout"} />
        </div> */}
      </div>
    </div>
  );
};

export default EditProfilePage;
