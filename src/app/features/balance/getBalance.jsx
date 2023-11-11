import { tokenLocal } from "../../../global/token";
import { axiosInstance } from "../../../utils/axiosInstance";

export const getBalance = async () => {
  try {
    const response = await axiosInstance.get("/balance", {
      headers: {
        Authorization: `Bearer ${tokenLocal}`,
      },
    });
    const { status, data } = response;
    if (status === 200) {
      return data.data.balance;
    } else {
      console.log("failed request");
      return 0;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
