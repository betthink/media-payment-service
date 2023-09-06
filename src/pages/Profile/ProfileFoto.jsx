import React from "react";
import { ProfileFoto } from "../../components/Image/Images";

const ProfileFoto = () => {
  return (
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
  );
};

export default ProfileFoto;
