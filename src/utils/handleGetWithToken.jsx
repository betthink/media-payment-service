import { axiosInstance } from "./axiosInstance";

const handleGetWithToken = async ({ url, token, setState }) => {
  try {
    console.log({ url: url });
    const response = await axiosInstance.get(`/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { status, data } = response;
    if (status === 200) {
      setState(data.data);
      return console.log(data.message);
    } else {
      console.log("failed request");
    }
  } catch (error) {
    console.log(error);
  }
};

export default handleGetWithToken;
