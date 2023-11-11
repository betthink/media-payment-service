import { tokenLocal } from "../../../global/token";
import { axiosInstance } from "../../../utils/axiosInstance";

export const getUserData = async () => {
  try {
    const response = await axiosInstance.get("/profile", {
      headers: {
        Authorization: `Bearer ${tokenLocal}`,
      },
    });
    const { status, data } = response;
    if (status === 200) {
    //   console.log(data.data);
      return data.data;
    } else {
      console.log("failed request");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
