import { useDispatch } from "react-redux";
import { tokenLocal } from "../global/token";
import { axiosInstance } from "./axiosInstance";
import { setDataBalance } from "../app/useSlicer/balance";

const isBalance = () => {
  const handleBalance = async () => {
    try {
      const dispatch = useDispatch();
      const response = await axiosInstance.get("/balance", {
        headers: {
          Authorization: `Bearer ${tokenLocal}`,
        },
      });
      const { status, data } = response;
      if (status === 200) {
        dispatch(setDataBalance(data.data));
      } else {
        console.log("failed request");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleBalance,
  };
};

export default isBalance;
