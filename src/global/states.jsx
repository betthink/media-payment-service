import { useSelector } from "react-redux";

const user = (state) => state.user.value;

export const userState = () => {
  const { isLoggin, token } = useSelector(user);

  return { isLoggin, token };
};
