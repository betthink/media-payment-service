import React from "react";
import { ProfileFoto } from "../../components/Image/Images";

const FotoProfile = () => {
  return (
    <div>
      <span>
        <img src={ProfileFoto} alt="Profile Foto" />
      </span>
      <div className="text-2xl ">Robetson</div>
    </div>
  );
};

export default FotoProfile;
